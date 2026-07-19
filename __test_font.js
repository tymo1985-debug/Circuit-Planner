function parseStyle(str) {
  const style = {};
  (str || '').split(';').forEach((decl) => {
    const [k, v] = decl.split(':').map((s) => s && s.trim());
    if (!k || !v) return;
    const camel = k.replace(/-([a-z])/g, (_, c) => c.toUpperCase());
    style[camel] = v;
  });
  return style;
}
function makeTextNode(text) { return { nodeType: 3, textContent: text }; }
function makeElementBase(tag) {
  return {
    nodeType: 1, tagName: tag.toUpperCase(), childNodes: [], style: {},
    get textContent() { return this.childNodes.map((c) => c.textContent).join(''); },
    get children() { return this.childNodes.filter((c) => c.nodeType === 1); },
  };
}
function parseHtml(html) {
  const root = makeElementBase('div');
  const stack = [root];
  let i = 0;
  while (i < html.length) {
    if (html[i] === '<') {
      const close = html.indexOf('>', i);
      const tagStr = html.slice(i + 1, close);
      if (tagStr.startsWith('/')) { stack.pop(); }
      else {
        const selfClose = tagStr.endsWith('/');
        const clean = selfClose ? tagStr.slice(0, -1) : tagStr;
        const spaceIdx = clean.search(/\s/);
        const tagName = spaceIdx === -1 ? clean : clean.slice(0, spaceIdx);
        const el = makeElementBase(tagName);
        const attrsStr = spaceIdx === -1 ? '' : clean.slice(spaceIdx + 1);
        const styleMatch = attrsStr.match(/style="([^"]*)"/);
        if (styleMatch) el.style = parseStyle(styleMatch[1]);
        stack[stack.length - 1].childNodes.push(el);
        if (!selfClose) stack.push(el);
      }
      i = close + 1;
    } else {
      const nextTag = html.indexOf('<', i);
      const text = html.slice(i, nextTag === -1 ? html.length : nextTag);
      if (text) stack[stack.length - 1].childNodes.push(makeTextNode(text));
      i = nextTag === -1 ? html.length : nextTag;
    }
  }
  return root;
}

const fs = require('fs');
const appSrc = fs.readFileSync('app.js', 'utf8');
const m = appSrc.match(/parseRichLetterBlocks\(html\) \{([\s\S]*?)\n      \},\n      letterTypeSuffix/);
if (!m) { console.error('Could not locate parseRichLetterBlocks'); process.exit(1); }

const listeners = [];
function makeEl(tag = 'div') {
  const el = {
    tagName: String(tag).toUpperCase(), children: [], style: { setProperty() {}, removeProperty() {} }, dataset: {},
    classList: { _s: new Set(), add(...c) { c.forEach((x) => this._s.add(x)); }, remove() {}, toggle() {}, contains() { return false; } },
    attributes: {}, innerHTML: '', textContent: '', value: '', checked: false, hidden: false, disabled: false, options: [],
    parentNode: null, nextSibling: null, scrollTop: 0,
    addEventListener(type, fn) { listeners.push({ el, type, fn }); }, removeEventListener() {},
    setAttribute(k, v) { this.attributes[k] = v; }, getAttribute(k) { return this.attributes[k]; }, removeAttribute(k) { delete this.attributes[k]; },
    appendChild(c) { c.parentNode = el; el.children.push(c); return c; }, insertBefore(c) { el.children.push(c); return c; },
    querySelector() { const child = makeEl(); child.parentNode = el; return child; }, querySelectorAll() { return []; },
    closest() { return null; }, focus() {}, blur() {}, click() {}, scrollIntoView() {}, remove() {}, contains() { return false; },
  };
  return el;
}
const idRegistry = {};
const html = fs.readFileSync('index.html', 'utf8');
for (const mm of html.matchAll(/id="([a-zA-Z0-9_-]+)"/g)) { idRegistry[mm[1]] = makeEl(); }
global.document = {
  documentElement: makeEl('html'), head: makeEl('head'), body: makeEl('body'),
  createElement(tag) {
    if (tag === 'div_REAL_PARSER_MARKER') return null;
    const el = makeEl(tag);
    Object.defineProperty(el, 'innerHTML', { set(h) { const parsed = parseHtml(h); el.children = parsed.childNodes; el.childNodes = parsed.childNodes; }, get() { return '[parsed]'; } });
    return el;
  },
  getElementById(id) { return idRegistry[id] || null; },
  querySelector(sel) { if (['.sidebar', '.calendar-side', '.brand p', '.version-badge'].includes(sel)) return makeEl(); return null; },
  querySelectorAll() { return []; },
  addEventListener(type, fn) { listeners.push({ el: 'document', type, fn }); }, removeEventListener() {}, activeElement: null,
};
const storageData = {};
storageData['service-year-planner-v9-4-2'] = JSON.stringify({
  settings: { language: 'ru', theme: 'light', layoutPreset: 'classic', calendarView: 'year', accentColor: 'green', fontSize: '100', showHolidays: true, senderName: 'Тест', emailMethod: 'mailto' },
  serviceYears: {}, events: [], entries: [], meta: { version: '9.9.0' }
});
let textCallCount = 0, lineCallCount = 0;
global.window = {
  innerWidth: 1200, innerHeight: 800,
  addEventListener(type, fn) { listeners.push({ el: 'window', type, fn }); }, removeEventListener() {},
  matchMedia() { return { matches: false, addEventListener() {}, addListener() {} }; },
  requestAnimationFrame(fn) { setTimeout(fn, 0); }, setTimeout, clearTimeout, setInterval, clearInterval,
  confirm() { return false; }, prompt() { return null; }, alert() {},
  visualViewport: { height: 800, offsetTop: 0, addEventListener() {} },
  location: { reload() {}, href: 'https://example.test/' }, scrollTo() {},
  open() { return { document: { open() {}, write() {}, close() {} }, focus() {}, print() {}, close() {}, addEventListener() {}, onload: null }; },
  navigator: {}, getSelection() { return null; },
  jspdf: { jsPDF: function FakeJsPDF() {
    let pages = 1;
    return {
      internal: { pageSize: { getWidth: () => 595, getHeight: () => 842 }, getNumberOfPages: () => pages },
      addFileToVFS() {}, addFont() {}, setFont() {}, setFontSize() {}, setTextColor() {}, setDrawColor() {}, setLineWidth() {}, setFillColor() {},
      text() { textCallCount += 1; }, line() { lineCallCount += 1; }, rect() {}, addPage() { pages += 1; }, setPage() {},
      getTextWidth: (s) => String(s).length * 5, splitTextToSize: (s) => String(s).match(/.{1,80}(\s|$)/g) || [String(s)],
      autoTable() {}, lastAutoTable: { finalY: 100 },
      output() { return new Blob(['%PDF-fake']); }, save() {}, addField() {},
    };
  } },
  APTOS_REGULAR_B64: 'ZmFrZQ==', DEJAVU_SANS_NORMAL_B64: 'ZmFrZQ==', DEJAVU_SANS_BOLD_B64: 'ZmFrZQ==',
};
global.localStorage = { getItem(k) { return storageData[k] || null; }, setItem(k, v) { storageData[k] = String(v); }, removeItem(k) { delete storageData[k]; } };
global.navigator = { serviceWorker: undefined, clipboard: undefined, share: undefined, language: 'ru' };
global.requestAnimationFrame = global.window.requestAnimationFrame;
global.confirm = global.window.confirm; global.prompt = global.window.prompt; global.alert = global.window.alert;
global.Blob = class { constructor(p) { this.p = p; } };
global.File = class { constructor(p, n) { this.name = n; } };
global.URL = { createObjectURL: () => 'blob:fake', revokeObjectURL() {} };

const errors = [];
process.on('uncaughtException', (e) => errors.push('UNCAUGHT: ' + e.stack));
try { eval(fs.readFileSync('visit-pdf.js', 'utf8')); } catch (e) { errors.push('VISIT-PDF: ' + e.stack); }
try { eval(appSrc); console.log('app.js executed OK'); } catch (e) { errors.push('APP LOAD: ' + e.stack); }

setTimeout(() => {
  try {
    const App = global.window.App;
    // Bold + underline mixed paragraph
    App.ui.setLetterTemplateFor('Congregation', '<div>Normal <span style="font-weight:bold">bold word</span> and <span style="text-decoration:underline">underlined</span> plain.</div>');
    const before = { text: textCallCount, line: lineCallCount };
    const sampleEvent = { id: 'x', name: 'Sample', visitType: 'congregation' };
    const sampleEntry = { id: 'y', title: 'Sample', start: '2026-09-01', end: '2026-09-05', note: '' };
    const doc = App.ui.buildLetterPdfDoc(sampleEntry, sampleEvent);
    console.log('buildLetterPdfDoc ok:', !!doc, 'pages:', doc.internal.getNumberOfPages());
    console.log('text() calls during build:', textCallCount - before.text, '(bold word should cause 2 draws => extra call)');
    console.log('line() calls during build:', lineCallCount - before.line, '(should be >=1 for the underlined word)');
    if (lineCallCount - before.line < 1) errors.push('Underline did not draw any line() calls!');
  } catch (e) { errors.push('DEEP FLOW: ' + e.stack); }
  if (errors.length) { console.log('\n=== ERRORS ==='); errors.forEach((e) => console.log('\n' + e)); process.exitCode = 1; }
  else console.log('NO RUNTIME ERRORS DETECTED');
}, 50);
