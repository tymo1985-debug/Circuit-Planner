
// Service Year Planner v9.4.4 calendar year view day details + mobile fixes
(function () {
  'use strict';

  // Inline favicon fallback: prevents /favicon.ico 404 when index.html has no icon.
  if (!document.querySelector('link[rel~="icon"]')) {
    const favicon = document.createElement('link');
    favicon.rel = 'icon';
    favicon.href = 'data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 64 64%22%3E%3Crect width=%2264%22 height=%2264%22 rx=%2214%22 fill=%22%231f7a45%22/%3E%3Ctext x=%2232%22 y=%2242%22 text-anchor=%22middle%22 font-size=%2234%22%3E%F0%9F%93%86%3C/text%3E%3C/svg%3E';
    document.head.appendChild(favicon);
  }

  const I18N = {
    ru: {
      appTitle: 'Service Year Planner',
      nav_calendar: 'Календарь', nav_weeks: 'Недели', nav_events: 'События', nav_notes: 'Заметки', nav_settings: 'Настройки',
      screen_calendar: 'Календарь', screen_weeks: 'Недели', screen_events: 'События', screen_notes: 'Заметки', screen_settings: 'Настройки',
      subtitle_calendar: 'Обзор месяца и событий по служебному году.',
      subtitle_weeks: 'Недельное планирование, заметки и приоритеты.',
      subtitle_events: 'Шаблоны событий для календаря и недель.',
      subtitle_notes: 'Поиск и просмотр всех заметок по неделям.',
      subtitle_settings: 'Тема, язык, экспорт, импорт и управление годами.',
      version: 'Версия',
      theme: 'Тема', export: 'Экспорт', import_json: 'Импорт JSON',
      hide_team_panel: 'Скрыть панель команды', show_team_panel: 'Показать панель команды',
      today: 'Сегодня', all_events: 'Все события',
      service_year: 'Служебный год', context: 'Контекст',
      event: 'Событие', weekend: 'Выходные', today_label: 'Сегодня',
      no_events_month: 'Нет событий в выбранном месяце.',
      no_note: 'Без примечания', no_schedule: 'Без расписания', no_address: 'Адрес не указан', no_template: 'Без шаблона',
      quick_status: 'Быстрый статус', years_count: 'Служебных лет', templates_count: 'Шаблонов событий', entries_count: 'Записей календаря', notes_count: 'Заметок',
      weeks_search: 'Поиск по неделе, заметке или событию', notes_search: 'Поиск по заметкам',
      week_details: 'Детали недели', choose_week: 'Выберите неделю слева, чтобы редактировать её.',
      assigned_event: 'Назначенное событие', priority: 'Приоритет', priority_normal: 'Обычный', priority_important: 'Важный', priority_critical: 'Критичный',
      letter: 'Письмо', s302: 'S302', week_note: 'Заметка недели', save: 'Сохранить', delete: 'Удалить',
      delete_week: 'Удалить неделю', clear_week_confirm: 'Очистить данные выбранной недели?',
      event_templates: 'Шаблоны событий', event_editor: 'Редактор события', name: 'Название', color: 'Цвет', address: 'Адрес', schedule: 'Расписание',
      clear: 'Очистить', save_event: 'Сохранить событие',
      look_and_feel: 'Внешний вид', language: 'Язык', layout: 'Макет календаря', theme_light: 'Светлая', theme_dark: 'Тёмная',
      layout_help: 'Доступно 10 вариантов отображения календаря.',
      data_management: 'Управление данными', pdf_print: 'PDF / Печать', add_service_year: 'Добавить служебный год',
      add_next_year: 'Добавить следующий год', add: 'Добавить', create_backup: 'Создать backup', reset_app: 'Сбросить приложение',
      print_hint: 'PDF использует системную печать браузера.',
      export_pdf_title: 'Экспорт в PDF', export_pdf_sub: 'Выберите формат и используйте печать браузера.',
      month_grid: 'Календарь месяца', period_calendar: 'Календарь периода',
      month_grid_desc: 'Сетка текущего месяца для печати.', period_calendar_desc: 'Печать для выбранного диапазона дат.',
      reports: 'Список событий и отчёты', month_list: 'Список событий месяца', half_year: 'События за полгода', year_events: 'События за год', list_period: 'Список за период', year_overview: 'Годовой обзор', notes_report: 'Отчёт по заметкам',
      choose_range: 'Выберите даты начала и конца периода.', close: 'Закрыть', print: 'Печать',
      export_title: 'Экспорт', export_sub: 'Выберите формат экспорта: резервный JSON или календарь (.ics) для Google/Apple.',
      json_backup: 'JSON backup', json_backup_desc: 'Полная резервная копия данных приложения.', ics_calendar: 'Календарь (.ics)', ics_desc: 'Импорт в Google Calendar и Apple Calendar.',
      range_start: 'Начало периода', range_end: 'Конец периода', download: 'Скачать',
      google_hint: 'Подсказка: для Google Calendar откройте «Настройки → Импорт и экспорт → Импорт», выберите .ics. Для Apple Calendar просто откройте файл.',
      team_panel: 'Панель команды', filter_event: 'Фильтр события', event_details: 'Детали события',
      no_events_found: 'Совпадений не найдено.', no_notes: 'Нет заметок.', open: 'Открыть',
      new_event: 'Новое событие', edit_event: 'Редактирование события', choose_template: 'Выберите шаблон', start: 'Начало', end: 'Конец', delete_event: 'Удалить событие',
      create_entry_help: 'Будет создана отдельная запись календаря.', edit_entry_help: 'Вы можете изменить шаблон, даты, заметку или удалить событие.',
      note: 'Заметка', google_maps: 'Google Maps', google_calendar: 'Google Calendar', apple_calendar: 'Apple / .ics', edit: 'Редактировать', type: 'Тип',
      type_week: 'Неделя', type_entry: 'Запись', template: 'Шаблон',
      imported_backup: 'Старый backup импортирован и очищен от дублей.', imported_json: 'JSON успешно импортирован.', import_failed: 'Не удалось импортировать JSON.',
      week_saved: 'Неделя сохранена.', event_template_saved: 'Шаблон события сохранён.', calendar_event_saved: 'Календарное событие сохранено.', calendar_event_deleted: 'Событие удалено.', week_deleted: 'Данные недели очищены.',
      reset_confirm: 'Сбросить данные приложения?', app_reset: 'Приложение сброшено.',
      invalid_year: 'Введите корректный год, например 2029.', added_year: 'Добавлен служебный год {year}',
      choose_template_dates: 'Выберите шаблон и даты.', wrong_end_date: 'Дата окончания не может быть раньше даты начала.', enter_event_name: 'Введите название события.',
      offline: 'Вы офлайн. Изменения сохраняются локально.',
      import_google_single: 'Импортировать событие в Google/Apple календарь',
      add_on_date: 'Добавить событие',
      placeholder_schedule: 'Ср 19:00, Сб 10:00',
      delete_note: 'Удалить заметку',
      delete_template: 'Удалить шаблон',
      delete_note_confirm: 'Удалить эту заметку?',
      delete_template_confirm: 'Удалить шаблон события',
      calendar_view_month: 'Вид: месяц',
      calendar_view_year: 'Вид: служебный год',
      day_details_title: 'День и неделя',
      week_planned: 'План на неделю',
      entries_on_day: 'События в этот день',
      no_entries_day: 'Нет событий на этот день.',
      open_week: 'Открыть неделю',
      add_entry: 'Добавить событие',
      edit_week_event: 'Редактировать план недели'
    },
    en: {
      appTitle: 'Service Year Planner',
      nav_calendar: 'Calendar', nav_weeks: 'Weeks', nav_events: 'Events', nav_notes: 'Notes', nav_settings: 'Settings',
      screen_calendar: 'Calendar', screen_weeks: 'Weeks', screen_events: 'Events', screen_notes: 'Notes', screen_settings: 'Settings',
      subtitle_calendar: 'Month overview and events for the service year.', subtitle_weeks: 'Weekly planning, notes and priorities.', subtitle_events: 'Event templates for calendar and weeks.', subtitle_notes: 'Search and review all weekly notes.', subtitle_settings: 'Theme, language, export, import and year management.',
      version: 'Version', theme: 'Theme', export: 'Export', import_json: 'Import JSON', hide_team_panel: 'Hide team panel', show_team_panel: 'Show team panel', today: 'Today', all_events: 'All events', service_year: 'Service year', context: 'Context', event: 'Event', weekend: 'Weekend', today_label: 'Today', no_events_month: 'No events in the selected month.', no_note: 'No note', no_schedule: 'No schedule', no_address: 'Address not specified', no_template: 'No template', quick_status: 'Quick status', years_count: 'Service years', templates_count: 'Event templates', entries_count: 'Calendar entries', notes_count: 'Notes', weeks_search: 'Search week, note or event', notes_search: 'Search notes', week_details: 'Week details', choose_week: 'Select a week on the left to edit it.', assigned_event: 'Assigned event', priority: 'Priority', priority_normal: 'Normal', priority_important: 'Important', priority_critical: 'Critical', letter: 'Letter', s302: 'S302', week_note: 'Week note', save: 'Save', delete: 'Delete', delete_week: 'Delete week', clear_week_confirm: 'Clear the selected week data?', event_templates: 'Event templates', event_editor: 'Event editor', name: 'Name', color: 'Color', address: 'Address', schedule: 'Schedule', clear: 'Clear', save_event: 'Save event', look_and_feel: 'Appearance', language: 'Language', layout: 'Calendar layout', theme_light: 'Light', theme_dark: 'Dark', layout_help: '10 calendar layout options are available.', data_management: 'Data management', pdf_print: 'PDF / Print', add_service_year: 'Add service year', add_next_year: 'Add next year', add: 'Add', create_backup: 'Create backup', reset_app: 'Reset app', print_hint: 'PDF uses browser system print.', export_pdf_title: 'Export to PDF', export_pdf_sub: 'Choose format and use browser print.', month_grid: 'Month calendar', period_calendar: 'Period calendar', month_grid_desc: 'Printable grid for the current month.', period_calendar_desc: 'Print for selected date range.', reports: 'Event lists and reports', month_list: 'Month event list', half_year: 'Half-year events', year_events: 'Year events', list_period: 'Range list', year_overview: 'Year overview', notes_report: 'Notes report', choose_range: 'Choose start and end dates.', close: 'Close', print: 'Print', export_title: 'Export', export_sub: 'Choose export format: JSON backup or calendar (.ics) for Google/Apple.', json_backup: 'JSON backup', json_backup_desc: 'Complete application data backup.', ics_calendar: 'Calendar (.ics)', ics_desc: 'Import into Google Calendar and Apple Calendar.', range_start: 'Start date', range_end: 'End date', download: 'Download', google_hint: 'Tip: in Google Calendar open “Settings → Import & Export → Import”, choose the .ics file. In Apple Calendar just open the file.', team_panel: 'Team panel', filter_event: 'Event filter', event_details: 'Event details', no_events_found: 'No matches found.', no_notes: 'No notes.', open: 'Open', new_event: 'New event', edit_event: 'Edit event', choose_template: 'Choose template', start: 'Start', end: 'End', delete_event: 'Delete event', create_entry_help: 'A separate calendar entry will be created.', edit_entry_help: 'You can change template, dates, note or delete the event.', note: 'Note', google_maps: 'Google Maps', google_calendar: 'Google Calendar', apple_calendar: 'Apple / .ics', edit: 'Edit', type: 'Type', type_week: 'Week', type_entry: 'Entry', template: 'Template', imported_backup: 'Legacy backup imported and duplicates cleaned.', imported_json: 'JSON imported successfully.', import_failed: 'Failed to import JSON.', week_saved: 'Week saved.', event_template_saved: 'Event template saved.', calendar_event_saved: 'Calendar event saved.', calendar_event_deleted: 'Event deleted.', week_deleted: 'Week data cleared.', reset_confirm: 'Reset application data?', app_reset: 'Application reset.', invalid_year: 'Enter a valid year, for example 2029.', added_year: 'Added service year {year}', choose_template_dates: 'Choose template and dates.', wrong_end_date: 'End date cannot be earlier than start date.', enter_event_name: 'Enter event name.', offline: 'You are offline. Changes are stored locally.', import_google_single: 'Import event into Google/Apple calendar', add_on_date: 'Add event', placeholder_schedule: 'Wed 19:00, Sat 10:00',
      delete_note: 'Delete note',
      delete_template: 'Delete template',
      delete_note_confirm: 'Delete this note?',
      delete_template_confirm: 'Delete event template',
      calendar_view_month: 'View: month',
      calendar_view_year: 'View: service year',
      day_details_title: 'Day & week',
      week_planned: 'Weekly plan',
      entries_on_day: 'Events on this day',
      no_entries_day: 'No events for this day.',
      open_week: 'Open week',
      add_entry: 'Add event',
      edit_week_event: 'Edit weekly plan'
    },
    uk: {
      appTitle: 'Service Year Planner',
      nav_calendar: 'Календар', nav_weeks: 'Тижні', nav_events: 'Події', nav_notes: 'Нотатки', nav_settings: 'Налаштування',
      screen_calendar: 'Календар', screen_weeks: 'Тижні', screen_events: 'Події', screen_notes: 'Нотатки', screen_settings: 'Налаштування',
      subtitle_calendar: 'Огляд місяця та подій службового року.', subtitle_weeks: 'Тижневе планування, нотатки та пріоритети.', subtitle_events: 'Шаблони подій для календаря та тижнів.', subtitle_notes: 'Пошук і перегляд усіх тижневих нотаток.', subtitle_settings: 'Тема, мова, експорт, імпорт і керування роками.',
      version: 'Версія', theme: 'Тема', export: 'Експорт', import_json: 'Імпорт JSON', hide_team_panel: 'Сховати панель команди', show_team_panel: 'Показати панель команди', today: 'Сьогодні', all_events: 'Усі події', service_year: 'Службовий рік', context: 'Контекст', event: 'Подія', weekend: 'Вихідні', today_label: 'Сьогодні', no_events_month: 'У вибраному місяці немає подій.', no_note: 'Без примітки', no_schedule: 'Без розкладу', no_address: 'Адресу не вказано', no_template: 'Без шаблону', quick_status: 'Швидкий статус', years_count: 'Службових років', templates_count: 'Шаблонів подій', entries_count: 'Записів календаря', notes_count: 'Нотаток', weeks_search: 'Пошук за тижнем, нотаткою чи подією', notes_search: 'Пошук нотаток', week_details: 'Деталі тижня', choose_week: 'Виберіть тиждень ліворуч, щоб редагувати його.', assigned_event: 'Призначена подія', priority: 'Пріоритет', priority_normal: 'Звичайний', priority_important: 'Важливий', priority_critical: 'Критичний', letter: 'Лист', s302: 'S302', week_note: 'Нотатка тижня', save: 'Зберегти', delete: 'Видалити', delete_week: 'Видалити тиждень', clear_week_confirm: 'Очистити дані вибраного тижня?', event_templates: 'Шаблони подій', event_editor: 'Редактор події', name: 'Назва', color: 'Колір', address: 'Адреса', schedule: 'Розклад', clear: 'Очистити', save_event: 'Зберегти подію', look_and_feel: 'Зовнішній вигляд', language: 'Мова', layout: 'Макет календаря', theme_light: 'Світла', theme_dark: 'Темна', layout_help: 'Доступно 10 варіантів відображення календаря.', data_management: 'Керування даними', pdf_print: 'PDF / Друк', add_service_year: 'Додати службовий рік', add_next_year: 'Додати наступний рік', add: 'Додати', create_backup: 'Створити backup', reset_app: 'Скинути застосунок', print_hint: 'PDF використовує системний друк браузера.', export_pdf_title: 'Експорт у PDF', export_pdf_sub: 'Виберіть формат і використайте друк браузера.', month_grid: 'Календар місяця', period_calendar: 'Календар періоду', month_grid_desc: 'Сітка поточного місяця для друку.', period_calendar_desc: 'Друк для вибраного діапазону дат.', reports: 'Список подій і звіти', month_list: 'Список подій місяця', half_year: 'Події за пів року', year_events: 'Події за рік', list_period: 'Список за період', year_overview: 'Річний огляд', notes_report: 'Звіт по нотатках', choose_range: 'Виберіть дати початку та кінця періоду.', close: 'Закрити', print: 'Друк', export_title: 'Експорт', export_sub: 'Виберіть формат експорту: резервний JSON або календар (.ics) для Google/Apple.', json_backup: 'JSON backup', json_backup_desc: 'Повна резервна копія даних застосунку.', ics_calendar: 'Календар (.ics)', ics_desc: 'Імпорт у Google Calendar та Apple Calendar.', range_start: 'Початок періоду', range_end: 'Кінець періоду', download: 'Завантажити', google_hint: 'Підказка: у Google Calendar відкрийте «Налаштування → Імпорт і експорт → Імпорт», виберіть .ics. Для Apple Calendar просто відкрийте файл.', team_panel: 'Панель команди', filter_event: 'Фільтр події', event_details: 'Деталі події', no_events_found: 'Нічого не знайдено.', no_notes: 'Немає нотаток.', open: 'Відкрити', new_event: 'Нова подія', edit_event: 'Редагування події', choose_template: 'Виберіть шаблон', start: 'Початок', end: 'Кінець', delete_event: 'Видалити подію', create_entry_help: 'Буде створено окремий запис календаря.', edit_entry_help: 'Ви можете змінити шаблон, дати, нотатку або видалити подію.', note: 'Нотатка', google_maps: 'Google Maps', google_calendar: 'Google Calendar', apple_calendar: 'Apple / .ics', edit: 'Редагувати', type: 'Тип', type_week: 'Тиждень', type_entry: 'Запис', template: 'Шаблон', imported_backup: 'Старий backup імпортовано й очищено від дублів.', imported_json: 'JSON успішно імпортовано.', import_failed: 'Не вдалося імпортувати JSON.', week_saved: 'Тиждень збережено.', event_template_saved: 'Шаблон події збережено.', calendar_event_saved: 'Подію календаря збережено.', calendar_event_deleted: 'Подію видалено.', week_deleted: 'Дані тижня очищено.', reset_confirm: 'Скинути дані застосунку?', app_reset: 'Застосунок скинуто.', invalid_year: 'Введіть коректний рік, наприклад 2029.', added_year: 'Додано службовий рік {year}', choose_template_dates: 'Виберіть шаблон і дати.', wrong_end_date: 'Дата завершення не може бути раніше дати початку.', enter_event_name: 'Введіть назву події.', offline: 'Ви офлайн. Зміни зберігаються локально.', import_google_single: 'Імпортувати подію в Google/Apple календар', add_on_date: 'Додати подію', placeholder_schedule: 'Ср 19:00, Сб 10:00',
      delete_note: 'Видалити нотатку',
      delete_template: 'Видалити шаблон',
      delete_note_confirm: 'Видалити цю нотатку?',
      delete_template_confirm: 'Видалити шаблон події',
      calendar_view_month: 'Вигляд: місяць',
      calendar_view_year: 'Вигляд: службовий рік',
      day_details_title: 'День і тиждень',
      week_planned: 'План на тиждень',
      entries_on_day: 'Події цього дня',
      no_entries_day: 'Немає подій на цей день.',
      open_week: 'Відкрити тиждень',
      add_entry: 'Додати подію',
      edit_week_event: 'Редагувати план тижня'
    },
    pl: {
      appTitle: 'Service Year Planner',
      nav_calendar: 'Kalendarz', nav_weeks: 'Tygodnie', nav_events: 'Wydarzenia', nav_notes: 'Notatki', nav_settings: 'Ustawienia',
      screen_calendar: 'Kalendarz', screen_weeks: 'Tygodnie', screen_events: 'Wydarzenia', screen_notes: 'Notatki', screen_settings: 'Ustawienia',
      subtitle_calendar: 'Przegląd miesiąca i wydarzeń roku służbowego.', subtitle_weeks: 'Planowanie tygodnia, notatki i priorytety.', subtitle_events: 'Szablony wydarzeń dla kalendarza i tygodni.', subtitle_notes: 'Wyszukiwanie i przegląd wszystkich notatek tygodniowych.', subtitle_settings: 'Motyw, język, eksport, import i zarządzanie latami.',
      version: 'Wersja', theme: 'Motyw', export: 'Eksport', import_json: 'Import JSON', hide_team_panel: 'Ukryj panel zespołu', show_team_panel: 'Pokaż panel zespołu', today: 'Dzisiaj', all_events: 'Wszystkie wydarzenia', service_year: 'Rok służbowy', context: 'Kontekst', event: 'Wydarzenie', weekend: 'Weekend', today_label: 'Dzisiaj', no_events_month: 'Brak wydarzeń w wybranym miesiącu.', no_note: 'Brak notatki', no_schedule: 'Brak harmonogramu', no_address: 'Adres nie został podany', no_template: 'Brak szablonu', quick_status: 'Szybki status', years_count: 'Lat służbowych', templates_count: 'Szablonów wydarzeń', entries_count: 'Wpisów kalendarza', notes_count: 'Notatek', weeks_search: 'Szukaj tygodnia, notatki lub wydarzenia', notes_search: 'Szukaj notatek', week_details: 'Szczegóły tygodnia', choose_week: 'Wybierz tydzień po lewej stronie, aby go edytować.', assigned_event: 'Przypisane wydarzenie', priority: 'Priorytet', priority_normal: 'Normalny', priority_important: 'Ważny', priority_critical: 'Krytyczny', letter: 'List', s302: 'S302', week_note: 'Notatka tygodnia', save: 'Zapisz', delete: 'Usuń', delete_week: 'Usuń tydzień', clear_week_confirm: 'Wyczyścić dane wybranego tygodnia?', event_templates: 'Szablony wydarzeń', event_editor: 'Edytor wydarzenia', name: 'Nazwa', color: 'Kolor', address: 'Adres', schedule: 'Harmonogram', clear: 'Wyczyść', save_event: 'Zapisz wydarzenie', look_and_feel: 'Wygląd', language: 'Język', layout: 'Układ kalendarza', theme_light: 'Jasny', theme_dark: 'Ciemny', layout_help: 'Dostępnych jest 10 układów kalendarza.', data_management: 'Zarządzanie danymi', pdf_print: 'PDF / Druk', add_service_year: 'Dodaj rok służbowy', add_next_year: 'Dodaj kolejny rok', add: 'Dodaj', create_backup: 'Utwórz backup', reset_app: 'Zresetuj aplikację', print_hint: 'PDF korzysta z systemowego druku przeglądarki.', export_pdf_title: 'Eksport do PDF', export_pdf_sub: 'Wybierz format i użyj drukowania przeglądarki.', month_grid: 'Kalendarz miesiąca', period_calendar: 'Kalendarz okresu', month_grid_desc: 'Siatka bieżącego miesiąca do wydruku.', period_calendar_desc: 'Wydruk dla wybranego zakresu dat.', reports: 'Listy wydarzeń i raporty', month_list: 'Lista wydarzeń miesiąca', half_year: 'Wydarzenia za pół roku', year_events: 'Wydarzenia za rok', list_period: 'Lista za okres', year_overview: 'Przegląd roku', notes_report: 'Raport notatek', choose_range: 'Wybierz datę początkową i końcową.', close: 'Zamknij', print: 'Drukuj', export_title: 'Eksport', export_sub: 'Wybierz format eksportu: kopia JSON lub kalendarz (.ics) dla Google/Apple.', json_backup: 'JSON backup', json_backup_desc: 'Pełna kopia zapasowa danych aplikacji.', ics_calendar: 'Kalendarz (.ics)', ics_desc: 'Import do Google Calendar i Apple Calendar.', range_start: 'Początek okresu', range_end: 'Koniec okresu', download: 'Pobierz', google_hint: 'Wskazówka: w Google Calendar otwórz „Ustawienia → Import i eksport → Import”, wybierz plik .ics. W Apple Calendar po prostu otwórz plik.', team_panel: 'Panel zespołu', filter_event: 'Filtr wydarzeń', event_details: 'Szczegóły wydarzenia', no_events_found: 'Brak wyników.', no_notes: 'Brak notatek.', open: 'Otwórz', new_event: 'Nowe wydarzenie', edit_event: 'Edycja wydarzenia', choose_template: 'Wybierz szablon', start: 'Początek', end: 'Koniec', delete_event: 'Usuń wydarzenie', create_entry_help: 'Zostanie utworzony oddzielny wpis kalendarza.', edit_entry_help: 'Możesz zmienić szablon, daty, notatkę lub usunąć wydarzenie.', note: 'Notatka', google_maps: 'Google Maps', google_calendar: 'Google Calendar', apple_calendar: 'Apple / .ics', edit: 'Edytuj', type: 'Typ', type_week: 'Tydzień', type_entry: 'Wpis', template: 'Szablon', imported_backup: 'Starszy backup został zaimportowany i oczyszczony z duplikatów.', imported_json: 'JSON został pomyślnie zaimportowany.', import_failed: 'Nie udało się zaimportować JSON.', week_saved: 'Tydzień zapisany.', event_template_saved: 'Szablon wydarzenia zapisany.', calendar_event_saved: 'Wpis kalendarza zapisany.', calendar_event_deleted: 'Wydarzenie usunięte.', week_deleted: 'Dane tygodnia wyczyszczone.', reset_confirm: 'Zresetować dane aplikacji?', app_reset: 'Aplikacja została zresetowana.', invalid_year: 'Wpisz poprawny rok, np. 2029.', added_year: 'Dodano rok służbowy {year}', choose_template_dates: 'Wybierz szablon i daty.', wrong_end_date: 'Data zakończenia nie może być wcześniejsza niż data rozpoczęcia.', enter_event_name: 'Wpisz nazwę wydarzenia.', offline: 'Jesteś offline. Zmiany są zapisywane lokalnie.', import_google_single: 'Importuj wydarzenie do kalendarza Google/Apple', add_on_date: 'Dodaj wydarzenie', placeholder_schedule: 'Śr 19:00, Sob 10:00',
      delete_note: 'Usuń notatkę',
      delete_template: 'Usuń szablon',
      delete_note_confirm: 'Usunąć tę notatkę?',
      delete_template_confirm: 'Usunąć szablon wydarzenia',
      calendar_view_month: 'Widok: miesiąc',
      calendar_view_year: 'Widok: rok służbowy',
      day_details_title: 'Dzień i tydzień',
      week_planned: 'Plan tygodnia',
      entries_on_day: 'Wydarzenia w tym dniu',
      no_entries_day: 'Brak wydarzeń na ten dzień.',
      open_week: 'Otwórz tydzień',
      add_entry: 'Dodaj wydarzenie',
      edit_week_event: 'Edytuj plan tygodnia'
    }
  };

  const App = {
    config: {
      storageKey: 'service-year-planner-v9-4-2',
      serviceYearStartMonth: 8,
      navItems: [
        { id: 'calendar', icon: '📆', tKey: 'nav_calendar' },
        { id: 'weeks', icon: '🗓️', tKey: 'nav_weeks' },
        { id: 'events', icon: '🎯', tKey: 'nav_events' },
        { id: 'notes', icon: '📝', tKey: 'nav_notes' },
        { id: 'settings', icon: '⚙️', tKey: 'nav_settings' }
      ],
      layoutPresets: [
        { value: 'classic', label: '1. Classic' }, { value: 'compact', label: '2. Compact' }, { value: 'spacious', label: '3. Spacious' },
        { value: 'cards', label: '4. Cards' }, { value: 'minimal', label: '5. Minimal' }, { value: 'dense', label: '6. Dense' },
        { value: 'pill', label: '7. Pill' }, { value: 'outline', label: '8. Outline' }, { value: 'agenda', label: '9. Agenda' }, { value: 'board', label: '10. Board' }
      ],
      monthNames: {
        ru: ['Январь','Февраль','Март','Апрель','Май','Июнь','Июль','Август','Сентябрь','Октябрь','Ноябрь','Декабрь'],
        en: ['January','February','March','April','May','June','July','August','September','October','November','December'],
        uk: ['Січень','Лютий','Березень','Квітень','Травень','Червень','Липень','Серпень','Вересень','Жовтень','Листопад','Грудень'],
        pl: ['Styczeń','Luty','Marzec','Kwiecień','Maj','Czerwiec','Lipiec','Sierpień','Wrzesień','Październik','Listopad','Grudzień']
      },
      dayNames: {
        ru: ['Пн','Вт','Ср','Чт','Пт','Сб','Вс'], en: ['Mon','Tue','Wed','Thu','Fri','Sat','Sun'], uk: ['Пн','Вт','Ср','Чт','Пт','Сб','Нд'], pl: ['Pn','Wt','Śr','Cz','Pt','Sb','Nd']
      },
      priorities: { normal: 'priority_normal', important: 'priority_important', critical: 'priority_critical' }
    },

    els: {},
    state: {
      app: null,
      selectedScreen: 'calendar',
      selectedYear: new Date().getMonth() >= 8 ? new Date().getFullYear() : new Date().getFullYear() - 1,
      selectedWeekId: null,
      editingEventId: null,
      calendarMonth: new Date().getMonth(),
      calendarYear: new Date().getFullYear(),
      calendarDetailId: null,
      calendarEventFilter: 'all',
      calendarEditingTarget: null,
      weekSearch: '',
      noteSearch: '',
      exportType: 'json',
      pdfExportType: 'month-grid',
      teamPanelHidden: false,
      calendarView: 'month',
      calendarSelectedDateIso: null
    },

    utils: {
      uid(prefix = 'id') { return `${prefix}_${Math.random().toString(36).slice(2, 10)}`; },
      lang() {
        const lang = App.state.app?.settings?.language || 'ru';
        return I18N[lang] ? lang : 'ru';
      },
      t(key, vars = {}) {
        const lang = this.lang();
        const dict = I18N[lang] || I18N.ru;
        let value = dict[key] || I18N.ru[key] || key;
        Object.keys(vars).forEach((k) => { value = value.replace(`{${k}}`, String(vars[k])); });
        return value;
      },
      monthName(index) {
        const lang = this.lang();
        return (App.config.monthNames[lang] || App.config.monthNames.ru)[index];
      },
      dayNames() {
        const lang = this.lang();
        return App.config.dayNames[lang] || App.config.dayNames.ru;
      },
      iso(date) {
        const d = new Date(date); if (Number.isNaN(d.getTime())) return ''; const y = d.getFullYear(); const m = String(d.getMonth() + 1).padStart(2,'0'); const day = String(d.getDate()).padStart(2,'0'); return `${y}-${m}-${day}`;
      },
      parseLocalDate(value) {
        if (!value) return null; const parts = String(value).split('-').map(Number); if (parts.length !== 3 || parts.some(Number.isNaN)) return null; return new Date(parts[0], (parts[1] || 1) - 1, parts[2] || 1);
      },
      addDays(date, days) { const d = new Date(date); d.setDate(d.getDate() + days); return d; },
      startOfWeek(date) { const d = new Date(date); const day = (d.getDay() + 6) % 7; d.setDate(d.getDate() - day); d.setHours(0,0,0,0); return d; },
      endOfWeek(date) { return this.addDays(this.startOfWeek(date), 6); },
      weekIdForDate(date) { return this.iso(this.startOfWeek(date)); },
      weekNumber(date) { const d = this.startOfWeek(date); d.setHours(0,0,0,0); d.setDate(d.getDate() + 3); const firstThursday = new Date(d.getFullYear(),0,4); return 1 + Math.round(((d - this.startOfWeek(firstThursday)) / 86400000 - 3) / 7); },
      daysDiff(a, b) { const da = this.parseLocalDate(this.iso(a)); const db = this.parseLocalDate(this.iso(b)); if (!da || !db) return 0; return Math.round((da - db) / 86400000); },
      overlaps(startA, endA, startB, endB) { return startA <= endB && endA >= startB; },
      getServiceYearForDate(date) { const d = new Date(date); return d.getMonth() >= App.config.serviceYearStartMonth ? d.getFullYear() : d.getFullYear() - 1; },
      serviceYearLabel(year) { return `${year}/${year + 1}`; },
      serviceYearBounds(year) { return { start: new Date(year, App.config.serviceYearStartMonth, 1), end: new Date(year + 1, App.config.serviceYearStartMonth, 0) }; },
      clampColor(color, fallback = '#1f7a45') { return /^#[0-9a-f]{6}$/i.test(String(color || '')) ? color : fallback; },
      slug(value) { return String(value || '').toLowerCase().trim().replace(/\s+/g,'-').replace(/[^a-z0-9\-а-яёіїєґ]/gi,''); },
      escapeHtml(str) { return String(str ?? '').replace(/[&<>"']/g, (s) => ({ '&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;' }[s])); },
      escapeAttr(str) { return this.escapeHtml(str); },
      prettyDate(date) { const d = new Date(date); if (Number.isNaN(d.getTime())) return '—'; return d.toLocaleDateString(this.lang(), { day:'2-digit', month:'short' }); },
      prettyDateLong(date) { const d = new Date(date); if (Number.isNaN(d.getTime())) return '—'; return d.toLocaleDateString(this.lang(), { day:'2-digit', month:'long', year:'numeric' }); },
      uniqueBy(items, makeKey) { const seen = new Set(); const out = []; items.forEach((item) => { const key = makeKey(item); if (seen.has(key)) return; seen.add(key); out.push(item); }); return out; },
      downloadText(filename, text, mime = 'text/plain;charset=utf-8') {
        const blob = new Blob([text], { type: mime }); const url = URL.createObjectURL(blob); const a = document.createElement('a'); a.href = url; a.download = filename; document.body.appendChild(a); a.click(); a.remove(); setTimeout(() => URL.revokeObjectURL(url), 2000);
      },
      toast(message) {
        if (!App.els.toastWrap) return; const el = document.createElement('div'); el.className = 'toast'; el.textContent = message; App.els.toastWrap.appendChild(el); setTimeout(() => el.remove(), 3500);
      },
      mapUrl(address) {
        return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address || '')}`;
      },
      googleCalendarUrl(item, event) {
        const format = (value) => String(value || '').replace(/-/g,'');
        const endPlus = this.iso(this.addDays(this.parseLocalDate(item.end), 1));
        const title = item.title || event?.name || this.t('event');
        const details = item.note || '';
        const location = event?.address || '';
        return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(title)}&dates=${format(item.start)}/${format(endPlus)}&details=${encodeURIComponent(details)}&location=${encodeURIComponent(location)}`;
      },
      makeSingleIcs(item, event) {
        const escape = (s) => String(s || '').replace(/\\/g, '\\\\').replace(/\n/g, '\\n').replace(/,/g, '\\,').replace(/;/g, '\\;');
        const endPlus = this.iso(this.addDays(this.parseLocalDate(item.end), 1));
        const lines = [
          'BEGIN:VCALENDAR','VERSION:2.0','PRODID:-//Service Year Planner//RU//','BEGIN:VEVENT',
          `UID:${this.uid('ics')}`,
          `DTSTAMP:${this.iso(new Date()).replace(/-/g,'')}T000000Z`,
          `DTSTART;VALUE=DATE:${String(item.start).replace(/-/g,'')}`,
          `DTEND;VALUE=DATE:${String(endPlus).replace(/-/g,'')}`,
          `SUMMARY:${escape(item.title || event?.name || this.t('event'))}`,
          `DESCRIPTION:${escape(item.note || '')}`,
          `LOCATION:${escape(event?.address || '')}`,
          'END:VEVENT','END:VCALENDAR'
        ];
        return `${lines.join('\r\n')}\r\n`;
      }
    },

    store: {
      ensureSettingsDefaults(settings = {}) {
        const out = { ...settings }; if (typeof out.showTeamPanel !== 'boolean') out.showTeamPanel = true; if (!out.language) out.language = 'ru'; if (!out.theme) out.theme = 'light'; if (!out.layoutPreset) out.layoutPreset = 'classic'; if (!out.calendarView) out.calendarView = 'month'; return out;
      },
      createDefaultData() {
        return { settings: this.ensureSettingsDefaults({}), serviceYears: {}, events: [{ id:'evt_midweek', name:'Серединное собрание', color:'#1f7a45', address:'', schedule:'Ср 19:00' }, { id:'evt_weekend', name:'Выходное служение', color:'#2563eb', address:'', schedule:'Сб 10:00' }], entries: [], meta: { version:'9.4.4-year-day-details' } };
      },
      convertLegacyBackup(legacy) {
        const app = this.createDefaultData(); app.events = []; app.meta = { version:'9.4.4-year-day-details', importedFrom: legacy.schema || 'legacy' }; app.settings = this.ensureSettingsDefaults({});
        const eventMap = new Map(); const legacyMeetings = Array.isArray(legacy.meetings) ? legacy.meetings : [];
        const ensureEvent = (name, source = {}) => { const cleanName = String(name || '').trim(); if (!cleanName) return ''; if (eventMap.has(cleanName)) return eventMap.get(cleanName); const id = `evt_${App.utils.slug(cleanName) || App.utils.uid('evt')}`; const scheduleParts = []; if (source.wd && source.tWD) scheduleParts.push(`${source.wd} ${source.tWD}`); if (source.we && source.tWE) scheduleParts.push(`${source.we} ${source.tWE}`); app.events.push({ id, name: cleanName, color: App.utils.clampColor(source.color, '#1f7a45'), address: source.addr || source.address || '', schedule: scheduleParts.join(', ') }); eventMap.set(cleanName, id); return id; };
        legacyMeetings.forEach((meeting) => ensureEvent(meeting?.name, meeting || {}));
        const data = legacy.data && typeof legacy.data === 'object' ? legacy.data : {};
        Object.keys(data).forEach((bucket) => {
          const rows = Array.isArray(data[bucket]) ? data[bucket] : [];
          rows.forEach((row) => {
            if (!row) return;
            const hasContent = !!(row.s || row.e || row.m || row.nt || row.f302 || row.letter);
            if (!hasContent) return;
            const start = App.utils.iso(row.s || ''); const end = App.utils.iso(row.e || row.s || ''); if (!start || !end) return;
            const eventId = ensureEvent(row.m, legacyMeetings.find((item) => item?.name === row.m) || {});
            const startDate = App.utils.parseLocalDate(start); const serviceYear = startDate ? App.utils.getServiceYearForDate(startDate) : Number(bucket);
            if (!app.serviceYears[serviceYear]) app.serviceYears[serviceYear] = { weeks: {} };
            const weekId = App.utils.weekIdForDate(startDate || start);
            app.entries.push({ id: App.utils.uid('entry'), eventId, start, end, title: row.m || 'Событие', note: row.nt || '', flags: { f302: !!row.f302, letter: !!row.letter }, source: 'legacy' });
            if (!app.serviceYears[serviceYear].weeks[weekId]) app.serviceYears[serviceYear].weeks[weekId] = { id: weekId, weekId, start, end, eventId, priority: row.f302 || row.letter ? 'important' : 'normal', flagLetter: !!row.letter, flagS302: !!row.f302, note: row.nt || '' };
          });
        });
        if (!app.events.length) app.events.push({ id:'evt_generic', name:'Импортированное событие', color:'#1f7a45', address:'', schedule:'' });
        return app;
      },
      normalizeApp(appData) {
        const app = appData && typeof appData === 'object' ? appData : this.createDefaultData();
        app.settings = this.ensureSettingsDefaults(app.settings || {}); if (!Array.isArray(app.events)) app.events = []; if (!Array.isArray(app.entries)) app.entries = []; if (!app.serviceYears || typeof app.serviceYears !== 'object') app.serviceYears = {}; if (!app.meta || typeof app.meta !== 'object') app.meta = { version:'9.4.4-year-day-details' };
        app.events = App.utils.uniqueBy(app.events.map((item) => ({ id: item.id || App.utils.uid('evt'), name: item.name || 'Без названия', color: App.utils.clampColor(item.color), address: item.address || '', schedule: item.schedule || '' })), (item) => [item.name,item.color,item.address,item.schedule].join('|'));
        app.entries = App.utils.uniqueBy(app.entries.filter((item) => item && item.start && item.end).map((item) => ({ id: item.id || App.utils.uid('entry'), eventId: item.eventId || '', start: App.utils.iso(item.start), end: App.utils.iso(item.end), title: item.title || '', note: item.note || '', flags: { f302: !!item?.flags?.f302, letter: !!item?.flags?.letter }, source: item.source || 'entry' })), (item) => [item.eventId,item.title,item.note,item.start,item.end].join('|'));
        Object.keys(app.serviceYears).forEach((year) => {
          const sy = app.serviceYears[year] || {}; if (!sy.weeks || typeof sy.weeks !== 'object') sy.weeks = {};
          Object.keys(sy.weeks).forEach((weekId) => { const w = sy.weeks[weekId]; if (!w) return; const start = App.utils.iso(w.start || weekId); const end = App.utils.iso(w.end || App.utils.addDays(App.utils.parseLocalDate(start), 6)); sy.weeks[weekId] = { id: w.id || weekId, weekId, start, end, eventId: w.eventId || '', priority: w.priority || 'normal', flagLetter: !!w.flagLetter, flagS302: !!w.flagS302, note: w.note || '' }; });
          app.serviceYears[year] = sy;
        });
        app.meta.version = '9.4.4-year-day-details';
        return app;
      },
      migrate(appData) { return this.normalizeApp(appData && appData.schema === 'sp-backup-v2' ? this.convertLegacyBackup(appData) : appData); },
      load() { try { const saved = localStorage.getItem(App.config.storageKey); App.state.app = saved ? this.migrate(JSON.parse(saved)) : this.createDefaultData(); } catch (error) { console.error('Storage load failed', error); App.state.app = this.createDefaultData(); App.utils.toast('Storage reset.'); } },
      save() { localStorage.setItem(App.config.storageKey, JSON.stringify(App.state.app)); }
    },

    data: {
      ensureServiceYear(year) { if (!App.state.app.serviceYears[year]) App.state.app.serviceYears[year] = { weeks: {} }; return App.state.app.serviceYears[year]; },
      getEventById(id) { return App.state.app.events.find((item) => item.id === id) || null; },
      getWeek(year, weekId) {
        const sy = this.ensureServiceYear(year); if (!sy.weeks[weekId]) { const start = App.utils.parseLocalDate(weekId); sy.weeks[weekId] = { id: weekId, weekId, start: App.utils.iso(start), end: App.utils.iso(App.utils.addDays(start, 6)), eventId: '', priority: 'normal', flagLetter: false, flagS302: false, note: '' }; }
        return sy.weeks[weekId];
      },
      getWeeksForYear(year) {
        const bounds = App.utils.serviceYearBounds(year); const weeks = []; let cursor = App.utils.startOfWeek(bounds.start); const end = App.utils.endOfWeek(bounds.end); while (cursor <= end) { weeks.push(this.getWeek(year, App.utils.weekIdForDate(cursor))); cursor = App.utils.addDays(cursor, 7); } return weeks;
      },
      addServiceYear(year) {
        const n = Number(year); if (!Number.isInteger(n) || n < 2000 || n > 2100) { App.utils.toast(App.utils.t('invalid_year')); return false; } this.ensureServiceYear(n); this.getWeeksForYear(n); App.store.save(); App.state.selectedYear = n; App.utils.toast(App.utils.t('added_year', { year: App.utils.serviceYearLabel(n) })); return true;
      },
      buildCalendarItemsForMonth(month, year) {
        const viewStart = new Date(year, month, 1); const viewEnd = new Date(year, month + 1, 0); const items = [];
        Object.values(App.state.app.serviceYears).forEach((serviceYear) => {
          Object.values(serviceYear.weeks || {}).forEach((week) => {
            if (!week.eventId) return; const start = App.utils.parseLocalDate(week.start); const end = App.utils.parseLocalDate(week.end); if (!start || !end) return; if (!App.utils.overlaps(start, end, viewStart, viewEnd)) return; const event = this.getEventById(week.eventId); items.push({ id:`week:${week.weekId}`, source:'week', start, end, eventId: week.eventId, title: event?.name || App.utils.t('event'), color: event?.color || '#1f7a45', note: week.note || '', refId: week.weekId });
          });
        });
        App.state.app.entries.forEach((entry) => {
          const start = App.utils.parseLocalDate(entry.start); const end = App.utils.parseLocalDate(entry.end); if (!start || !end) return; if (!App.utils.overlaps(start, end, viewStart, viewEnd)) return; const event = this.getEventById(entry.eventId); items.push({ id:`entry:${entry.id}`, source:'entry', start, end, eventId: entry.eventId, title: entry.title || event?.name || App.utils.t('event'), color: event?.color || '#1f7a45', note: entry.note || '', refId: entry.id });
        });
        const filtered = App.state.calendarEventFilter === 'all' ? items : items.filter((item) => item.eventId === App.state.calendarEventFilter);
        return App.utils.uniqueBy(filtered, (item) => [item.eventId,item.title,item.note,item.start.toISOString().slice(0,10),item.end.toISOString().slice(0,10)].join('|')).sort((a,b) => a.start - b.start || a.end - b.end);
      },
      collectIcsItems(startDate, endDate) {
        const start = App.utils.parseLocalDate(startDate);
        const end = App.utils.parseLocalDate(endDate);
        if (!start || !end) return [];

        const entryItems = App.state.app.entries
          .filter((entry) => {
            const es = App.utils.parseLocalDate(entry.start);
            const ee = App.utils.parseLocalDate(entry.end);
            return es && ee && App.utils.overlaps(es, ee, start, end);
          })
          .map((entry) => {
            const event = this.getEventById(entry.eventId);
            return {
              title: entry.title || event?.name || App.utils.t('event'),
              description: entry.note || '',
              location: event?.address || '',
              start: entry.start,
              end: App.utils.iso(App.utils.addDays(App.utils.parseLocalDate(entry.end), 1))
            };
          });

        const weekItems = [];
        Object.values(App.state.app.serviceYears || {}).forEach((serviceYear) => {
          Object.values(serviceYear?.weeks || {}).forEach((week) => {
            if (!week?.eventId) return;
            const ws = App.utils.parseLocalDate(week.start);
            const we = App.utils.parseLocalDate(week.end);
            if (!ws || !we || !App.utils.overlaps(ws, we, start, end)) return;
            const event = this.getEventById(week.eventId);
            weekItems.push({
              title: event?.name || App.utils.t('event'),
              description: week.note || '',
              location: event?.address || '',
              start: week.start,
              end: App.utils.iso(App.utils.addDays(App.utils.parseLocalDate(week.end), 1))
            });
          });
        });

        return App.utils.uniqueBy([...entryItems, ...weekItems], (item) => [item.title,item.description,item.location,item.start,item.end].join('|'));
      },
      getCalendarItemById(itemId) {
        if (!itemId) return null; const [source, refId] = String(itemId).split(':');
        if (source === 'entry') {
          const entry = App.state.app.entries.find((item) => item.id === refId); if (!entry) return null; const event = this.getEventById(entry.eventId); return { id: itemId, source: 'entry', refId, eventId: entry.eventId, title: entry.title || event?.name || App.utils.t('event'), note: entry.note || '', start: entry.start, end: entry.end };
        }
        if (source === 'week') {
          let found = null;
          Object.values(App.state.app.serviceYears).forEach((sy) => { if (sy.weeks && sy.weeks[refId]) found = sy.weeks[refId]; });
          if (!found) return null; const event = this.getEventById(found.eventId); return { id: itemId, source: 'week', refId, eventId: found.eventId, title: event?.name || App.utils.t('event'), note: found.note || '', start: found.start, end: found.end };
        }
        return null;
      }
    },

    actions: {
      resetEventForm() {
        App.state.editingEventId = null;
        if (App.els.eventNameInput) App.els.eventNameInput.value = '';
        if (App.els.eventColorInput) {
          App.els.eventColorInput.value = '#1f7a45';
          if (!App.els.eventColorInput.value) App.els.eventColorInput.selectedIndex = 0;
        }
        if (App.els.eventAddressInput) App.els.eventAddressInput.value = '';
        if (App.els.eventScheduleInput) App.els.eventScheduleInput.value = '';
      },
      saveEventTemplate() {
        const name = App.els.eventNameInput?.value.trim(); if (!name) return App.utils.toast(App.utils.t('enter_event_name'));
        const payload = { id: App.state.editingEventId || App.utils.uid('evt'), name, color: App.utils.clampColor(App.els.eventColorInput?.value), address: App.els.eventAddressInput?.value.trim() || '', schedule: App.els.eventScheduleInput?.value.trim() || '' };
        const index = App.state.app.events.findIndex((event) => event.id === payload.id); if (index >= 0) App.state.app.events[index] = payload; else App.state.app.events.push(payload);
        App.state.app.events = App.utils.uniqueBy(App.state.app.events, (item) => [item.name,item.color,item.address,item.schedule].join('|')); App.store.save(); this.resetEventForm(); App.ui.renderAll(); App.utils.toast(App.utils.t('event_template_saved'));
      },
      deleteEventTemplate(eventId) {
        const event = App.data.getEventById(eventId);
        if (!event) return;
        if (!window.confirm(`${App.utils.t('delete_template_confirm')}: ${event.name}?`)) return;
        App.state.app.events = App.state.app.events.filter((item) => item.id !== eventId);
        App.state.app.entries = App.state.app.entries.filter((item) => item.eventId !== eventId);
        Object.values(App.state.app.serviceYears).forEach((sy) => {
          Object.values(sy.weeks || {}).forEach((week) => { if (week.eventId === eventId) week.eventId = ''; });
        });
        if (App.state.editingEventId === eventId) App.actions.resetEventForm();
        App.store.save();
        App.ui.renderAll();
        App.utils.toast(App.utils.t('delete_template'));
      },
      deleteNote(year, weekId) {
        const week = App.state.app.serviceYears?.[year]?.weeks?.[weekId];
        if (!week) return;
        if (!window.confirm(App.utils.t('delete_note_confirm'))) return;
        week.note = '';
        App.store.save();
        App.ui.renderAll();
        App.utils.toast(App.utils.t('delete_note'));
      },
      saveWeek() {
        if (!App.state.selectedWeekId) return; const week = App.data.getWeek(App.state.selectedYear, App.state.selectedWeekId); week.eventId = App.els.weekEventSelect?.value || ''; week.priority = App.els.weekPrioritySelect?.value || 'normal'; week.flagLetter = !!App.els.flagLetter?.checked; week.flagS302 = !!App.els.flagS302?.checked; week.note = App.els.weekNoteInput?.value.trim() || ''; App.store.save(); App.ui.renderAll(); App.utils.toast(App.utils.t('week_saved'));
      },
      deleteWeek() {
        if (!App.state.selectedWeekId) return; if (!window.confirm(App.utils.t('clear_week_confirm'))) return; const week = App.data.getWeek(App.state.selectedYear, App.state.selectedWeekId); week.eventId = ''; week.priority = 'normal'; week.flagLetter = false; week.flagS302 = false; week.note = ''; App.store.save(); App.ui.renderAll(); App.utils.toast(App.utils.t('week_deleted'));
      },
      openCalendarEditorForCreate(dateIso) {
        App.state.calendarEditingTarget = { mode: 'create', source: 'entry', refId: null };
        App.ui.openCalendarEditor({ eventId: '', start: dateIso, end: dateIso, note: '' }, false);
      },
      openCalendarEditorForItem(itemId) {
        const item = App.data.getCalendarItemById(itemId); if (!item) return;
        App.state.calendarEditingTarget = { mode: 'edit', source: item.source, refId: item.refId };
        App.ui.openCalendarEditor(item, true);
      },
      saveCalendarEditor() {
        const eventId = App.els.editorEventSelect?.value || ''; const start = App.els.editorStart?.value || ''; const end = App.els.editorEnd?.value || ''; const note = App.els.editorNoteInput?.value.trim() || '';
        if (!eventId || !start || !end) return App.utils.toast(App.utils.t('choose_template_dates')); if (start > end) return App.utils.toast(App.utils.t('wrong_end_date'));
        const event = App.data.getEventById(eventId);
        const target = App.state.calendarEditingTarget || { mode: 'create', source: 'entry', refId: null };
        if (target.mode === 'edit' && target.source === 'entry') {
          const entry = App.state.app.entries.find((item) => item.id === target.refId); if (entry) { entry.eventId = eventId; entry.start = start; entry.end = end; entry.title = event?.name || App.utils.t('event'); entry.note = note; }
        } else if (target.mode === 'edit' && target.source === 'week') {
          let week = null; Object.values(App.state.app.serviceYears).forEach((sy) => { if (sy.weeks && sy.weeks[target.refId]) week = sy.weeks[target.refId]; }); if (week) { week.eventId = eventId; week.start = start; week.end = end; week.note = note; }
        } else {
          App.state.app.entries.push({ id: App.utils.uid('entry'), eventId, start, end, title: event?.name || App.utils.t('event'), note, source: 'entry' });
        }
        App.state.app.entries = App.utils.uniqueBy(App.state.app.entries, (item) => [item.eventId,item.title,item.note,item.start,item.end].join('|'));
        App.store.save(); App.ui.closeCalendarEditor(); App.ui.renderAll(); App.utils.toast(App.utils.t('calendar_event_saved'));
      },
      deleteCalendarEditorItem() {
        const target = App.state.calendarEditingTarget; if (!target || target.mode !== 'edit') return;
        if (target.source === 'entry') {
          App.state.app.entries = App.state.app.entries.filter((item) => item.id !== target.refId);
        } else if (target.source === 'week') {
          Object.values(App.state.app.serviceYears).forEach((sy) => { if (sy.weeks && sy.weeks[target.refId]) { sy.weeks[target.refId].eventId = ''; sy.weeks[target.refId].note = ''; sy.weeks[target.refId].priority = 'normal'; sy.weeks[target.refId].flagLetter = false; sy.weeks[target.refId].flagS302 = false; } });
        }
        App.store.save(); App.ui.closeCalendarEditor(); App.ui.renderAll(); App.utils.toast(App.utils.t('calendar_event_deleted'));
      },
      exportJson() { App.utils.downloadText(`service-year-planner-${App.utils.iso(new Date())}.json`, JSON.stringify(App.state.app, null, 2), 'application/json;charset=utf-8'); },
      exportIcs() {
        let start = App.els.exportRangeStartInput?.value || App.utils.iso(new Date(App.state.calendarYear, App.state.calendarMonth, 1)); let end = App.els.exportRangeEndInput?.value || App.utils.iso(new Date(App.state.calendarYear, App.state.calendarMonth + 1, 0)); if (start > end) return App.utils.toast(App.utils.t('wrong_end_date')); const items = App.data.collectIcsItems(start, end); const escape = (s) => String(s || '').replace(/\\/g, '\\\\').replace(/\n/g, '\\n').replace(/,/g, '\\,').replace(/;/g, '\\;'); const lines = ['BEGIN:VCALENDAR','VERSION:2.0','PRODID:-//Service Year Planner//RU//']; items.forEach((item) => lines.push('BEGIN:VEVENT',`UID:${App.utils.uid('ics')}`,`DTSTAMP:${App.utils.iso(new Date()).replace(/-/g,'')}T000000Z`,`DTSTART;VALUE=DATE:${item.start.replace(/-/g,'')}`,`DTEND;VALUE=DATE:${item.end.replace(/-/g,'')}`,`SUMMARY:${escape(item.title)}`,`DESCRIPTION:${escape(item.description)}`,`LOCATION:${escape(item.location)}`,'END:VEVENT')); lines.push('END:VCALENDAR'); App.utils.downloadText(`service-year-planner-${start}-${end}.ics`, `${lines.join('\r\n')}\r\n`, 'text/calendar;charset=utf-8');
      },
      exportSingleEventIcs(itemId) {
        const item = App.data.getCalendarItemById(itemId); if (!item) return; const event = App.data.getEventById(item.eventId); App.utils.downloadText(`${App.utils.slug(item.title || event?.name || 'event') || 'event'}.ics`, App.utils.makeSingleIcs(item, event), 'text/calendar;charset=utf-8');
      },
      importJson(file) {
        if (!file) return; const reader = new FileReader(); reader.onload = () => { try { const parsed = JSON.parse(String(reader.result || '{}')); App.state.app = App.store.migrate(parsed); App.store.save(); const years = Object.keys(App.state.app.serviceYears).map(Number).sort((a,b) => a - b);
            const currentSY = App.utils.getServiceYearForDate(new Date());
            const preferredSY = years.includes(currentSY) ? currentSY : (years.length ? years[years.length - 1] : currentSY);
            App.state.selectedYear = preferredSY;
            // Make calendar show something from imported range
            const bounds = App.utils.serviceYearBounds(preferredSY);
            const now = new Date();
            const inRange = now >= bounds.start && now <= bounds.end;
            const showDate = inRange ? now : bounds.start;
            App.state.calendarYear = showDate.getFullYear();
            App.state.calendarMonth = showDate.getMonth();
            if (!inRange) { App.state.calendarView = 'year'; App.state.app.settings.calendarView = 'year'; }
            App.ui.renderAll(); App.utils.toast(parsed?.schema === 'sp-backup-v2' ? App.utils.t('imported_backup') : App.utils.t('imported_json')); } catch (error) { console.error(error); App.utils.toast(App.utils.t('import_failed')); } if (App.els.importInput) App.els.importInput.value = ''; }; reader.readAsText(file, 'utf-8');
      },
      resetApp() { App.state.app = App.store.createDefaultData(); const sy = App.utils.getServiceYearForDate(new Date()); App.data.addServiceYear(sy); App.store.save(); App.ui.renderAll(); App.utils.toast(App.utils.t('app_reset')); },
      openPdf() { if (App.els.pdfModal) App.els.pdfModal.hidden = false; },
      closePdf() { if (App.els.pdfModal) App.els.pdfModal.hidden = true; },
      doPrint() { this.closePdf(); window.print(); }
    },

    ui: {
      cacheElements() {
        [
          'appRoot','desktopNav','toastWrap','offlineBanner','sideStatus','screenTitle','screenSubtitle',
          'weekSearch','yearSelect','eventFilter','weekList','weekEditorTitle','weekEditorEmpty','weekEditor',
          'weekEventSelect','weekPrioritySelect','flagLetter','flagS302','weekNoteInput','saveWeekBtn',
          'monthLabel','calendarRangeLabel','calendarGrid','prevMonthBtn','todayMonthBtn','nextMonthBtn',
          'calendarYearSelect','calendarLayoutPresetSelect','layoutPresetSelect','calendarEditor','editorTitle',
          'editorMeta','editorEventSelect','editorStart','editorEnd','editorReadonly','editorCloseBtn',
          'editorCancelBtn','editorDeleteBtn','editorSaveBtn','calendarServiceYearLabel','calendarPanelYearLabel',
          'calendarQuickList','calendarSideTitle','calendarSideMeta','calendarSideDetails','calendarEventQuickFilter',
          'toggleTeamPanelBtn','calendarLayout','eventsList','eventNameInput','eventColorInput','eventAddressInput',
          'eventScheduleInput','resetEventBtn','saveEventBtn','noteSearch','notesList','languageSelect','themeSelect',
          'settingsPdfBtn','backupBtn','resetAppBtn','themeBtn','exportBtn','importInput','pdfModal','pdfModalCloseBtn',
          'pdfCancelBtn','pdfExportConfirmBtn','pdfRangeCard','pdfRangeStartInput','pdfRangeEndInput','pdfRangeHelp','pdfHint',
          'bottomNav','bottomNavRow','mobileOverlay','mobileMenuToggleBtn','exportModal','exportModalCloseBtn','exportCancelBtn',
          'exportConfirmBtn','exportRangeCard','exportRangeStartInput','exportRangeEndInput','exportRangeHelp','addYearInput','addNextYearBtn','addYearBtn'
        ].forEach((id) => { App.els[id] = document.getElementById(id); });
      },
      ensureEditorNoteField() {
        if (!App.els.calendarEditor) return;
        if (!App.els.editorNoteInput) {
          const meta = App.els.editorReadonly;
          const wrap = document.createElement('label');
          wrap.style.display = 'grid'; wrap.style.gap = '6px'; wrap.style.marginTop = '12px';
          wrap.innerHTML = `<span class="small" id="editorNoteLabel"></span><textarea id="editorNoteInput"></textarea>`;
          meta.parentNode.insertBefore(wrap, meta.nextSibling);
          App.els.editorNoteInput = document.getElementById('editorNoteInput');
          App.els.editorNoteLabel = document.getElementById('editorNoteLabel');
        }
      },
      ensureWeekDeleteButton() {
        const actions = App.els.weekEditor?.querySelector('.editor-actions');
        if (!actions) return;
        let btn = document.getElementById('deleteWeekBtn');
        if (!btn) {
          btn = document.createElement('button'); btn.type = 'button'; btn.id = 'deleteWeekBtn'; btn.className = 'btn danger'; actions.insertBefore(btn, App.els.saveWeekBtn || null); btn.addEventListener('click', () => App.actions.deleteWeek());
        }
        btn.textContent = App.utils.t('delete_week');
      },
      localizeStaticTexts() {
        document.documentElement.lang = App.utils.lang();
        const q = (sel) => document.querySelector(sel);
        const qa = (sel) => Array.from(document.querySelectorAll(sel));
        const brandH1 = q('.brand h1'); if (brandH1) brandH1.textContent = App.utils.t('appTitle');
        const brandP = q('.brand p'); if (brandP) brandP.textContent = `v9.4.4 • index.html + app.js`;
        const versionBadge = q('.version-badge'); if (versionBadge) versionBadge.textContent = `${App.utils.t('version')}: v9.4.4`;
        if (App.els.themeBtn) App.els.themeBtn.textContent = App.utils.t('theme');
        if (App.els.exportBtn) App.els.exportBtn.textContent = App.utils.t('export');
        const importLabel = q('label[for="importInput"]'); if (importLabel) importLabel.textContent = App.utils.t('import_json');
        if (App.els.offlineBanner) App.els.offlineBanner.textContent = App.utils.t('offline');
        if (App.els.toggleTeamPanelBtn) App.els.toggleTeamPanelBtn.textContent = App.state.calendarView === 'year' ? App.utils.t('calendar_view_month') : App.utils.t('calendar_view_year');
        if (App.els.todayMonthBtn) App.els.todayMonthBtn.textContent = App.utils.t('today');
        if (App.els.weekSearch) App.els.weekSearch.placeholder = App.utils.t('weeks_search');
        if (App.els.noteSearch) App.els.noteSearch.placeholder = App.utils.t('notes_search');
        if (App.els.eventScheduleInput) App.els.eventScheduleInput.placeholder = App.utils.t('placeholder_schedule');
        const headings = qa('#events h3, #settings h3');
        if (headings[0]) headings[0].textContent = App.utils.t('event_templates');
        if (headings[1]) headings[1].textContent = App.utils.t('event_editor');
        if (headings[2]) headings[2].textContent = App.utils.t('look_and_feel');
        if (headings[3]) headings[3].textContent = App.utils.t('data_management');
        if (App.els.weekEditorTitle && !App.state.selectedWeekId) App.els.weekEditorTitle.textContent = App.utils.t('week_details');
        if (App.els.weekEditorEmpty) App.els.weekEditorEmpty.textContent = App.utils.t('choose_week');
        if (App.els.saveWeekBtn) App.els.saveWeekBtn.textContent = App.utils.t('save');
        if (App.els.resetEventBtn) App.els.resetEventBtn.textContent = App.utils.t('clear');
        if (App.els.saveEventBtn) App.els.saveEventBtn.textContent = App.utils.t('save_event');
        if (App.els.settingsPdfBtn) App.els.settingsPdfBtn.textContent = App.utils.t('pdf_print');
        if (App.els.addNextYearBtn) App.els.addNextYearBtn.textContent = App.utils.t('add_next_year');
        if (App.els.addYearBtn) App.els.addYearBtn.textContent = App.utils.t('add');
        if (App.els.backupBtn) App.els.backupBtn.textContent = App.utils.t('create_backup');
        if (App.els.resetAppBtn) App.els.resetAppBtn.textContent = App.utils.t('reset_app');
        const settingsSmall = qa('#settings .small');
        settingsSmall.forEach((el) => {
          const text = el.textContent.trim();
          if (text.includes('Добавить служебный год') || text.includes('Add service year') || text.includes('Додати службовий рік') || text.includes('Dodaj rok służbowy')) el.textContent = App.utils.t('add_service_year');
          if (text.includes('Язык') || text.includes('Language') || text.includes('Мова') || text.includes('Język')) el.textContent = App.utils.t('language');
          if (text.includes('Тема') || text.includes('Theme') || text.includes('Motyw')) el.textContent = App.utils.t('theme');
          if (text.includes('Макет календаря') || text.includes('Calendar layout') || text.includes('Макет календаря') || text.includes('Układ kalendarza')) el.textContent = App.utils.t('layout');
          if (text.includes('Название') || text.includes('Name') || text.includes('Назва') || text.includes('Nazwa')) el.textContent = App.utils.t('name');
          if (text.includes('Цвет') || text.includes('Color') || text.includes('Колір') || text.includes('Kolor')) el.textContent = App.utils.t('color');
          if (text.includes('Адрес') || text.includes('Address') || text.includes('Адреса')) el.textContent = App.utils.t('address');
          if (text.includes('Расписание') || text.includes('Schedule') || text.includes('Розклад') || text.includes('Harmonogram')) el.textContent = App.utils.t('schedule');
          if (text.includes('Назначенное событие') || text.includes('Assigned event') || text.includes('Призначена подія') || text.includes('Przypisane wydarzenie')) el.textContent = App.utils.t('assigned_event');
          if (text.includes('Приоритет') || text.includes('Priority') || text.includes('Пріоритет')) el.textContent = App.utils.t('priority');
          if (text.includes('Заметка недели') || text.includes('Week note') || text.includes('Нотатка тижня') || text.includes('Notatka tygodnia')) el.textContent = App.utils.t('week_note');
          if (text.includes('Фильтр события') || text.includes('Event filter') || text.includes('Фільтр події') || text.includes('Filtr wydarzeń')) el.textContent = App.utils.t('filter_event');
        });
        const settingsTextP = qa('#settings p.small');
        settingsTextP.forEach((p) => { if (p.textContent.includes('PDF')) p.textContent = App.utils.t('print_hint'); });
        const formLabels = qa('#calendarEditor span, #pdfModal h3, #exportModal h3');
        qa('#calendar .legend-chip').forEach((chip, index) => {
          chip.childNodes[1].textContent = index === 0 ? App.utils.t('event') : index === 1 ? App.utils.t('weekend') : App.utils.t('today_label');
        });
        if (App.els.editorCloseBtn) App.els.editorCloseBtn.title = App.utils.t('close');
        if (App.els.editorCancelBtn) App.els.editorCancelBtn.textContent = App.utils.t('close');
        if (App.els.editorSaveBtn) App.els.editorSaveBtn.textContent = App.utils.t('save');
        if (App.els.editorDeleteBtn) App.els.editorDeleteBtn.textContent = App.utils.t('delete_event');
        if (App.els.editorTitle) App.els.editorTitle.textContent = App.utils.t('new_event');
        if (App.els.editorNoteLabel) App.els.editorNoteLabel.textContent = App.utils.t('note');
        if (App.els.pdfModal) {
          const h3 = App.els.pdfModal.querySelector('h3'); if (h3) h3.textContent = App.utils.t('export_pdf_title');
          const sub = App.els.pdfModal.querySelector('.modal-sub'); if (sub) sub.textContent = App.utils.t('export_pdf_sub');
          const h4 = App.els.pdfModal.querySelectorAll('.pdf-section h4'); if (h4[0]) h4[0].textContent = App.utils.t('month_grid'); if (h4[1]) h4[1].textContent = App.utils.t('reports');
          const opts = App.els.pdfModal.querySelectorAll('[data-pdf-type] strong');
          const desc = App.els.pdfModal.querySelectorAll('[data-pdf-type] span');
          const pdfMap = [['month_grid','month_grid_desc'],['period_calendar','period_calendar_desc'],['month_list',''],['half_year',''],['year_events',''],['list_period',''],['year_overview',''],['notes_report','']];
          opts.forEach((el, i) => { if (pdfMap[i]) el.textContent = App.utils.t(pdfMap[i][0]); });
          desc.forEach((el, i) => { if (pdfMap[i] && pdfMap[i][1]) el.textContent = App.utils.t(pdfMap[i][1]); });
          if (App.els.pdfRangeHelp) App.els.pdfRangeHelp.textContent = App.utils.t('choose_range');
          if (App.els.pdfCancelBtn) App.els.pdfCancelBtn.textContent = App.utils.t('close');
          if (App.els.pdfExportConfirmBtn) App.els.pdfExportConfirmBtn.textContent = App.utils.t('print');
        }
        if (App.els.exportModal) {
          const h3 = App.els.exportModal.querySelector('h3'); if (h3) h3.textContent = App.utils.t('export_title');
          const sub = App.els.exportModal.querySelector('.modal-sub'); if (sub) sub.textContent = App.utils.t('export_sub');
          const h4 = App.els.exportModal.querySelector('.pdf-section h4'); if (h4) h4.textContent = App.utils.t('export');
          const opts = App.els.exportModal.querySelectorAll('[data-export-type] strong'); if (opts[0]) opts[0].textContent = App.utils.t('json_backup'); if (opts[1]) opts[1].textContent = App.utils.t('ics_calendar');
          const desc = App.els.exportModal.querySelectorAll('[data-export-type] span'); if (desc[0]) desc[0].textContent = App.utils.t('json_backup_desc'); if (desc[1]) desc[1].textContent = App.utils.t('ics_desc');
          if (App.els.exportRangeHelp) App.els.exportRangeHelp.textContent = App.utils.t('choose_range');
          const hint = App.els.exportModal.querySelector('.small[style*="margin-top:8px"]'); if (hint) hint.textContent = App.utils.t('google_hint');
          if (App.els.exportCancelBtn) App.els.exportCancelBtn.textContent = App.utils.t('close');
          if (App.els.exportConfirmBtn) App.els.exportConfirmBtn.textContent = App.utils.t('download');
        }
        if (App.els.languageSelect) {
          const opts = App.els.languageSelect.options; if (opts[0]) opts[0].textContent = 'Русский'; if (opts[1]) opts[1].textContent = 'English'; if (opts[2]) opts[2].textContent = 'Українська'; if (opts[3]) opts[3].textContent = 'Polski';
        }
        if (App.els.themeSelect) {
          const opts = App.els.themeSelect.options; if (opts[0]) opts[0].textContent = App.utils.t('theme_light'); if (opts[1]) opts[1].textContent = App.utils.t('theme_dark');
        }
        if (App.els.weekPrioritySelect) {
          const opts = App.els.weekPrioritySelect.options; if (opts[0]) opts[0].textContent = App.utils.t('priority_normal'); if (opts[1]) opts[1].textContent = App.utils.t('priority_important'); if (opts[2]) opts[2].textContent = App.utils.t('priority_critical');
        }
      },
      renderAll() {
        this.ensureEditorNoteField();
        this.localizeStaticTexts();
        this.applyTheme();
        this.applyLayout();
        this.renderNav();
        this.renderScreenHeader();
        this.renderCalendar();
        this.renderWeeks();
        this.renderEvents();
        this.renderNotes();
        this.renderSettings();
        this.renderStatus();
      },
      renderNav() {
        const buildButton = (item, mobile = false) => `<button class="${mobile ? 'bottom-nav-btn' : 'nav-btn'} ${App.state.selectedScreen === item.id ? 'active' : ''}" data-screen="${item.id}" type="button"><span class="icon">${item.icon}</span><span class="label">${App.utils.t(item.tKey)}</span></button>`;
        if (App.els.desktopNav) App.els.desktopNav.innerHTML = App.config.navItems.map((item) => buildButton(item, false)).join('');
        if (App.els.bottomNavRow) App.els.bottomNavRow.innerHTML = App.config.navItems.map((item) => buildButton(item, true)).join('');
        document.querySelectorAll('[data-screen]').forEach((btn) => btn.addEventListener('click', () => { App.state.selectedScreen = btn.dataset.screen; App.ui.closeMobileMenu(); App.ui.renderAll(); }));
        document.querySelectorAll('.screen').forEach((screen) => screen.classList.toggle('active', screen.id === App.state.selectedScreen));
      },
      renderScreenHeader() {
        const map = { calendar:['screen_calendar','subtitle_calendar'], weeks:['screen_weeks','subtitle_weeks'], events:['screen_events','subtitle_events'], notes:['screen_notes','subtitle_notes'], settings:['screen_settings','subtitle_settings'] };
        const [titleKey, subKey] = map[App.state.selectedScreen] || ['appTitle','subtitle_calendar']; if (App.els.screenTitle) App.els.screenTitle.textContent = App.utils.t(titleKey); if (App.els.screenSubtitle) App.els.screenSubtitle.textContent = App.utils.t(subKey);
      },
      renderStatus() {
        const years = Object.keys(App.state.app.serviceYears).length; const notes = Object.values(App.state.app.serviceYears).reduce((sum, sy) => sum + Object.values(sy.weeks || {}).filter((w) => w.note).length, 0);
        if (App.els.sideStatus) App.els.sideStatus.innerHTML = `<div>${App.utils.t('years_count')}: <strong>${years}</strong></div><div>${App.utils.t('templates_count')}: <strong>${App.state.app.events.length}</strong></div><div>${App.utils.t('entries_count')}: <strong>${App.state.app.entries.length}</strong></div><div>${App.utils.t('notes_count')}: <strong>${notes}</strong></div>`;
      },
      renderYearOptions() {
        const currentSY = App.utils.getServiceYearForDate(new Date()); App.data.ensureServiceYear(currentSY); App.data.getWeeksForYear(currentSY); const keys = Object.keys(App.state.app.serviceYears).map(Number).sort((a,b) => a - b); if (!keys.length) keys.push(currentSY); if (!keys.includes(App.state.selectedYear)) App.state.selectedYear = keys[keys.length - 1]; const options = keys.map((year) => `<option value="${year}">${App.utils.serviceYearLabel(year)}</option>`).join(''); if (App.els.yearSelect) { App.els.yearSelect.innerHTML = options; App.els.yearSelect.value = String(App.state.selectedYear); }
      },
      renderLayoutOptions() { const options = App.config.layoutPresets.map((item) => `<option value="${item.value}">${item.label}</option>`).join(''); ['layoutPresetSelect','calendarLayoutPresetSelect'].forEach((id) => { const el = App.els[id]; if (!el) return; el.innerHTML = options; el.value = App.state.app.settings.layoutPreset; }); },
      applyTheme() { document.documentElement.setAttribute('data-theme', App.state.app.settings.theme || 'light'); if (App.els.themeSelect) App.els.themeSelect.value = App.state.app.settings.theme || 'light'; },
      applyLayout() { document.documentElement.setAttribute('data-layout', App.state.app.settings.layoutPreset || 'classic'); if (App.els.calendarLayout) App.els.calendarLayout.classList.remove('team-hidden'); },
      buildMonthGrid(month, year) {
        const monthStart = new Date(year, month, 1); const monthEnd = new Date(year, month + 1, 0); const gridStart = App.utils.startOfWeek(monthStart); const gridEnd = App.utils.addDays(App.utils.startOfWeek(monthEnd), 41 - App.utils.daysDiff(App.utils.startOfWeek(monthEnd), gridStart)); const weeks = []; let cursor = new Date(gridStart); while (cursor <= gridEnd) { const days = []; for (let i = 0; i < 7; i += 1) { const date = App.utils.addDays(cursor, i); days.push({ date, iso: App.utils.iso(date), day: date.getDate(), month: date.getMonth(), inMonth: date.getMonth() === month, isWeekend: date.getDay() === 0 || date.getDay() === 6, isToday: App.utils.iso(date) === App.utils.iso(new Date()) }); } weeks.push({ id: App.utils.weekIdForDate(cursor), start: new Date(cursor), number: App.utils.weekNumber(cursor), days }); cursor = App.utils.addDays(cursor, 7); } return weeks;
      },
      ensureCalendarViewStyles() {
        if (document.getElementById('calendarViewStyles')) return;
        const style = document.createElement('style');
        style.id = 'calendarViewStyles';
        style.textContent = `
          .service-year-grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:14px;padding:18px;background:var(--surface2)}
          .sy-month-card{background:var(--surface);border:1px solid var(--line);border-radius:20px;box-shadow:var(--shadow);padding:12px;min-width:0}
          .sy-month-title{font-weight:700;margin-bottom:8px;display:flex;justify-content:space-between;gap:8px;align-items:center}
          .sy-month-title small{color:var(--muted);font-weight:500}
          .sy-dow,.sy-days{display:grid;grid-template-columns:repeat(7,minmax(0,1fr));gap:3px}
          .sy-dow span{font-size:10px;color:var(--muted);text-align:center;padding:2px 0}
          .sy-day{appearance:none;border:1px solid transparent;background:transparent;color:var(--text);border-radius:9px;min-height:30px;padding:2px;display:grid;place-items:center;gap:1px;cursor:pointer;font:inherit;font-size:11px;position:relative}
          .sy-day:hover{background:var(--surface2);border-color:var(--line)}
          .sy-day.today{background:var(--accent);color:#fff}
          .sy-day.weekend:not(.today){background:var(--cal-weekend-bg)}
          .sy-day.has-events:not(.today){border-color:rgba(20,83,45,.25)}
          .sy-event-dots{display:flex;gap:2px;justify-content:center;min-height:4px}
          .sy-event-dot{width:4px;height:4px;border-radius:999px;display:block}
          .sy-empty{min-height:30px}
          @media (max-width:1100px){.service-year-grid{grid-template-columns:repeat(2,minmax(0,1fr));}}
          @media (max-width:680px){.service-year-grid{grid-template-columns:1fr;padding:12px}.sy-day{min-height:34px}}
        
          /* Mobile modal scrolling fix */
          .modal{overflow:auto;-webkit-overflow-scrolling:touch;align-items:flex-start}
          .modal-card{max-height:calc(100dvh - 36px);overflow:auto}
          /* Mobile menu click-through reliability */
          .app.menu-open .sidebar{z-index:2000 !important}
          .mobile-overlay{z-index:1500 !important}
`;
        document.head.appendChild(style);
      },
      buildServiceYearMonths(serviceYear) {
        return Array.from({ length: 12 }, (_, index) => {
          const month = (App.config.serviceYearStartMonth + index) % 12;
          const year = serviceYear + Math.floor((App.config.serviceYearStartMonth + index) / 12);
          return { month, year };
        });
      },
      renderCalendarYear(serviceYear) {
        this.ensureCalendarViewStyles();
        this.renderYearOptions();
        this.renderLayoutOptions();
        const bounds = App.utils.serviceYearBounds(serviceYear);
        const yearItems = [];
        this.buildServiceYearMonths(serviceYear).forEach(({ month, year }) => {
          yearItems.push(...App.data.buildCalendarItemsForMonth(month, year));
        });
        const filteredYearItems = App.utils.uniqueBy(yearItems, (item) => [item.id,item.eventId,item.start.toISOString().slice(0,10),item.end.toISOString().slice(0,10)].join('|'));
        if (App.els.monthLabel) App.els.monthLabel.textContent = `${App.utils.t('service_year')} ${App.utils.serviceYearLabel(serviceYear)}`;
        if (App.els.calendarServiceYearLabel) App.els.calendarServiceYearLabel.textContent = `${App.utils.t('service_year')}: ${App.utils.serviceYearLabel(serviceYear)}`;
        if (App.els.calendarRangeLabel) App.els.calendarRangeLabel.textContent = `${App.utils.prettyDateLong(bounds.start)} — ${App.utils.prettyDateLong(bounds.end)}`;
        if (App.els.calendarPanelYearLabel) App.els.calendarPanelYearLabel.textContent = `${App.utils.t('context')}: ${App.utils.serviceYearLabel(serviceYear)}`;
        if (App.els.toggleTeamPanelBtn) App.els.toggleTeamPanelBtn.textContent = App.utils.t('calendar_view_month');
        const filterOptions = ['<option value="all">' + App.utils.t('all_events') + '</option>'].concat(App.state.app.events.map((event) => `<option value="${App.utils.escapeAttr(event.id)}">${App.utils.escapeHtml(event.name)}</option>`));
        if (App.els.calendarEventQuickFilter) { App.els.calendarEventQuickFilter.innerHTML = filterOptions.join(''); App.els.calendarEventQuickFilter.value = App.state.calendarEventFilter; }
        if (App.els.eventFilter) { App.els.eventFilter.innerHTML = filterOptions.join(''); App.els.eventFilter.value = App.state.calendarEventFilter; }
        if (App.els.calendarYearSelect) {
          App.els.calendarYearSelect.innerHTML = Array.from({ length: 9 }, (_, i) => serviceYear - 4 + i).map((y) => `<option value="${y}">${App.utils.serviceYearLabel(y)}</option>`).join('');
          App.els.calendarYearSelect.value = String(serviceYear);
        }
        const dayNames = App.utils.dayNames();
        const todayIso = App.utils.iso(new Date());
        const html = this.buildServiceYearMonths(serviceYear).map(({ month, year }) => {
          const monthStart = new Date(year, month, 1);
          const monthEnd = new Date(year, month + 1, 0);
          const firstOffset = (monthStart.getDay() + 6) % 7;
          const days = [];
          for (let i = 0; i < firstOffset; i += 1) days.push('<div class="sy-empty"></div>');
          const items = App.data.buildCalendarItemsForMonth(month, year);
          for (let day = 1; day <= monthEnd.getDate(); day += 1) {
            const date = new Date(year, month, day);
            const iso = App.utils.iso(date);
            const dayItems = items.filter((item) => App.utils.overlaps(item.start, item.end, date, date));
            const dots = dayItems.slice(0, 3).map((item) => `<span class="sy-event-dot" style="background:${App.utils.clampColor(item.color)}"></span>`).join('');
            days.push(`<button class="sy-day ${iso === todayIso ? 'today' : ''} ${(date.getDay() === 0 || date.getDay() === 6) ? 'weekend' : ''} ${dayItems.length ? 'has-events' : ''}" type="button" data-add-date="${App.utils.escapeAttr(iso)}" title="${App.utils.escapeAttr(App.utils.t('add_on_date'))}"><span>${day}</span><span class="sy-event-dots">${dots}</span></button>`);
          }
          return `<section class="sy-month-card"><div class="sy-month-title"><span>${App.utils.monthName(month)}</span><small>${year}</small></div><div class="sy-dow">${dayNames.map((name) => `<span>${name}</span>`).join('')}</div><div class="sy-days">${days.join('')}</div></section>`;
        }).join('');
        if (App.els.calendarGrid) App.els.calendarGrid.innerHTML = `<div class="service-year-grid">${html}</div>`;
        const quickItems = filteredYearItems.sort((a,b) => a.start - b.start || a.end - b.end);
        if (App.els.calendarQuickList) App.els.calendarQuickList.innerHTML = quickItems.slice(0, 24).map((item) => `<button class="side-item" type="button" data-detail-calendar-item="${App.utils.escapeAttr(item.id)}"><strong>${App.utils.escapeHtml(item.title)}</strong><div class="small">${App.utils.prettyDate(item.start)} — ${App.utils.prettyDate(item.end)}</div><div class="small">${App.utils.escapeHtml(item.note || App.utils.t('no_note'))}</div></button>`).join('') || `<div class="empty">${App.utils.t('no_events_month')}</div>`;
        const detail = quickItems.find((item) => item.id === App.state.calendarDetailId) || quickItems[0] || null;
        this.renderCalendarDetails(detail);
        if (App.state.calendarSelectedDateIso) this.renderServiceYearDayDetails(App.state.calendarSelectedDateIso);
        document.querySelectorAll('[data-add-date]').forEach((btn) => btn.addEventListener('click', (e) => { e.stopPropagation(); App.state.calendarSelectedDateIso = btn.dataset.addDate; App.ui.renderServiceYearDayDetails(btn.dataset.addDate); }));
        document.querySelectorAll('[data-detail-calendar-item]').forEach((btn) => btn.addEventListener('click', () => { const item = quickItems.find((entry) => entry.id === btn.dataset.detailCalendarItem); App.state.calendarDetailId = item?.id || null; App.ui.renderCalendarDetails(item || null); }));
      },
      renderCalendar() {
        const viewMonthStart = new Date(App.state.calendarYear, App.state.calendarMonth, 1);
        const serviceYearForView = App.utils.getServiceYearForDate(viewMonthStart);
        if (App.state.calendarView === 'year') { this.renderCalendarYear(serviceYearForView); return; }
        this.renderYearOptions(); this.renderLayoutOptions(); const year = App.state.calendarYear; const month = App.state.calendarMonth; if (App.els.monthLabel) App.els.monthLabel.textContent = `${App.utils.monthName(month)} ${year}`; const monthStart = new Date(year, month, 1); const monthEnd = new Date(year, month + 1, 0); const serviceYear = App.utils.getServiceYearForDate(monthStart); if (App.els.calendarServiceYearLabel) App.els.calendarServiceYearLabel.textContent = `${App.utils.t('service_year')}: ${App.utils.serviceYearLabel(serviceYear)}`; if (App.els.calendarRangeLabel) App.els.calendarRangeLabel.textContent = `${App.utils.prettyDateLong(monthStart)} — ${App.utils.prettyDateLong(monthEnd)}`; if (App.els.calendarPanelYearLabel) App.els.calendarPanelYearLabel.textContent = `${App.utils.t('context')}: ${App.utils.serviceYearLabel(serviceYear)}`; if (App.els.toggleTeamPanelBtn) App.els.toggleTeamPanelBtn.textContent = App.utils.t('calendar_view_year');
        const filterOptions = ['<option value="all">' + App.utils.t('all_events') + '</option>'].concat(App.state.app.events.map((event) => `<option value="${App.utils.escapeAttr(event.id)}">${App.utils.escapeHtml(event.name)}</option>`)); if (App.els.calendarEventQuickFilter) { App.els.calendarEventQuickFilter.innerHTML = filterOptions.join(''); App.els.calendarEventQuickFilter.value = App.state.calendarEventFilter; } if (App.els.eventFilter) { App.els.eventFilter.innerHTML = filterOptions.join(''); App.els.eventFilter.value = App.state.calendarEventFilter; }
        const weeks = this.buildMonthGrid(month, year); const items = App.data.buildCalendarItemsForMonth(month, year); const itemsByWeek = new Map(); weeks.forEach((week) => itemsByWeek.set(week.id, [])); items.forEach((item) => { weeks.forEach((week) => { const weekStart = week.days[0].date; const weekEnd = week.days[6].date; if (App.utils.overlaps(item.start, item.end, weekStart, weekEnd)) { const leftIndex = Math.max(0, App.utils.daysDiff(item.start, weekStart)); const rightIndex = Math.min(6, App.utils.daysDiff(item.end, weekStart)); itemsByWeek.get(week.id).push({ ...item, leftIndex, rightIndex, span: rightIndex - leftIndex + 1 }); } }); });
        if (App.els.calendarGrid) App.els.calendarGrid.innerHTML = `<div class="grid-cal"><div class="dow-row"><div class="dow-corner"></div><div class="dow-days">${App.utils.dayNames().map((name) => `<div class="dow">${name}</div>`).join('')}</div></div>${weeks.map((week) => { const bars = (itemsByWeek.get(week.id) || []).slice(0, 4); const extraCount = Math.max(0, (itemsByWeek.get(week.id) || []).length - 4); return `<div class="week-row"><button class="week-num" data-open-week="${App.utils.escapeAttr(week.id)}" type="button">W${week.number}</button><div class="week-days">${week.days.map((day) => `<div class="day-cell ${day.inMonth ? '' : 'inactive'} ${day.isWeekend ? 'weekend' : ''} ${day.isToday ? 'today today-col' : ''}" data-day="${day.iso}"><div><span class="day-num">${day.day}</span>${day.day === 1 ? `<span class="day-month">${App.utils.monthName(day.month).slice(0, 3)}</span>` : ''}</div><button class="day-add-btn" data-add-date="${App.utils.escapeAttr(day.iso)}" type="button" title="${App.utils.t('add_on_date')}">+</button></div>`).join('')}${bars.map((bar, rowIndex) => `<button class="event-bar" data-edit-calendar-item="${App.utils.escapeAttr(bar.id)}" type="button" style="left:calc(${(bar.leftIndex / 7) * 100}% + 6px);width:calc(${(bar.span / 7) * 100}% - 12px);top:${28 + rowIndex * 20}px;background:${App.utils.clampColor(bar.color)};">${App.utils.escapeHtml(bar.title)}</button>`).join('')}${extraCount ? `<div class="small" style="position:absolute;left:12px;bottom:6px">+ ${extraCount}</div>` : ''}</div></div>`; }).join('')}</div>`;
        if (App.els.calendarYearSelect) { App.els.calendarYearSelect.innerHTML = Array.from({ length: 9 }, (_, i) => year - 4 + i).map((y) => `<option value="${y}">${y}</option>`).join(''); App.els.calendarYearSelect.value = String(year); }
        if (App.els.calendarQuickList) App.els.calendarQuickList.innerHTML = items.slice(0, 12).map((item) => `<button class="side-item" type="button" data-detail-calendar-item="${App.utils.escapeAttr(item.id)}"><strong>${App.utils.escapeHtml(item.title)}</strong><div class="small">${App.utils.prettyDate(item.start)} — ${App.utils.prettyDate(item.end)}</div><div class="small">${App.utils.escapeHtml(item.note || App.utils.t('no_note'))}</div></button>`).join('') || `<div class="empty">${App.utils.t('no_events_month')}</div>`;
        const detail = items.find((item) => item.id === App.state.calendarDetailId) || items[0] || null; this.renderCalendarDetails(detail);
        document.querySelectorAll('[data-detail-calendar-item]').forEach((btn) => btn.addEventListener('click', () => { const item = items.find((entry) => entry.id === btn.dataset.detailCalendarItem); App.state.calendarDetailId = item?.id || null; App.ui.renderCalendarDetails(item || null); }));
        document.querySelectorAll('[data-add-date]').forEach((btn) => btn.addEventListener('click', (e) => { e.stopPropagation(); App.actions.openCalendarEditorForCreate(btn.dataset.addDate); }));
        document.querySelectorAll('[data-edit-calendar-item]').forEach((btn) => btn.addEventListener('click', (e) => { e.stopPropagation(); App.actions.openCalendarEditorForItem(btn.dataset.editCalendarItem); }));
        document.querySelectorAll('[data-open-week]').forEach((btn) => btn.addEventListener('click', () => { App.state.selectedScreen = 'weeks'; App.state.selectedYear = App.utils.getServiceYearForDate(btn.dataset.openWeek); App.state.selectedWeekId = btn.dataset.openWeek; App.ui.renderAll(); }));
      },
      renderCalendarDetails(item) {
        if (!App.els.calendarSideTitle || !App.els.calendarSideMeta || !App.els.calendarSideDetails) return; if (!item) { App.els.calendarSideTitle.textContent = App.utils.t('event_details'); App.els.calendarSideMeta.textContent = '—'; App.els.calendarSideDetails.innerHTML = `<div class="empty">${App.utils.t('no_events_month')}</div>`; return; }
        const itemData = App.data.getCalendarItemById(item.id) || item; const event = App.data.getEventById(itemData.eventId); App.els.calendarSideTitle.textContent = itemData.title; App.els.calendarSideMeta.textContent = `${App.utils.prettyDateLong(itemData.start)} — ${App.utils.prettyDateLong(itemData.end)}`;
        const addressHtml = event?.address ? `<a href="${App.utils.mapUrl(event.address)}" target="_blank" rel="noopener noreferrer">${App.utils.escapeHtml(event.address)}</a>` : App.utils.escapeHtml(App.utils.t('no_address'));
        App.els.calendarSideDetails.innerHTML = `<div class="side-row"><div class="side-label">${App.utils.t('type')}</div><div class="side-value">${itemData.source === 'week' ? App.utils.t('type_week') : App.utils.t('type_entry')}</div></div><div class="side-row"><div class="side-label">${App.utils.t('template')}</div><div class="side-value">${App.utils.escapeHtml(event?.name || App.utils.t('no_template'))}</div></div><div class="side-row"><div class="side-label">${App.utils.t('address')}</div><div class="side-value">${addressHtml}</div></div><div class="side-row"><div class="side-label">${App.utils.t('schedule')}</div><div class="side-value">${App.utils.escapeHtml(event?.schedule || App.utils.t('no_schedule'))}</div></div><div class="side-row"><div class="side-label">${App.utils.t('note')}</div><div class="side-value">${App.utils.escapeHtml(itemData.note || App.utils.t('no_note'))}</div></div><div style="display:grid;gap:8px;margin-top:12px"><button class="btn" type="button" id="detailEditBtn">${App.utils.t('edit')}</button><a class="btn" href="${App.utils.googleCalendarUrl(itemData, event)}" target="_blank" rel="noopener noreferrer">${App.utils.t('google_calendar')}</a><button class="btn" type="button" id="detailIcsBtn">${App.utils.t('apple_calendar')}</button>${event?.address ? `<a class="btn" href="${App.utils.mapUrl(event.address)}" target="_blank" rel="noopener noreferrer">${App.utils.t('google_maps')}</a>` : ''}</div>`;
        const editBtn = document.getElementById('detailEditBtn'); if (editBtn) editBtn.addEventListener('click', () => App.actions.openCalendarEditorForItem(itemData.id));
        const icsBtn = document.getElementById('detailIcsBtn'); if (icsBtn) icsBtn.addEventListener('click', () => App.actions.exportSingleEventIcs(itemData.id));
      },
      renderServiceYearDayDetails(dateIso) {
        if (!App.els.calendarSideTitle || !App.els.calendarSideMeta || !App.els.calendarSideDetails) return;
        const date = App.utils.parseLocalDate(dateIso);
        if (!date) return;
        const sy = App.utils.getServiceYearForDate(date);
        const weekId = App.utils.weekIdForDate(date);
        const week = App.data.getWeek(sy, weekId);
        const weekEvent = App.data.getEventById(week.eventId);
        const weekStart = App.utils.parseLocalDate(week.start);
        const weekEnd = App.utils.parseLocalDate(week.end);

        const dayEntries = App.state.app.entries
          .filter((entry) => {
            const es = App.utils.parseLocalDate(entry.start);
            const ee = App.utils.parseLocalDate(entry.end);
            return es && ee && App.utils.overlaps(es, ee, date, date);
          })
          .map((entry) => {
            const event = App.data.getEventById(entry.eventId);
            return {
              id: `entry:${entry.id}`,
              title: entry.title || event?.name || App.utils.t('event'),
              color: event?.color || '#1f7a45',
              start: entry.start,
              end: entry.end,
              note: entry.note || ''
            };
          })
          .sort((a,b) => (a.start || '').localeCompare(b.start || ''));

        App.els.calendarSideTitle.textContent = App.utils.t('day_details_title');
        App.els.calendarSideMeta.textContent = `${App.utils.prettyDateLong(date)} · W${App.utils.weekNumber(date)} · ${App.utils.prettyDate(weekStart)} — ${App.utils.prettyDate(weekEnd)}`;

        const weekBlock = `
          <div class="side-row">
            <div class="side-label">${App.utils.t('week_planned')}</div>
            <div class="side-value">
              ${weekEvent ? `<span class="pill"><span class="dot" style="background:${App.utils.clampColor(weekEvent.color)}"></span>${App.utils.escapeHtml(weekEvent.name)}</span>` : App.utils.escapeHtml(App.utils.t('no_template'))}
            </div>
          </div>
          <div class="side-row">
            <div class="side-label">${App.utils.t('note')}</div>
            <div class="side-value">${App.utils.escapeHtml(week.note || App.utils.t('no_note'))}</div>
          </div>
        `;

        const entriesBlock = `
          <div class="side-row">
            <div class="side-label">${App.utils.t('entries_on_day')}</div>
            <div class="side-value">${dayEntries.length ? '' : App.utils.escapeHtml(App.utils.t('no_entries_day'))}</div>
          </div>
          ${dayEntries.map((it) => `
            <button class="side-item" type="button" data-edit-calendar-item="${App.utils.escapeAttr(it.id)}">
              <strong>${App.utils.escapeHtml(it.title)}</strong>
              <div class="small">${it.start} — ${it.end}</div>
              <div class="small">${App.utils.escapeHtml(it.note || App.utils.t('no_note'))}</div>
            </button>
          `).join('')}
        `;

        App.els.calendarSideDetails.innerHTML = `${weekBlock}
          <div style="display:grid;gap:10px;margin-top:12px">
            <button class="btn" type="button" id="syAddEntryBtn">${App.utils.t('add_entry')}</button>
            <button class="btn" type="button" id="syEditWeekBtn">${App.utils.t('edit_week_event')}</button>
            <button class="btn" type="button" id="syOpenWeekBtn">${App.utils.t('open_week')}</button>
          </div>
          <div style="margin-top:12px">${entriesBlock}</div>
        `;

        document.getElementById('syAddEntryBtn')?.addEventListener('click', () => App.actions.openCalendarEditorForCreate(dateIso));
        document.getElementById('syEditWeekBtn')?.addEventListener('click', () => App.actions.openCalendarEditorForItem(`week:${weekId}`));
        document.getElementById('syOpenWeekBtn')?.addEventListener('click', () => {
          App.state.selectedScreen = 'weeks';
          App.state.selectedYear = sy;
          App.state.selectedWeekId = weekId;
          App.ui.renderAll();
        });

        document.querySelectorAll('[data-edit-calendar-item]').forEach((btn) => btn.addEventListener('click', (e) => {
          e.stopPropagation();
          App.actions.openCalendarEditorForItem(btn.dataset.editCalendarItem);
        }));
      },
      openCalendarEditor(data, isEdit) {
        this.ensureEditorNoteField();
        if (!App.els.calendarEditor) return;
        App.els.calendarEditor.hidden = false;
        App.els.editorTitle.textContent = isEdit ? App.utils.t('edit_event') : App.utils.t('new_event');
        App.els.editorMeta.textContent = `${data.start || ''} — ${data.end || data.start || ''}`;
        App.els.editorEventSelect.innerHTML = ['<option value="">' + App.utils.t('choose_template') + '</option>'].concat(App.state.app.events.map((event) => `<option value="${App.utils.escapeAttr(event.id)}">${App.utils.escapeHtml(event.name)}</option>`)).join('');
        App.els.editorEventSelect.value = data.eventId || '';
        App.els.editorStart.value = data.start || '';
        App.els.editorEnd.value = data.end || data.start || '';
        if (App.els.editorNoteInput) App.els.editorNoteInput.value = data.note || '';
        App.els.editorReadonly.textContent = isEdit ? App.utils.t('edit_entry_help') : App.utils.t('create_entry_help');
        App.els.editorDeleteBtn.style.display = isEdit ? '' : 'none';
      },
      closeCalendarEditor() {
        if (App.els.calendarEditor) App.els.calendarEditor.hidden = true; App.state.calendarEditingTarget = null;
      },
      renderWeeks() {
        this.renderYearOptions(); this.ensureWeekDeleteButton(); const year = App.state.selectedYear; const weeks = App.data.getWeeksForYear(year); const query = (App.state.weekSearch || '').trim().toLowerCase(); const filtered = weeks.filter((week) => { const event = App.data.getEventById(week.eventId); const haystack = [week.note, event?.name, week.weekId, App.utils.prettyDate(week.start), App.utils.prettyDate(week.end)].join(' ').toLowerCase(); const filterMatch = App.state.calendarEventFilter === 'all' || week.eventId === App.state.calendarEventFilter; return (!query || haystack.includes(query)) && filterMatch; });
        if (App.els.weekList) App.els.weekList.innerHTML = filtered.map((week) => { const event = App.data.getEventById(week.eventId); return `<button class="week-item ${App.state.selectedWeekId === week.weekId ? 'active' : ''}" data-week-select="${App.utils.escapeAttr(week.weekId)}" type="button"><div class="week-item-top"><strong>${App.utils.prettyDate(week.start)} — ${App.utils.prettyDate(week.end)}</strong><span class="badge">W${App.utils.weekNumber(week.start)}</span></div><div class="pill-row" style="margin-top:8px"><span class="pill"><span class="dot" style="background:${event?.color || '#cbd5e1'}"></span>${App.utils.escapeHtml(event?.name || App.utils.t('no_template'))}</span><span class="pill">${App.utils.t(App.config.priorities[week.priority] || 'priority_normal')}</span>${week.flagLetter ? `<span class="pill">${App.utils.t('letter')}</span>` : ''}${week.flagS302 ? `<span class="pill">${App.utils.t('s302')}</span>` : ''}</div><div class="small" style="margin-top:8px">${App.utils.escapeHtml(week.note || App.utils.t('no_note'))}</div></button>`; }).join('') || `<div class="empty">${App.utils.t('no_events_found')}</div>`;
        document.querySelectorAll('[data-week-select]').forEach((btn) => btn.addEventListener('click', () => { App.state.selectedWeekId = btn.dataset.weekSelect; App.ui.renderWeeks(); }));
        const selected = filtered.find((week) => week.weekId === App.state.selectedWeekId) || filtered[0] || weeks[0] || null; App.state.selectedWeekId = selected?.weekId || null; if (!selected) { if (App.els.weekEditorEmpty) App.els.weekEditorEmpty.hidden = false; if (App.els.weekEditor) App.els.weekEditor.hidden = true; return; }
        if (App.els.weekEditorTitle) App.els.weekEditorTitle.textContent = `${App.utils.t('week_details')}: ${App.utils.prettyDateLong(selected.start)} — ${App.utils.prettyDateLong(selected.end)}`; if (App.els.weekEditorEmpty) App.els.weekEditorEmpty.hidden = true; if (App.els.weekEditor) App.els.weekEditor.hidden = false;
        const eventOptions = ['<option value="">' + App.utils.t('no_template') + '</option>'].concat(App.state.app.events.map((event) => `<option value="${App.utils.escapeAttr(event.id)}">${App.utils.escapeHtml(event.name)}</option>`)); if (App.els.weekEventSelect) { App.els.weekEventSelect.innerHTML = eventOptions.join(''); App.els.weekEventSelect.value = selected.eventId || ''; } if (App.els.weekPrioritySelect) App.els.weekPrioritySelect.value = selected.priority || 'normal'; if (App.els.flagLetter) App.els.flagLetter.checked = !!selected.flagLetter; if (App.els.flagS302) App.els.flagS302.checked = !!selected.flagS302; if (App.els.weekNoteInput) App.els.weekNoteInput.value = selected.note || '';
      },
      renderEvents() {
        if (App.els.eventsList) App.els.eventsList.innerHTML = App.state.app.events.map((event) => `
          <div class="event-row">
            <div>
              <strong>${App.utils.escapeHtml(event.name)}</strong>
              <div class="small">${App.utils.escapeHtml(event.schedule || App.utils.t('no_schedule'))}</div>
              <div class="small">${event.address ? `<a href="${App.utils.mapUrl(event.address)}" target="_blank" rel="noopener noreferrer">${App.utils.escapeHtml(event.address)}</a>` : App.utils.escapeHtml(App.utils.t('no_address'))}</div>
            </div>
            <div style="display:grid;gap:8px;justify-items:end">
              <span class="pill"><span class="dot" style="background:${App.utils.clampColor(event.color)}"></span>${App.utils.escapeHtml(event.color)}</span>
              <div style="display:flex;gap:8px;flex-wrap:wrap;justify-content:flex-end">
                <button class="btn" type="button" data-edit-event="${App.utils.escapeAttr(event.id)}">${App.utils.t('edit')}</button>
                <button class="btn danger" type="button" data-delete-event="${App.utils.escapeAttr(event.id)}">${App.utils.t('delete_template')}</button>
              </div>
            </div>
          </div>`).join('') || `<div class="empty">${App.utils.t('no_events_month')}</div>`;
        document.querySelectorAll('[data-edit-event]').forEach((btn) => btn.addEventListener('click', () => {
          const event = App.data.getEventById(btn.dataset.editEvent);
          App.state.editingEventId = event?.id || null;
          if (App.els.eventNameInput) App.els.eventNameInput.value = event?.name || '';
          if (App.els.eventColorInput) { App.els.eventColorInput.value = event?.color || '#1f7a45'; if (!App.els.eventColorInput.value) App.els.eventColorInput.selectedIndex = 0; }
          if (App.els.eventAddressInput) App.els.eventAddressInput.value = event?.address || '';
          if (App.els.eventScheduleInput) App.els.eventScheduleInput.value = event?.schedule || '';
        }));
        document.querySelectorAll('[data-delete-event]').forEach((btn) => btn.addEventListener('click', () => App.actions.deleteEventTemplate(btn.dataset.deleteEvent)));
      },
      renderNotes() {
        const query = (App.state.noteSearch || '').trim().toLowerCase();
        const items = [];
        Object.keys(App.state.app.serviceYears).sort((a,b) => Number(a) - Number(b)).forEach((year) => {
          Object.values(App.state.app.serviceYears[year].weeks || {}).forEach((week) => {
            if (!week.note) return;
            const event = App.data.getEventById(week.eventId);
            const haystack = `${week.note} ${event?.name || ''} ${week.weekId}`.toLowerCase();
            if (query && !haystack.includes(query)) return;
            items.push({ year, week, event });
          });
        });
        if (App.els.notesList) App.els.notesList.innerHTML = items.map(({ year, week, event }) => `
          <div class="note-row">
            <div>
              <strong>${App.utils.serviceYearLabel(Number(year))}</strong>
              <div class="small">${App.utils.prettyDate(week.start)} — ${App.utils.prettyDate(week.end)} · ${App.utils.escapeHtml(event?.name || App.utils.t('no_template'))}</div>
              <div style="margin-top:8px">${App.utils.escapeHtml(week.note)}</div>
            </div>
            <div style="display:flex;gap:8px;flex-wrap:wrap;justify-content:flex-end">
              <button class="btn" type="button" data-jump-week="${App.utils.escapeAttr(week.weekId)}" data-jump-year="${year}">${App.utils.t('open')}</button>
              <button class="btn danger" type="button" data-delete-note="${App.utils.escapeAttr(week.weekId)}" data-delete-note-year="${year}">${App.utils.t('delete_note')}</button>
            </div>
          </div>`).join('') || `<div class="empty">${App.utils.t('no_notes')}</div>`;
        document.querySelectorAll('[data-jump-week]').forEach((btn) => btn.addEventListener('click', () => {
          App.state.selectedScreen = 'weeks';
          App.state.selectedYear = Number(btn.dataset.jumpYear);
          App.state.selectedWeekId = btn.dataset.jumpWeek;
          App.ui.renderAll();
        }));
        document.querySelectorAll('[data-delete-note]').forEach((btn) => btn.addEventListener('click', () => App.actions.deleteNote(btn.dataset.deleteNoteYear, btn.dataset.deleteNote)));
      },
      renderSettings() { if (App.els.languageSelect) App.els.languageSelect.value = App.state.app.settings.language || 'ru'; if (App.els.addYearInput && !App.els.addYearInput.value) App.els.addYearInput.value = String(Math.max(...Object.keys(App.state.app.serviceYears).map(Number), App.utils.getServiceYearForDate(new Date())) + 1); },
      closeMobileMenu() { if (App.els.appRoot) App.els.appRoot.classList.remove('menu-open'); if (App.els.mobileOverlay) { App.els.mobileOverlay.hidden = true; App.els.mobileOverlay.classList.remove('show'); } },
      toggleMobileMenu() { if (!App.els.appRoot) return; const open = !App.els.appRoot.classList.contains('menu-open'); App.els.appRoot.classList.toggle('menu-open', open); if (App.els.mobileOverlay) { App.els.mobileOverlay.hidden = !open; App.els.mobileOverlay.classList.toggle('show', open); } }
    },

    bind() {
      App.els.weekSearch?.addEventListener('input', (e) => { App.state.weekSearch = e.target.value; App.ui.renderWeeks(); });
      App.els.noteSearch?.addEventListener('input', (e) => { App.state.noteSearch = e.target.value; App.ui.renderNotes(); });
      App.els.yearSelect?.addEventListener('change', (e) => { App.state.selectedYear = Number(e.target.value); App.state.selectedWeekId = null; App.ui.renderWeeks(); });
      App.els.eventFilter?.addEventListener('change', (e) => { App.state.calendarEventFilter = e.target.value; App.ui.renderAll(); });
      App.els.calendarEventQuickFilter?.addEventListener('change', (e) => { App.state.calendarEventFilter = e.target.value; App.ui.renderAll(); });
      App.els.saveWeekBtn?.addEventListener('click', () => App.actions.saveWeek());
      App.els.resetEventBtn?.addEventListener('click', () => App.actions.resetEventForm());
      App.els.saveEventBtn?.addEventListener('click', () => App.actions.saveEventTemplate());
      App.els.themeBtn?.addEventListener('click', () => { App.state.app.settings.theme = App.state.app.settings.theme === 'dark' ? 'light' : 'dark'; App.store.save(); App.ui.renderAll(); });
      App.els.themeSelect?.addEventListener('change', (e) => { App.state.app.settings.theme = e.target.value; App.store.save(); App.ui.renderAll(); });
      App.els.languageSelect?.addEventListener('change', (e) => { App.state.app.settings.language = e.target.value; App.store.save(); App.ui.renderAll(); });
      App.els.layoutPresetSelect?.addEventListener('change', (e) => { App.state.app.settings.layoutPreset = e.target.value; App.store.save(); App.ui.renderAll(); });
      App.els.calendarLayoutPresetSelect?.addEventListener('change', (e) => { App.state.app.settings.layoutPreset = e.target.value; App.store.save(); App.ui.renderAll(); });
      App.els.prevMonthBtn?.addEventListener('click', () => { if (App.state.calendarView === 'year') { const sy = App.utils.getServiceYearForDate(new Date(App.state.calendarYear, App.state.calendarMonth, 1)) - 1; App.state.calendarYear = sy; App.state.calendarMonth = App.config.serviceYearStartMonth; App.ui.renderCalendar(); return; } const date = new Date(App.state.calendarYear, App.state.calendarMonth - 1, 1); App.state.calendarMonth = date.getMonth(); App.state.calendarYear = date.getFullYear(); App.ui.renderCalendar(); });
      App.els.todayMonthBtn?.addEventListener('click', () => { const now = new Date(); App.state.calendarMonth = now.getMonth(); App.state.calendarYear = now.getFullYear(); App.ui.renderCalendar(); });
      App.els.nextMonthBtn?.addEventListener('click', () => { if (App.state.calendarView === 'year') { const sy = App.utils.getServiceYearForDate(new Date(App.state.calendarYear, App.state.calendarMonth, 1)) + 1; App.state.calendarYear = sy; App.state.calendarMonth = App.config.serviceYearStartMonth; App.ui.renderCalendar(); return; } const date = new Date(App.state.calendarYear, App.state.calendarMonth + 1, 1); App.state.calendarMonth = date.getMonth(); App.state.calendarYear = date.getFullYear(); App.ui.renderCalendar(); });
      App.els.calendarYearSelect?.addEventListener('change', (e) => { App.state.calendarYear = Number(e.target.value); if (App.state.calendarView === 'year') App.state.calendarMonth = App.config.serviceYearStartMonth; App.ui.renderCalendar(); });
      App.els.toggleTeamPanelBtn?.addEventListener('click', () => { App.state.calendarView = App.state.calendarView === 'year' ? 'month' : 'year'; App.state.app.settings.calendarView = App.state.calendarView; App.store.save(); App.ui.renderCalendar(); });
      App.els.editorCloseBtn?.addEventListener('click', () => App.ui.closeCalendarEditor());
      App.els.editorCancelBtn?.addEventListener('click', () => App.ui.closeCalendarEditor());
      App.els.editorSaveBtn?.addEventListener('click', () => App.actions.saveCalendarEditor());
      App.els.editorDeleteBtn?.addEventListener('click', () => App.actions.deleteCalendarEditorItem());
      App.els.settingsPdfBtn?.addEventListener('click', () => App.actions.openPdf());
      App.els.pdfModalCloseBtn?.addEventListener('click', () => App.actions.closePdf());
      App.els.pdfCancelBtn?.addEventListener('click', () => App.actions.closePdf());
      App.els.pdfExportConfirmBtn?.addEventListener('click', () => App.actions.doPrint());
      App.els.exportBtn?.addEventListener('click', () => { if (App.els.exportModal) App.els.exportModal.hidden = false; });
      App.els.exportModalCloseBtn?.addEventListener('click', () => { if (App.els.exportModal) App.els.exportModal.hidden = true; });
      App.els.exportCancelBtn?.addEventListener('click', () => { if (App.els.exportModal) App.els.exportModal.hidden = true; });
      App.els.exportConfirmBtn?.addEventListener('click', () => { if (App.state.exportType === 'ics') App.actions.exportIcs(); else App.actions.exportJson(); if (App.els.exportModal) App.els.exportModal.hidden = true; });
      document.querySelectorAll('[data-export-type]').forEach((btn) => btn.addEventListener('click', () => { App.state.exportType = btn.dataset.exportType; document.querySelectorAll('[data-export-type]').forEach((node) => node.classList.toggle('active', node === btn)); if (App.els.exportRangeCard) App.els.exportRangeCard.style.display = App.state.exportType === 'ics' ? 'block' : 'none'; }));
      document.querySelectorAll('[data-pdf-type]').forEach((btn) => btn.addEventListener('click', () => { App.state.pdfExportType = btn.dataset.pdfType; document.querySelectorAll('[data-pdf-type]').forEach((node) => node.classList.toggle('active', node === btn)); if (App.els.pdfRangeCard) App.els.pdfRangeCard.style.display = ['custom-range-calendar','custom-range'].includes(App.state.pdfExportType) ? 'block' : 'none'; }));
      App.els.backupBtn?.addEventListener('click', () => App.actions.exportJson());
      App.els.importInput?.addEventListener('change', (e) => App.actions.importJson(e.target.files?.[0] || null));
      App.els.resetAppBtn?.addEventListener('click', () => { if (window.confirm(App.utils.t('reset_confirm'))) App.actions.resetApp(); });
      App.els.mobileMenuToggleBtn?.addEventListener('click', () => App.ui.toggleMobileMenu());
      App.els.mobileOverlay?.addEventListener('click', () => App.ui.closeMobileMenu());
      // sidebarClickStopper: prevent overlay/pointer issues on small screens
      document.querySelector('.sidebar')?.addEventListener('click', (e) => { e.stopPropagation(); });
      App.els.addYearBtn?.addEventListener('click', () => { if (App.data.addServiceYear(Number(App.els.addYearInput?.value))) App.ui.renderAll(); });
      App.els.addNextYearBtn?.addEventListener('click', () => { const years = Object.keys(App.state.app.serviceYears).map(Number); const nextYear = (years.length ? Math.max(...years) : App.utils.getServiceYearForDate(new Date())) + 1; if (App.data.addServiceYear(nextYear)) { if (App.els.addYearInput) App.els.addYearInput.value = String(nextYear + 1); App.ui.renderAll(); } });
      window.addEventListener('online', () => App.els.offlineBanner?.classList.remove('show'));
      window.addEventListener('offline', () => App.els.offlineBanner?.classList.add('show'));
      if (!navigator.onLine) App.els.offlineBanner?.classList.add('show');
      window.addEventListener('pageshow', () => { App.ui.closeMobileMenu(); });
      document.addEventListener('visibilitychange', () => { if (!document.hidden) App.ui.closeMobileMenu(); });
      window.addEventListener('orientationchange', () => { App.ui.closeMobileMenu(); });
      window.addEventListener('keydown', (e) => { if (e.key === 'Escape') { App.ui.closeCalendarEditor(); App.actions.closePdf(); if (App.els.exportModal) App.els.exportModal.hidden = true; App.ui.closeMobileMenu(); } });
    },

    init() {
      this.ui.cacheElements();
      this.store.load();
      const currentSY = this.utils.getServiceYearForDate(new Date());
      this.data.ensureServiceYear(currentSY);
      this.data.getWeeksForYear(currentSY);
      this.state.selectedYear = currentSY;
      this.state.teamPanelHidden = false;
      this.state.calendarView = this.state.app.settings.calendarView || 'month';
      this.state.app.settings.showTeamPanel = true;
      this.ui.closeMobileMenu();
      this.ui.renderAll();
      this.bind();
      this.ui.closeMobileMenu();
      if ('serviceWorker' in navigator) {
        window.addEventListener('load', async () => {
          try {
            const reg = await navigator.serviceWorker.register('./sw.js', { updateViaCache: 'none' });
            try { await reg.update(); } catch (_) {}
            let refreshing = false;
            navigator.serviceWorker.addEventListener('controllerchange', () => {
              if (refreshing) return;
              refreshing = true;
              window.location.reload();
            });
            reg.addEventListener('updatefound', () => {
              const newWorker = reg.installing;
              if (!newWorker) return;
              newWorker.addEventListener('statechange', () => {
                if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
                  try { reg.waiting?.postMessage({ type: 'SKIP_WAITING' }); } catch (_) {}
                }
              });
            });
          } catch (_) {}
        });
      }
    }
  };

  window.App = App;
  App.init();
})();
