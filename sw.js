// Service Worker for Service Year Planner
// Auto-update app shell without manual VERSION bumps.
// index.html / app.js / manifest / sw.js -> network-first
// images/fonts -> cache-first
// everything else -> stale-while-revalidate

const CACHE_STATIC = 'syp-static';
const CACHE_RUNTIME = 'syp-runtime';
const APP_SHELL_URLS = [
  './',
  './index.html',
  './app.js',
  './visit-pdf.js',
  './fonts/fonts-dejavu-sans-normal.js',
  './fonts/fonts-dejavu-sans-bold.js',
  './fonts/fonts-aptos-regular.js',
  './fonts/fonts-aptos-bold.js',
  './fonts/fonts-aptos-italic.js',
  './fonts/fonts-aptos-bolditalic.js',
  './favicon.ico',
  './manifest.webmanifest',
  './icons/icon-192.png',
  './icons/icon-512.png'
];

self.addEventListener('install', (event) => {
  event.waitUntil((async () => {
    const cache = await caches.open(CACHE_STATIC);
    for (const url of APP_SHELL_URLS) {
      try {
        const req = new Request(url, { cache: 'reload' });
        const res = await fetch(req);
        if (res && res.ok) {
          await cache.put(url, res.clone());
        }
      } catch (_) {
        // Ignore missing assets to keep install robust.
      }
    }
    self.skipWaiting();
  })());
});

self.addEventListener('activate', (event) => {
  event.waitUntil((async () => {
    const keys = await caches.keys();
    await Promise.all(
      keys.map((key) => {
        const isCurrent = key === CACHE_STATIC || key === CACHE_RUNTIME;
        const isLegacy = key.startsWith('static-') || key.startsWith('runtime-') || key.startsWith('syp-v');
        if (!isCurrent && isLegacy) {
          return caches.delete(key);
        }
        return Promise.resolve(false);
      })
    );

    if ('navigationPreload' in self.registration) {
      try {
        await self.registration.navigationPreload.enable();
      } catch (_) {}
    }

    await self.clients.claim();
  })());
});

function isNavigationRequest(request) {
  return request.mode === 'navigate' || (
    request.method === 'GET' &&
    (request.headers.get('accept') || '').includes('text/html')
  );
}

function isSameOrigin(url) {
  return url.origin === self.location.origin;
}

function isAppShellRequest(request) {
  const url = new URL(request.url);
  if (!isSameOrigin(url)) return false;

  const pathname = url.pathname;
  const shellFiles = ['/index.html', '/app.js', '/manifest.webmanifest', '/sw.js'];

  return (
    pathname.endsWith('/') ||
    shellFiles.some((file) => pathname.endsWith(file)) ||
    request.destination === 'script' ||
    request.destination === 'style' ||
    request.destination === 'manifest' ||
    request.destination === 'document'
  );
}

async function cacheFirst(request) {
  const cached = await caches.match(request);

  // Revalidate in the background even on a cache hit, so replacing an icon/font
  // file (without also touching sw.js) eventually reaches returning users
  // instead of being served from cache forever.
  const revalidate = fetch(request)
    .then(async (res) => {
      if (res && res.ok) {
        const cache = await caches.open(CACHE_RUNTIME);
        try {
          await cache.put(request, res.clone());
        } catch (_) {}
      }
      return res;
    })
    .catch(() => null);

  if (cached) {
    revalidate.catch(() => {});
    return cached;
  }

  return (await revalidate) || Response.error();
}

async function networkFirst(request, fallbackUrl = './index.html') {
  const cache = await caches.open(CACHE_RUNTIME);
  try {
    const res = await fetch(request, { cache: 'no-cache' });
    if (res && res.ok) {
      try {
        await cache.put(request, res.clone());
      } catch (_) {}
    }
    return res;
  } catch (_) {
    const cached = await caches.match(request);
    if (cached) return cached;

    const fallback = fallbackUrl
      ? (await caches.match(fallbackUrl)) || (await caches.match('./'))
      : null;

    return fallback || Response.error();
  }
}

async function staleWhileRevalidate(request) {
  const cached = await caches.match(request);
  const fetchPromise = fetch(request)
    .then(async (res) => {
      if (res && res.ok) {
        const cache = await caches.open(CACHE_RUNTIME);
        try {
          await cache.put(request, res.clone());
        } catch (_) {}
      }
      return res;
    })
    .catch(() => cached);

  return cached || fetchPromise;
}

self.addEventListener('fetch', (event) => {
  const { request } = event;
  if (request.method !== 'GET') return;

  const url = new URL(request.url);
  if (url.protocol !== 'http:' && url.protocol !== 'https:') return;

  if (isNavigationRequest(request)) {
    event.respondWith((async () => {
      const preload = await event.preloadResponse;
      if (preload) return preload;
      return networkFirst(request, './index.html');
    })());
    return;
  }

  if (isAppShellRequest(request)) {
    event.respondWith(networkFirst(request, request.destination === 'document' ? './index.html' : null));
    return;
  }

  if (['image', 'font'].includes(request.destination)) {
    event.respondWith(cacheFirst(request));
    return;
  }

  event.respondWith(staleWhileRevalidate(request));
});
