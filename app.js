
// Service Year Planner v9.6.0 color names for meetings
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
      nav_calendar: 'Календарь', nav_weeks: 'Недели', nav_events: 'Собрания и события', nav_notes: 'Заметки', nav_settings: 'Настройки',
      screen_calendar: 'Календарь', screen_weeks: 'Недели', screen_events: 'Собрания и события', screen_notes: 'Заметки', screen_settings: 'Настройки',
      subtitle_calendar: 'Обзор месяца и собраний по служебному году.',
      subtitle_weeks: 'Недельное планирование, заметки и приоритеты.',
      subtitle_events: 'Собрания, адреса залов и расписания.',
      subtitle_notes: 'Поиск и просмотр всех заметок по неделям.',
      subtitle_settings: 'Тема, язык, экспорт, импорт и управление годами.',
      version: 'Версия',
      theme: 'Тема', export: 'Экспорт', import_json: 'Импорт JSON',
      hide_team_panel: 'Скрыть панель команды', show_team_panel: 'Показать панель команды',
      today: 'Сегодня', all_events: 'Все собрания',
      service_year: 'Служебный год', context: 'Контекст',
      event: 'Собрание', weekend: 'Выходные', today_label: 'Сегодня',
      no_events_month: 'Нет собраний в выбранном месяце.',
      no_note: 'Без примечания', no_schedule: 'Без расписания', no_address: 'Адрес не указан', no_template: 'Собрание не выбрано',
      quick_status: 'Быстрый статус', years_count: 'Служебных лет', templates_count: 'Собраний', entries_count: 'Записей собраний', notes_count: 'Заметок',
      weeks_search: 'Поиск по неделе, заметке или собранию', notes_search: 'Поиск по заметкам',
      week_details: 'Детали недели', choose_week: 'Выберите неделю слева, чтобы редактировать её.',
      assigned_event: 'Назначенное собрание', priority: 'Приоритет', priority_normal: 'Обычный', priority_important: 'Важный', priority_critical: 'Критичный',
      letter: 'Письмо', s302: 'S302', week_note: 'Заметка недели', save: 'Сохранить', delete: 'Удалить',
      delete_week: 'Удалить неделю', clear_week_confirm: 'Очистить данные выбранной недели?',
      event_templates: '', events_search: 'Поиск по названию, адресу или расписанию', event_group_filter: 'Группа / цвет', all_event_groups: 'Все группы / цвета', delete_all_events: 'Удалить все собрания', delete_all_events_confirm: 'Удалить все собрания и связанные записи календаря? Это действие нельзя отменить.', delete_all_events_done: 'Все собрания удалены.', events_shown_count: 'Показано: {shown} из {total}', event_editor: 'Редактор собрания', name: 'Название', color: 'Цвет', address: 'Адрес', schedule: 'Расписание',
      clear: 'Очистить', save_event: 'Сохранить собрание',
      look_and_feel: 'Внешний вид', language: 'Язык', layout: 'Макет календаря', theme_light: 'Светлая', theme_dark: 'Тёмная',
      layout_help: 'Доступно 5 вариантов отображения календаря.',
      data_management: 'Управление данными', pdf_print: 'PDF / Печать', add_service_year: 'Добавить служебный год',
      add_next_year: 'Добавить следующий год', add: 'Добавить', create_backup: 'Создать backup', reset_app: 'Сбросить приложение',
      print_hint: 'PDF использует системную печать браузера.',
      export_pdf_title: 'Экспорт в PDF', export_pdf_sub: 'Выберите формат и используйте печать браузера.',
      month_grid: 'Календарь месяца', period_calendar: 'Календарь периода',
      month_grid_desc: 'Сетка текущего месяца для печати.', period_calendar_desc: 'Печать для выбранного диапазона дат.',
      reports: 'Список собраний и отчёты', month_list: 'Список собраний месяца', half_year: 'События за полгода', year_events: 'Собрания за год', list_period: 'Список за период', year_overview: 'Годовой обзор', notes_report: 'Отчёт по заметкам',
      choose_range: 'Выберите даты начала и конца периода.', close: 'Закрыть', print: 'Печать',
      export_title: 'Экспорт', export_sub: 'Выберите формат экспорта: резервный JSON или календарь (.ics) для Google/Apple.',
      json_backup: 'JSON backup', json_backup_desc: 'Полная резервная копия данных приложения.', ics_calendar: 'Календарь (.ics)', ics_desc: 'Импорт в Google Calendar и Apple Calendar.',
      range_start: 'Начало периода', range_end: 'Конец периода', download: 'Скачать',
      google_hint: 'Подсказка: для Google Calendar откройте «Настройки → Импорт и экспорт → Импорт», выберите .ics. Для Apple Calendar просто откройте файл.',
      sync_title: 'Ручная синхронизация', sync_hint: 'Без API: на основном ноутбуке скачайте файл синхронизации и поместите его в Google Drive. На другом устройстве скачайте этот файл из Drive и загрузите здесь.', sync_export: 'Скачать синхронизацию', sync_import: 'Загрузить синхронизацию', sync_export_done: 'Файл синхронизации создан. Поместите его в Google Drive.', sync_import_confirm: 'Заменить текущие данные данными из файла синхронизации?', sync_import_done: 'Данные синхронизации загружены.', sync_import_failed: 'Не удалось загрузить файл синхронизации.', sync_no_file: 'Выберите файл синхронизации JSON.', sync_last_export: 'Последняя выгрузка', sync_last_import: 'Последняя загрузка', sync_never: 'Синхронизация ещё не выполнялась.',
      team_panel: 'Панель команды', filter_event: 'Фильтр события', event_details: 'Детали собрания',
      no_events_found: 'Совпадений не найдено.', no_notes: 'Нет заметок.', open: 'Открыть',
      new_event: 'Новое собрание', edit_event: 'Редактирование собрания', choose_template: 'Выберите собрание', start: 'Начало', end: 'Конец', delete_event: 'Удалить собрание',
      create_entry_help: 'Будет создана отдельная запись собрания.', edit_entry_help: 'Вы можете изменить шаблон, даты, заметку или удалить событие.',
      note: 'Заметка', google_maps: 'Google Maps', google_calendar: 'Google Calendar', apple_calendar: 'Apple / .ics', edit: 'Редактировать', type: 'Тип',
      type_week: 'Неделя', type_entry: 'Запись', template: 'Собрание',
      imported_backup: 'Старый backup импортирован и очищен от дублей.', imported_json: 'JSON успешно импортирован.', import_failed: 'Не удалось импортировать JSON.',
      week_saved: 'Неделя сохранена.', event_template_saved: 'Собрание сохранено.', calendar_event_saved: 'Собрание в календаре сохранено.', calendar_event_deleted: 'Собрание удалено.', week_deleted: 'Данные недели очищены.',
      reset_confirm: 'Сбросить данные приложения?', app_reset: 'Приложение сброшено.',
      invalid_year: 'Введите корректный год, например 2029.', added_year: 'Добавлен служебный год {year}',
      choose_template_dates: 'Выберите собрание и даты.', wrong_end_date: 'Дата окончания не может быть раньше даты начала.', enter_event_name: 'Введите название собрания.',
      offline: 'Вы офлайн. Изменения сохраняются локально.',
      import_google_single: 'Импортировать собрание в Google/Apple календарь',
      add_on_date: 'Добавить собрание',
      placeholder_schedule: 'Ср 19:00, Сб 10:00',
      delete_note: 'Удалить заметку',
      delete_template: 'Удалить собрание',
      delete_note_confirm: 'Удалить эту заметку?',
      delete_template_confirm: 'Удалить собрание',
      calendar_view_month: 'Вид: месяц',
      calendar_view_year: 'Вид: служебный год',
      day_details_title: 'День и неделя',
      week_planned: 'Собрание на неделю',
      entries_on_day: 'Собрания в этот день',
      no_entries_day: 'Нет собраний на этот день.',
      open_week: 'Открыть неделю',
      add_entry: 'Добавить собрание',
      edit_week_event: 'Редактировать план недели',
      compact_year_hint: 'На маленьком экране включён компактный вид: нажмите день, чтобы увидеть детали недели и события.',
 sent_status: 'Контроль отправки', letter_short: 'Письмо', s302_short: 'S-302', send_control: 'Контроль отправки', needs_sending: 'Нужно отправить', sent_done: 'Отправлено', deadline: 'Срок', before_visit_hint: 'Рекомендуемый срок: до начала недели посещения.',
      reminders_title: 'Что нужно отправить', reminders_subtitle: 'Ближайшие визиты, которые ждут S302 или письма', reminders_none: 'Все визиты в порядке — ничего срочного нет.',
      reminders_s302_needed: 'Отправить S302', reminders_letter_needed: 'Отправить письмо', reminders_mark_s302: 'S302 отправлен', reminders_mark_letter: 'Письмо отправлено',
      reminders_overdue: 'Просрочено', reminders_days_left: 'осталось {days} дн.', reminders_close: 'Закрыть', reminders_open_entry: 'Открыть запись',
      visit_type: 'Тип визита', visit_type_none: 'Не визит', visit_type_congregation: 'Собрание', visit_type_group: 'Группа', visit_type_pregroup: 'Предгруппа',
      contact_info: 'Контакт ответственного', contact_name: 'Имя', contact_phone: 'Телефон', contact_email: 'E-mail', contact_note: 'Заметка',
      countdown_today: 'Сегодня', countdown_future: 'Через {value} {label}', countdown_past: '{value} {label} назад', copied: 'Скопировано', copy: 'Копировать',
      stats_title: 'Статистика служебного года', stats_planned: 'Визитов запланировано', stats_done: 'Проведено', unvisited_title: 'Не запланирован визит', unvisited_none: 'Все собрания имеют запланированный визит ✓',
      planner_nothing: 'Выберите хотя бы одно собрание', planner_no_free_weeks: 'Нет свободных недель в выбранном периоде', planner_confirm: 'Создать визиты по плану', planner_created: 'Создано визитов',
      conflict_warning: '⚠️ На эти даты уже запланирован другой визит:', conflict_proceed: 'Всё равно сохранить?',
      next_visit: 'Следующий визит', next_visit_none: 'Нет предстоящих визитов',
      compose_letter: 'Составить письмо', share: 'Поделиться', letter_subject: 'Посещение районного надзирателя', letter_body_greeting: 'Дорогие братья!', letter_body_visit: 'Планируется посещение', letter_body_closing: 'С братской любовью.',
      result_note: 'Итоги визита (после посещения)', result_note_short: 'Итоги визита', last_visit_result: 'Прошлый визит',
      backup_prompt: 'Скачать резервную копию сейчас?', backup_never: 'Резервная копия ещё ни разу не создавалась.', backup_overdue: 'Последний backup был {days} дн. назад.',
      pin_on: 'PIN-код: вкл', pin_off: 'PIN-код: выкл', pin_set_prompt: 'Задайте PIN (4–8 цифр):', pin_format: 'PIN должен состоять из 4–8 цифр', pin_enabled: 'PIN-код включён', pin_disabled: 'PIN-код отключён', pin_wrong: 'Неверный PIN', pin_enter_current: 'Введите текущий PIN:', pin_disable_confirm: 'Отключить PIN-код?',
      visits_schedule: 'График посещений (для КС)'
    },
    en: {
      appTitle: 'Service Year Planner',
      nav_calendar: 'Calendar', nav_weeks: 'Weeks', nav_events: 'Meetings', nav_notes: 'Notes', nav_settings: 'Settings',
      screen_calendar: 'Calendar', screen_weeks: 'Weeks', screen_events: 'Meetings', screen_notes: 'Notes', screen_settings: 'Settings',
      subtitle_calendar: 'Month overview and events for the service year.', subtitle_weeks: 'Weekly planning, notes and priorities.', subtitle_events: 'Meetings, hall addresses and schedules.', subtitle_notes: 'Search and review all weekly notes.', subtitle_settings: 'Theme, language, export, import and year management.',
      version: 'Version', theme: 'Theme', export: 'Export', import_json: 'Import JSON', hide_team_panel: 'Hide team panel', show_team_panel: 'Show team panel', today: 'Today', all_events: 'All meetings', service_year: 'Service year', context: 'Context', event: 'Meeting', weekend: 'Weekend', today_label: 'Today', no_events_month: 'No events in the selected month.', no_note: 'No note', no_schedule: 'No schedule', no_address: 'Address not specified', no_template: 'No meeting selected', quick_status: 'Quick status', years_count: 'Service years', templates_count: 'Event templates', entries_count: 'Calendar entries', notes_count: 'Notes', weeks_search: 'Search week, note or event', notes_search: 'Search notes', week_details: 'Week details', choose_week: 'Select a week on the left to edit it.', assigned_event: 'Assigned event', priority: 'Priority', priority_normal: 'Normal', priority_important: 'Important', priority_critical: 'Critical', letter: 'Letter', s302: 'S302', week_note: 'Week note', save: 'Save', delete: 'Delete', delete_week: 'Delete week', clear_week_confirm: 'Clear the selected week data?', event_templates: '', events_search: 'Search by name, address or schedule', event_group_filter: 'Group / color', all_event_groups: 'All groups / colors', delete_all_events: 'Delete all meetings', delete_all_events_confirm: 'Delete all meetings and related calendar entries? This action cannot be undone.', delete_all_events_done: 'All meetings deleted.', events_shown_count: 'Shown: {shown} of {total}', event_editor: 'Meeting editor', name: 'Name', color: 'Color', address: 'Address', schedule: 'Schedule', clear: 'Clear', save_event: 'Save meeting', look_and_feel: 'Appearance', language: 'Language', layout: 'Calendar layout', theme_light: 'Light', theme_dark: 'Dark', layout_help: '5 calendar layout options are available.', data_management: 'Data management', pdf_print: 'PDF / Print', add_service_year: 'Add service year', add_next_year: 'Add next year', add: 'Add', create_backup: 'Create backup', reset_app: 'Reset app', print_hint: 'PDF uses browser system print.', export_pdf_title: 'Export to PDF', export_pdf_sub: 'Choose format and use browser print.', month_grid: 'Month calendar', period_calendar: 'Period calendar', month_grid_desc: 'Printable grid for the current month.', period_calendar_desc: 'Print for selected date range.', reports: 'Event lists and reports', month_list: 'Month event list', half_year: 'Half-year events', year_events: 'Year events', list_period: 'Range list', year_overview: 'Year overview', notes_report: 'Notes report', choose_range: 'Choose start and end dates.', close: 'Close', print: 'Print', export_title: 'Export', export_sub: 'Choose export format: JSON backup or calendar (.ics) for Google/Apple.', json_backup: 'JSON backup', json_backup_desc: 'Complete application data backup.', ics_calendar: 'Calendar (.ics)', ics_desc: 'Import into Google Calendar and Apple Calendar.', range_start: 'Start date', range_end: 'End date', download: 'Download', google_hint: 'Tip: in Google Calendar open “Settings → Import & Export → Import”, choose the .ics file. In Apple Calendar just open the file.',
      sync_title: 'Manual sync', sync_hint: 'No API: on the main laptop download the sync file and place it in Google Drive. On another device download that file from Drive and load it here.', sync_export: 'Download sync file', sync_import: 'Load sync file', sync_export_done: 'Sync file created. Place it in Google Drive.', sync_import_confirm: 'Replace current data with data from the sync file?', sync_import_done: 'Sync data loaded.', sync_import_failed: 'Failed to load sync file.', sync_no_file: 'Choose a JSON sync file.', sync_last_export: 'Last download', sync_last_import: 'Last load', sync_never: 'Sync has not been run yet.', team_panel: 'Team panel', filter_event: 'Event filter', event_details: 'Event details', no_events_found: 'No matches found.', no_notes: 'No notes.', open: 'Open', new_event: 'New meeting', edit_event: 'Edit meeting', choose_template: 'Choose template', start: 'Start', end: 'End', delete_event: 'Delete meeting', create_entry_help: 'A separate calendar entry will be created.', edit_entry_help: 'You can change template, dates, note or delete the event.', note: 'Note', google_maps: 'Google Maps', google_calendar: 'Google Calendar', apple_calendar: 'Apple / .ics', edit: 'Edit', type: 'Type', type_week: 'Week', type_entry: 'Entry', template: 'Meeting', imported_backup: 'Legacy backup imported and duplicates cleaned.', imported_json: 'JSON imported successfully.', import_failed: 'Failed to import JSON.', week_saved: 'Week saved.', event_template_saved: 'Event template saved.', calendar_event_saved: 'Calendar event saved.', calendar_event_deleted: 'Event deleted.', week_deleted: 'Week data cleared.', reset_confirm: 'Reset application data?', app_reset: 'Application reset.', invalid_year: 'Enter a valid year, for example 2029.', added_year: 'Added service year {year}', choose_template_dates: 'Choose template and dates.', wrong_end_date: 'End date cannot be earlier than start date.', enter_event_name: 'Enter event name.', offline: 'You are offline. Changes are stored locally.', import_google_single: 'Import event into Google/Apple calendar', add_on_date: 'Add event', placeholder_schedule: 'Wed 19:00, Sat 10:00',
      delete_note: 'Delete note',
      delete_template: 'Delete meeting',
      delete_note_confirm: 'Delete this note?',
      delete_template_confirm: 'Delete event template',
      calendar_view_month: 'View: month',
      calendar_view_year: 'View: service year',
      day_details_title: 'Day & week',
      week_planned: 'Weekly plan',
      entries_on_day: 'Meetings on this day',
      no_entries_day: 'No meetings for this day.',
      open_week: 'Open week',
      add_entry: 'Add meeting',
      edit_week_event: 'Edit weekly plan',
      compact_year_hint: 'Compact view is enabled on small screens: tap a day to see week details and events.',
 sent_status: 'Sending control', letter_short: 'Letter', s302_short: 'S-302', send_control: 'Sending control', needs_sending: 'Needs sending', sent_done: 'Sent', deadline: 'Deadline', before_visit_hint: 'Recommended deadline: before the visit week starts.',
      reminders_title: 'What needs to be sent', reminders_subtitle: 'Upcoming visits awaiting S302 or a letter', reminders_none: 'All visits are in order — nothing urgent.',
      reminders_s302_needed: 'Send S302', reminders_letter_needed: 'Send letter', reminders_mark_s302: 'S302 sent', reminders_mark_letter: 'Letter sent',
      reminders_overdue: 'Overdue', reminders_days_left: '{days} d. left', reminders_close: 'Close', reminders_open_entry: 'Open entry',
      visit_type: 'Visit type', visit_type_none: 'Not a visit', visit_type_congregation: 'Congregation', visit_type_group: 'Group', visit_type_pregroup: 'Pregroup',
      contact_info: 'Responsible contact', contact_name: 'Name', contact_phone: 'Phone', contact_email: 'E-mail', contact_note: 'Note',
      countdown_today: 'Today', countdown_future: 'In {value} {label}', countdown_past: '{value} {label} ago', copied: 'Copied', copy: 'Copy',
      stats_title: 'Service year statistics', stats_planned: 'Visits planned', stats_done: 'Completed', unvisited_title: 'No visit planned', unvisited_none: 'All congregations have a planned visit ✓',
      planner_nothing: 'Select at least one congregation', planner_no_free_weeks: 'No free weeks in the selected range', planner_confirm: 'Create visits per plan', planner_created: 'Visits created',
      conflict_warning: '⚠️ Another visit is already planned for these dates:', conflict_proceed: 'Save anyway?',
      next_visit: 'Next visit', next_visit_none: 'No upcoming visits',
      compose_letter: 'Compose letter', share: 'Share', letter_subject: 'Circuit overseer visit', letter_body_greeting: 'Dear brothers!', letter_body_visit: 'A visit is planned', letter_body_closing: 'With brotherly love.',
      result_note: 'Visit results (after the visit)', result_note_short: 'Visit results', last_visit_result: 'Previous visit',
      backup_prompt: 'Download a backup now?', backup_never: 'A backup has never been created.', backup_overdue: 'Last backup was {days} days ago.',
      pin_on: 'PIN: on', pin_off: 'PIN: off', pin_set_prompt: 'Set a PIN (4–8 digits):', pin_format: 'PIN must be 4–8 digits', pin_enabled: 'PIN enabled', pin_disabled: 'PIN disabled', pin_wrong: 'Wrong PIN', pin_enter_current: 'Enter current PIN:', pin_disable_confirm: 'Disable PIN?',
      visits_schedule: 'Visit schedule (for CO)'
    },
    uk: {
      appTitle: 'Service Year Planner',
      nav_calendar: 'Календар', nav_weeks: 'Тижні', nav_events: 'Зібрання', nav_notes: 'Нотатки', nav_settings: 'Налаштування',
      screen_calendar: 'Календар', screen_weeks: 'Тижні', screen_events: 'Зібрання', screen_notes: 'Нотатки', screen_settings: 'Налаштування',
      subtitle_calendar: 'Огляд місяця та подій службового року.', subtitle_weeks: 'Тижневе планування, нотатки та пріоритети.', subtitle_events: 'Зібрання, адреси залів і розклад.', subtitle_notes: 'Пошук і перегляд усіх тижневих нотаток.', subtitle_settings: 'Тема, мова, експорт, імпорт і керування роками.',
      version: 'Версія', theme: 'Тема', export: 'Експорт', import_json: 'Імпорт JSON', hide_team_panel: 'Сховати панель команди', show_team_panel: 'Показати панель команди', today: 'Сьогодні', all_events: 'Усі зібрання', service_year: 'Службовий рік', context: 'Контекст', event: 'Зібрання', weekend: 'Вихідні', today_label: 'Сьогодні', no_events_month: 'У вибраному місяці немає подій.', no_note: 'Без примітки', no_schedule: 'Без розкладу', no_address: 'Адресу не вказано', no_template: 'Зібрання не вибрано', quick_status: 'Швидкий статус', years_count: 'Службових років', templates_count: 'Шаблонів подій', entries_count: 'Записів календаря', notes_count: 'Нотаток', weeks_search: 'Пошук за тижнем, нотаткою чи подією', notes_search: 'Пошук нотаток', week_details: 'Деталі тижня', choose_week: 'Виберіть тиждень ліворуч, щоб редагувати його.', assigned_event: 'Призначена подія', priority: 'Пріоритет', priority_normal: 'Звичайний', priority_important: 'Важливий', priority_critical: 'Критичний', letter: 'Лист', s302: 'S302', week_note: 'Нотатка тижня', save: 'Зберегти', delete: 'Видалити', delete_week: 'Видалити тиждень', clear_week_confirm: 'Очистити дані вибраного тижня?', event_templates: '', events_search: 'Пошук за назвою, адресою або розкладом', event_group_filter: 'Група / колір', all_event_groups: 'Усі групи / кольори', delete_all_events: 'Видалити всі зібрання', delete_all_events_confirm: 'Видалити всі зібрання та пов’язані записи календаря? Цю дію не можна скасувати.', delete_all_events_done: 'Усі зібрання видалено.', events_shown_count: 'Показано: {shown} з {total}', event_editor: 'Редактор зібрання', name: 'Назва', color: 'Колір', address: 'Адреса', schedule: 'Розклад', clear: 'Очистити', save_event: 'Зберегти зібрання', look_and_feel: 'Зовнішній вигляд', language: 'Мова', layout: 'Макет календаря', theme_light: 'Світла', theme_dark: 'Темна', layout_help: 'Доступно 5 варіантів відображення календаря.', data_management: 'Керування даними', pdf_print: 'PDF / Друк', add_service_year: 'Додати службовий рік', add_next_year: 'Додати наступний рік', add: 'Додати', create_backup: 'Створити backup', reset_app: 'Скинути застосунок', print_hint: 'PDF використовує системний друк браузера.', export_pdf_title: 'Експорт у PDF', export_pdf_sub: 'Виберіть формат і використайте друк браузера.', month_grid: 'Календар місяця', period_calendar: 'Календар періоду', month_grid_desc: 'Сітка поточного місяця для друку.', period_calendar_desc: 'Друк для вибраного діапазону дат.', reports: 'Список подій і звіти', month_list: 'Список подій місяця', half_year: 'Події за пів року', year_events: 'Події за рік', list_period: 'Список за період', year_overview: 'Річний огляд', notes_report: 'Звіт по нотатках', choose_range: 'Виберіть дати початку та кінця періоду.', close: 'Закрити', print: 'Друк', export_title: 'Експорт', export_sub: 'Виберіть формат експорту: резервний JSON або календар (.ics) для Google/Apple.', json_backup: 'JSON backup', json_backup_desc: 'Повна резервна копія даних застосунку.', ics_calendar: 'Календар (.ics)', ics_desc: 'Імпорт у Google Calendar та Apple Calendar.', range_start: 'Початок періоду', range_end: 'Кінець періоду', download: 'Завантажити', google_hint: 'Підказка: у Google Calendar відкрийте «Налаштування → Імпорт і експорт → Імпорт», виберіть .ics. Для Apple Calendar просто відкрийте файл.',
      sync_title: 'Ручна синхронізація', sync_hint: 'Без API: на основному ноутбуці завантажте файл синхронізації та помістіть його в Google Drive. На іншому пристрої завантажте цей файл із Drive і відкрийте тут.', sync_export: 'Завантажити синхронізацію', sync_import: 'Завантажити з файлу синхронізації', sync_export_done: 'Файл синхронізації створено. Помістіть його в Google Drive.', sync_import_confirm: 'Замінити поточні дані даними з файлу синхронізації?', sync_import_done: 'Дані синхронізації завантажено.', sync_import_failed: 'Не вдалося завантажити файл синхронізації.', sync_no_file: 'Виберіть JSON-файл синхронізації.', sync_last_export: 'Останнє вивантаження', sync_last_import: 'Останнє завантаження', sync_never: 'Синхронізацію ще не виконували.', team_panel: 'Панель команди', filter_event: 'Фільтр події', event_details: 'Деталі події', no_events_found: 'Нічого не знайдено.', no_notes: 'Немає нотаток.', open: 'Відкрити', new_event: 'Нове зібрання', edit_event: 'Редагування зібрання', choose_template: 'Виберіть шаблон', start: 'Початок', end: 'Кінець', delete_event: 'Видалити зібрання', create_entry_help: 'Буде створено окремий запис календаря.', edit_entry_help: 'Ви можете змінити шаблон, дати, нотатку або видалити подію.', note: 'Нотатка', google_maps: 'Google Maps', google_calendar: 'Google Calendar', apple_calendar: 'Apple / .ics', edit: 'Редагувати', type: 'Тип', type_week: 'Тиждень', type_entry: 'Запис', template: 'Зібрання', imported_backup: 'Старий backup імпортовано й очищено від дублів.', imported_json: 'JSON успішно імпортовано.', import_failed: 'Не вдалося імпортувати JSON.', week_saved: 'Тиждень збережено.', event_template_saved: 'Шаблон події збережено.', calendar_event_saved: 'Подію календаря збережено.', calendar_event_deleted: 'Подію видалено.', week_deleted: 'Дані тижня очищено.', reset_confirm: 'Скинути дані застосунку?', app_reset: 'Застосунок скинуто.', invalid_year: 'Введіть коректний рік, наприклад 2029.', added_year: 'Додано службовий рік {year}', choose_template_dates: 'Виберіть шаблон і дати.', wrong_end_date: 'Дата завершення не може бути раніше дати початку.', enter_event_name: 'Введіть назву події.', offline: 'Ви офлайн. Зміни зберігаються локально.', import_google_single: 'Імпортувати подію в Google/Apple календар', add_on_date: 'Додати подію', placeholder_schedule: 'Ср 19:00, Сб 10:00',
      delete_note: 'Видалити нотатку',
      delete_template: 'Видалити зібрання',
      delete_note_confirm: 'Видалити цю нотатку?',
      delete_template_confirm: 'Видалити шаблон події',
      calendar_view_month: 'Вигляд: місяць',
      calendar_view_year: 'Вигляд: службовий рік',
      day_details_title: 'День і тиждень',
      week_planned: 'План на тиждень',
      entries_on_day: 'Зібрання цього дня',
      no_entries_day: 'Немає зібрань на цей день.',
      open_week: 'Відкрити тиждень',
      add_entry: 'Додати зібрання',
      edit_week_event: 'Редагувати план тижня',
      compact_year_hint: 'На малому екрані ввімкнено компактний вигляд: натисніть день, щоб побачити деталі тижня та події.',
 sent_status: 'Контроль надсилання', letter_short: 'Лист', s302_short: 'S-302', send_control: 'Контроль надсилання', needs_sending: 'Потрібно надіслати', sent_done: 'Надіслано', deadline: 'Термін', before_visit_hint: 'Рекомендований термін: до початку тижня відвідування.',
      reminders_title: 'Що потрібно надіслати', reminders_subtitle: 'Найближчі візити, які чекають S302 або листа', reminders_none: 'Усі візити в порядку — нічого термінового.',
      reminders_s302_needed: 'Надіслати S302', reminders_letter_needed: 'Надіслати листа', reminders_mark_s302: 'S302 надіслано', reminders_mark_letter: 'Листа надіслано',
      reminders_overdue: 'Прострочено', reminders_days_left: 'залишилося {days} дн.', reminders_close: 'Закрити', reminders_open_entry: 'Відкрити запис',
      visit_type: 'Тип візиту', visit_type_none: 'Не візит', visit_type_congregation: 'Зібрання', visit_type_group: 'Група', visit_type_pregroup: 'Передгрупа',
      contact_info: 'Контакт відповідального', contact_name: 'Ім’я', contact_phone: 'Телефон', contact_email: 'E-mail', contact_note: 'Нотатка',
      countdown_today: 'Сьогодні', countdown_future: 'Через {value} {label}', countdown_past: '{value} {label} тому', copied: 'Скопійовано', copy: 'Копіювати',
      stats_title: 'Статистика службового року', stats_planned: 'Візитів заплановано', stats_done: 'Проведено', unvisited_title: 'Візит не заплановано', unvisited_none: 'Усі зібрання мають запланований візит ✓',
      planner_nothing: 'Виберіть хоча б одне зібрання', planner_no_free_weeks: 'Немає вільних тижнів у вибраному періоді', planner_confirm: 'Створити візити за планом', planner_created: 'Створено візитів',
      conflict_warning: '⚠️ На ці дати вже заплановано інший візит:', conflict_proceed: 'Все одно зберегти?',
      next_visit: 'Наступний візит', next_visit_none: 'Немає майбутніх візитів',
      compose_letter: 'Скласти листа', share: 'Поділитися', letter_subject: 'Відвідування районного наглядача', letter_body_greeting: 'Дорогі брати!', letter_body_visit: 'Планується відвідування', letter_body_closing: 'З братньою любов’ю.',
      result_note: 'Підсумки візиту (після відвідування)', result_note_short: 'Підсумки візиту', last_visit_result: 'Минулий візит',
      backup_prompt: 'Завантажити резервну копію зараз?', backup_never: 'Резервна копія ще не створювалася.', backup_overdue: 'Останній backup був {days} дн. тому.',
      pin_on: 'PIN-код: увімк', pin_off: 'PIN-код: вимк', pin_set_prompt: 'Задайте PIN (4–8 цифр):', pin_format: 'PIN має складатися з 4–8 цифр', pin_enabled: 'PIN-код увімкнено', pin_disabled: 'PIN-код вимкнено', pin_wrong: 'Невірний PIN', pin_enter_current: 'Введіть поточний PIN:', pin_disable_confirm: 'Вимкнути PIN-код?',
      visits_schedule: 'Графік відвідувань (для КН)'
    },
    pl: {
      appTitle: 'Service Year Planner',
      nav_calendar: 'Kalendarz', nav_weeks: 'Tygodnie', nav_events: 'Zebrania', nav_notes: 'Notatki', nav_settings: 'Ustawienia',
      screen_calendar: 'Kalendarz', screen_weeks: 'Tygodnie', screen_events: 'Zebrania', screen_notes: 'Notatki', screen_settings: 'Ustawienia',
      subtitle_calendar: 'Przegląd miesiąca i wydarzeń roku służbowego.', subtitle_weeks: 'Planowanie tygodnia, notatki i priorytety.', subtitle_events: 'Zebrania, adresy sal i harmonogramy.', subtitle_notes: 'Wyszukiwanie i przegląd wszystkich notatek tygodniowych.', subtitle_settings: 'Motyw, język, eksport, import i zarządzanie latami.',
      version: 'Wersja', theme: 'Motyw', export: 'Eksport', import_json: 'Import JSON', hide_team_panel: 'Ukryj panel zespołu', show_team_panel: 'Pokaż panel zespołu', today: 'Dzisiaj', all_events: 'Wszystkie zebrania', service_year: 'Rok służbowy', context: 'Kontekst', event: 'Zebranie', weekend: 'Weekend', today_label: 'Dzisiaj', no_events_month: 'Brak wydarzeń w wybranym miesiącu.', no_note: 'Brak notatki', no_schedule: 'Brak harmonogramu', no_address: 'Adres nie został podany', no_template: 'Nie wybrano zebrania', quick_status: 'Szybki status', years_count: 'Lat służbowych', templates_count: 'Szablonów wydarzeń', entries_count: 'Wpisów kalendarza', notes_count: 'Notatek', weeks_search: 'Szukaj tygodnia, notatki lub wydarzenia', notes_search: 'Szukaj notatek', week_details: 'Szczegóły tygodnia', choose_week: 'Wybierz tydzień po lewej stronie, aby go edytować.', assigned_event: 'Przypisane wydarzenie', priority: 'Priorytet', priority_normal: 'Normalny', priority_important: 'Ważny', priority_critical: 'Krytyczny', letter: 'List', s302: 'S302', week_note: 'Notatka tygodnia', save: 'Zapisz', delete: 'Usuń', delete_week: 'Usuń tydzień', clear_week_confirm: 'Wyczyścić dane wybranego tygodnia?', event_templates: '', events_search: 'Szukaj według nazwy, adresu lub harmonogramu', event_group_filter: 'Grupa / kolor', all_event_groups: 'Wszystkie grupy / kolory', delete_all_events: 'Usuń wszystkie zebrania', delete_all_events_confirm: 'Usunąć wszystkie zebrania i powiązane wpisy kalendarza? Tej czynności nie można cofnąć.', delete_all_events_done: 'Wszystkie zebrania usunięte.', events_shown_count: 'Pokazano: {shown} z {total}', event_editor: 'Edytor zebrania', name: 'Nazwa', color: 'Kolor', address: 'Adres', schedule: 'Harmonogram', clear: 'Wyczyść', save_event: 'Zapisz zebranie', look_and_feel: 'Wygląd', language: 'Język', layout: 'Układ kalendarza', theme_light: 'Jasny', theme_dark: 'Ciemny', layout_help: 'Dostępnych jest 5 układów kalendarza.', data_management: 'Zarządzanie danymi', pdf_print: 'PDF / Druk', add_service_year: 'Dodaj rok służbowy', add_next_year: 'Dodaj kolejny rok', add: 'Dodaj', create_backup: 'Utwórz backup', reset_app: 'Zresetuj aplikację', print_hint: 'PDF korzysta z systemowego druku przeglądarki.', export_pdf_title: 'Eksport do PDF', export_pdf_sub: 'Wybierz format i użyj drukowania przeglądarki.', month_grid: 'Kalendarz miesiąca', period_calendar: 'Kalendarz okresu', month_grid_desc: 'Siatka bieżącego miesiąca do wydruku.', period_calendar_desc: 'Wydruk dla wybranego zakresu dat.', reports: 'Listy wydarzeń i raporty', month_list: 'Lista wydarzeń miesiąca', half_year: 'Wydarzenia za pół roku', year_events: 'Wydarzenia za rok', list_period: 'Lista za okres', year_overview: 'Przegląd roku', notes_report: 'Raport notatek', choose_range: 'Wybierz datę początkową i końcową.', close: 'Zamknij', print: 'Drukuj', export_title: 'Eksport', export_sub: 'Wybierz format eksportu: kopia JSON lub kalendarz (.ics) dla Google/Apple.', json_backup: 'JSON backup', json_backup_desc: 'Pełna kopia zapasowa danych aplikacji.', ics_calendar: 'Kalendarz (.ics)', ics_desc: 'Import do Google Calendar i Apple Calendar.', range_start: 'Początek okresu', range_end: 'Koniec okresu', download: 'Pobierz', google_hint: 'Wskazówka: w Google Calendar otwórz „Ustawienia → Import i eksport → Import”, wybierz plik .ics. W Apple Calendar po prostu otwórz plik.',
      sync_title: 'Ręczna synchronizacja', sync_hint: 'Bez API: na głównym laptopie pobierz plik synchronizacji i umieść go w Google Drive. Na innym urządzeniu pobierz ten plik z Drive i wczytaj go tutaj.', sync_export: 'Pobierz synchronizację', sync_import: 'Wczytaj synchronizację', sync_export_done: 'Plik synchronizacji utworzony. Umieść go w Google Drive.', sync_import_confirm: 'Zastąpić bieżące dane danymi z pliku synchronizacji?', sync_import_done: 'Dane synchronizacji wczytane.', sync_import_failed: 'Nie udało się wczytać pliku synchronizacji.', sync_no_file: 'Wybierz plik JSON synchronizacji.', sync_last_export: 'Ostatnie pobranie', sync_last_import: 'Ostatnie wczytanie', sync_never: 'Synchronizacja nie była jeszcze uruchamiana.', team_panel: 'Panel zespołu', filter_event: 'Filtr wydarzeń', event_details: 'Szczegóły wydarzenia', no_events_found: 'Brak wyników.', no_notes: 'Brak notatek.', open: 'Otwórz', new_event: 'Nowe zebranie', edit_event: 'Edycja zebrania', choose_template: 'Wybierz szablon', start: 'Początek', end: 'Koniec', delete_event: 'Usuń zebranie', create_entry_help: 'Zostanie utworzony oddzielny wpis kalendarza.', edit_entry_help: 'Możesz zmienić szablon, daty, notatkę lub usunąć wydarzenie.', note: 'Notatka', google_maps: 'Google Maps', google_calendar: 'Google Calendar', apple_calendar: 'Apple / .ics', edit: 'Edytuj', type: 'Typ', type_week: 'Tydzień', type_entry: 'Wpis', template: 'Zebranie', imported_backup: 'Starszy backup został zaimportowany i oczyszczony z duplikatów.', imported_json: 'JSON został pomyślnie zaimportowany.', import_failed: 'Nie udało się zaimportować JSON.', week_saved: 'Tydzień zapisany.', event_template_saved: 'Szablon wydarzenia zapisany.', calendar_event_saved: 'Wpis kalendarza zapisany.', calendar_event_deleted: 'Wydarzenie usunięte.', week_deleted: 'Dane tygodnia wyczyszczone.', reset_confirm: 'Zresetować dane aplikacji?', app_reset: 'Aplikacja została zresetowana.', invalid_year: 'Wpisz poprawny rok, np. 2029.', added_year: 'Dodano rok służbowy {year}', choose_template_dates: 'Wybierz szablon i daty.', wrong_end_date: 'Data zakończenia nie może być wcześniejsza niż data rozpoczęcia.', enter_event_name: 'Wpisz nazwę wydarzenia.', offline: 'Jesteś offline. Zmiany są zapisywane lokalnie.', import_google_single: 'Importuj wydarzenie do kalendarza Google/Apple', add_on_date: 'Dodaj wydarzenie', placeholder_schedule: 'Śr 19:00, Sob 10:00',
      delete_note: 'Usuń notatkę',
      delete_template: 'Usuń zebranie',
      delete_note_confirm: 'Usunąć tę notatkę?',
      delete_template_confirm: 'Usunąć szablon wydarzenia',
      calendar_view_month: 'Widok: miesiąc',
      calendar_view_year: 'Widok: rok służbowy',
      day_details_title: 'Dzień i tydzień',
      week_planned: 'Plan tygodnia',
      entries_on_day: 'Zebrania w tym dniu',
      no_entries_day: 'Brak zebrań na ten dzień.',
      open_week: 'Otwórz tydzień',
      add_entry: 'Dodaj zebranie',
      edit_week_event: 'Edytuj plan tygodnia',
      compact_year_hint: 'Na małym ekranie włączony jest widok kompaktowy: stuknij dzień, aby zobaczyć szczegóły tygodnia i wydarzenia.',
 sent_status: 'Kontrola wysyłki', letter_short: 'List', s302_short: 'S-302', send_control: 'Kontrola wysyłki', needs_sending: 'Do wysłania', sent_done: 'Wysłano', deadline: 'Termin', before_visit_hint: 'Zalecany termin: przed początkiem tygodnia wizyty.',
      reminders_title: 'Co trzeba wysłać', reminders_subtitle: 'Nadchodzące wizyty czekające na S302 lub list', reminders_none: 'Wszystkie wizyty w porządku — nic pilnego.',
      reminders_s302_needed: 'Wyślij S302', reminders_letter_needed: 'Wyślij list', reminders_mark_s302: 'S302 wysłano', reminders_mark_letter: 'List wysłano',
      reminders_overdue: 'Zaległe', reminders_days_left: 'pozostało {days} dni', reminders_close: 'Zamknij', reminders_open_entry: 'Otwórz wpis',
      visit_type: 'Typ wizyty', visit_type_none: 'Nie wizyta', visit_type_congregation: 'Zbór', visit_type_group: 'Grupa', visit_type_pregroup: 'Pregrupa',
      contact_info: 'Kontakt odpowiedzialnego', contact_name: 'Imię', contact_phone: 'Telefon', contact_email: 'E-mail', contact_note: 'Notatka',
      countdown_today: 'Dzisiaj', countdown_future: 'Za {value} {label}', countdown_past: '{value} {label} temu', copied: 'Skopiowano', copy: 'Kopiuj',
      stats_title: 'Statystyka roku służbowego', stats_planned: 'Zaplanowanych wizyt', stats_done: 'Odbytych', unvisited_title: 'Brak zaplanowanej wizyty', unvisited_none: 'Wszystkie zbory mają zaplanowaną wizytę ✓',
      planner_nothing: 'Wybierz co najmniej jeden zbór', planner_no_free_weeks: 'Brak wolnych tygodni w wybranym okresie', planner_confirm: 'Utworzyć wizyty według planu', planner_created: 'Utworzono wizyt',
      conflict_warning: '⚠️ Na te daty zaplanowano już inną wizytę:', conflict_proceed: 'Zapisać mimo to?',
      next_visit: 'Następna wizyta', next_visit_none: 'Brak nadchodzących wizyt',
      compose_letter: 'Napisz list', share: 'Udostępnij', letter_subject: 'Wizyta nadzorcy obwodu', letter_body_greeting: 'Drodzy bracia!', letter_body_visit: 'Planowana jest wizyta', letter_body_closing: 'Z braterską miłością.',
      result_note: 'Wyniki wizyty (po odwiedzinach)', result_note_short: 'Wyniki wizyty', last_visit_result: 'Poprzednia wizyta',
      backup_prompt: 'Pobrać kopię zapasową teraz?', backup_never: 'Kopia zapasowa nie została jeszcze utworzona.', backup_overdue: 'Ostatnia kopia była {days} dni temu.',
      pin_on: 'PIN: wł', pin_off: 'PIN: wył', pin_set_prompt: 'Ustaw PIN (4–8 cyfr):', pin_format: 'PIN musi mieć 4–8 cyfr', pin_enabled: 'PIN włączony', pin_disabled: 'PIN wyłączony', pin_wrong: 'Błędny PIN', pin_enter_current: 'Podaj obecny PIN:', pin_disable_confirm: 'Wyłączyć PIN?',
      visits_schedule: 'Harmonogram wizyt (dla NO)'
    }
  };

  // --- Merged from the standalone "Visit Planner / Формуляр посещения" project ---
  // Minimal i18n shim satisfying visit-pdf.js's contract: t(key), lang, WEEKDAYS, MEETING_TYPES, MEAL_DAY_KEYS.
  // Strings copied verbatim from that project's own ru dictionary so the generated PDF matches exactly.
  const VP_I18N_DICTS = {
    ru: {
      visitTypeMeeting: 'Собрание', visitTypeGroup: 'Группа', visitTypePregroup: 'Предгруппа',
      meetingTypeMidweek: 'Встреча середины недели', meetingTypeWeekend: 'Встреча выходного дня', meetingTypeElders: 'Встреча старейшин', meetingTypeWithElders: 'Встреча со старейшинами', meetingTypePioneers: 'Встреча с пионерами', meetingTypeOther: 'Другое',
      meetingTypeLabel: 'Тип встречи', dayLabel: 'День недели', timeLabel: 'Время', placeLabel: 'Место проведения',
      weekdayMon: 'Понедельник', weekdayTue: 'Вторник', weekdayWed: 'Среда', weekdayThu: 'Четверг', weekdayFri: 'Пятница', weekdaySat: 'Суббота', weekdaySun: 'Воскресенье',
      serviceTableTime: 'Время', serviceTablePlace: 'Место проведения встречи', serviceTablePartner: 'С кем сотрудничаю', serviceTableKind: 'Вид служения',
      pastoralName: 'Имя', pastoralDay: 'День', pastoralTime: 'Время', pastoralReason: 'Причина пастырского посещения',
      mealDay: 'День', mealTime: 'Время', mealPlace: 'Место', mealHost: 'Кто принимает', mealPhone: 'Телефон', mealNote: 'Примечание',
      pdfPageForAlex: 'Формуляр для Алексея', pdfPageForLydia: 'Формуляр для Лидии', pdfVisitTypeLabel: 'Тип посещения:',
      pdfMeetingsSchedule: 'Расписание встреч', pdfServicePlan: 'План служения', pdfPastoralVisits: 'Пастырские посещения', pdfMeals: 'Обеды', pdfNotes: 'Дополнительные заметки',
      pdfManualLinesTitle: 'Для заметок вручную', pdfGeneratedOn: 'Документ сформирован',
    },
    uk: {
      visitTypeMeeting: 'Збори', visitTypeGroup: 'Група', visitTypePregroup: 'Передгрупа',
      meetingTypeMidweek: 'Зустріч серед тижня', meetingTypeWeekend: 'Зустріч на вихідних', meetingTypeElders: 'Зустріч старійшин', meetingTypeWithElders: 'Зустріч зі старійшинами', meetingTypePioneers: 'Зустріч з піонерами', meetingTypeOther: 'Інше',
      meetingTypeLabel: 'Тип зустрічі', dayLabel: 'День тижня', timeLabel: 'Час', placeLabel: 'Місце проведення',
      weekdayMon: 'Понеділок', weekdayTue: 'Вівторок', weekdayWed: 'Середа', weekdayThu: 'Четвер', weekdayFri: "П'ятниця", weekdaySat: 'Субота', weekdaySun: 'Неділя',
      serviceTableTime: 'Час', serviceTablePlace: 'Місце проведення зустрічі', serviceTablePartner: 'З ким співпрацюю', serviceTableKind: 'Вид служіння',
      pastoralName: "Ім'я", pastoralDay: 'День', pastoralTime: 'Час', pastoralReason: 'Причина пастирського відвідування',
      mealDay: 'День', mealTime: 'Час', mealPlace: 'Місце', mealHost: 'Хто приймає', mealPhone: 'Телефон', mealNote: 'Примітка',
      pdfPageForAlex: 'Формуляр для Олексія', pdfPageForLydia: 'Формуляр для Лідії', pdfVisitTypeLabel: 'Тип відвідування:',
      pdfMeetingsSchedule: 'Розклад зустрічей', pdfServicePlan: 'План служіння', pdfPastoralVisits: 'Пастирські відвідування', pdfMeals: 'Обіди', pdfNotes: 'Додаткові нотатки',
      pdfManualLinesTitle: 'Для нотаток вручну', pdfGeneratedOn: 'Документ сформовано',
    },
    en: {
      visitTypeMeeting: 'Congregation', visitTypeGroup: 'Group', visitTypePregroup: 'Pregroup',
      meetingTypeMidweek: 'Midweek meeting', meetingTypeWeekend: 'Weekend meeting', meetingTypeElders: "Elders' meeting", meetingTypeWithElders: 'Meeting with elders', meetingTypePioneers: 'Meeting with pioneers', meetingTypeOther: 'Other',
      meetingTypeLabel: 'Meeting type', dayLabel: 'Day of week', timeLabel: 'Time', placeLabel: 'Place',
      weekdayMon: 'Monday', weekdayTue: 'Tuesday', weekdayWed: 'Wednesday', weekdayThu: 'Thursday', weekdayFri: 'Friday', weekdaySat: 'Saturday', weekdaySun: 'Sunday',
      serviceTableTime: 'Time', serviceTablePlace: 'Meeting place', serviceTablePartner: 'Working with', serviceTableKind: 'Type of ministry',
      pastoralName: 'Name', pastoralDay: 'Day', pastoralTime: 'Time', pastoralReason: 'Reason for shepherding call',
      mealDay: 'Day', mealTime: 'Time', mealPlace: 'Place', mealHost: 'Host', mealPhone: 'Phone', mealNote: 'Note',
      pdfPageForAlex: "Alexei's form", pdfPageForLydia: "Lydia's form", pdfVisitTypeLabel: 'Visit type:',
      pdfMeetingsSchedule: 'Meeting schedule', pdfServicePlan: 'Field service plan', pdfPastoralVisits: 'Shepherding calls', pdfMeals: 'Meals', pdfNotes: 'Additional notes',
      pdfManualLinesTitle: 'For handwritten notes', pdfGeneratedOn: 'Document generated on',
    },
    pl: {
      visitTypeMeeting: 'Zbór', visitTypeGroup: 'Grupa', visitTypePregroup: 'Pregrupa',
      meetingTypeMidweek: 'Zebranie w tygodniu', meetingTypeWeekend: 'Zebranie weekendowe', meetingTypeElders: 'Zebranie starszych', meetingTypeWithElders: 'Spotkanie ze starszymi', meetingTypePioneers: 'Spotkanie z pionierami', meetingTypeOther: 'Inne',
      meetingTypeLabel: 'Rodzaj spotkania', dayLabel: 'Dzień tygodnia', timeLabel: 'Godzina', placeLabel: 'Miejsce',
      weekdayMon: 'Poniedziałek', weekdayTue: 'Wtorek', weekdayWed: 'Środa', weekdayThu: 'Czwartek', weekdayFri: 'Piątek', weekdaySat: 'Sobota', weekdaySun: 'Niedziela',
      serviceTableTime: 'Godzina', serviceTablePlace: 'Miejsce spotkania', serviceTablePartner: 'Współpracuję z', serviceTableKind: 'Rodzaj służby',
      pastoralName: 'Imię', pastoralDay: 'Dzień', pastoralTime: 'Godzina', pastoralReason: 'Powód odwiedzin pasterskich',
      mealDay: 'Dzień', mealTime: 'Godzina', mealPlace: 'Miejsce', mealHost: 'Kto przyjmuje', mealPhone: 'Telefon', mealNote: 'Uwaga',
      pdfPageForAlex: 'Formularz dla Aleksieja', pdfPageForLydia: 'Formularz dla Lidii', pdfVisitTypeLabel: 'Rodzaj odwiedzin:',
      pdfMeetingsSchedule: 'Harmonogram spotkań', pdfServicePlan: 'Plan służby', pdfPastoralVisits: 'Odwiedziny pasterskie', pdfMeals: 'Posiłki', pdfNotes: 'Dodatkowe uwagi',
      pdfManualLinesTitle: 'Na notatki odręczne', pdfGeneratedOn: 'Dokument utworzono',
    },
  };
  function buildVpI18n(lang) {
    const safeLang = VP_I18N_DICTS[lang] ? lang : 'ru';
    return {
      lang: safeLang,
      WEEKDAYS: ['weekdayMon','weekdayTue','weekdayWed','weekdayThu','weekdayFri','weekdaySat','weekdaySun'],
      MEETING_TYPES: ['meetingTypeMidweek','meetingTypeWeekend','meetingTypeElders','meetingTypeWithElders','meetingTypePioneers','meetingTypeOther'],
      MEAL_DAY_KEYS: ['weekdayWed','weekdayThu','weekdayFri','weekdaySat','weekdaySun'],
      dict: VP_I18N_DICTS[safeLang],
      t(key) { return this.dict[key] || key; },
    };
  }
  const VP_LANG_NAMES = { ru: 'Русский', uk: 'Українська', en: 'English', pl: 'Polski' };

  const DEFAULT_LETTER_TEMPLATE = `Час летить непомітно! Ми з дружиною дуже раді, що прийшов час відвідати ваш збір. Знову для нас велика радість провести з вами час протягом тижня служіння!

Візит відбудеться з {start_date} до {end_date}.

Цей тиждень дасть нам можливість служити один одному, щоб Єгова зміцнив нас (Ісаї 41:10).

Збір, безсумнівно, зрадіє, коли почує про це. Вже одразу ви можете заохочувати братів і сестер якомога активніше підтримувати тиждень служіння. Ви також можете нагадати вісникам про можливість служити в якості допоміжних піонерів з метою 15 або 30 годин в місяці візиту («Пасіть», розділ 15, абзац 1). Усіх, хто виконує будь-яку форму піонерського служіння в цьому місяці, сердечно запрошуємо на піонерську зустріч! Дорогі старійшини, ваші зусилля і підтримка на цьому тижні допоможуть нам усім отримати користь і найбільше заохочення.

Для нас завжди особлива радість, коли ми співпрацюємо з вами у проповідуванні, наприклад, громадських місцях (служіння зі стендом, служіння водіям-далекобійникам і т.д.). Ми також раді разом з вісниками відвідувати зацікавлених на повторних відвідинах та біблійні вивчення, на які нас вони запрошують. Можливо в зборі є діти чи підлітки, з якими вивчають Біблію — для нас буде велика честь, коли нас на такі вивчення запрошують. Якщо хтось хоче приєднатися до нас у служінні, але не має повторних відвідин або біблійних вивчень, він також може записатися на служіння разом з нами. В такому випадку ми ходимо разом з групою і можемо розділити з ним нашу радість в служінні.`;

  const DEFAULT_MEMO_TEMPLATE = `• Будь ласка, ознайомтесь з актуальною формою S-61 (видання 12/25) і заповніть сторінку 2 цієї форми і вишліть його мені. Думки з книги «Пасіть», розділ 10, абзаци 1-5 також допоможуть вам у підготовці до тижня візита
• Зустріч з призначеними братами плануйте на вечір п'ятниці.
• Заплануйте 2-3 пастирських візита і, по можливості, не відразу після зустріч для служіння. Будь ласка, залиште ранок четверга вільним.
‣ Я буду радий відвідати молодих вісників; піонерів; літніх братів чи сестер, які відвідують зібрання лише по телефону або через ZOOM; старійшин, служителів збору та їхні сім'ї і, звичайно, тих, кого ви, як старійшини, вважаєте за потрібне відвідати (за бажанням, ви також можете запланувати «проблемні» візити).
• Зустрічі для проповідницького служіння (ви можете організувати доступ через ZOOM):
‣ Організуйте зустрічі для служіння згідно плану для служіння, який я вам висилаю. Час для служіння ви можете вибрати у відповідному полі формуляра
‣ Виберіть час і місце для зустрічі який буде найліпше пасувати для вісників
‣ Враховуйте так же потреби території, коли ви будете вибирати час і місце для зустрічей для служіння. Найліпше буде той час, коли буде більше можливостей зустріти людей на території
‣ Також плануйте зустріч для служіння в неділю до або після зібрання (можемо вирішити під час зустрічі у вівторок)
‣ Якщо ви вважаєте, що це необхідно, ви, як рада старійшин, можете запланувати додаткову зустріч для проповідницького служіння на ранок четверга. Цю зустріч може проводити один з призначених братів
• Зустріч з піонерами плануйте в середу ввечері або в суботу, але не одразу після зустрічі для проповідування (старші, хворі або немічні піонери можуть відвідати цю зустріч через ZOOM) — наприклад, з піонерами о 14:00, а для служіння о 15:15 чи 15:30 (це про суботу)
• Теми промов:
‣ У вівторок тема службової промови: „Що ти зробиш «задля доброї новини»?" (Пісня 82).
‣ Тема публічної промови „Як вам «пожати... вічне життя»?“ (Пісня 147)
‣ Службова промова на вихідних «Нехай ваші серця не тривожаться» (Пісня 156).

Коли я перевірятиму документи у вівторок у другій половині дня, мені знадобляться наступне:
• Заповнений бланк S-61 та зазначені в ньому документи або папки, а також протокол зустрічі старійшин з пунктом про обговорення останнього звіту районного наглядача.
• Якщо це можливо, ви можете надіслати мені частину даних в електронному вигляді заздалегідь. Все інше, що неможливо надіслати мені в електронному вигляді (наприклад, папки і т.д.), будь ласка, підготуйте для мене в місці нічлігу.
• У вівторок ввечері перед зустріччю я хотів би зустрітися з одним із старійшин збору, з координатором ради старійшин, чи з іншим старійшиною. Ми можемо домовитися про час і місце зустрічі перед початком візиту.`;

  function vpEscapeForHtml(s) { return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;'); }
  const DEFAULT_LETTER_TEMPLATE_HTML = DEFAULT_LETTER_TEMPLATE.split(/\n{2,}/).map((p) => `<div>${vpEscapeForHtml(p.trim())}</div>`).join('');

  const DEFAULT_EMAIL_BODY_TEMPLATES = {
    Congregation: 'Здравствуйте! Направляю письмо перед визитом к собранию {congregation} ({start_date} — {end_date}), см. вложение.',
    Group: 'Здравствуйте! Направляю письмо перед визитом к группе {congregation} ({start_date} — {end_date}), см. вложение.',
    Pregroup: 'Здравствуйте! Направляю письмо перед визитом к предгруппе {congregation} ({start_date} — {end_date}), см. вложение.',
  };

  const App = {
    config: {
      // Single source of truth for the displayed/stored app version — bump this on
      // every meaningful update so the version badge always reflects what's actually live.
      version: '9.34.0',
      // NOTE: do NOT change this to match the app version — it is the localStorage key.
      // Changing it will make existing users lose all their saved data on next load.
      storageKey: 'service-year-planner-v9-4-2',
      serviceYearStartMonth: 8,
      navItems: [
        { id: 'calendar', icon: '📆', tKey: 'nav_calendar' },
        { id: 'events', icon: '🎯', tKey: 'nav_events' },
        { id: 'settings', icon: '⚙️', tKey: 'nav_settings' }
      ],
      layoutPresets: [
        { value: 'classic', label: '1. Classic' }, { value: 'compact', label: '2. Compact' }, { value: 'spacious', label: '3. Spacious' },
        { value: 'cards', label: '4. Cards' }, { value: 'minimal', label: '5. Minimal' }
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
      calendarSelectedDateIso: null,
      eventSearch: '',
      eventColorFilter: 'all'
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
        // Plain 'YYYY-MM-DD' strings must be parsed as LOCAL dates: `new Date(str)` treats
        // them as UTC midnight, which shifts the day backwards in negative-UTC timezones.
        const d = (typeof date === 'string' && /^\d{4}-\d{2}-\d{2}$/.test(date)) ? this.parseLocalDate(date) : new Date(date);
        if (!d || Number.isNaN(d.getTime())) return ''; const y = d.getFullYear(); const m = String(d.getMonth() + 1).padStart(2,'0'); const day = String(d.getDate()).padStart(2,'0'); return `${y}-${m}-${day}`;
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
      getServiceYearForDate(date) { const d = (typeof date === 'string' && /^\d{4}-\d{2}-\d{2}$/.test(date)) ? this.parseLocalDate(date) : new Date(date); return d.getMonth() >= App.config.serviceYearStartMonth ? d.getFullYear() : d.getFullYear() - 1; },
      haversineKm(lat1, lng1, lat2, lng2) {
        if ([lat1, lng1, lat2, lng2].some((v) => typeof v !== 'number' || Number.isNaN(v))) return null;
        const R = 6371;
        const toRad = (v) => (v * Math.PI) / 180;
        const dLat = toRad(lat2 - lat1), dLng = toRad(lng2 - lng1);
        const a = Math.sin(dLat / 2) ** 2 + Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * Math.sin(dLng / 2) ** 2;
        return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
      },
      async geocodeAddress(address) {
        if (!address || !address.trim()) return null;
        try {
          const res = await fetch(`https://nominatim.openstreetmap.org/search?format=json&limit=1&q=${encodeURIComponent(address)}`);
          if (!res.ok) return null;
          const data = await res.json();
          if (data && data[0]) return { lat: parseFloat(data[0].lat), lng: parseFloat(data[0].lon), displayName: data[0].display_name };
        } catch (err) { console.error('Geocoding failed', err); }
        return null;
      },
      easterDate(year) {
        // Anonymous Gregorian computus
        const a = year % 19, b = Math.floor(year / 100), c = year % 100, d = Math.floor(b / 4), e = b % 4, f = Math.floor((b + 8) / 25), g = Math.floor((b - f + 1) / 3), h = (19 * a + b - d - g + 15) % 30, i = Math.floor(c / 4), k = c % 4, l = (32 + 2 * e + 2 * i - h - k) % 7, m = Math.floor((a + 11 * h + 22 * l) / 451), month = Math.floor((h + l - 7 * m + 114) / 31) - 1, day = ((h + l - 7 * m + 114) % 31) + 1;
        return new Date(year, month, day);
      },
      holidaysForYear(year) {
        const iso = (d) => this.iso(d);
        const easter = this.easterDate(year);
        const off = (days) => { const d = new Date(easter); d.setDate(d.getDate() + days); return d; };
        const map = {};
        const add = (dateIso, name) => { (map[dateIso] = map[dateIso] || []).push(name); };
        add(`${year}-01-01`, 'Новый год (CZ/AT/DE)');
        add(`${year}-05-01`, 'День труда (CZ/AT/DE)');
        add(`${year}-12-24`, 'Сочельник (CZ/DE частично)');
        add(`${year}-12-25`, 'Рождество (CZ/AT/DE)');
        add(`${year}-12-26`, '2-й день Рождества (CZ/AT/DE)');
        add(`${year}-05-08`, 'День победы (CZ)'); add(`${year}-07-05`, 'Кирилл и Мефодий (CZ)'); add(`${year}-07-06`, 'Ян Гус (CZ)'); add(`${year}-09-28`, 'День государственности (CZ)'); add(`${year}-10-28`, 'День независимости (CZ)'); add(`${year}-11-17`, 'День свободы (CZ)');
        add(`${year}-01-06`, 'Богоявление (AT)'); add(`${year}-08-15`, 'Успение (AT)'); add(`${year}-10-26`, 'Нацпраздник (AT)'); add(`${year}-11-01`, 'Все святые (AT)'); add(`${year}-12-08`, 'Непорочное зачатие (AT)');
        add(`${year}-10-03`, 'День единства (DE)');
        add(iso(off(-2)), 'Страстная пятница (CZ/DE)');
        add(iso(off(1)), 'Пасхальный понедельник (CZ/AT/DE)');
        add(iso(off(39)), 'Вознесение (AT/DE)');
        add(iso(off(50)), 'Духов понедельник (AT/DE)');
        add(iso(off(60)), 'Тело Христово (AT/DE частично)');
        return map;
      },
      holidaysCache: {},
      getHolidayNames(dateIso) {
        if (!App.state.app?.settings?.showHolidays) return null;
        const year = Number(String(dateIso).slice(0, 4));
        if (!this.holidaysCache[year]) this.holidaysCache[year] = this.holidaysForYear(year);
        return this.holidaysCache[year][dateIso] || null;
      },
      serviceYearLabel(year) { return `${year}/${year + 1}`; },
      serviceYearBounds(year) { return { start: new Date(year, App.config.serviceYearStartMonth, 1), end: new Date(year + 1, App.config.serviceYearStartMonth, 0) }; },
      clampColor(color, fallback = '#1f7a45') { return /^#[0-9a-f]{6}$/i.test(String(color || '')) ? color : fallback; },

      colorName(color) {
        const names = {
          '#1f7a45': { ru:'Зелёный', en:'Green', uk:'Зелений', pl:'Zielony' },
          '#2563eb': { ru:'Синий', en:'Blue', uk:'Синій', pl:'Niebieski' },
          '#1976d2': { ru:'Голубой', en:'Sky blue', uk:'Блакитний', pl:'Błękitny' },
          '#d32f2f': { ru:'Красный', en:'Red', uk:'Червоний', pl:'Czerwony' },
          '#e53935': { ru:'Алый', en:'Scarlet', uk:'Яскраво-червоний', pl:'Szkarłatny' },
          '#0097a7': { ru:'Бирюзовый', en:'Turquoise', uk:'Бірюзовий', pl:'Turkusowy' },
          '#ef6c00': { ru:'Оранжевый', en:'Orange', uk:'Помаранчевий', pl:'Pomarańczowy' },
          '#7b1fa2': { ru:'Фиолетовый', en:'Purple', uk:'Фіолетовий', pl:'Fioletowy' },
          '#5d4037': { ru:'Коричневый', en:'Brown', uk:'Коричневий', pl:'Brązowy' },
          '#00897b': { ru:'Тёмно-бирюзовый', en:'Teal', uk:'Темно-бірюзовий', pl:'Morski' },
          '#6d4c41': { ru:'Кофейный', en:'Coffee', uk:'Кавовий', pl:'Kawowy' },
          '#546e7a': { ru:'Серо-синий', en:'Blue gray', uk:'Сіро-синій', pl:'Niebieskoszary' },
          '#3949ab': { ru:'Индиго', en:'Indigo', uk:'Індиго', pl:'Indygo' },
          '#8e24aa': { ru:'Пурпурный', en:'Violet', uk:'Пурпуровий', pl:'Purpurowy' },
          '#f4511e': { ru:'Рыжий', en:'Deep orange', uk:'Рудий', pl:'Rudy' },
          '#43a047': { ru:'Светло-зелёный', en:'Light green', uk:'Світло-зелений', pl:'Jasnozielony' }
        };
        const key = String(color || '').toLowerCase();
        const lang = this.lang();
        return names[key]?.[lang] || names[key]?.ru || this.t('color');
      },
      colorOptionsHtml(selectedColor = '') {
        const colors = ['#1f7a45','#2563eb','#1976d2','#d32f2f','#e53935','#0097a7','#ef6c00','#7b1fa2','#5d4037','#00897b','#6d4c41','#546e7a','#3949ab','#8e24aa','#f4511e','#43a047'];
        const icons = { '#1f7a45':'🟢', '#2563eb':'🔵', '#1976d2':'🔷', '#d32f2f':'🔴', '#e53935':'🔴', '#0097a7':'🔹', '#ef6c00':'🟠', '#7b1fa2':'🟣', '#5d4037':'🟤', '#00897b':'🟦', '#6d4c41':'🟫', '#546e7a':'⚫', '#3949ab':'🔵', '#8e24aa':'🟣', '#f4511e':'🟠', '#43a047':'🟢' };
        const selected = String(selectedColor || '').toLowerCase();
        return colors.map((color) => `<option value="${color}" ${selected === color ? 'selected' : ''}>${icons[color]} ${this.escapeHtml(this.colorName(color))}</option>`).join('');
      },
      slug(value) { return String(value || '').toLowerCase().trim().replace(/\s+/g,'-').replace(/[^a-z0-9\-а-яёіїєґ]/gi,''); },
      escapeHtml(str) { return String(str ?? '').replace(/[&<>"']/g, (s) => ({ '&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;' }[s])); },
      escapeAttr(str) { return App.utils.escapeHtml(str); },
      prettyDate(date) { const d = new Date(date); if (Number.isNaN(d.getTime())) return '—'; return d.toLocaleDateString(this.lang(), { day:'2-digit', month:'short' }); },
      prettyDateLong(date) { const d = new Date(date); if (Number.isNaN(d.getTime())) return '—'; return d.toLocaleDateString(this.lang(), { day:'2-digit', month:'long', year:'numeric' }); },
      countdownText(dateIso, unit = 'days') {
        const target = this.parseLocalDate(dateIso); if (!target) return '—';
        const now = new Date();
        const targetStart = new Date(target.getFullYear(), target.getMonth(), target.getDate());
        const todayStart = new Date(now.getFullYear(), now.getMonth(), now.getDate());
        const diffDays = Math.round((targetStart - todayStart) / 86400000);
        const diffMs = target.getTime() - now.getTime();
        if (diffDays === 0) return App.utils.t('countdown_today');
        const past = diffDays < 0;
        const absDays = Math.abs(diffDays);
        let value; let label;
        if (unit === 'hours') { value = Math.round(Math.abs(diffMs) / 3600000); label = App.utils.pluralUnit(value, 'hour'); }
        else if (unit === 'weeks') { value = Math.round(absDays / 7); label = App.utils.pluralUnit(value, 'week'); }
        else if (unit === 'months') { value = Math.round(absDays / 30.44); label = App.utils.pluralUnit(value, 'month'); }
        else { value = absDays; label = App.utils.pluralUnit(value, 'day'); }
        return past ? App.utils.t('countdown_past', { value, label }) : App.utils.t('countdown_future', { value, label });
      },
      pluralUnit(value, kind) {
        const lang = this.lang();
        if (lang === 'ru' || lang === 'uk') {
          const n = Math.abs(value) % 100; const n1 = n % 10;
          const forms = { day: ['день','дня','дней'], week: ['неделя','недели','недель'], month: ['месяц','месяца','месяцев'], hour: ['час','часа','часов'] }[kind] || ['','',''];
          if (n > 10 && n < 20) return forms[2];
          if (n1 === 1) return forms[0];
          if (n1 >= 2 && n1 <= 4) return forms[1];
          return forms[2];
        }
        const forms = { day: ['day','days'], week: ['week','weeks'], month: ['month','months'], hour: ['hour','hours'] }[kind] || ['',''];
        return value === 1 ? forms[0] : forms[1];
      },
      uniqueBy(items, makeKey) { const seen = new Set(); const out = []; items.forEach((item) => { const key = makeKey(item); if (seen.has(key)) return; seen.add(key); out.push(item); }); return out; },
      downloadText(filename, text, mime = 'text/plain;charset=utf-8') {
        const blob = new Blob([text], { type: mime }); const url = URL.createObjectURL(blob); const a = document.createElement('a'); a.href = url; a.download = filename; document.body.appendChild(a); a.click(); a.remove(); setTimeout(() => URL.revokeObjectURL(url), 2000);
      },
      downloadBlob(blob, filename) {
        const url = URL.createObjectURL(blob); const a = document.createElement('a'); a.href = url; a.download = filename; document.body.appendChild(a); a.click(); a.remove(); setTimeout(() => URL.revokeObjectURL(url), 2000);
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
        const out = { ...settings }; if (typeof out.showTeamPanel !== 'boolean') out.showTeamPanel = true; if (typeof out.showHolidays !== 'boolean') out.showHolidays = true; if (!out.language) out.language = 'ru'; if (!out.theme) out.theme = 'light'; if (!out.layoutPreset || !['classic','compact','spacious','cards','minimal'].includes(out.layoutPreset)) out.layoutPreset = 'classic'; if (!out.calendarView) out.calendarView = 'month'; if (!out.accentColor) out.accentColor = 'green'; if (!out.fontSize) out.fontSize = '100'; if (typeof out.letterTemplate !== 'string' || !out.letterTemplate) out.letterTemplate = DEFAULT_LETTER_TEMPLATE_HTML;
        ['Congregation','Group','Pregroup'].forEach((suffix) => {
          const key = 'letterTemplate' + suffix;
          if (typeof out[key] !== 'string' || !out[key]) out[key] = out.letterTemplate || DEFAULT_LETTER_TEMPLATE_HTML;
        });
        if (!out.letterPages || typeof out.letterPages !== 'object') out.letterPages = {};
        {
          const memoHtml = (out.memoTemplate || DEFAULT_MEMO_TEMPLATE).split('\n').map((line) => `<div>${vpEscapeForHtml(line)}</div>`).join('');
          const defaultPage = { id: 'p1', title: 'ПАМ\u2019ЯТКА ДЛЯ КООРДИНАТОРА РАДИ СТАРІЙШИН', html: memoHtml };
          ['Congregation','Group','Pregroup'].forEach((suffix) => {
            if (!Array.isArray(out.letterPages[suffix])) out.letterPages[suffix] = [JSON.parse(JSON.stringify(defaultPage))];
          });
        }
        if (typeof out.memoTemplate !== 'string' || !out.memoTemplate) out.memoTemplate = DEFAULT_MEMO_TEMPLATE; if (typeof out.senderName !== 'string') out.senderName = ''; if (typeof out.senderAddress !== 'string') out.senderAddress = ''; if (typeof out.senderPhone !== 'string') out.senderPhone = ''; if (typeof out.senderEmail !== 'string') out.senderEmail = ''; if (!out.emailMethod || !['mailto','owa'].includes(out.emailMethod)) out.emailMethod = 'mailto'; if (typeof out.owaUrl !== 'string' || !out.owaUrl) out.owaUrl = 'https://outlook.office.com/mail/deeplink/compose'; if (typeof out.homeAddress !== 'string') out.homeAddress = 'Praha, Česká republika'; if (typeof out.homeLat !== 'number') out.homeLat = null; if (typeof out.homeLng !== 'number') out.homeLng = null;
        ['Congregation','Group','Pregroup'].forEach((suffix) => { const key = 'emailBody' + suffix; if (typeof out[key] !== 'string' || !out[key]) out[key] = DEFAULT_EMAIL_BODY_TEMPLATES[suffix]; });
        return out;
      },
      createDefaultData() {
        return { settings: this.ensureSettingsDefaults({}), serviceYears: {}, events: [{ id:'evt_midweek', name:'Серединное собрание', color:'#1f7a45', address:'', schedule:'Ср 19:00' }, { id:'evt_weekend', name:'Выходное служение', color:'#2563eb', address:'', schedule:'Сб 10:00' }], entries: [], meta: { version: App.config.version } };
      },
      convertLegacyBackup(legacy) {
        const app = this.createDefaultData(); app.events = []; app.meta = { version: App.config.version, importedFrom: legacy.schema || 'legacy' }; app.settings = this.ensureSettingsDefaults({});
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
            app.entries.push({ id: App.utils.uid('entry'), eventId, start, end, title: row.m || 'Собрание', note: row.nt || '', flags: { f302: !!row.f302, letter: !!row.letter }, source: 'legacy' });
            if (!app.serviceYears[serviceYear].weeks[weekId]) app.serviceYears[serviceYear].weeks[weekId] = { id: weekId, weekId, start, end, eventId, priority: row.f302 || row.letter ? 'important' : 'normal', flagLetter: !!row.letter, flagS302: !!row.f302, note: row.nt || '' };
          });
        });
        if (!app.events.length) app.events.push({ id:'evt_generic', name:'Импортированное собрание', color:'#1f7a45', address:'', schedule:'' });
        return app;
      },
      normalizeApp(appData) {
        const app = appData && typeof appData === 'object' ? appData : this.createDefaultData();
        app.settings = this.ensureSettingsDefaults(app.settings || {}); if (!Array.isArray(app.events)) app.events = []; if (!Array.isArray(app.entries)) app.entries = []; if (!app.serviceYears || typeof app.serviceYears !== 'object') app.serviceYears = {}; if (!app.meta || typeof app.meta !== 'object') app.meta = { version: App.config.version };
        app.events = App.utils.uniqueBy(app.events.map((item) => ({ id: item.id || App.utils.uid('evt'), name: item.name || 'Без названия', color: App.utils.clampColor(item.color), address: item.address || '', schedule: item.schedule || '', visitType: item.visitType || '', contactName: item.contactName || '', contactPhone: item.contactPhone || '', contactEmail: item.contactEmail || '', contactNote: item.contactNote || '', congNumber: item.congNumber || '', lat: typeof item.lat === 'number' ? item.lat : null, lng: typeof item.lng === 'number' ? item.lng : null, formLanguage: item.formLanguage || '' })), (item) => item.id);
        app.entries = App.utils.uniqueBy(app.entries.filter((item) => item && item.start && item.end).map((item) => ({ id: item.id || App.utils.uid('entry'), eventId: item.eventId || '', start: App.utils.iso(item.start), end: App.utils.iso(item.end), title: item.title || '', note: item.note || '', resultNote: item.resultNote || '', emailBody: item.emailBody || '', visitForm: item.visitForm || null, flags: { f302: !!item?.flags?.f302, letter: !!item?.flags?.letter }, source: item.source || 'entry' })), (item) => item.id);
        Object.keys(app.serviceYears).forEach((year) => {
          const sy = app.serviceYears[year] || {}; if (!sy.weeks || typeof sy.weeks !== 'object') sy.weeks = {};
          Object.keys(sy.weeks).forEach((weekId) => { const w = sy.weeks[weekId]; if (!w) return; const start = App.utils.iso(w.start || weekId); const end = App.utils.iso(w.end || App.utils.addDays(App.utils.parseLocalDate(start), 6)); sy.weeks[weekId] = { id: w.id || weekId, weekId, start, end, eventId: w.eventId || '', priority: w.priority || 'normal', flagLetter: !!w.flagLetter, flagS302: !!w.flagS302, note: w.note || '' }; });
          app.serviceYears[year] = sy;
        });
        app.meta.version = App.config.version;
        return app;
      },
      migrate(appData) { return this.normalizeApp(appData && appData.schema === 'sp-backup-v2' ? this.convertLegacyBackup(appData) : appData); },
      load() { try { const saved = localStorage.getItem(App.config.storageKey); App.state.app = saved ? this.migrate(JSON.parse(saved)) : this.createDefaultData(); } catch (error) { console.error('Storage load failed', error); App.state.app = this.createDefaultData(); App.utils.toast('Storage reset.'); } },
      save() {
        try {
          localStorage.setItem(App.config.storageKey, JSON.stringify(App.state.app));
        } catch (error) {
          console.error('Storage save failed', error);
          App.utils.toast('Ошибка сохранения! Возможно, хранилище переполнено. Сделайте backup.');
        }
      }
    },

    data: {
      ensureServiceYear(year) { if (!App.state.app.serviceYears[year]) App.state.app.serviceYears[year] = { weeks: {} }; return App.state.app.serviceYears[year]; },
      getEventById(id) { return App.state.app.events.find((item) => item.id === id) || null; },
      getServiceYearStats(sy) {
        const syStart = new Date(sy, App.config.serviceYearStartMonth, 1);
        const syEnd = new Date(sy + 1, App.config.serviceYearStartMonth, 0);
        const today = new Date(); today.setHours(0,0,0,0);
        const visitEvents = (App.state.app.events || []).filter((e) => e.visitType);
        const entriesInYear = (App.state.app.entries || []).filter((entry) => {
          const es = App.utils.parseLocalDate(entry.start), ee = App.utils.parseLocalDate(entry.end);
          return es && ee && App.utils.overlaps(es, ee, syStart, syEnd);
        });
        const visitEntries = entriesInYear.filter((entry) => { const ev = this.getEventById(entry.eventId); return ev?.visitType; });
        const done = visitEntries.filter((entry) => App.utils.parseLocalDate(entry.end) < today);
        const s302Sent = visitEntries.filter((e) => e.flags?.f302).length;
        const letterSent = visitEntries.filter((e) => e.flags?.letter).length;
        const visitedEventIds = new Set(visitEntries.map((e) => e.eventId));
        const unvisited = visitEvents.filter((ev) => !visitedEventIds.has(ev.id));
        return { syStart, syEnd, visitEvents, visitEntries, planned: visitEntries.length, done: done.length, s302Sent, letterSent, unvisited };
      },
      getUpcomingReminders() {
        const today = new Date(); today.setHours(0, 0, 0, 0);
        const items = [];
        (App.state.app.entries || []).forEach((entry) => {
          const event = this.getEventById(entry.eventId);
          const visitType = event?.visitType || '';
          if (!visitType) return; // reminders only apply to congregation/group/pregroup visits
          const start = App.utils.parseLocalDate(entry.start);
          if (!start) return;
          const daysUntil = Math.round((start - today) / 86400000);
          if (daysUntil < -3) return; // visit already passed a few days ago — stop nagging
          const needsS302 = !entry?.flags?.f302;
          const needsLetter = !entry?.flags?.letter && daysUntil <= 60;
          if (!needsS302 && !needsLetter) return;
          items.push({ id: entry.id, title: entry.title || event?.name || App.utils.t('event'), start: entry.start, end: entry.end, daysUntil, needsS302, needsLetter, visitType });
        });
        return items.sort((a, b) => a.daysUntil - b.daysUntil);
      },
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
            if (!week.eventId) return; const start = App.utils.parseLocalDate(week.start); const end = App.utils.parseLocalDate(week.end); if (!start || !end) return; if (!App.utils.overlaps(start, end, viewStart, viewEnd)) return; const event = this.getEventById(week.eventId); items.push({ id:`week:${week.weekId}`, source:'week', start, end, eventId: week.eventId, title: event?.name || App.utils.t('event'), color: event?.color || '#1f7a45', note: week.note || '', flags: { f302: !!week.flagS302, letter: !!week.flagLetter }, refId: week.weekId });
          });
        });
        App.state.app.entries.forEach((entry) => {
          const start = App.utils.parseLocalDate(entry.start); const end = App.utils.parseLocalDate(entry.end); if (!start || !end) return; if (!App.utils.overlaps(start, end, viewStart, viewEnd)) return; const event = this.getEventById(entry.eventId); items.push({ id:`entry:${entry.id}`, source:'entry', start, end, eventId: entry.eventId, title: entry.title || event?.name || App.utils.t('event'), color: event?.color || '#1f7a45', note: entry.note || '', flags: { f302: !!entry?.flags?.f302, letter: !!entry?.flags?.letter }, refId: entry.id });
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
          const entry = App.state.app.entries.find((item) => item.id === refId); if (!entry) return null; const event = this.getEventById(entry.eventId); return { id: itemId, source: 'entry', refId, eventId: entry.eventId, title: entry.title || event?.name || App.utils.t('event'), note: entry.note || '', resultNote: entry.resultNote || '', flags: { f302: !!entry?.flags?.f302, letter: !!entry?.flags?.letter }, start: entry.start, end: entry.end };
        }
        if (source === 'week') {
          let found = null;
          Object.values(App.state.app.serviceYears).forEach((sy) => { if (sy.weeks && sy.weeks[refId]) found = sy.weeks[refId]; });
          if (!found) return null; const event = this.getEventById(found.eventId); return { id: itemId, source: 'week', refId, eventId: found.eventId, title: event?.name || App.utils.t('event'), note: found.note || '', flags: { f302: !!found.flagS302, letter: !!found.flagLetter }, start: found.start, end: found.end };
        }
        return null;
      }
    },

    actions: {
      resetEventForm() {
        App.state.editingEventId = null;
        if (App.els.eventNameInput) App.els.eventNameInput.value = '';
        if (App.els.eventColorInput) {
          App.els.eventColorInput.innerHTML = App.utils.colorOptionsHtml('#1f7a45');
          App.els.eventColorInput.value = '#1f7a45';
          if (!App.els.eventColorInput.value) App.els.eventColorInput.selectedIndex = 0;
        }
        if (App.els.eventAddressInput) App.els.eventAddressInput.value = '';
        if (App.els.eventScheduleInput) App.els.eventScheduleInput.value = '';
        if (App.els.eventVisitTypeInput) App.els.eventVisitTypeInput.value = '';
        App.ui.syncEventVisitFieldsVisibility();
        if (App.els.eventContactNameInput) App.els.eventContactNameInput.value = '';
        if (App.els.eventContactPhoneInput) App.els.eventContactPhoneInput.value = '';
        if (App.els.eventContactEmailInput) App.els.eventContactEmailInput.value = '';
        if (App.els.eventContactNoteInput) App.els.eventContactNoteInput.value = '';
        if (App.els.eventCongNumberInput) App.els.eventCongNumberInput.value = '';
        App.state.editingEventCoords = null;
        if (App.els.eventDistanceStatus) App.els.eventDistanceStatus.textContent = '';
        if (App.els.eventFormLanguageSelect) App.els.eventFormLanguageSelect.value = '';
        if (App.els.deleteEventBtn) App.els.deleteEventBtn.hidden = true;
      },
      saveEventTemplate() {
        try {
          const name = App.els.eventNameInput?.value.trim(); if (!name) return App.utils.toast(App.utils.t('enter_event_name'));
          const payload = { id: App.state.editingEventId || App.utils.uid('evt'), name, color: App.utils.clampColor(App.els.eventColorInput?.value), address: App.els.eventAddressInput?.value.trim() || '', schedule: App.els.eventScheduleInput?.value.trim() || '', visitType: App.els.eventVisitTypeInput?.value || '', contactName: App.els.eventContactNameInput?.value.trim() || '', contactPhone: App.els.eventContactPhoneInput?.value.trim() || '', contactEmail: App.els.eventContactEmailInput?.value.trim() || '', contactNote: App.els.eventContactNoteInput?.value.trim() || '', congNumber: App.els.eventCongNumberInput?.value.trim() || '', lat: App.state.editingEventCoords?.lat ?? null, lng: App.state.editingEventCoords?.lng ?? null, formLanguage: App.els.eventFormLanguageSelect?.value || '' };
          const index = App.state.app.events.findIndex((event) => event.id === payload.id); if (index >= 0) App.state.app.events[index] = payload; else App.state.app.events.push(payload);
          // Dedup by id only — a content-based key here previously risked collapsing two
          // distinct events that happened to share name/color/address/schedule.
          App.state.app.events = App.utils.uniqueBy(App.state.app.events, (item) => item.id);
          App.store.save(); this.resetEventForm(); App.ui.renderAll(); App.utils.toast(App.utils.t('event_template_saved'));
          App.ui.closeModal(App.els.eventEditorModal);
        } catch (err) {
          console.error('saveEventTemplate failed:', err);
          App.utils.toast(`Ошибка сохранения: ${err?.message || err}`);
        }
      },
      deleteAllEventTemplates() {
        const total = App.state.app.events.length;
        if (!total) return;
        if (!window.confirm(App.utils.t('delete_all_events_confirm'))) return;
        App.state.app.events = [];
        App.state.app.entries = [];
        Object.values(App.state.app.serviceYears || {}).forEach((sy) => {
          Object.values(sy.weeks || {}).forEach((week) => { week.eventId = ''; });
        });
        App.state.editingEventId = null;
        App.state.calendarEventFilter = 'all';
        App.state.eventSearch = '';
        App.state.eventColorFilter = 'all';
        App.actions.resetEventForm();
        App.store.save();
        App.ui.renderAll();
        App.utils.toast(App.utils.t('delete_all_events_done'));
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
        App.ui.closeModal(App.els.eventEditorModal);
        App.utils.toast(App.utils.t('delete_template'));
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
        const resultNote = App.els.editorResultInput?.value.trim() || '';
        const flagsInput = { f302: !!App.els.editorFlagS302?.checked, letter: !!App.els.editorFlagLetter?.checked };
        if (!eventId || !start || !end) return App.utils.toast(App.utils.t('choose_template_dates')); if (start > end) return App.utils.toast(App.utils.t('wrong_end_date'));
        const event = App.data.getEventById(eventId);
        const target = App.state.calendarEditingTarget || { mode: 'create', source: 'entry', refId: null };
        // Conflict detector: warn when another visit-type entry overlaps these dates.
        if (event?.visitType) {
          const ns = App.utils.parseLocalDate(start), ne = App.utils.parseLocalDate(end);
          const conflict = (App.state.app.entries || []).find((other) => {
            if (target.mode === 'edit' && target.source === 'entry' && other.id === target.refId) return false;
            const oe = App.data.getEventById(other.eventId); if (!oe?.visitType) return false;
            const os = App.utils.parseLocalDate(other.start), oed = App.utils.parseLocalDate(other.end);
            return os && oed && App.utils.overlaps(ns, ne, os, oed);
          });
          if (conflict) {
            const cTitle = conflict.title || App.data.getEventById(conflict.eventId)?.name || '';
            if (!window.confirm(`${App.utils.t('conflict_warning')}\n\n${cTitle}: ${App.utils.prettyDate(conflict.start)} — ${App.utils.prettyDate(conflict.end)}\n\n${App.utils.t('conflict_proceed')}`)) return;
          }
        }
        if (target.mode === 'edit' && target.source === 'entry') {
          const entry = App.state.app.entries.find((item) => item.id === target.refId); if (entry) { entry.eventId = eventId; entry.start = start; entry.end = end; entry.title = event?.name || App.utils.t('event'); entry.note = note; entry.flags = flagsInput; entry.resultNote = resultNote; }
        } else if (target.mode === 'edit' && target.source === 'week') {
          let week = null; Object.values(App.state.app.serviceYears).forEach((sy) => { if (sy.weeks && sy.weeks[target.refId]) week = sy.weeks[target.refId]; }); if (week) { week.eventId = eventId; week.start = start; week.end = end; week.note = note; }
        } else {
          App.state.app.entries.push({ id: App.utils.uid('entry'), eventId, start, end, title: event?.name || App.utils.t('event'), note, flags: flagsInput, resultNote, source: 'entry' });
        }
        App.state.app.entries = App.utils.uniqueBy(App.state.app.entries, (item) => item.id);
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
      toggleWeekSentFlag(year, weekId, flagName, checked) {
        const week = App.state.app.serviceYears?.[year]?.weeks?.[weekId];
        if (!week) return;
        if (flagName === 's302') week.flagS302 = !!checked;
        if (flagName === 'letter') week.flagLetter = !!checked;
        App.store.save();
        App.ui.renderCalendar();
      },
      toggleEntrySentFlag(entryId, flagName, checked) {
        const entry = App.state.app.entries.find((item) => item.id === entryId);
        if (!entry) return;
        if (!entry.flags) entry.flags = { f302: false, letter: false };
        if (flagName === 's302') entry.flags.f302 = !!checked;
        if (flagName === 'letter') entry.flags.letter = !!checked;
        App.store.save();
        App.ui.renderCalendar();
      },
      exportSyncFile() {
        const now = new Date().toISOString();
        App.state.app.meta = App.state.app.meta || {};
        App.state.app.meta.lastSyncExportAt = now;
        App.state.app.meta.version = App.config.version;
        App.store.save();
        const payload = {
          schema: 'service-year-planner-sync-v1',
          exportedAt: now,
          appVersion: `v${App.config.version}`,
          source: 'manual-file-sync',
          payload: App.state.app
        };
        App.utils.downloadText(`service-year-planner-sync-${App.utils.iso(new Date())}.json`, JSON.stringify(payload, null, 2), 'application/json;charset=utf-8');
        App.ui.renderSettings();
        App.utils.toast(App.utils.t('sync_export_done'));
      },
      importSyncFile(file) {
        if (!file) return App.utils.toast(App.utils.t('sync_no_file'));
        if (!window.confirm(App.utils.t('sync_import_confirm'))) { if (App.els.syncImportInput) App.els.syncImportInput.value = ''; return; }
        const reader = new FileReader();
        reader.onload = () => {
          try {
            const parsed = JSON.parse(String(reader.result || '{}'));
            const rawPayload = parsed?.payload || parsed?.app || parsed;
            App.state.app = App.store.migrate(rawPayload);
            App.state.app.meta = App.state.app.meta || {};
            App.state.app.meta.lastSyncImportAt = new Date().toISOString();
            App.state.app.meta.lastSyncSourceExportedAt = parsed?.exportedAt || '';
            App.state.app.meta.version = App.config.version;
            App.store.save();
            const years = Object.keys(App.state.app.serviceYears || {}).map(Number).sort((a,b) => a - b);
            const currentSY = App.utils.getServiceYearForDate(new Date());
            const preferredSY = years.includes(currentSY) ? currentSY : (years.length ? years[years.length - 1] : currentSY);
            App.state.selectedYear = preferredSY;
            App.data.ensureServiceYear(preferredSY);
            App.data.getWeeksForYear(preferredSY);
            const bounds = App.utils.serviceYearBounds(preferredSY);
            const now = new Date();
            const showDate = (now >= bounds.start && now <= bounds.end) ? now : bounds.start;
            App.state.calendarYear = showDate.getFullYear();
            App.state.calendarMonth = showDate.getMonth();
            App.ui.renderAll();
            App.utils.toast(App.utils.t('sync_import_done'));
          } catch (error) {
            console.error(error);
            App.utils.toast(App.utils.t('sync_import_failed'));
          }
          if (App.els.syncImportInput) App.els.syncImportInput.value = '';
        };
        reader.onerror = () => { App.utils.toast(App.utils.t('sync_import_failed')); if (App.els.syncImportInput) App.els.syncImportInput.value = ''; };
        reader.readAsText(file, 'utf-8');
      },
      exportJson() {
        App.state.app.meta = App.state.app.meta || {};
        App.state.app.meta.lastBackupAt = new Date().toISOString();
        App.store.save();
        App.utils.downloadText(`circuit-planner-backup-${App.utils.iso(new Date())}.json`, JSON.stringify(App.state.app, null, 2), 'application/json;charset=utf-8');
      },
      downloadBackup() { this.exportJson(); },
      moveEntryToDate(entryId, targetIso) {
        const entry = App.state.app.entries.find((it) => it.id === entryId);
        const target = App.utils.parseLocalDate(targetIso);
        if (!entry || !target) return;
        const oldStart = App.utils.parseLocalDate(entry.start), oldEnd = App.utils.parseLocalDate(entry.end);
        if (!oldStart || !oldEnd) return;
        const span = App.utils.daysDiff(oldEnd, oldStart);
        entry.start = App.utils.iso(target);
        entry.end = App.utils.iso(App.utils.addDays(target, span));
        App.store.save();
        App.ui.renderAll();
        App.utils.toast(`${entry.title || App.utils.t('event')}: ${App.utils.prettyDate(entry.start)} — ${App.utils.prettyDate(entry.end)}`);
      },
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
      getPdfRange(type) {
        const monthStart = new Date(App.state.calendarYear, App.state.calendarMonth, 1);
        const monthEnd = new Date(App.state.calendarYear, App.state.calendarMonth + 1, 0);
        const sy = App.utils.getServiceYearForDate(monthStart);
        const bounds = App.utils.serviceYearBounds(sy);
        let start = App.utils.iso(monthStart), end = App.utils.iso(monthEnd);
        if (['custom-range','custom-range-calendar'].includes(type)) { start = App.els.pdfRangeStartInput?.value || start; end = App.els.pdfRangeEndInput?.value || end; }
        if (type === 'half-year-agenda') end = App.utils.iso(new Date(App.state.calendarYear, App.state.calendarMonth + 6, 0));
        if (['year-agenda','year-overview','visits-schedule'].includes(type)) { start = App.utils.iso(bounds.start); end = App.utils.iso(bounds.end); }
        return { start, end, sy };
      },
      collectPrintItems(startIso, endIso) {
        const start = App.utils.parseLocalDate(startIso), end = App.utils.parseLocalDate(endIso), items = [];
        if (!start || !end) return items;
        Object.values(App.state.app.serviceYears || {}).forEach((serviceYear) => Object.values(serviceYear?.weeks || {}).forEach((week) => {
          if (!week?.eventId) return;
          const ws = App.utils.parseLocalDate(week.start), we = App.utils.parseLocalDate(week.end);
          if (!ws || !we || !App.utils.overlaps(ws, we, start, end)) return;
          const event = App.data.getEventById(week.eventId);
          items.push({ source:'week', id:`week:${week.weekId}`, title:event?.name || App.utils.t('event'), start:week.start, end:week.end, startDate:ws, endDate:we, note:week.note || '', color:event?.color || '#1f7a45', address:event?.address || '', schedule:event?.schedule || '', flags:{ f302:!!week.flagS302, letter:!!week.flagLetter } });
        }));
        (App.state.app.entries || []).forEach((entry) => {
          const es = App.utils.parseLocalDate(entry.start), ee = App.utils.parseLocalDate(entry.end);
          if (!es || !ee || !App.utils.overlaps(es, ee, start, end)) return;
          const event = App.data.getEventById(entry.eventId);
          items.push({ source:'entry', id:`entry:${entry.id}`, title:entry.title || event?.name || App.utils.t('event'), start:entry.start, end:entry.end, startDate:es, endDate:ee, note:entry.note || '', color:event?.color || '#1f7a45', address:event?.address || '', schedule:event?.schedule || '', flags:{ f302:!!entry?.flags?.f302, letter:!!entry?.flags?.letter } });
        });
        return App.utils.uniqueBy(items, (item) => [item.source,item.title,item.start,item.end,item.note,item.address].join('|')).sort((a,b) => a.startDate - b.startDate || a.endDate - b.endDate || String(a.title).localeCompare(String(b.title)));
      },
      buildPrintHtml(type) {
        const range = this.getPdfRange(type);
        if (range.start > range.end) { App.utils.toast(App.utils.t('wrong_end_date')); return ''; }
        const items = this.collectPrintItems(range.start, range.end);
        const esc = (v) => App.utils.escapeHtml(v);
        const titles = { 'month-grid':App.utils.t('month_grid'), 'custom-range-calendar':App.utils.t('period_calendar'), 'month-agenda':App.utils.t('month_list'), 'half-year-agenda':App.utils.t('half_year'), 'year-agenda':App.utils.t('year_events'), 'custom-range':App.utils.t('list_period'), 'year-overview':App.utils.t('year_overview'), 'visits-schedule':App.utils.t('visits_schedule') };
        const title = titles[type] || App.utils.t('pdf_print');
        const flags = (f={}) => [f.letter ? App.utils.t('letter_short') : '', f.f302 ? App.utils.t('s302_short') : ''].filter(Boolean).map((x)=>`<span class="flag">${esc(x)}</span>`).join(' ');
        const agenda = () => items.length ? `<table><thead><tr><th>${esc(App.utils.t('start'))}</th><th>${esc(App.utils.t('end'))}</th><th>${esc(App.utils.t('event'))}</th><th>${esc(App.utils.t('schedule'))}</th><th>${esc(App.utils.t('address'))}</th><th>${esc(App.utils.t('note'))}</th></tr></thead><tbody>${items.map((it)=>`<tr><td>${esc(App.utils.prettyDateLong(it.startDate))}</td><td>${esc(App.utils.prettyDateLong(it.endDate))}</td><td><span class="dot" style="background:${App.utils.clampColor(it.color)}"></span>${esc(it.title)} ${flags(it.flags)}</td><td>${esc(it.schedule || App.utils.t('no_schedule'))}</td><td>${esc(it.address || App.utils.t('no_address'))}</td><td>${esc(it.note || App.utils.t('no_note'))}</td></tr>`).join('')}</tbody></table>` : `<div class="empty">${esc(App.utils.t('no_events_month'))}</div>`;
        const calendar = () => {
          const start = App.utils.parseLocalDate(range.start), end = App.utils.parseLocalDate(range.end), months = [];
          let cur = new Date(start.getFullYear(), start.getMonth(), 1), last = new Date(end.getFullYear(), end.getMonth(), 1);
          while (cur <= last) { months.push({ month:cur.getMonth(), year:cur.getFullYear() }); cur = new Date(cur.getFullYear(), cur.getMonth()+1, 1); }
          return `<div class="print-months">${months.map(({month,year})=>{
            const mStart = new Date(year, month, 1), mEnd = new Date(year, month+1, 0), days=[];
            for (let i=0; i<((mStart.getDay()+6)%7); i++) days.push('<div class="cal-empty"></div>');
            for (let d=1; d<=mEnd.getDate(); d++) { const date = new Date(year,month,d); const dayItems = items.filter((it)=>App.utils.overlaps(it.startDate,it.endDate,date,date)); days.push(`<div class="cal-day"><strong>${d}</strong>${dayItems.map((it)=>`<div class="cal-event"><span class="dot" style="background:${App.utils.clampColor(it.color)}"></span>${esc(it.title)}</div>`).join('')}</div>`); }
            return `<section class="print-month"><h2>${esc(App.utils.monthName(month))} ${year}</h2><div class="cal-dow">${App.utils.dayNames().map((d)=>`<span>${esc(d)}</span>`).join('')}</div><div class="cal-grid">${days.join('')}</div></section>`;
          }).join('')}</div>`;
        };
        const overview = () => { const byMonth = new Map(); items.forEach((it)=>{ const k=`${it.startDate.getFullYear()}-${String(it.startDate.getMonth()+1).padStart(2,'0')}`; if(!byMonth.has(k)) byMonth.set(k,[]); byMonth.get(k).push(it); }); return `<table><thead><tr><th>${esc(App.utils.t('service_year'))}</th><th>${esc(App.utils.t('event'))}</th><th>${esc(App.utils.t('notes_count'))}</th></tr></thead><tbody>${Array.from(byMonth.entries()).map(([k,list])=>{ const [y,m]=k.split('-').map(Number); return `<tr><td>${esc(App.utils.monthName(m-1))} ${y}</td><td>${list.length}</td><td>${list.filter((x)=>x.note).length}</td></tr>`; }).join('')}</tbody></table>${agenda()}`; };
        const visitsSchedule = () => {
          const visitLabel = (vt) => vt === 'congregation' ? App.utils.t('visit_type_congregation') : vt === 'group' ? App.utils.t('visit_type_group') : vt === 'pregroup' ? App.utils.t('visit_type_pregroup') : '';
          const rows = (App.state.app.entries || []).map((entry) => ({ entry, event: App.data.getEventById(entry.eventId) }))
            .filter(({ entry, event }) => {
              if (!event?.visitType) return false;
              const es = App.utils.parseLocalDate(entry.start), ee = App.utils.parseLocalDate(entry.end);
              return es && ee && App.utils.overlaps(es, ee, App.utils.parseLocalDate(range.start), App.utils.parseLocalDate(range.end));
            })
            .sort((a, b) => String(a.entry.start).localeCompare(String(b.entry.start)));
          return rows.length ? `<table><thead><tr><th>№</th><th>${esc(App.utils.t('range_start'))}</th><th>${esc(App.utils.t('range_end'))}</th><th>${esc(App.utils.t('event'))}</th><th>${esc(App.utils.t('visit_type'))}</th><th>S-302</th><th>${esc(App.utils.t('letter_short'))}</th><th>${esc(App.utils.t('note'))}</th></tr></thead><tbody>${rows.map(({ entry, event }, i) => `<tr><td>${i + 1}</td><td>${esc(App.utils.prettyDateLong(entry.start))}</td><td>${esc(App.utils.prettyDateLong(entry.end))}</td><td><span class="dot" style="background:${App.utils.clampColor(event.color)}"></span>${esc(entry.title || event.name)}</td><td>${esc(visitLabel(event.visitType))}</td><td>${entry.flags?.f302 ? '✓' : '—'}</td><td>${entry.flags?.letter ? '✓' : '—'}</td><td>${esc(entry.note || '')}</td></tr>`).join('')}</tbody></table>` : `<div class="empty">${esc(App.utils.t('no_events_month'))}</div>`;
        };
        const body = (type === 'month-grid' || type === 'custom-range-calendar') ? calendar() : type === 'year-overview' ? overview() : type === 'visits-schedule' ? visitsSchedule() : agenda();
        const label = `${App.utils.prettyDateLong(App.utils.parseLocalDate(range.start))} — ${App.utils.prettyDateLong(App.utils.parseLocalDate(range.end))}`;
        return `<!doctype html><html lang="${App.utils.lang()}"><head><meta charset="utf-8"><title>${esc(title)}</title><style>*{box-sizing:border-box}body{font-family:Segoe UI,Arial,sans-serif;color:#16251d;margin:0;padding:22px;background:#fff;font-size:12px}h1{font-size:22px;margin:0 0 6px}h2{font-size:16px;margin:0 0 10px}.meta{color:#566;margin-bottom:18px}.print-months{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:18px}.print-month{break-inside:avoid;border:1px solid #ccd8d0;border-radius:12px;padding:12px}.cal-dow,.cal-grid{display:grid;grid-template-columns:repeat(7,1fr);gap:4px}.cal-dow span{text-align:center;color:#667;font-weight:600}.cal-day,.cal-empty{min-height:78px;border:1px solid #dde6e0;border-radius:8px;padding:5px}.cal-day strong{display:block;margin-bottom:3px}.cal-event{font-size:10px;margin:2px 0;padding:2px 4px;border-radius:6px;background:#f1f5f2;overflow:hidden;text-overflow:ellipsis}.dot{display:inline-block;width:8px;height:8px;border-radius:999px;margin-right:5px}.flag{display:inline-block;border:1px solid #ccd8d0;border-radius:999px;padding:1px 5px;margin-left:3px;font-size:10px}table{width:100%;border-collapse:collapse}th,td{border:1px solid #ccd8d0;padding:7px;text-align:left;vertical-align:top}th{background:#eef5f0}.empty{border:1px dashed #ccd8d0;border-radius:10px;padding:20px;text-align:center;color:#667}@media print{body{padding:0}.print-month{page-break-inside:avoid}@page{size:A4 landscape;margin:10mm}}</style></head><body><h1>${esc(title)}</h1><div class="meta">${esc(label)} · Service Year Planner</div>${body}</body></html>`;
      },
      doPrint() {
        const html = this.buildPrintHtml(App.state.pdfExportType || 'month-grid');
        if (!html) return;
        this.closePdf();
        const win = window.open('', '_blank');
        if (!win) { window.print(); return; }
        win.document.open(); win.document.write(html); win.document.close(); win.focus();
        setTimeout(() => { try { win.print(); } catch (_) {} }, 250);
      }
    },

    ui: {
      cacheElements() {
        [
          'appRoot','desktopNav','toastWrap','offlineBanner','sideStatus','screenTitle','screenSubtitle',
          'eventEditorModal','eventEditorCloseBtn',
          'monthLabel','calendarRangeLabel','calendarGrid','prevMonthBtn','todayMonthBtn','nextMonthBtn',
          'calendarYearSelect','calendarLayoutPresetSelect','layoutPresetSelect','calendarEditor','editorTitle',
          'editorMeta','editorEventSelect','editorStart','editorEnd','editorReadonly','editorCloseBtn',
          'editorCancelBtn','editorDeleteBtn','editorSaveBtn','calendarServiceYearLabel','calendarPanelYearLabel',
          'calendarSideTitle','calendarSideMeta','calendarSideDetails','calendarSideCountdownRow','calendarSideCountdown','countdownUnitSelect',
          'toggleTeamPanelBtn','calendarLayout','eventsList','eventSearchInput','eventColorFilter','eventVisitFilter','deleteAllEventsBtn','eventsListCount','eventNameInput','eventColorInput','eventAddressInput',
          'eventScheduleInput','resetEventBtn','saveEventBtn','deleteEventBtn','newEventBtn','eventVisitTypeInput','eventContactNameInput','eventContactPhoneInput','eventContactEmailInput','eventContactNoteInput','editorFlagsRow','editorFlagS302','editorFlagLetter',
          'remindersModal','remindersModalList','remindersModalCloseBtn','remindersModalOkBtn','remindersModalTitle','remindersModalSub','checkRemindersBtn','checkRemindersBtnMain',
          'statsModal','statsModalTitle','statsModalSub','statsModalBody','statsModalCloseBtn','statsModalOkBtn','statsBtn','plannerBtn',
          'plannerModal','plannerModalCloseBtn','plannerStartInput','plannerEndInput','plannerEventsList','plannerPreview','plannerCancelBtn','plannerApplyBtn',
          'pinOverlay','pinInput','pinError','pinSubmitBtn','pinSetupBtn','holidaysToggle','editorResultInput','editorResultLabel',
          'eventCongNumberInput','eventFormLanguageSelect','eventVisitOnlyFields','geocodeEventBtn','eventDistanceStatus','homeAddressInput','geocodeHomeBtn','homeGeocodeStatus','letterTemplateEditor','letterTemplateResetBtn','letterPagesList','addLetterPageBtn','previewLetterPdfBtn','senderNameInput','senderAddressInput','senderPhoneInput','senderEmailInput','emailMethodSelect','owaUrlInput','owaUrlRow','emailBodyDefaultInput','emailBodyDefaultResetBtn',
          'vfLanguageSelect','vfLanguageReminder',
          'visitFormModal','visitFormSub','visitFormCloseBtn','vfVisitType','vfMeetingsList','vfAddMeetingBtn','vfServiceDaysList','vfAddDayBtn','vfPastoralHeading','vfPastoralList','vfAddPastoralBtn','vfMealsList','vfAddMealBtn','vfNotesInput','vfCloseBtn2','vfGeneratePdfBtn',
          'letterModal','letterModalSub','letterModalCloseBtn','letterEmailBodyInput','letterAttachStatus','letterPreviewPdfBtn','letterAttachPdfBtn','letterSendBtn',
          'languageSelect','themeSelect','accentSelect','fontSizeSelect',
          'settingsPdfBtn','backupBtn','resetAppBtn','themeBtn','exportBtn','importInput','pdfModal','pdfModalCloseBtn',
          'pdfCancelBtn','pdfExportConfirmBtn','pdfRangeCard','pdfRangeStartInput','pdfRangeEndInput','pdfRangeHelp','pdfHint',
          'bottomNav','bottomNavRow','mobileOverlay','mobileMenuToggleBtn','exportModal','exportModalCloseBtn','exportCancelBtn',
          'exportConfirmBtn','exportRangeCard','exportRangeStartInput','exportRangeEndInput','exportRangeHelp','syncTitle','syncHint','syncExportBtn','syncImportInput','syncImportLabel','syncStatus','addYearInput','addNextYearBtn','addYearBtn'
        ].forEach((id) => { App.els[id] = document.getElementById(id); });
      },
      cleanupCalendarChrome() {
        document.querySelectorAll('#calendar .legend, .sy-legend, .sy-compact-hint').forEach((node) => node.remove());
      },
      removeTeamPanel() {
        const teamCard = document.getElementById('calendarQuickList')?.closest('.side-card') || document.getElementById('calendarEventQuickFilter')?.closest('.side-card');
        if (teamCard) teamCard.remove();
        App.els.calendarQuickList = null;
        App.els.calendarEventQuickFilter = null;
        App.els.calendarPanelYearLabel = null;
        if (App.els.calendarLayout) App.els.calendarLayout.classList.remove('team-hidden');
      },
      ensureFontSizeControl() {
        if (document.getElementById('fontSizeSelect')) {
          App.els.fontSizeSelect = document.getElementById('fontSizeSelect');
          return;
        }
        const layoutSelect = document.getElementById('layoutPresetSelect');
        const host = layoutSelect?.closest('div');
        if (!host?.parentNode) return;
        const wrap = document.createElement('div');
        wrap.innerHTML = `<label class="small">Размер шрифта интерфейса</label><select id="fontSizeSelect"><option value="80">80% — Очень мелкий</option><option value="85">85% — Мелкий</option><option value="90">90% — Компактный</option><option value="95">95% — Чуть меньше</option><option value="100">100% — Обычный</option><option value="105">105% — Чуть больше</option><option value="110">110% — Крупный</option><option value="115">115% — Очень крупный</option><option value="120">120% — Максимальный</option><option value="125">125% — Огромный</option></select><div class="layout-help">Меняет размер текста, кнопок и календаря.</div>`;
        host.parentNode.insertBefore(wrap, host);
        App.els.fontSizeSelect = document.getElementById('fontSizeSelect');
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

      localizeColorOptions() {
        if (!App.els.eventColorInput) return;
        const current = App.els.eventColorInput.value || '#1f7a45';
        App.els.eventColorInput.innerHTML = App.utils.colorOptionsHtml(current);
        App.els.eventColorInput.value = current;
        if (!App.els.eventColorInput.value) App.els.eventColorInput.value = '#1f7a45';
      },
      localizeStaticTexts() {
        document.documentElement.lang = App.utils.lang();
        const q = (sel) => document.querySelector(sel);
        const qa = (sel) => Array.from(document.querySelectorAll(sel));
        this.localizeColorOptions();
        const brandH1 = q('.brand h1'); if (brandH1) brandH1.textContent = App.utils.t('appTitle');
        const brandP = q('.brand p'); if (brandP) brandP.textContent = `v${App.config.version} • index.html + app.js`;
        const versionBadge = q('.version-badge'); if (versionBadge) versionBadge.textContent = `${App.utils.t('version')}: v${App.config.version}`;
        // Keep the tab title in sync with the single source of truth instead of hardcoding it in index.html.
        document.title = `Service Year Planner v${App.config.version}`;
        if (App.els.themeBtn) App.els.themeBtn.textContent = App.utils.t('theme');
        if (App.els.exportBtn) App.els.exportBtn.textContent = App.utils.t('export');
        if (App.els.syncTitle) App.els.syncTitle.textContent = App.utils.t('sync_title');
        if (App.els.syncHint) App.els.syncHint.textContent = App.utils.t('sync_hint');
        if (App.els.syncExportBtn) App.els.syncExportBtn.textContent = App.utils.t('sync_export');
        if (App.els.syncImportLabel) App.els.syncImportLabel.textContent = App.utils.t('sync_import');
        const importLabel = q('label[for="importInput"]'); if (importLabel) importLabel.textContent = App.utils.t('import_json');
        if (App.els.offlineBanner) App.els.offlineBanner.textContent = App.utils.t('offline');
        if (App.els.toggleTeamPanelBtn) App.els.toggleTeamPanelBtn.textContent = App.state.calendarView === 'year' ? App.utils.t('calendar_view_month') : App.utils.t('calendar_view_year');
        if (App.els.todayMonthBtn) App.els.todayMonthBtn.textContent = App.utils.t('today');
        if (App.els.eventScheduleInput) App.els.eventScheduleInput.placeholder = App.utils.t('placeholder_schedule');
        const headings = qa('#events h3, #settings h3');
        if (headings[0]) { headings[0].textContent = ''; headings[0].hidden = true; headings[0].style.display = 'none'; }
        if (headings[1]) headings[1].textContent = App.utils.t('event_editor');
        if (headings[2]) headings[2].textContent = App.utils.t('look_and_feel');
        if (headings[3]) headings[3].textContent = App.utils.t('data_management');
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
          const pdfMap = [['month_grid','month_grid_desc'],['period_calendar','period_calendar_desc'],['month_list',''],['half_year',''],['year_events',''],['list_period',''],['visits_schedule',''],['year_overview','']];
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
      },
      renderAll() {
        this.ensureCalendarViewStyles();
        this.ensureEditorNoteField();
        this.ensureFontSizeControl();
        this.localizeStaticTexts();
        this.applyTheme();
        this.applyFontSize();
        this.applyAccent();
        this.applyLayout();
        this.removeTeamPanel();
        this.renderNav();
        this.renderScreenHeader();
        this.renderCalendar();
        this.cleanupCalendarChrome();
        this.renderEvents();
        this.renderSettings();
        this.renderStatus();
        this.updateReminderButtonBadge();
        this.renderNextVisitCard();
        if (App.els.holidaysToggle) App.els.holidaysToggle.checked = !!App.state.app.settings.showHolidays;
        this.updatePinButton();
      },
      updateReminderButtonBadge() {
        const count = App.data.getUpcomingReminders().length;
        if (App.els.checkRemindersBtnMain) App.els.checkRemindersBtnMain.textContent = count ? `🔔 S302/письма (${count})` : '🔔 S302/письма';
      },
      renderNav() {
        const buildButton = (item, mobile = false) => `<button class="${mobile ? 'bottom-nav-btn' : 'nav-btn'} ${App.state.selectedScreen === item.id ? 'active' : ''}" data-screen="${item.id}" type="button"><span class="icon">${item.icon}</span><span class="label">${App.utils.t(item.tKey)}</span></button>`;
        if (App.els.desktopNav) App.els.desktopNav.innerHTML = App.config.navItems.map((item) => buildButton(item, false)).join('');
        if (App.els.bottomNavRow) App.els.bottomNavRow.innerHTML = App.config.navItems.map((item) => buildButton(item, true)).join('');
        document.querySelectorAll('[data-screen]').forEach((btn) => btn.addEventListener('click', (event) => { event.preventDefault(); event.stopPropagation(); App.state.selectedScreen = btn.dataset.screen; App.ui.closeMobileMenu(); App.ui.renderAll(); window.scrollTo(0, 0); }));
        document.querySelectorAll('.screen').forEach((screen) => screen.classList.toggle('active', screen.id === App.state.selectedScreen));
        this.fixBottomNavViewport();
      },
      // Positions the fixed bottom nav using the visualViewport API instead of trusting
      // plain `position:fixed; bottom:0`. Android Chrome's dynamic address bar can leave
      // the browser's own idea of "viewport bottom" stale right after a JS-driven screen
      // switch (especially when the new screen's content height differs a lot from the
      // previous one) — visualViewport always reports the true, current visible area.
      fixBottomNavViewport() {
        const nav = App.els.bottomNav;
        if (!nav) return;
        const apply = () => {
          if (window.visualViewport) {
            const vv = window.visualViewport;
            const bottomOffset = Math.max(0, window.innerHeight - (vv.height + vv.offsetTop));
            nav.style.bottom = `${bottomOffset}px`;
          } else {
            nav.style.bottom = '0px';
          }
        };
        apply();
        requestAnimationFrame(apply);
        setTimeout(apply, 150);
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
      applyAccent() {
        const palettes = {
          green:{accent:'#14532d',accent2:'#0d3d22',rgb:'20,83,45'},
          blue:{accent:'#1d4ed8',accent2:'#1e3a8a',rgb:'29,78,216'},
          purple:{accent:'#7e22ce',accent2:'#581c87',rgb:'126,34,206'},
          teal:{accent:'#0f766e',accent2:'#115e59',rgb:'15,118,110'},
          amber:{accent:'#b45309',accent2:'#78350f',rgb:'180,83,9'},
          red:{accent:'#b91c1c',accent2:'#7f1d1d',rgb:'185,28,28'},
          slate:{accent:'#334155',accent2:'#0f172a',rgb:'51,65,85'}
        };
        const key = App.state.app?.settings?.accentColor || 'green';
        const p = palettes[key] || palettes.green;
        document.documentElement.style.setProperty('--accent', p.accent);
        document.documentElement.style.setProperty('--accent2', p.accent2);
        document.documentElement.style.setProperty('--accent-rgb', p.rgb);
        const meta = document.querySelector('meta[name="theme-color"]');
        if (meta) meta.setAttribute('content', p.accent);
        if (App.els.accentSelect) App.els.accentSelect.value = palettes[key] ? key : 'green';
        try { localStorage.setItem('service-year-planner-accent', palettes[key] ? key : 'green'); } catch (_) {}
      },
      applyFontSize() {
        const legacyMap = { small: '90', normal: '100', large: '110', xlarge: '120' };
        const allowed = ['80','85','90','95','100','105','110','115','120','125'];
        const raw = String(App.state.app?.settings?.fontSize || '100');
        const value = legacyMap[raw] || (allowed.includes(raw) ? raw : '100');
        App.state.app.settings.fontSize = value;
        document.documentElement.setAttribute('data-font-size', value);
        document.documentElement.style.setProperty('--ui-font-scale', String(Number(value) / 100));
        if (App.els.fontSizeSelect) App.els.fontSizeSelect.value = value;
      },
      applyTheme() { document.documentElement.setAttribute('data-theme', App.state.app.settings.theme || 'light'); if (App.els.themeSelect) App.els.themeSelect.value = App.state.app.settings.theme || 'light'; },
      applyLayout() { document.documentElement.setAttribute('data-layout', App.state.app.settings.layoutPreset || 'classic'); if (App.els.calendarLayout) App.els.calendarLayout.classList.remove('team-hidden'); },
      buildMonthGrid(month, year) {
        const monthStart = new Date(year, month, 1); const monthEnd = new Date(year, month + 1, 0); const gridStart = App.utils.startOfWeek(monthStart); const gridEnd = App.utils.addDays(App.utils.startOfWeek(monthEnd), 41 - App.utils.daysDiff(App.utils.startOfWeek(monthEnd), gridStart)); const weeks = []; let cursor = new Date(gridStart); while (cursor <= gridEnd) { const days = []; for (let i = 0; i < 7; i += 1) { const date = App.utils.addDays(cursor, i); days.push({ date, iso: App.utils.iso(date), day: date.getDate(), month: date.getMonth(), inMonth: date.getMonth() === month, isWeekend: date.getDay() === 0 || date.getDay() === 6, isToday: App.utils.iso(date) === App.utils.iso(new Date()) }); } weeks.push({ id: App.utils.weekIdForDate(cursor), start: new Date(cursor), number: App.utils.weekNumber(cursor), days }); cursor = App.utils.addDays(cursor, 7); }
        // Only keep weeks that actually contain at least one day of the current month —
        // the fixed 6-week grid otherwise appends a fully empty next-month week.
        return weeks.filter((week) => week.days.some((day) => day.inMonth));
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
          .sy-day.has-events:not(.today){border-color:rgba(var(--accent-rgb,20,83,45),.25)}
          .sy-event-dots{display:flex;gap:2px;justify-content:center;min-height:4px}
          .sy-event-dot{width:4px;height:4px;border-radius:999px;display:block}
          .sy-empty{min-height:30px}
          .sy-day.selected{outline:2px solid var(--accent);outline-offset:1px;background:rgba(var(--accent-rgb,20,83,45),.10)}
          .sy-day .sy-count{position:absolute;right:3px;top:2px;font-size:9px;color:var(--muted)}
          .sy-month-summary{display:flex;gap:4px;flex-wrap:wrap;margin-top:8px;min-height:16px}
          .sy-month-summary .dot{width:7px;height:7px}
          .sy-legend{display:flex;gap:8px;flex-wrap:wrap;align-items:center;padding:14px 18px 0;background:var(--surface2)}
          .sy-legend-chip{display:inline-flex;align-items:center;gap:7px;border:1px solid var(--line);background:var(--surface);border-radius:999px;padding:6px 10px;font-size:12px;color:var(--text)}
          .sy-legend-sample{width:12px;height:12px;border-radius:999px;display:inline-block;background:var(--accent)}
          .sy-legend-sample.outline{background:transparent;border:2px solid rgba(var(--accent-rgb,20,83,45),.35)}
          .sy-legend-sample.today{background:var(--accent)}
          .sy-compact-hint{display:none;padding:8px 18px 0;background:var(--surface2)}
          @media (max-width:1100px){.service-year-grid{grid-template-columns:repeat(2,minmax(0,1fr));}}
          @media (max-width:680px){.service-year-grid{grid-template-columns:1fr;padding:10px;gap:10px}.sy-month-card{padding:10px;border-radius:16px}.sy-day{min-height:30px;font-size:10px}.sy-dow span{font-size:9px}.sy-legend{padding:10px 10px 0;gap:6px}.sy-legend-chip{font-size:11px;padding:5px 8px}.sy-compact-hint{display:block;padding:8px 10px 0}.calendar-side{gap:10px}.side-card{padding:14px}}
          @media (max-width:420px){.sy-days,.sy-dow{gap:2px}.sy-day{min-height:26px;border-radius:7px}.sy-month-title{font-size:13px;margin-bottom:6px}.sy-event-dot{width:3px;height:3px}.sy-day .sy-count{display:none}.service-year-grid{padding:8px}.sy-month-card{padding:8px}}
        
          /* Mobile modal scrolling fix */
          .modal{overflow:auto;-webkit-overflow-scrolling:touch;align-items:flex-start}
          .modal-card{max-height:calc(100dvh - 36px);overflow:auto}
          /* Mobile menu click-through reliability */
          .app.menu-open .sidebar{z-index:2000 !important}
          .app.menu-open .sidebar{left:0 !important;z-index:2500 !important;pointer-events:auto !important}
          .calendar-layout{grid-template-columns:minmax(0,1fr) minmax(320px,380px) !important;align-items:start}
          .calendar-side{display:block !important;position:sticky;top:86px;align-self:start;max-height:calc(100dvh - 110px);overflow:auto;-webkit-overflow-scrolling:touch}
          .calendar-side .team-panel-card{display:none !important}
          .calendar-layout.team-hidden{grid-template-columns:minmax(0,1fr) minmax(320px,380px) !important}
          .calendar-layout.team-hidden .calendar-side{display:block !important}
          .day-cell{cursor:pointer}
          .day-cell.selected-day{outline:2px solid var(--accent);outline-offset:-2px;background:rgba(var(--accent-rgb,20,83,45),.10)}
          .day-cell.selected-day.weekend{background:rgba(var(--accent-rgb,20,83,45),.14)}
          @media (max-width:820px){.calendar-layout{grid-template-columns:1fr !important}.calendar-side{position:static;max-height:none;overflow:visible}.calendar-side .side-card:not(:first-child){margin-top:12px}}

          /* v9.5.2 layout cleanup */
          .legend,.sy-legend,.sy-compact-hint{display:none !important}
          .app{grid-template-columns:1fr !important}
          body::before{display:none !important}
          .main{padding:18px 22px 30px !important}
          .mobile-menu-btn{display:inline-flex !important}
          .sidebar{position:fixed !important;left:-300px !important;top:0 !important;bottom:0 !important;width:280px !important;z-index:2500 !important;transition:left .22s ease !important;box-shadow:0 20px 60px rgba(0,0,0,.24)}
          .app.menu-open .sidebar{left:0 !important}
          .calendar-layout{grid-template-columns:minmax(0,1fr) minmax(320px,360px) !important;gap:22px !important}
          .service-year-grid{grid-template-columns:repeat(3,minmax(190px,1fr)) !important;gap:18px !important}
 [data-font-size="80"]{--ui-font-scale:.80}
 [data-font-size="85"]{--ui-font-scale:.85}
 [data-font-size="90"]{--ui-font-scale:.90}
 [data-font-size="95"]{--ui-font-scale:.95}
 [data-font-size="100"]{--ui-font-scale:1}
 [data-font-size="105"]{--ui-font-scale:1.05}
 [data-font-size="110"]{--ui-font-scale:1.10}
 [data-font-size="115"]{--ui-font-scale:1.15}
 [data-font-size="120"]{--ui-font-scale:1.20}
 [data-font-size="125"]{--ui-font-scale:1.25}

          html{font-size:calc(16px * var(--ui-font-scale,1))}

          /* v9.5.2 responsive polish: fixes screenshot overlap and cleans calendar header */
          :root{--ui-font-scale:1;--sidebar-width:280px;--calendar-side-width:360px}
          html{font-size:calc(16px * var(--ui-font-scale,1))}
          body::before{display:none !important}
          .app{grid-template-columns:1fr !important}
          .main{padding:18px 22px 30px !important;width:100%;max-width:none !important}
          .topbar{display:grid !important;grid-template-columns:minmax(0,1fr) auto !important;align-items:start !important;gap:12px !important;margin-bottom:10px !important;padding:8px 0 8px !important;position:sticky;top:0;z-index:1200;background:var(--bg)}
          .topbar h2{font-size:1.55rem !important;line-height:1.12 !important;margin-top:4px !important}
          .topbar p{display:none !important}
          .version-badge{font-size:.78rem !important;padding:5px 9px !important}
          .mobile-menu-btn{display:inline-flex !important;padding:10px 14px !important;border-radius:18px !important;white-space:nowrap !important}
          .sidebar{position:fixed !important;left:calc(-1 * var(--sidebar-width) - 20px) !important;top:0 !important;bottom:0 !important;width:var(--sidebar-width) !important;z-index:2500 !important;transition:left .22s ease !important;box-shadow:0 20px 60px rgba(0,0,0,.24);display:flex !important;pointer-events:auto !important}
          .app.menu-open .sidebar{left:0 !important}
          .calendar-toolbar{display:grid !important;grid-template-columns:minmax(0,1fr) auto !important;align-items:center !important;gap:12px !important;padding:16px 18px 12px !important}
          .calendar-controls{justify-content:flex-end !important;gap:8px !important}
          .calendar-controls .chip,.calendar-controls select{min-height:42px}
          .calendar-title{font-size:1.35rem !important;line-height:1.15 !important}
          .calendar-sub{font-size:.82rem !important;margin-top:4px !important}
          .calendar-layout{grid-template-columns:minmax(0,1fr) minmax(310px,360px) !important;gap:18px !important;align-items:start}
          .calendar-side{min-width:0 !important;position:sticky !important;top:88px !important;max-height:calc(100dvh - 106px) !important;overflow:auto !important;-webkit-overflow-scrolling:touch !important;display:block !important}
          .calendar-details-card{max-width:100% !important;display:block !important}
          .legend,.sy-legend,.sy-compact-hint{display:none !important}
          .calendar-side .team-panel-card{display:none !important}
          .service-year-grid{padding:18px !important;gap:18px !important;grid-template-columns:repeat(3,minmax(190px,1fr)) !important}
          .sy-month-card{padding:14px !important;border-radius:22px !important}
          .sy-day{min-height:34px !important;font-size:.78rem !important}
          .sy-dow span{font-size:.72rem !important}
          .sy-month-title{font-size:1.02rem !important}
          .day-cell{min-height:108px}
          @media (min-width:1600px){:root{--calendar-side-width:390px}.service-year-grid{grid-template-columns:repeat(4,minmax(190px,1fr)) !important}}
          @media (max-width:1180px){.calendar-layout{grid-template-columns:1fr !important;gap:14px !important}.calendar-side{position:static !important;top:auto !important;max-height:none !important;overflow:visible !important;width:100% !important;display:block !important}.calendar-details-card{width:100% !important;max-width:none !important;margin-top:0 !important}.calendar-toolbar{grid-template-columns:1fr !important;align-items:start !important}.calendar-controls{justify-content:flex-start !important}}
          @media (max-width:900px){.main{padding:14px 12px 86px !important}.calendar-shell{border-radius:22px !important}.calendar-toolbar{padding:14px !important}.calendar-controls{display:grid !important;grid-template-columns:1fr !important;width:100% !important}.calendar-nav{width:100%;justify-content:space-between}.calendar-controls select,.calendar-controls .chip{width:100% !important}#calendarServiceYearLabel{display:none !important}.calendar-sub{font-size:.8rem !important}.service-year-grid{grid-template-columns:repeat(2,minmax(150px,1fr)) !important;padding:12px !important;gap:12px !important}.sy-month-card{padding:10px !important}.sy-day{min-height:30px !important}.calendar-side{margin-top:12px !important}}
          @media (max-width:560px){.service-year-grid{grid-template-columns:1fr !important}.topbar{grid-template-columns:1fr !important}.actions{justify-content:flex-start}.bottom-nav-btn .label{font-size:.68rem}}
 [data-font-size="80"]{--ui-font-scale:.80}
 [data-font-size="85"]{--ui-font-scale:.85}
 [data-font-size="90"]{--ui-font-scale:.90}
 [data-font-size="95"]{--ui-font-scale:.95}
 [data-font-size="100"]{--ui-font-scale:1}
 [data-font-size="105"]{--ui-font-scale:1.05}
 [data-font-size="110"]{--ui-font-scale:1.10}
 [data-font-size="115"]{--ui-font-scale:1.15}
 [data-font-size="120"]{--ui-font-scale:1.20}
 [data-font-size="125"]{--ui-font-scale:1.25}



 #events .event-templates-title{display:none !important}
 /* v9.5.2 sent flags and calendar actions */
 .sent-flags{display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-top:10px}
 .flag-toggle{display:inline-flex;align-items:center;gap:7px;border:1px solid var(--line);background:var(--surface2);border-radius:999px;padding:7px 10px;font-size:12px;color:var(--text);cursor:pointer;user-select:none}
 .flag-toggle input{width:auto;margin:0;accent-color:var(--accent)}
 .flag-badges{display:inline-flex;gap:5px;flex-wrap:wrap;margin-left:6px;vertical-align:middle}
 .flag-badge{display:inline-flex;align-items:center;border:1px solid var(--line);background:var(--surface2);border-radius:999px;padding:2px 6px;font-size:10px;font-weight:700;color:var(--text)}
 .calendar-action-grid{display:grid;gap:8px;margin-top:12px}.entry-actions{display:flex;gap:8px;flex-wrap:wrap;margin-top:8px}.entry-actions .btn{padding:8px 10px;border-radius:12px;font-size:12px;box-shadow:none}.side-item-card{padding:10px 12px;border-radius:14px;background:var(--surface2);border:1px solid var(--line)}
 
 /* v9.5.9-year-week-bars: day popover for service-year mini calendar */
 .day-popover{position:fixed;z-index:3200;min-width:260px;max-width:min(340px,calc(100vw - 24px));background:var(--surface);color:var(--text);border:1px solid var(--line);border-radius:18px;box-shadow:0 22px 55px rgba(0,0,0,.22);padding:14px;font-size:13px;line-height:1.35}
 .day-popover[hidden]{display:none !important}
 .day-popover-title{font-weight:800;font-size:14px;margin-bottom:3px}
 .day-popover-meta{color:var(--muted);font-size:12px;margin-bottom:10px}
 .day-popover-list{display:grid;gap:8px;margin-top:8px}
 .day-popover-event{display:grid;grid-template-columns:10px 1fr;gap:8px;align-items:start;padding:8px;border:1px solid var(--line);background:var(--surface2);border-radius:13px}
 .day-popover-dot{width:10px;height:10px;border-radius:999px;margin-top:4px;display:block}
 .day-popover-event strong{display:block;font-size:13px}
 .day-popover-event span{display:block;color:var(--muted);font-size:12px;margin-top:2px}
 .day-popover-actions{display:flex;gap:8px;flex-wrap:wrap;margin-top:10px}
 .day-popover-actions .btn{padding:8px 10px;border-radius:12px;font-size:12px;box-shadow:none}
 .sy-day.has-events:hover{outline:2px solid var(--accent);outline-offset:1px}
 
 /* v9.5.9-year-week-bars: stable popover + sending workflow */
 .calendar-details-card #calendarSideDetails .side-item-card:has(.entry-actions){display:none !important}

 .day-popover{pointer-events:auto !important}
 .day-popover.is-hovered{box-shadow:0 24px 60px rgba(0,0,0,.26) !important}
 .send-control{margin-top:12px;padding:12px;border:1px solid var(--line);border-radius:16px;background:var(--surface2)}
 .send-control-head{display:flex;align-items:flex-start;justify-content:space-between;gap:10px;margin-bottom:8px}
 .send-control-title{font-weight:800;font-size:13px}
 .send-control-hint{color:var(--muted);font-size:11px;margin-top:2px}
 .send-control-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:8px}
 .send-card{display:grid;gap:6px;padding:10px;border:1px solid var(--line);border-radius:14px;background:var(--surface)}
 .send-card.is-pending{border-color:rgba(185,28,28,.45);background:rgba(185,28,28,.07)}
 .send-card.is-done{border-color:rgba(var(--accent-rgb),.35);background:rgba(var(--accent-rgb),.08)}
 .send-card-top{display:flex;justify-content:space-between;align-items:center;gap:8px;font-weight:700;font-size:12px}
 .send-status{font-size:11px;color:var(--muted)}
 .send-toggle{display:inline-flex;align-items:center;gap:6px;font-size:12px;cursor:pointer;user-select:none}
 .send-toggle input{width:auto;margin:0;accent-color:var(--accent)}
 @media (max-width:680px){.send-control-grid{grid-template-columns:1fr}}
 
 @media (max-width:680px){.day-popover{left:12px !important;right:12px !important;top:auto !important;bottom:86px !important;max-width:none;width:auto}.day-popover-actions .btn{flex:1 1 auto}}
 

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
     
getServiceYearDayInfo(dateIso) {
 const date = App.utils.parseLocalDate(dateIso);
 if (!date) return null;
 const sy = App.utils.getServiceYearForDate(date);
 const weekId = App.utils.weekIdForDate(date);
 const week = App.data.getWeek(sy, weekId);
 const weekEvent = App.data.getEventById(week.eventId);
 const weekStart = App.utils.parseLocalDate(week.start);
 const weekEnd = App.utils.parseLocalDate(week.end);
 const weekItem = week.eventId ? { id: `week:${weekId}`, source: 'week', refId: weekId, eventId: week.eventId, title: weekEvent?.name || App.utils.t('event'), color: weekEvent?.color || '#1f7a45', note: week.note || '', start: week.start, end: week.end, flags: { f302: !!week.flagS302, letter: !!week.flagLetter } } : null;
 const dayEntries = App.state.app.entries.filter((entry) => {
 const es = App.utils.parseLocalDate(entry.start); const ee = App.utils.parseLocalDate(entry.end);
 return es && ee && App.utils.overlaps(es, ee, date, date);
 }).map((entry) => {
 const event = App.data.getEventById(entry.eventId);
 return { id: `entry:${entry.id}`, entryId: entry.id, eventId: entry.eventId, event, title: entry.title || event?.name || App.utils.t('event'), color: event?.color || '#1f7a45', start: entry.start, end: entry.end, note: entry.note || '', schedule: event?.schedule || '', address: event?.address || '', flags: { f302: !!entry?.flags?.f302, letter: !!entry?.flags?.letter } };
 }).sort((a,b) => (a.start || '').localeCompare(b.start || ''));
 return { date, sy, weekId, week, weekEvent, weekItem, weekStart, weekEnd, dayEntries };
},
ensureDayPopover() {
 let popover = document.getElementById('dayPopover');
 if (!popover) { popover = document.createElement('div'); popover.id = 'dayPopover'; popover.className = 'day-popover'; popover.hidden = true; document.body.appendChild(popover); }
 return popover;
},
hideDayPopover(force = false) {
 const popover = document.getElementById('dayPopover'); if (!popover) return;
 if (!force && (App.state.dayPopoverPinned || popover.matches(':hover') || popover.dataset.keepOpen === '1')) return;
 popover.hidden = true; App.state.dayPopoverPinned = false;
},
showServiceYearDayPopover(anchor, dateIso, pinned = false) {
 const info = this.getServiceYearDayInfo(dateIso); if (!info || !anchor) return;
 App.state.dayPopoverPinned = !!pinned;
 const popover = this.ensureDayPopover();
 if (popover.dataset.fix3Bound !== '1') {
 popover.dataset.fix3Bound = '1';
 popover.addEventListener('mouseenter', () => { popover.dataset.keepOpen = '1'; popover.classList.add('is-hovered'); });
 popover.addEventListener('mouseleave', () => { delete popover.dataset.keepOpen; popover.classList.remove('is-hovered'); if (!App.state.dayPopoverPinned) window.setTimeout(() => App.ui.hideDayPopover(true), 180); });
 popover.addEventListener('click', (e) => e.stopPropagation());
 popover.addEventListener('mousedown', (e) => e.stopPropagation());
 }
 const rows = [];
 if (info.weekItem) rows.push({ kind: App.utils.t('week_planned'), title: info.weekItem.title, color: info.weekItem.color, range: `${App.utils.prettyDate(info.weekStart)} — ${App.utils.prettyDate(info.weekEnd)}`, note: info.week.note || App.utils.t('no_note'), schedule: info.weekEvent?.schedule || App.utils.t('no_schedule') });
 const popoverDayEntries = (info.dayEntries || []).filter((entry) => !(info.weekItem && entry.eventId === info.weekItem.eventId)); 
 popoverDayEntries.forEach((entry) => rows.push({ kind: App.utils.t('type_entry'), title: entry.title, color: entry.color, range: `${App.utils.prettyDate(entry.start)} — ${App.utils.prettyDate(entry.end)}`, note: entry.note || App.utils.t('no_note'), schedule: entry.schedule || App.utils.t('no_schedule') }));
 const listHtml = rows.length ? rows.map((row) => `<div class="day-popover-event"><i class="day-popover-dot" style="background:${App.utils.clampColor(row.color)}"></i><div><strong>${App.utils.escapeHtml(row.title)}</strong><span>${App.utils.escapeHtml(row.kind)} · ${App.utils.escapeHtml(row.range)}</span><span>${App.utils.escapeHtml(row.schedule)}</span>${row.note && row.note !== App.utils.t('no_note') ? `<span>${App.utils.escapeHtml(row.note)}</span>` : ''}</div></div>`).join('') : `<div class="empty" style="padding:12px">${App.utils.escapeHtml(App.utils.t('no_entries_day'))}</div>`;
 popover.innerHTML = `<div class="day-popover-title">${App.utils.escapeHtml(App.utils.prettyDateLong(info.date))}</div><div class="day-popover-meta">W${App.utils.weekNumber(info.date)} · ${App.utils.escapeHtml(App.utils.prettyDate(info.weekStart))} — ${App.utils.escapeHtml(App.utils.prettyDate(info.weekEnd))}</div><div class="day-popover-list">${listHtml}</div><div class="day-popover-actions"><button class="btn primary" type="button" data-popover-details="${App.utils.escapeAttr(dateIso)}">${App.utils.t('open')}</button><button class="btn" type="button" data-popover-add="${App.utils.escapeAttr(dateIso)}">${App.utils.t('add_entry')}</button>${info.weekItem ? `<button class="btn" type="button" data-popover-edit-week="${App.utils.escapeAttr(info.weekItem.id)}">${App.utils.t('edit')}</button>` : ''}</div>`;
 const rect = anchor.getBoundingClientRect(); const margin = 12;
 let left = rect.left + rect.width / 2 - 150; let top = rect.bottom + 8;
 popover.hidden = false; const box = popover.getBoundingClientRect();
 left = Math.max(margin, Math.min(left, window.innerWidth - box.width - margin));
 if (top + box.height + margin > window.innerHeight) top = Math.max(margin, rect.top - box.height - 8);
 popover.style.left = `${left}px`; popover.style.top = `${top}px`;
 popover.querySelector('[data-popover-details]')?.addEventListener('click', (e) => { e.stopPropagation(); App.state.calendarSelectedDateIso = dateIso; App.ui.renderServiceYearDayDetails(dateIso); App.ui.hideDayPopover(true); App.els.calendarSideTitle?.scrollIntoView({ behavior: 'smooth', block: 'nearest' }); });
 popover.querySelector('[data-popover-add]')?.addEventListener('click', (e) => { e.stopPropagation(); App.ui.hideDayPopover(true); App.actions.openCalendarEditorForCreate(dateIso); });
 popover.querySelector('[data-popover-edit-week]')?.addEventListener('click', (e) => { e.stopPropagation(); App.ui.hideDayPopover(true); App.actions.openCalendarEditorForItem(e.currentTarget.dataset.popoverEditWeek); });
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
        if (App.els.calendarYearSelect) {
          App.els.calendarYearSelect.innerHTML = Array.from({ length: 9 }, (_, i) => serviceYear - 4 + i).map((y) => `<option value="${y}">${App.utils.serviceYearLabel(y)}</option>`).join('');
          App.els.calendarYearSelect.value = String(serviceYear);
        }
        const dayNames = App.utils.dayNames();
        const todayIso = App.utils.iso(new Date());
        const todayDate = App.utils.parseLocalDate(todayIso);
        const selectedDate = App.utils.parseLocalDate(App.state.calendarSelectedDateIso);
        const selectedInServiceYear = selectedDate && selectedDate >= bounds.start && selectedDate <= bounds.end;
        const fallbackSelectedIso = (todayDate && todayDate >= bounds.start && todayDate <= bounds.end) ? todayIso : App.utils.iso(bounds.start);
        if (!selectedInServiceYear) App.state.calendarSelectedDateIso = fallbackSelectedIso;
        const html = this.buildServiceYearMonths(serviceYear).map(({ month, year }) => {
          const monthStart = new Date(year, month, 1);
          const monthEnd = new Date(year, month + 1, 0);
          const items = App.data.buildCalendarItemsForMonth(month, year);
          const rows = [];
          let weekStart = App.utils.startOfWeek(monthStart);
          const lastWeekStart = App.utils.startOfWeek(monthEnd);
          while (weekStart <= lastWeekStart) {
            const weekEnd = App.utils.addDays(weekStart, 6);
            const dayCells = [];
            for (let i = 0; i < 7; i += 1) {
              const date = App.utils.addDays(weekStart, i);
              const iso = App.utils.iso(date);
              if (date.getMonth() !== month) {
                dayCells.push('<div class="sy-empty"></div>');
              } else {
                const dayItems = items.filter((item) => App.utils.overlaps(item.start, item.end, date, date));
                const hol = App.utils.getHolidayNames(iso);
                const title = [dayItems.length ? dayItems.map((item) => item.title).join(' · ') : '', hol ? hol.join(', ') : ''].filter(Boolean).join(' · ') || App.utils.t('add_on_date');
                dayCells.push(`<button class="sy-day ${iso === todayIso ? 'today' : ''} ${(date.getDay() === 0 || date.getDay() === 6) ? 'weekend' : ''} ${dayItems.length ? 'has-events' : ''} ${hol ? 'holiday' : ''} ${App.state.calendarSelectedDateIso === iso ? 'selected' : ''}" type="button" data-add-date="${App.utils.escapeAttr(iso)}" title="${App.utils.escapeAttr(title)}"><span>${date.getDate()}</span></button>`);
              }
            }
            const overlapping = items.filter((item) => {
              const segmentStart = new Date(Math.max(item.start.getTime(), monthStart.getTime(), weekStart.getTime()));
              const segmentEnd = new Date(Math.min(item.end.getTime(), monthEnd.getTime(), weekEnd.getTime()));
              return segmentStart <= segmentEnd;
            }).map((item) => {
              const segmentStart = new Date(Math.max(item.start.getTime(), monthStart.getTime(), weekStart.getTime()));
              const segmentEnd = new Date(Math.min(item.end.getTime(), monthEnd.getTime(), weekEnd.getTime()));
              const left = Math.max(0, App.utils.daysDiff(segmentStart, weekStart));
              const right = Math.min(6, App.utils.daysDiff(segmentEnd, weekStart));
              return { item, segmentStart, left, right };
            }).sort((a, b) => a.left - b.left || b.right - a.right || String(a.item.title).localeCompare(String(b.item.title)));
            // Assign lanes by day-overlap so same-week, non-overlapping-day items (e.g. Sat + Sun) share a row.
            const lanesInUse = [];
            overlapping.forEach((bar) => {
              let lane = 0;
              while ((lanesInUse[lane] || []).some((other) => bar.left <= other.right && other.left <= bar.right)) lane += 1;
              bar.lane = lane;
              (lanesInUse[lane] = lanesInUse[lane] || []).push(bar);
            });
            const visibleBars = overlapping.filter((bar) => bar.lane < 3);
            const bars = visibleBars.map(({ item, left, right, lane }) => {
              const span = Math.max(1, right - left + 1);
              const color = App.utils.clampColor(item.color);
              const label = App.utils.escapeHtml(item.title || App.utils.t('event'));
              return `<button class="sy-period-bar" type="button" data-detail-calendar-item="${App.utils.escapeAttr(item.id)}" data-add-date="${App.utils.escapeAttr(App.utils.iso(App.utils.addDays(weekStart, left)))}" style="--bar-left:${left};--bar-span:${span};--bar-lane:${lane};--bar-color:${color};" title="${App.utils.escapeAttr(item.title)}"><span>${label}</span></button>`;
            }).join('');
            const more = overlapping.length > visibleBars.length ? `<button class="sy-bar-more" type="button" data-add-date="${App.utils.escapeAttr(App.utils.iso(weekStart))}">+${overlapping.length - visibleBars.length}</button>` : '';
            rows.push(`<div class="sy-week-row">${dayCells.join('')}${bars}${more}</div>`);
            weekStart = App.utils.addDays(weekStart, 7);
          }
          return `<section class="sy-month-card"><div class="sy-month-title"><span>${App.utils.monthName(month)}</span><small>${year}</small></div><div class="sy-dow">${dayNames.map((name) => `<span>${name}</span>`).join('')}</div><div class="sy-weeks">${rows.join('')}</div></section>`;
        }).join('');
        const legendHtml = '';
        if (App.els.calendarGrid) App.els.calendarGrid.innerHTML = `${legendHtml}<div class="service-year-grid">${html}</div>`;

        const quickItems = filteredYearItems.sort((a,b) => a.start - b.start || a.end - b.end);
        const selectedIso = App.state.calendarSelectedDateIso || fallbackSelectedIso;
        const selectedDateForDetail = App.utils.parseLocalDate(selectedIso);
        const activeItem = selectedDateForDetail ? quickItems.find((item) => App.utils.overlaps(item.start, item.end, selectedDateForDetail, selectedDateForDetail)) : null;
        App.state.calendarDetailId = activeItem?.id || App.state.calendarDetailId || null;
        this.renderServiceYearDayDetails(selectedIso);
document.querySelectorAll('.sy-day[data-add-date]').forEach((btn) => {
 btn.addEventListener('click', (e) => {
 e.stopPropagation();
 const dateIso = btn.dataset.addDate;
 App.state.calendarSelectedDateIso = dateIso;
 App.ui.renderCalendar();
 const fresh = Array.from(document.querySelectorAll('.sy-day[data-add-date]')).find((node) => node.dataset.addDate === dateIso) || btn;
 App.ui.showServiceYearDayPopover(fresh, dateIso, true);
 });
 btn.addEventListener('mouseenter', () => {
 if (!window.matchMedia('(hover:hover)').matches || !btn.classList.contains('has-events')) return;
 App.ui.showServiceYearDayPopover(btn, btn.dataset.addDate, false);
 });
 btn.addEventListener('mouseleave', () => {
 if (!window.matchMedia('(hover:hover)').matches) return;
 window.setTimeout(() => App.ui.hideDayPopover(false), 260);
 });
});
        document.querySelectorAll('.sy-bar-more[data-add-date]').forEach((btn) => btn.addEventListener('click', (e) => { e.stopPropagation(); App.state.calendarSelectedDateIso = btn.dataset.addDate; App.ui.renderServiceYearDayDetails(btn.dataset.addDate); }));
        document.querySelectorAll('[data-detail-calendar-item]').forEach((btn) => btn.addEventListener('click', (e) => { e.stopPropagation(); const item = quickItems.find((entry) => entry.id === btn.dataset.detailCalendarItem); App.state.calendarDetailId = item?.id || null; App.ui.renderCalendarDetails(item || null); }));
      },
      renderCalendar() {
        const viewMonthStart = new Date(App.state.calendarYear, App.state.calendarMonth, 1);
        const serviceYearForView = App.utils.getServiceYearForDate(viewMonthStart);
        if (App.state.calendarView === 'year') { this.renderCalendarYear(serviceYearForView); return; }
        this.renderYearOptions(); this.renderLayoutOptions(); const year = App.state.calendarYear; const month = App.state.calendarMonth; if (App.els.monthLabel) App.els.monthLabel.textContent = `${App.utils.monthName(month)} ${year}`; const monthStart = new Date(year, month, 1); const monthEnd = new Date(year, month + 1, 0); const serviceYear = App.utils.getServiceYearForDate(monthStart); if (App.els.calendarServiceYearLabel) App.els.calendarServiceYearLabel.textContent = `${App.utils.t('service_year')}: ${App.utils.serviceYearLabel(serviceYear)}`; if (App.els.calendarRangeLabel) App.els.calendarRangeLabel.textContent = `${App.utils.prettyDateLong(monthStart)} — ${App.utils.prettyDateLong(monthEnd)}`; if (App.els.calendarPanelYearLabel) App.els.calendarPanelYearLabel.textContent = `${App.utils.t('context')}: ${App.utils.serviceYearLabel(serviceYear)}`; if (App.els.toggleTeamPanelBtn) App.els.toggleTeamPanelBtn.textContent = App.utils.t('calendar_view_year');
        const weeks = this.buildMonthGrid(month, year); const items = App.data.buildCalendarItemsForMonth(month, year); const itemsByWeek = new Map(); weeks.forEach((week) => itemsByWeek.set(week.id, [])); items.forEach((item) => { weeks.forEach((week) => { const weekStart = week.days[0].date; const weekEnd = week.days[6].date; if (App.utils.overlaps(item.start, item.end, weekStart, weekEnd)) { const leftIndex = Math.max(0, App.utils.daysDiff(item.start, weekStart)); const rightIndex = Math.min(6, App.utils.daysDiff(item.end, weekStart)); itemsByWeek.get(week.id).push({ ...item, leftIndex, rightIndex, span: rightIndex - leftIndex + 1 }); } }); });
        // Assign each bar to the lowest lane free of day-overlap, so events on different
        // days of the same week share one row instead of stacking in a staircase.
        itemsByWeek.forEach((weekItems) => {
          const lanes = [];
          weekItems.sort((a, b) => a.leftIndex - b.leftIndex || b.span - a.span);
          weekItems.forEach((bar) => {
            let lane = 0;
            while ((lanes[lane] || []).some((other) => bar.leftIndex <= other.rightIndex && other.leftIndex <= bar.rightIndex)) lane += 1;
            bar.lane = lane;
            (lanes[lane] = lanes[lane] || []).push(bar);
          });
        });
        if (App.els.calendarGrid) App.els.calendarGrid.innerHTML = `<div class="grid-cal"><div class="dow-row"><div class="dow-corner"></div><div class="dow-days">${App.utils.dayNames().map((name) => `<div class="dow">${name}</div>`).join('')}</div></div>${weeks.map((week) => { const bars = (itemsByWeek.get(week.id) || []).slice(0, 4); const extraCount = Math.max(0, (itemsByWeek.get(week.id) || []).length - 4); return `<div class="week-row"><span class="week-num">W${week.number}</span><div class="week-days">${week.days.map((day) => { const hol = App.utils.getHolidayNames(day.iso); return `<div class="day-cell ${day.inMonth ? '' : 'inactive'} ${day.isWeekend ? 'weekend' : ''} ${day.isToday ? 'today today-col' : ''} ${App.state.calendarSelectedDateIso === day.iso ? 'selected-day' : ''} ${hol ? 'holiday' : ''}" data-day="${App.utils.escapeAttr(day.iso)}" role="button" tabindex="0" ${hol ? `title="${App.utils.escapeAttr(hol.join(', '))}"` : ''}><div><span class="day-num">${day.day}</span>${day.day === 1 ? `<span class="day-month">${App.utils.monthName(day.month).slice(0, 3)}</span>` : ''}${hol ? '<span class="holiday-mark" aria-hidden="true">🎌</span>' : ''}</div><button class="day-add-btn" data-add-date="${App.utils.escapeAttr(day.iso)}" type="button" title="${App.utils.t('add_on_date')}" aria-label="${App.utils.escapeAttr(App.utils.t('add_on_date'))}">+</button></div>`; }).join('')}${bars.map((bar) => `<button class="event-bar" draggable="${bar.id.startsWith('entry:') ? 'true' : 'false'}" data-drag-entry="${bar.id.startsWith('entry:') ? App.utils.escapeAttr(bar.id) : ''}" data-detail-calendar-item="${App.utils.escapeAttr(bar.id)}" type="button" style="left:calc(${(bar.leftIndex / 7) * 100}% + 6px);width:calc(${(bar.span / 7) * 100}% - 12px);top:${34 + (bar.lane || 0) * 20}px;background:${App.utils.clampColor(bar.color)};">${App.utils.escapeHtml(bar.title)}</button>`).join('')}${extraCount ? `<div class="small" style="position:absolute;left:12px;bottom:6px">+ ${extraCount}</div>` : ''}</div></div>`; }).join('')}</div>`;
        if (App.els.calendarYearSelect) { App.els.calendarYearSelect.innerHTML = Array.from({ length: 9 }, (_, i) => year - 4 + i).map((y) => `<option value="${y}">${y}</option>`).join(''); App.els.calendarYearSelect.value = String(year); }
        const detail = items.find((item) => item.id === App.state.calendarDetailId) || items[0] || null; this.renderCalendarDetails(detail); if (App.state.calendarSelectedDateIso) this.renderServiceYearDayDetails(App.state.calendarSelectedDateIso);
        document.querySelectorAll('[data-detail-calendar-item]').forEach((btn) => btn.addEventListener('click', () => { const item = items.find((entry) => entry.id === btn.dataset.detailCalendarItem); App.state.calendarDetailId = item?.id || null; App.ui.renderCalendarDetails(item || null); }));
        document.querySelectorAll('.day-cell[data-day]').forEach((cell) => cell.addEventListener('click', () => { App.state.calendarSelectedDateIso = cell.dataset.day; App.ui.renderCalendar(); App.ui.renderServiceYearDayDetails(cell.dataset.day); }));
        document.querySelectorAll('.day-cell[data-day]').forEach((cell) => cell.addEventListener('keydown', (e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); App.state.calendarSelectedDateIso = cell.dataset.day; App.ui.renderCalendar(); App.ui.renderServiceYearDayDetails(cell.dataset.day); } }));
        document.querySelectorAll('[data-add-date]').forEach((btn) => btn.addEventListener('click', (e) => { e.stopPropagation(); App.actions.openCalendarEditorForCreate(btn.dataset.addDate); }));
        document.querySelectorAll('[data-edit-calendar-item]').forEach((btn) => btn.addEventListener('click', (e) => { e.stopPropagation(); App.actions.openCalendarEditorForItem(btn.dataset.editCalendarItem); }));
        // Drag-and-drop: move a visit entry to another day (shifts start+end by the same offset).
        document.querySelectorAll('[data-drag-entry]').forEach((bar) => {
          if (!bar.dataset.dragEntry) return;
          bar.addEventListener('dragstart', (e) => { e.dataTransfer.setData('text/plain', bar.dataset.dragEntry); e.dataTransfer.effectAllowed = 'move'; });
        });
        document.querySelectorAll('.day-cell[data-day]').forEach((cell) => {
          cell.addEventListener('dragover', (e) => { e.preventDefault(); e.dataTransfer.dropEffect = 'move'; cell.classList.add('drag-over'); });
          cell.addEventListener('dragleave', () => cell.classList.remove('drag-over'));
          cell.addEventListener('drop', (e) => {
            e.preventDefault(); cell.classList.remove('drag-over');
            const itemId = e.dataTransfer.getData('text/plain');
            if (!itemId || !itemId.startsWith('entry:')) return;
            App.actions.moveEntryToDate(itemId.slice(6), cell.dataset.day);
          });
        });
      },
      flagBadgesHtml(flags = {}) {
        const out = [];
        if (flags.f302) out.push(`<span class="flag-badge">S302</span>`);
        if (flags.letter) out.push(`<span class="flag-badge">✉</span>`);
        return out.length ? `<span class="flag-badges">${out.join('')}</span>` : '';
      },
      flagTogglesHtml(scope, id, flags = {}) {
        const s302Done = !!flags.f302;
        const letterDone = !!flags.letter;
        const status = (done) => done ? App.utils.t('sent_done') : App.utils.t('needs_sending');
        const card = (flag, label, done) => `
          <div class="send-card ${done ? 'is-done' : 'is-pending'}">
            <div class="send-card-top"><span>${label}</span><span class="send-status">${status(done)}</span></div>
            <label class="send-toggle"><input type="checkbox" data-${scope}-flag="${flag}" data-${scope}-id="${App.utils.escapeAttr(id)}" ${done ? 'checked' : ''}> ${App.utils.t('sent_done')}</label>
          </div>`;
        return `
          <div class="send-control" aria-label="${App.utils.escapeAttr(App.utils.t('sent_status'))}">
            <div class="send-control-head"><div><div class="send-control-title">${App.utils.t('send_control')}</div><div class="send-control-hint">${App.utils.t('before_visit_hint')}</div></div></div>
            <div class="send-control-grid">${card('letter', App.utils.t('letter_short'), letterDone)}${card('s302', App.utils.t('s302_short'), s302Done)}</div>
          </div>`;
      },
      renderCalendarDetails(item) {
        if (!App.els.calendarSideTitle || !App.els.calendarSideMeta || !App.els.calendarSideDetails) return; if (!item) { App.els.calendarSideTitle.textContent = App.utils.t('event_details'); App.els.calendarSideMeta.textContent = '—'; if (App.els.calendarSideCountdownRow) App.els.calendarSideCountdownRow.hidden = true; App.els.calendarSideDetails.innerHTML = `<div class="empty">${App.utils.t('no_events_month')}</div>`; return; }
        const itemData = App.data.getCalendarItemById(item.id) || item; const event = App.data.getEventById(itemData.eventId); App.els.calendarSideTitle.textContent = itemData.title; App.els.calendarSideMeta.textContent = `${App.utils.prettyDateLong(itemData.start)} — ${App.utils.prettyDateLong(itemData.end)}`;
        if (App.els.calendarSideCountdownRow) App.els.calendarSideCountdownRow.hidden = false;
        if (App.els.calendarSideCountdown) App.els.calendarSideCountdown.textContent = App.utils.countdownText(itemData.start, App.state.countdownUnit || 'days');
        if (App.els.countdownUnitSelect) App.els.countdownUnitSelect.value = App.state.countdownUnit || 'days';
        const addressHtml = event?.address ? `<a href="${App.utils.mapUrl(event.address)}" target="_blank" rel="noopener noreferrer">${App.utils.escapeHtml(event.address)}</a>` : App.utils.escapeHtml(App.utils.t('no_address'));
        const visitLabel = (visitType) => visitType === 'congregation' ? App.utils.t('visit_type_congregation') : visitType === 'group' ? App.utils.t('visit_type_group') : visitType === 'pregroup' ? App.utils.t('visit_type_pregroup') : '';
        const visitTypeRow = event?.visitType ? `<div class="side-row"><div class="side-label">${App.utils.t('visit_type')}</div><div class="side-value">${App.utils.escapeHtml(visitLabel(event.visitType))} ${this.flagBadgesHtml(itemData.flags)}</div></div>` : '';
        const sendControls = event?.visitType ? this.flagTogglesHtml(itemData.source, itemData.refId, itemData.flags) : '';
        // Last visit's results for this event (from past entries), shown for context.
        const today0 = new Date(); today0.setHours(0,0,0,0);
        const pastResult = event ? (App.state.app.entries || [])
          .filter((en) => en.eventId === event.id && en.resultNote && App.utils.parseLocalDate(en.end) < today0 && `entry:${en.id}` !== itemData.id)
          .sort((a, b) => String(b.end).localeCompare(String(a.end)))[0] : null;
        const resultRow = itemData.resultNote ? `<div class="side-row"><div class="side-label">${App.utils.t('result_note_short')}</div><div class="side-value">${App.utils.escapeHtml(itemData.resultNote)}</div></div>` : '';
        const pastResultRow = pastResult ? `<div class="side-row"><div class="side-label">${App.utils.t('last_visit_result')} (${App.utils.prettyDate(pastResult.end)})</div><div class="side-value">${App.utils.escapeHtml(pastResult.resultNote)}</div></div>` : '';
        const hasContact = event && (event.contactName || event.contactPhone || event.contactEmail || event.contactNote);
        const contactBlock = hasContact ? `<div class="send-control" style="margin-top:10px"><div class="send-control-title" style="margin-bottom:8px">${App.utils.t('contact_info')}</div>${event.contactName ? `<div class="side-row"><div class="side-label">${App.utils.t('contact_name')}</div><div class="side-value">${App.utils.escapeHtml(event.contactName)}</div></div>` : ''}${event.contactPhone ? `<div class="side-row"><div class="side-label">${App.utils.t('contact_phone')}</div><div class="side-value" style="display:flex;align-items:center;gap:6px"><a href="tel:${App.utils.escapeAttr(event.contactPhone.replace(/[^+\d]/g, ''))}">${App.utils.escapeHtml(event.contactPhone)}</a><button class="icon-btn copy-btn" type="button" data-copy-text="${App.utils.escapeAttr(event.contactPhone)}" title="${App.utils.escapeAttr(App.utils.t('copy'))}" aria-label="${App.utils.escapeAttr(App.utils.t('copy'))}">📋</button></div></div>` : ''}${event.contactEmail ? `<div class="side-row"><div class="side-label">${App.utils.t('contact_email')}</div><div class="side-value" style="display:flex;align-items:center;gap:6px"><a href="mailto:${App.utils.escapeAttr(event.contactEmail)}">${App.utils.escapeHtml(event.contactEmail)}</a><button class="icon-btn copy-btn" type="button" data-copy-text="${App.utils.escapeAttr(event.contactEmail)}" title="${App.utils.escapeAttr(App.utils.t('copy'))}" aria-label="${App.utils.escapeAttr(App.utils.t('copy'))}">📋</button></div></div>` : ''}${event.contactNote ? `<div class="side-row"><div class="side-label">${App.utils.t('contact_note')}</div><div class="side-value">${App.utils.escapeHtml(event.contactNote)}</div></div>` : ''}</div>` : '';
        App.els.calendarSideDetails.innerHTML = `<div class="side-row"><div class="side-label">${App.utils.t('type')}</div><div class="side-value">${itemData.source === 'week' ? App.utils.t('type_week') : App.utils.t('type_entry')}</div></div><div class="side-row"><div class="side-label">${App.utils.t('template')}</div><div class="side-value">${App.utils.escapeHtml(event?.name || App.utils.t('no_template'))}</div></div>${visitTypeRow}<div class="side-row"><div class="side-label">${App.utils.t('address')}</div><div class="side-value">${addressHtml}</div></div><div class="side-row"><div class="side-label">${App.utils.t('schedule')}</div><div class="side-value">${App.utils.escapeHtml(event?.schedule || App.utils.t('no_schedule'))}</div></div><div class="side-row"><div class="side-label">${App.utils.t('note')}</div><div class="side-value">${App.utils.escapeHtml(itemData.note || App.utils.t('no_note'))}</div></div>${resultRow}${pastResultRow}${sendControls}${contactBlock}<div style="display:grid;gap:8px;margin-top:12px"><button class="btn" type="button" id="detailEditBtn">${App.utils.t('edit')}</button>${itemData.source === 'entry' && event?.visitType ? `<button class="btn" type="button" id="detailVisitFormBtn">📋 Формуляр визита</button><button class="btn" type="button" id="detailLetterBtn">✉ ${App.utils.t('compose_letter')}</button>` : ''}<button class="btn" type="button" id="detailShareBtn">📤 ${App.utils.t('share')}</button><a class="btn" href="${App.utils.googleCalendarUrl(itemData, event)}" target="_blank" rel="noopener noreferrer">${App.utils.t('google_calendar')}</a><button class="btn" type="button" id="detailIcsBtn">${App.utils.t('apple_calendar')}</button>${event?.address ? `<a class="btn" href="${App.utils.mapUrl(event.address)}" target="_blank" rel="noopener noreferrer">${App.utils.t('google_maps')}</a>` : ''}</div>`;
        const editBtn = document.getElementById('detailEditBtn'); if (editBtn) editBtn.addEventListener('click', () => App.actions.openCalendarEditorForItem(itemData.id));
        const icsBtn = document.getElementById('detailIcsBtn'); if (icsBtn) icsBtn.addEventListener('click', () => App.actions.exportSingleEventIcs(itemData.id));
        document.getElementById('detailShareBtn')?.addEventListener('click', () => App.ui.shareWeekText(itemData, event));
        document.getElementById('detailVisitFormBtn')?.addEventListener('click', () => App.ui.openVisitForm(itemData.id));
        document.getElementById('detailLetterBtn')?.addEventListener('click', () => App.ui.openLetterModal(itemData.id));
        document.querySelectorAll('.copy-btn[data-copy-text]').forEach((btn) => btn.addEventListener('click', (e) => {
          e.preventDefault(); e.stopPropagation();
          const text = btn.dataset.copyText;
          const done = () => App.utils.toast(App.utils.t('copied'));
          if (navigator.clipboard?.writeText) navigator.clipboard.writeText(text).then(done).catch(() => done());
          else done();
        }));
        document.querySelectorAll('[data-entry-flag]').forEach((input) => input.addEventListener('change', (e) => {
          const entry = App.state.app.entries.find((it) => it.id === e.target.dataset.entryId);
          if (entry) { if (!entry.flags) entry.flags = { f302: false, letter: false }; if (e.target.dataset.entryFlag === 's302') entry.flags.f302 = e.target.checked; if (e.target.dataset.entryFlag === 'letter') entry.flags.letter = e.target.checked; App.store.save(); }
          App.ui.renderCalendarDetails(item);
        }));
        document.querySelectorAll('[data-week-flag]').forEach((input) => input.addEventListener('change', (e) => {
          let week = null; Object.values(App.state.app.serviceYears).forEach((sy) => { if (sy.weeks && sy.weeks[e.target.dataset.weekId]) week = sy.weeks[e.target.dataset.weekId]; });
          if (week) { if (e.target.dataset.weekFlag === 's302') week.flagS302 = e.target.checked; if (e.target.dataset.weekFlag === 'letter') week.flagLetter = e.target.checked; App.store.save(); }
          App.ui.renderCalendarDetails(item);
        }));
      },
      renderServiceYearDayDetails(dateIso) {
        if (!App.els.calendarSideTitle || !App.els.calendarSideMeta || !App.els.calendarSideDetails) return;
        const date = App.utils.parseLocalDate(dateIso);
        if (!date) return;
        if (App.els.calendarSideCountdownRow) App.els.calendarSideCountdownRow.hidden = false;
        if (App.els.calendarSideCountdown) App.els.calendarSideCountdown.textContent = App.utils.countdownText(dateIso, App.state.countdownUnit || 'days');
        if (App.els.countdownUnitSelect) App.els.countdownUnitSelect.value = App.state.countdownUnit || 'days';
        const sy = App.utils.getServiceYearForDate(date);
        const weekId = App.utils.weekIdForDate(date);
        const week = App.data.getWeek(sy, weekId);
        const weekStart = App.utils.parseLocalDate(week.start);
        const weekEnd = App.utils.parseLocalDate(week.end);
        const flagBadges = (flags = {}) => this.flagBadgesHtml(flags);
        const flagToggles = (scope, id, flags = {}) => this.flagTogglesHtml(scope, id, flags);
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
              entryId: entry.id,
              eventId: entry.eventId,
              event,
              title: entry.title || event?.name || App.utils.t('event'),
              color: event?.color || '#1f7a45',
              start: entry.start,
              end: entry.end,
              note: entry.note || '',
              flags: { f302: !!entry?.flags?.f302, letter: !!entry?.flags?.letter }
            };
          })
          .sort((a,b) => (a.start || '').localeCompare(b.start || ''));
        App.els.calendarSideTitle.textContent = App.utils.t('day_details_title');
        App.els.calendarSideMeta.textContent = `${App.utils.prettyDateLong(date)} · W${App.utils.weekNumber(date)} · ${App.utils.prettyDate(weekStart)} — ${App.utils.prettyDate(weekEnd)}`;
        const entriesBlock = `
          <div class="side-row"><div class="side-label">${App.utils.t('entries_on_day')}</div><div class="side-value">${dayEntries.length ? '' : App.utils.escapeHtml(App.utils.t('no_entries_day'))}</div></div>
          ${dayEntries.map((it) => {
            const itemData = { id: it.id, source: 'entry', refId: it.entryId, eventId: it.eventId, title: it.title, note: it.note, start: it.start, end: it.end, flags: it.flags };
            return `<div class="side-item-card">
              <strong>${App.utils.escapeHtml(it.title)} ${flagBadges(it.flags)}</strong>
              <div class="small">${it.start} — ${it.end}</div>
              <div class="small">${App.utils.escapeHtml(it.note || App.utils.t('no_note'))}</div>
              ${it.event?.address ? `<div class="small" style="margin-top:4px"><a href="${App.utils.mapUrl(it.event.address)}" target="_blank" rel="noopener noreferrer">${App.utils.escapeHtml(it.event.address)}</a></div>` : ''}
              ${flagToggles('entry', it.entryId, it.flags)}
              <div class="entry-actions">
                <button class="btn" type="button" data-edit-calendar-item="${App.utils.escapeAttr(it.id)}">${App.utils.t('edit')}</button>
                <a class="btn" href="${App.utils.googleCalendarUrl(itemData, it.event)}" target="_blank" rel="noopener noreferrer">${App.utils.t('google_calendar')}</a>
                <button class="btn" type="button" data-ics-id="${App.utils.escapeAttr(it.id)}">${App.utils.t('apple_calendar')}</button>
                ${it.event?.address ? `<a class="btn" href="${App.utils.mapUrl(it.event.address)}" target="_blank" rel="noopener noreferrer">${App.utils.t('google_maps')}</a>` : ''}
              </div>
            </div>`;
          }).join('')}
          <div class="calendar-action-grid" style="margin-top:10px"><button class="btn" type="button" id="syAddEntryBtn">${App.utils.t('add_entry')}</button></div>`;
        App.els.calendarSideDetails.innerHTML = entriesBlock;
        document.getElementById('syAddEntryBtn')?.addEventListener('click', () => App.actions.openCalendarEditorForCreate(dateIso));
        document.querySelectorAll('[data-edit-calendar-item]').forEach((btn) => btn.addEventListener('click', (e) => {
          e.stopPropagation();
          App.actions.openCalendarEditorForItem(btn.dataset.editCalendarItem);
        }));
        document.querySelectorAll('[data-ics-id]').forEach((btn) => btn.addEventListener('click', () => App.actions.exportSingleEventIcs(btn.dataset.icsId)));
        document.querySelectorAll('[data-entry-flag]').forEach((input) => input.addEventListener('change', () => App.actions.toggleEntrySentFlag(input.dataset.entryId, input.dataset.entryFlag, input.checked)));
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
        if (App.els.editorResultInput) App.els.editorResultInput.value = data.resultNote || '';
        if (App.els.editorResultLabel) App.els.editorResultLabel.textContent = App.utils.t('result_note');
        App.els.editorReadonly.textContent = isEdit ? App.utils.t('edit_entry_help') : App.utils.t('create_entry_help');
        App.els.editorDeleteBtn.style.display = isEdit ? '' : 'none';
        const isWeekEdit = isEdit && data.source === 'week';
        if (App.els.editorFlagsRow) App.els.editorFlagsRow.hidden = isWeekEdit;
        if (App.els.editorFlagS302) App.els.editorFlagS302.checked = !!data.flags?.f302;
        if (App.els.editorFlagLetter) App.els.editorFlagLetter.checked = !!data.flags?.letter;
      },
      openModal(modalEl) {
        if (!modalEl) return;
        modalEl.hidden = false;
        const card = modalEl.querySelector('.modal-card');
        if (card) card.scrollTop = 0;
      },
      closeModal(modalEl) {
        if (modalEl) modalEl.hidden = true;
      },
      openStatsModal() {
        const sy = App.state.calendarYear ? App.utils.getServiceYearForDate(new Date(App.state.calendarYear, App.state.calendarMonth || 0, 1)) : App.utils.getServiceYearForDate(new Date());
        const stats = App.data.getServiceYearStats(sy);
        if (App.els.statsModalTitle) App.els.statsModalTitle.textContent = App.utils.t('stats_title');
        if (App.els.statsModalSub) App.els.statsModalSub.textContent = App.utils.serviceYearLabel(sy);
        const pct = (a, b) => b ? Math.round((a / b) * 100) : 0;
        const statCard = (label, value, sub) => `<div class="card" style="padding:14px;box-shadow:none"><div class="small">${label}</div><div style="font-size:26px;font-weight:800">${value}</div>${sub ? `<div class="small">${sub}</div>` : ''}</div>`;
        const unvisitedHtml = stats.unvisited.length
          ? `<div class="card" style="padding:14px;box-shadow:none"><div class="small" style="font-weight:700;margin-bottom:8px">⚠️ ${App.utils.t('unvisited_title')} (${stats.unvisited.length})</div>${stats.unvisited.map((ev) => `<div class="side-row"><div class="side-label"><span class="dot" style="background:${App.utils.clampColor(ev.color)}"></span>${App.utils.escapeHtml(ev.name)}</div><div class="side-value small">${App.utils.escapeHtml(ev.contactName || '')}</div></div>`).join('')}</div>`
          : `<div class="empty">${App.utils.t('unvisited_none')}</div>`;
        if (App.els.statsModalBody) App.els.statsModalBody.innerHTML = `
          <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(140px,1fr));gap:12px">
            ${statCard(App.utils.t('stats_planned'), stats.planned)}
            ${statCard(App.utils.t('stats_done'), stats.done)}
            ${statCard('S-302', `${stats.s302Sent}/${stats.planned}`, `${pct(stats.s302Sent, stats.planned)}%`)}
            ${statCard(App.utils.t('letter'), `${stats.letterSent}/${stats.planned}`, `${pct(stats.letterSent, stats.planned)}%`)}
          </div>${unvisitedHtml}`;
        this.openModal(App.els.statsModal);
      },
      openPlannerModal() {
        const sy = App.utils.getServiceYearForDate(new Date());
        const stats = App.data.getServiceYearStats(sy);
        if (App.els.plannerStartInput && !App.els.plannerStartInput.value) App.els.plannerStartInput.value = App.utils.iso(new Date());
        if (App.els.plannerEndInput && !App.els.plannerEndInput.value) App.els.plannerEndInput.value = App.utils.iso(stats.syEnd);
        if (App.els.plannerEventsList) App.els.plannerEventsList.innerHTML = stats.unvisited.length
          ? stats.unvisited.map((ev) => {
              const settings = App.state.app.settings;
              const hasHome = typeof settings.homeLat === 'number' && typeof settings.homeLng === 'number';
              const hasCoords = typeof ev.lat === 'number' && typeof ev.lng === 'number';
              const km = (hasHome && hasCoords) ? App.utils.haversineKm(settings.homeLat, settings.homeLng, ev.lat, ev.lng) : null;
              const distLabel = km !== null ? `<span class="small" style="color:var(--muted)">~${Math.round(km)} км</span>` : `<span class="small" style="color:var(--muted)">без координат</span>`;
              return `<label style="display:flex;align-items:center;gap:10px;padding:8px;border:1px solid var(--line);border-radius:12px"><input type="checkbox" data-planner-event="${App.utils.escapeAttr(ev.id)}" style="width:auto" checked /><span class="dot" style="background:${App.utils.clampColor(ev.color)}"></span><span style="flex:1">${App.utils.escapeHtml(ev.name)}</span>${distLabel}</label>`;
            }).join('')
          : `<div class="empty">${App.utils.t('unvisited_none')}</div>`;
        if (App.els.plannerPreview) App.els.plannerPreview.textContent = '';
        this.openModal(App.els.plannerModal);
      },
      applyAutoPlan() {
        const startIso = App.els.plannerStartInput?.value, endIso = App.els.plannerEndInput?.value;
        const rs = App.utils.parseLocalDate(startIso), re = App.utils.parseLocalDate(endIso);
        if (!rs || !re || rs > re) return App.utils.toast(App.utils.t('wrong_end_date'));
        const selectedIds = Array.from(document.querySelectorAll('[data-planner-event]:checked')).map((el) => el.dataset.plannerEvent);
        if (!selectedIds.length) return App.utils.toast(App.utils.t('planner_nothing'));

        const NEAR_KM = 100; // day-trip range from home — can return every week
        const CLUSTER_KM = 150; // congregations within this of each other join the same away-tour
        const MAX_TOUR_WEEKS = 6; // "можем оставаться на посещениях от пяти до максимум шести недель"

        const settings = App.state.app.settings;
        const hasHome = typeof settings.homeLat === 'number' && typeof settings.homeLng === 'number';
        const selectedEvents = selectedIds.map((id) => App.data.getEventById(id)).filter(Boolean);
        const withDistance = selectedEvents.map((ev) => {
          const hasCoords = typeof ev.lat === 'number' && typeof ev.lng === 'number';
          const distance = (hasHome && hasCoords) ? App.utils.haversineKm(settings.homeLat, settings.homeLng, ev.lat, ev.lng) : null;
          return { event: ev, distance };
        });
        // Congregations without coordinates are treated as "near" by default — we simply can't
        // tell how far they are, so they shouldn't be forced into a far-away tour.
        const nearList = withDistance.filter((e) => e.distance === null || e.distance <= NEAR_KM);
        const farPool = withDistance.filter((e) => e.distance !== null && e.distance > NEAR_KM);
        const uncoded = withDistance.filter((e) => e.distance === null).length;

        // Greedy geographic clustering: repeatedly take the farthest remaining congregation as a
        // seed and pull in every other remaining one within CLUSTER_KM of any cluster member.
        const clusters = [];
        const remaining = [...farPool];
        while (remaining.length) {
          remaining.sort((a, b) => b.distance - a.distance);
          const cluster = [remaining.shift()];
          let grew = true;
          while (grew) {
            grew = false;
            for (let i = remaining.length - 1; i >= 0; i -= 1) {
              const candidate = remaining[i];
              const closeToCluster = cluster.some((m) => App.utils.haversineKm(m.event.lat, m.event.lng, candidate.event.lat, candidate.event.lng) <= CLUSTER_KM);
              if (closeToCluster) { cluster.push(candidate); remaining.splice(i, 1); grew = true; }
            }
          }
          // Order the tour starting from the member closest to home (natural way in/out), so
          // consecutive weeks move outward instead of jumping randomly between cities.
          cluster.sort((a, b) => a.distance - b.distance);
          clusters.push(cluster);
        }
        // A cluster with more congregations than fit in one stretch becomes several consecutive tours.
        const tours = [];
        clusters.forEach((cluster) => { for (let i = 0; i < cluster.length; i += MAX_TOUR_WEEKS) tours.push(cluster.slice(i, i + MAX_TOUR_WEEKS)); });

        const isWeekBusy = (weekStart, weekEnd) => (App.state.app.entries || []).some((entry) => {
          const es = App.utils.parseLocalDate(entry.start), ee = App.utils.parseLocalDate(entry.end);
          return es && ee && App.utils.overlaps(es, ee, weekStart, weekEnd);
        });
        const occupied = new Set();
        const weekFree = (weekStart) => !occupied.has(App.utils.iso(weekStart)) && !isWeekBusy(weekStart, App.utils.addDays(weekStart, 6));
        const assignments = [];

        // Place each far-away tour into the first run of fully-free consecutive weeks that fits it.
        tours.forEach((tour) => {
          let cursor = App.utils.startOfWeek(rs); if (cursor < rs) cursor = App.utils.addDays(cursor, 7);
          while (cursor <= re) {
            let fits = true;
            for (let k = 0; k < tour.length; k += 1) { if (!weekFree(App.utils.addDays(cursor, k * 7))) { fits = false; break; } }
            if (fits) {
              tour.forEach((member, k) => {
                const weekStart = App.utils.addDays(cursor, k * 7);
                occupied.add(App.utils.iso(weekStart));
                const vStart = App.utils.addDays(weekStart, 1), vEnd = App.utils.addDays(weekStart, 6);
                assignments.push({ eventId: member.event.id, event: member.event, start: App.utils.iso(vStart), end: App.utils.iso(vEnd) });
              });
              break;
            }
            cursor = App.utils.addDays(cursor, 7);
          }
        });

        // Fill remaining free weeks with the near (day-trip) congregations, in list order.
        let cursor = App.utils.startOfWeek(rs); if (cursor < rs) cursor = App.utils.addDays(cursor, 7);
        for (const { event } of nearList) {
          while (cursor <= re && !weekFree(cursor)) cursor = App.utils.addDays(cursor, 7);
          if (cursor > re) break;
          occupied.add(App.utils.iso(cursor));
          const vStart = App.utils.addDays(cursor, 1), vEnd = App.utils.addDays(cursor, 6);
          assignments.push({ eventId: event.id, event, start: App.utils.iso(vStart), end: App.utils.iso(vEnd) });
          cursor = App.utils.addDays(cursor, 7);
        }

        if (!assignments.length) return App.utils.toast(App.utils.t('planner_no_free_weeks'));
        assignments.sort((a, b) => String(a.start).localeCompare(String(b.start)));
        const summary = assignments.map((a) => `${a.event?.name}: ${App.utils.prettyDate(a.start)} — ${App.utils.prettyDate(a.end)}`).join('\n');
        const clusterNote = tours.length ? `\n\n${tours.length > clusters.length ? tours.length : clusters.length} дальн. выезд(ов) сгруппировано вместе.` : '';
        const uncodedNote = uncoded ? `\n⚠️ ${uncoded} собрание(й) без координат учтено как «рядом» — добавь адрес и нажми 📍 в редакторе собрания для точной группировки.` : '';
        if (!window.confirm(`${App.utils.t('planner_confirm')} (${assignments.length}):${uncodedNote}\n\n${summary}${clusterNote}`)) return;
        assignments.forEach((a) => App.state.app.entries.push({ id: App.utils.uid('entry'), eventId: a.eventId, start: a.start, end: a.end, title: a.event?.name || '', note: '', flags: { f302: false, letter: false }, resultNote: '', source: 'entry' }));
        App.store.save();
        this.closeModal(App.els.plannerModal);
        App.ui.renderAll();
        App.utils.toast(`${App.utils.t('planner_created')}: ${assignments.length}`);
      },
      shareWeekText(itemData, event) {
        const text = `${itemData.title}\n${App.utils.prettyDateLong(itemData.start)} — ${App.utils.prettyDateLong(itemData.end)}${event?.address ? `\n${App.utils.t('address')}: ${event.address}` : ''}${event?.schedule ? `\n${App.utils.t('schedule')}: ${event.schedule}` : ''}`;
        if (navigator.share) { navigator.share({ text }).catch(() => {}); }
        else if (navigator.clipboard?.writeText) { navigator.clipboard.writeText(text).then(() => App.utils.toast(App.utils.t('copied'))).catch(() => {}); }
      },
      renderNextVisitCard() {
        let host = document.getElementById('nextVisitCard');
        const side = document.querySelector('.calendar-side');
        if (!side) return;
        if (!host) { host = document.createElement('div'); host.id = 'nextVisitCard'; host.className = 'side-card'; host.style.marginBottom = '14px'; side.insertBefore(host, side.firstChild); }
        const today = new Date(); today.setHours(0,0,0,0);
        const upcoming = (App.state.app.entries || [])
          .map((entry) => ({ entry, event: App.data.getEventById(entry.eventId), start: App.utils.parseLocalDate(entry.start) }))
          .filter(({ event, start, entry }) => event?.visitType && start && App.utils.parseLocalDate(entry.end) >= today)
          .sort((a, b) => a.start - b.start)[0];
        if (!upcoming) { host.innerHTML = `<h4 style="margin:0 0 6px">🎯 ${App.utils.t('next_visit')}</h4><div class="empty" style="padding:12px">${App.utils.t('next_visit_none')}</div>`; return; }
        const { entry, event } = upcoming;
        const flags = entry.flags || {};
        const pill = (ok, label) => `<span class="pill" style="${ok ? '' : 'background:#fee2e2;border-color:#fecaca;color:#991b1b'}">${ok ? '✓' : '✗'} ${label}</span>`;
        host.innerHTML = `<h4 style="margin:0 0 6px">🎯 ${App.utils.t('next_visit')}</h4>
          <strong>${App.utils.escapeHtml(entry.title || event.name)}</strong>
          <div class="small">${App.utils.prettyDateLong(entry.start)} — ${App.utils.prettyDateLong(entry.end)}</div>
          <div class="small" style="font-weight:700;margin:4px 0">${App.utils.countdownText(entry.start, App.state.countdownUnit || 'days')}</div>
          <div class="pill-row" style="margin:6px 0">${pill(flags.f302, 'S-302')}${pill(flags.letter, App.utils.t('letter_short'))}</div>
          ${event.address ? `<div class="small"><a href="${App.utils.mapUrl(event.address)}" target="_blank" rel="noopener noreferrer">📍 ${App.utils.escapeHtml(event.address)}</a></div>` : ''}
          ${event.contactName || event.contactPhone ? `<div class="small">👤 ${App.utils.escapeHtml([event.contactName, event.contactPhone].filter(Boolean).join(' · '))}</div>` : ''}
          <div style="display:flex;gap:6px;flex-wrap:wrap;margin-top:8px">
            <button class="btn" type="button" data-detail-calendar-item="entry:${App.utils.escapeAttr(entry.id)}" id="nextVisitOpenBtn">${App.utils.t('open')}</button>
            ${event.visitType ? `<button class="btn" type="button" id="nextVisitLetterBtn">✉ ${App.utils.t('compose_letter')}</button>` : ''}
          </div>`;
        document.getElementById('nextVisitOpenBtn')?.addEventListener('click', () => { App.state.calendarDetailId = `entry:${entry.id}`; App.ui.renderCalendarDetails({ id: `entry:${entry.id}` }); });
        document.getElementById('nextVisitLetterBtn')?.addEventListener('click', () => App.ui.openLetterModal(`entry:${entry.id}`));
      },
      checkAutoBackupReminder() {
        try {
          const last = App.state.app.meta?.lastBackupAt ? new Date(App.state.app.meta.lastBackupAt) : null;
          const days = last ? Math.floor((Date.now() - last.getTime()) / 86400000) : Infinity;
          if (days >= 7) {
            const label = last ? App.utils.t('backup_overdue', { days }) : App.utils.t('backup_never');
            if (window.confirm(`💾 ${label}\n\n${App.utils.t('backup_prompt')}`)) App.actions.downloadBackup();
          }
        } catch (_) {}
      },
      // --- PIN protection (local barrier, not cryptographic security) ---
      pinHash(pin) { let h = 5381; const s = `syp:${pin}`; for (let i = 0; i < s.length; i += 1) h = ((h << 5) + h + s.charCodeAt(i)) | 0; return String(h); },
      getStoredPin() { try { return localStorage.getItem('syp-pin-hash') || ''; } catch (_) { return ''; } },
      setupPin() {
        const existing = this.getStoredPin();
        if (existing) {
          const current = window.prompt(App.utils.t('pin_enter_current'));
          if (current === null) return;
          if (this.pinHash(current.trim()) !== existing) return App.utils.toast(App.utils.t('pin_wrong'));
          if (window.confirm(App.utils.t('pin_disable_confirm'))) { try { localStorage.removeItem('syp-pin-hash'); } catch (_) {} App.utils.toast(App.utils.t('pin_disabled')); this.updatePinButton(); return; }
        }
        const pin = window.prompt(App.utils.t('pin_set_prompt'));
        if (!pin) return;
        const clean = pin.trim();
        if (!/^\d{4,8}$/.test(clean)) return App.utils.toast(App.utils.t('pin_format'));
        try { localStorage.setItem('syp-pin-hash', this.pinHash(clean)); } catch (_) {}
        App.utils.toast(App.utils.t('pin_enabled'));
        this.updatePinButton();
      },
      updatePinButton() {
        if (App.els.pinSetupBtn) App.els.pinSetupBtn.textContent = this.getStoredPin() ? `🔒 ${App.utils.t('pin_on')}` : `🔒 ${App.utils.t('pin_off')}`;
      },
      wrapSelection(editor, styleProp, value) {
        const sel = window.getSelection ? window.getSelection() : null;
        if (!sel || !sel.rangeCount || sel.isCollapsed) return false;
        const range = sel.getRangeAt(0);
        if (editor.contains && !editor.contains(range.commonAncestorContainer)) return false;
        let container = range.commonAncestorContainer;
        if (container.nodeType === 3) container = container.parentNode;
        if (container && container.dataset && container.dataset.rteStyleProp === styleProp && container.textContent === range.toString() && range.toString().length) {
          // Selection exactly matches an existing styled span — toggle it off (unwrap).
          const parent = container.parentNode;
          while (container.firstChild) parent.insertBefore(container.firstChild, container);
          parent.removeChild(container);
          return true;
        }
        const span = document.createElement('span');
        span.dataset.rteStyleProp = styleProp;
        span.style[styleProp] = value;
        try {
          range.surroundContents(span);
        } catch (_) {
          const contents = range.extractContents();
          span.appendChild(contents);
          range.insertNode(span);
        }
        const newRange = document.createRange();
        newRange.selectNodeContents(span);
        sel.removeAllRanges();
        sel.addRange(newRange);
        return true;
      },
      onRteEditorInput(editor) {
        const pageRef = editor.dataset.rtePage;
        const type = App.state.letterEditingType || 'Congregation';
        if (pageRef === 'body') {
          App.ui.setLetterTemplateFor(type, editor.innerHTML);
        } else {
          const pages = App.state.app.settings.letterPages[type] || [];
          const page = pages.find((p) => p.id === pageRef);
          if (page) { page.html = editor.innerHTML; App.store.save(); }
        }
      },
      bindRteEditor(editor) {
        if (!editor || editor.dataset.rteBound) return;
        editor.dataset.rteBound = '1';
        editor.addEventListener('focus', () => { App.state.activeRteEditor = editor; });
        editor.addEventListener('click', () => { App.state.activeRteEditor = editor; });
        editor.addEventListener('input', () => App.ui.onRteEditorInput(editor));
      },
      wireRteToolbar() {
        document.querySelectorAll('[data-rte-cmd]').forEach((btn) => {
          if (btn.dataset.rteWired) return;
          btn.dataset.rteWired = '1';
          // Prevent the button's mousedown from stealing focus/collapsing the selection —
          // otherwise by the time 'click' fires, window.getSelection() no longer reflects
          // what the user actually selected in the editor.
          btn.addEventListener('mousedown', (e) => e.preventDefault());
          btn.addEventListener('click', () => {
            const editor = App.state.activeRteEditor || App.els.letterTemplateEditor;
            if (!editor) return;
            const cmd = btn.dataset.rteCmd;
            const map = { bold: ['fontWeight', 'bold'], italic: ['fontStyle', 'italic'], underline: ['textDecoration', 'underline'] };
            const [prop, value] = map[cmd] || [];
            if (!prop || !App.ui.wrapSelection(editor, prop, value)) { App.utils.toast('Сначала выдели текст в редакторе'); return; }
            App.ui.onRteEditorInput(editor);
          });
        });
        document.querySelectorAll('[data-rte-size]').forEach((btn) => {
          if (btn.dataset.rteWired) return;
          btn.dataset.rteWired = '1';
          btn.addEventListener('mousedown', (e) => e.preventDefault());
          btn.addEventListener('click', () => {
            const editor = App.state.activeRteEditor || App.els.letterTemplateEditor;
            if (!editor) return;
            if (!App.ui.wrapSelection(editor, 'fontSize', `${btn.dataset.rteSize}pt`)) { App.utils.toast('Сначала выдели текст в редакторе'); return; }
            App.ui.onRteEditorInput(editor);
          });
        });
        App.ui.bindRteEditor(App.els.letterTemplateEditor);
      },
      renderLetterPagesList() {
        const type = App.state.letterEditingType || 'Congregation';
        const pages = App.state.app.settings.letterPages[type] || [];
        if (!App.els.letterPagesList) return;
        if (!pages.length) { App.els.letterPagesList.innerHTML = `<div class="empty">Дополнительных страниц нет — только письмо на странице 1.</div>`; return; }
        App.els.letterPagesList.innerHTML = pages.map((page, i) => `
          <div class="card" style="padding:14px;box-shadow:none;border:1px solid var(--line)" data-page-card="${App.utils.escapeAttr(page.id)}">
            <div style="display:flex;gap:8px;align-items:center;margin-bottom:8px">
              <span class="small" style="white-space:nowrap">Стр. ${i + 2}:</span>
              <input type="text" data-page-title="${App.utils.escapeAttr(page.id)}" value="${App.utils.escapeAttr(page.title || '')}" placeholder="Заголовок страницы (необязательно)" style="flex:1" />
              <button class="btn danger" type="button" data-remove-page="${App.utils.escapeAttr(page.id)}" style="white-space:nowrap">Удалить страницу</button>
            </div>
            <div class="rte-editor" data-rte-page="${App.utils.escapeAttr(page.id)}" contenteditable="true">${page.html || ''}</div>
          </div>`).join('');
        pages.forEach((page) => {
          const card = App.els.letterPagesList.querySelector(`[data-page-card="${page.id}"]`);
          if (!card) return;
          const editor = card.querySelector('.rte-editor');
          App.ui.bindRteEditor(editor);
          card.querySelector('[data-page-title]')?.addEventListener('input', (e) => { page.title = e.target.value; App.store.save(); });
          card.querySelector('[data-remove-page]')?.addEventListener('click', () => {
            if (!window.confirm('Удалить эту страницу письма?')) return;
            const idx = pages.findIndex((p) => p.id === page.id);
            if (idx >= 0) pages.splice(idx, 1);
            App.store.save();
            App.ui.renderLetterPagesList();
          });
        });
      },
      parseRichLetterBlocks(html) {
        const container = document.createElement('div');
        container.innerHTML = html;
        const walkRuns = (node, inherited) => {
          const runs = [];
          (node.childNodes || []).forEach((child) => {
            if (child.nodeType === 3) {
              if (child.textContent) runs.push({ text: child.textContent, ...inherited });
            } else if (child.nodeType === 1) {
              const style = child.style || {};
              const tag = (child.tagName || '').toUpperCase();
              const next = {
                bold: inherited.bold || style.fontWeight === 'bold' || tag === 'B' || tag === 'STRONG',
                italic: inherited.italic || style.fontStyle === 'italic' || tag === 'I' || tag === 'EM',
                underline: inherited.underline || style.textDecoration === 'underline' || tag === 'U',
                size: (style.fontSize ? parseInt(style.fontSize, 10) : null) || inherited.size,
              };
              runs.push(...walkRuns(child, next));
            }
          });
          return runs;
        };
        const readBlock = (el) => {
          const style = el.style || {};
          const baseline = { bold: style.fontWeight === 'bold', italic: style.fontStyle === 'italic', underline: style.textDecoration === 'underline', size: style.fontSize ? parseInt(style.fontSize, 10) : null };
          const runs = walkRuns(el, baseline).filter((r) => r.text);
          return runs.length ? runs : ((el.textContent || '').trim() ? [{ text: el.textContent.trim(), ...baseline }] : []);
        };
        const blocks = [];
        if (!container.children.length) {
          const runs = readBlock(container);
          if (runs.length) blocks.push({ runs });
          return blocks;
        }
        Array.from(container.children).forEach((el) => {
          const runs = readBlock(el);
          if (runs.length) blocks.push({ runs });
        });
        return blocks;
      },
      letterTypeSuffix(visitType) {
        return visitType === 'group' ? 'Group' : visitType === 'pregroup' ? 'Pregroup' : 'Congregation';
      },
      getLetterTemplateFor(visitType) {
        const suffix = this.letterTypeSuffix(visitType);
        return App.state.app.settings['letterTemplate' + suffix] || DEFAULT_LETTER_TEMPLATE_HTML;
      },
      setLetterTemplateFor(suffix, html) {
        App.state.app.settings['letterTemplate' + suffix] = html;
        App.store.save();
      },
      syncEventVisitFieldsVisibility() {
        if (App.els.eventVisitOnlyFields) App.els.eventVisitOnlyFields.style.display = App.els.eventVisitTypeInput?.value ? 'contents' : 'none';
      },
      renderEventDistanceStatus() {
        if (!App.els.eventDistanceStatus) return;
        const coords = App.state.editingEventCoords;
        const settings = App.state.app.settings;
        if (!coords) { App.els.eventDistanceStatus.textContent = ''; return; }
        if (typeof settings.homeLat === 'number' && typeof settings.homeLng === 'number') {
          const km = App.utils.haversineKm(settings.homeLat, settings.homeLng, coords.lat, coords.lng);
          App.els.eventDistanceStatus.textContent = km === null ? '📍 Координаты сохранены' : `📍 ~${Math.round(km)} км от дома`;
        } else {
          App.els.eventDistanceStatus.textContent = '📍 Координаты сохранены (укажи место проживания в Настройках, чтобы видеть расстояние)';
        }
      },
      async geocodeCurrentEvent() {
        const address = App.els.eventAddressInput?.value.trim();
        if (!address) return App.utils.toast('Сначала укажи адрес собрания');
        if (App.els.eventDistanceStatus) App.els.eventDistanceStatus.textContent = 'Определяю координаты…';
        const result = await App.utils.geocodeAddress(address);
        if (!result) { if (App.els.eventDistanceStatus) App.els.eventDistanceStatus.textContent = '⚠️ Не удалось определить координаты по этому адресу'; return; }
        App.state.editingEventCoords = { lat: result.lat, lng: result.lng };
        // If editing an existing (already saved) event, persist immediately so the user doesn't have to remember to hit Save.
        if (App.state.editingEventId) {
          const existing = App.data.getEventById(App.state.editingEventId);
          if (existing) { existing.lat = result.lat; existing.lng = result.lng; App.store.save(); }
        }
        App.ui.renderEventDistanceStatus();
      },
      async geocodeHome() {
        const address = App.els.homeAddressInput?.value.trim();
        if (!address) return App.utils.toast('Сначала укажи город проживания');
        if (App.els.homeGeocodeStatus) App.els.homeGeocodeStatus.textContent = 'Определяю координаты…';
        const result = await App.utils.geocodeAddress(address);
        if (!result) { if (App.els.homeGeocodeStatus) App.els.homeGeocodeStatus.textContent = '⚠️ Не удалось определить координаты по этому адресу'; return; }
        App.state.app.settings.homeLat = result.lat;
        App.state.app.settings.homeLng = result.lng;
        App.store.save();
        if (App.els.homeGeocodeStatus) App.els.homeGeocodeStatus.textContent = `📍 Найдено: ${result.displayName || address}`;
        App.utils.toast('Место проживания сохранено');
      },
      retranslateVisitFormWeekdays(oldLang, newLang) {
        const state = App.state.visitFormData; if (!state) return;
        const weekdayKeys = ['weekdayMon','weekdayTue','weekdayWed','weekdayThu','weekdayFri','weekdaySat','weekdaySun'];
        const newDict = VP_I18N_DICTS[newLang] || VP_I18N_DICTS.ru;
        // A day label may have been typed in ANY language (including before this feature existed,
        // or after manual edits) — match it against every known language's weekday names, not just
        // the one it was supposedly created in, then rewrite it in the newly selected language.
        const findKeyForLabel = (label) => weekdayKeys.find((key) => Object.values(VP_I18N_DICTS).some((dict) => dict[key] === label));
        (state.servicePlan || []).forEach((day) => {
          const key = findKeyForLabel(day.label);
          if (key) day.label = newDict[key];
        });
        (state.meals || []).forEach((meal) => {
          const key = findKeyForLabel(meal.day);
          if (key) meal.day = newDict[key];
        });
      },
      showPinGateIfNeeded() {
        const stored = this.getStoredPin();
        if (!stored || !App.els.pinOverlay) return;
        App.els.pinOverlay.hidden = false;
        if (App.els.pinInput) App.els.pinInput.value = '';
        if (App.els.pinError) App.els.pinError.textContent = '';
        if (!App.state.pinGateWired) {
          App.state.pinGateWired = true;
          const tryUnlock = () => {
            const currentStored = this.getStoredPin();
            const value = (App.els.pinInput?.value || '').trim();
            if (!currentStored || this.pinHash(value) === currentStored) { App.els.pinOverlay.hidden = true; if (App.els.pinInput) App.els.pinInput.value = ''; if (App.els.pinError) App.els.pinError.textContent = ''; }
            else { if (App.els.pinError) App.els.pinError.textContent = App.utils.t('pin_wrong'); if (App.els.pinInput) { App.els.pinInput.value = ''; App.els.pinInput.focus(); } }
          };
          App.els.pinSubmitBtn?.addEventListener('click', tryUnlock);
          App.els.pinInput?.addEventListener('keydown', (e) => { if (e.key === 'Enter') tryUnlock(); });
          // Installed PWAs on phones typically suspend/resume the same page instance instead of
          // reloading it when reopened from the home screen — init() only runs once at true cold
          // start, so without this the lock screen would only ever appear the very first time.
          // Re-check whenever the app becomes visible again after being backgrounded.
          const recheck = () => { if (document.visibilityState === 'visible') App.ui.showPinGateIfNeeded(); };
          document.addEventListener('visibilitychange', recheck);
          window.addEventListener('pageshow', recheck);
          window.addEventListener('focus', recheck);
        }
        setTimeout(() => App.els.pinInput?.focus(), 100);
      },
      // ===================== Merged: Visit Form (formerly a separate app) =====================
      vpDefaultsForType(state, type) {
        const dayLabels = {
          pregroup: ['weekdayThu','weekdayFri','weekdaySat','weekdaySun'],
          group: ['weekdayWed','weekdayThu','weekdayFri','weekdaySat','weekdaySun'],
          meeting: ['weekdayWed','weekdayThu','weekdayFri','weekdaySat','weekdaySun'],
        };
        const pastoralCount = { pregroup: 0, group: 2, meeting: 3 };
        if (!state.servicePlan.length && dayLabels[type]) {
          state.servicePlan = dayLabels[type].map((dayKey) => ({ id: App.utils.uid('vd'), label: buildVpI18n(state.language).t(dayKey), rows: [{ id: App.utils.uid('vr'), time: '', place: '', partner: '', kind: '', session: '' }] }));
        }
        if (!state.pastoralVisits.length) {
          const count = pastoralCount[type] || 0;
          state.pastoralVisits = Array.from({ length: count }, () => ({ id: App.utils.uid('vp'), name: '', day: '', time: '', partner: '', reason: '' }));
        }
        if (!state.meals.length) state.meals = [{ id: App.utils.uid('vm'), day: '', time: '', place: '', host: '', phone: '', note: '' }];
      },
      openVisitForm(itemId) {
        const item = App.data.getCalendarItemById(itemId);
        if (!item || item.source !== 'entry') return App.utils.toast('Формуляр визита доступен только для записей визитов.');
        const entry = App.state.app.entries.find((e) => e.id === item.refId);
        if (!entry) return;
        const event = App.data.getEventById(entry.eventId);
        App.state.visitFormEntryId = entry.id;
        const visitTypeMap = { congregation: 'meeting', group: 'group', pregroup: 'pregroup' };
        const saved = entry.visitForm;
        const defaultLang = event?.formLanguage || App.state.app.settings.language || 'ru';
        const state = saved ? JSON.parse(JSON.stringify(saved)) : { visitType: visitTypeMap[event?.visitType] || 'meeting', language: defaultLang, meetings: [], servicePlan: [], pastoralVisits: [], meals: [], notes: '' };
        if (!state.language) state.language = defaultLang; // older saved forms predating this field
        this.vpDefaultsForType(state, state.visitType);
        this.retranslateVisitFormWeekdays(null, state.language); // fixes any day names left over in the wrong language from before this feature existed, or from an interface-language fallback used previously
        App.state.visitFormData = state;
        if (App.els.vfVisitType) App.els.vfVisitType.value = state.visitType;
        if (App.els.vfLanguageSelect) App.els.vfLanguageSelect.value = state.language;
        if (App.els.vfNotesInput) App.els.vfNotesInput.value = state.notes || '';
        if (App.els.visitFormSub) App.els.visitFormSub.textContent = `${entry.title || event?.name || ''} · ${App.utils.prettyDateLong(entry.start)} — ${App.utils.prettyDateLong(entry.end)}`;
        this.renderVisitFormLanguageReminder();
        this.renderVisitFormLists();
        this.openModal(App.els.visitFormModal);
      },
      closeLetterModal() {
        this.closeModal(App.els.letterModal);
      },
      renderVisitFormLanguageReminder() {
        if (!App.els.vfLanguageReminder) return;
        const lang = App.state.visitFormData?.language || 'ru';
        const interfaceLang = App.state.app.settings.language || 'ru';
        const langName = VP_LANG_NAMES[lang] || lang;
        if (lang !== interfaceLang) {
          App.els.vfLanguageReminder.innerHTML = `⚠️ Обрати внимание: формуляр составляется на языке <strong>${App.utils.escapeHtml(langName)}</strong>, а интерфейс программы сейчас на языке <strong>${App.utils.escapeHtml(VP_LANG_NAMES[interfaceLang] || interfaceLang)}</strong>. Проверь, что это правильный язык для данного собрания, прежде чем заполнять поля.`;
        } else {
          App.els.vfLanguageReminder.innerHTML = `🌐 Формуляр составляется на языке: <strong>${App.utils.escapeHtml(langName)}</strong> (совпадает с языком интерфейса).`;
        }
      },
      saveVisitFormState() {
        const entry = App.state.app.entries.find((e) => e.id === App.state.visitFormEntryId);
        if (!entry || !App.state.visitFormData) return;
        App.state.visitFormData.notes = App.els.vfNotesInput?.value || '';
        entry.visitForm = JSON.parse(JSON.stringify(App.state.visitFormData));
        App.store.save();
      },
      renderVisitFormLists() {
        const state = App.state.visitFormData; if (!state) return;
        const esc = App.utils.escapeHtml, escA = App.utils.escapeAttr;
        const vpi = buildVpI18n(state.language);
        // Meetings
        if (App.els.vfMeetingsList) App.els.vfMeetingsList.innerHTML = state.meetings.length ? state.meetings.map((m) => `
          <div class="card" style="padding:10px;box-shadow:none" data-row-id="${escA(m.id)}" data-row-kind="meeting">
            <div class="form-grid">
              <label><span class="small">Тип</span><select data-field="type">${vpi.MEETING_TYPES.map((mt) => `<option value="${mt}" ${m.type === mt ? 'selected' : ''}>${esc(vpi.t(mt))}</option>`).join('')}</select></label>
              <label><span class="small">День</span><input data-field="day" type="text" value="${escA(m.day)}" /></label>
              <label><span class="small">Время</span><input data-field="time" type="text" value="${escA(m.time)}" /></label>
              <label><span class="small">Место</span><input data-field="place" type="text" value="${escA(m.place)}" /></label>
            </div>
            <button class="btn danger" type="button" data-remove-row style="margin-top:8px">Удалить</button>
          </div>`).join('') : `<div class="empty">Встречи ещё не добавлены</div>`;
        // Service plan (grouped by day)
        if (App.els.vfServiceDaysList) App.els.vfServiceDaysList.innerHTML = state.servicePlan.map((day) => `
          <div class="card" style="padding:10px;box-shadow:none" data-day-id="${escA(day.id)}">
            <div style="display:flex;gap:8px;align-items:center;margin-bottom:8px"><input data-day-field="label" type="text" value="${escA(day.label)}" style="font-weight:700" /><button class="btn danger" type="button" data-remove-day style="white-space:nowrap">Удалить день</button></div>
            ${day.rows.map((r) => {
              const listId = r.session === 'before' ? 'vfTimeOptionsBefore' : r.session === 'after' ? 'vfTimeOptionsAfter' : 'vfTimeOptionsDefault';
              return `
              <div class="form-grid" data-row-id="${escA(r.id)}" data-row-kind="service" data-day-id="${escA(day.id)}" style="margin-bottom:8px">
                <label><span class="small">Время</span>
                  <div class="session-toggle">
                    <button type="button" class="session-toggle-btn ${r.session === 'before' ? 'active' : ''}" data-set-session="before">До обеда</button>
                    <button type="button" class="session-toggle-btn ${r.session === 'after' ? 'active' : ''}" data-set-session="after">После обеда</button>
                  </div>
                  <input data-field="time" type="text" list="${listId}" value="${escA(r.time)}" placeholder="чч:мм" />
                </label>
                <label><span class="small">Место</span><input data-field="place" type="text" value="${escA(r.place)}" /></label>
                <label><span class="small">С кем</span><input data-field="partner" type="text" value="${escA(r.partner)}" /></label>
                <label><span class="small">Вид служения</span><input data-field="kind" type="text" value="${escA(r.kind)}" /></label>
                <button class="btn danger" type="button" data-remove-row style="grid-column:1 / -1">Удалить строку</button>
              </div>`;
            }).join('')}
            <button class="btn" type="button" data-add-service-row="${escA(day.id)}">+ Строка</button>
          </div>`).join('') || '<div class="empty">Дни ещё не добавлены</div>';
        // Pastoral visits — hidden entirely for pregroup, matching the original app's rule
        const showPastoral = state.visitType !== 'pregroup';
        if (App.els.vfPastoralHeading) App.els.vfPastoralHeading.style.display = showPastoral ? '' : 'none';
        if (App.els.vfAddPastoralBtn) App.els.vfAddPastoralBtn.style.display = showPastoral ? '' : 'none';
        if (App.els.vfPastoralList) {
          App.els.vfPastoralList.style.display = showPastoral ? '' : 'none';
          App.els.vfPastoralList.innerHTML = state.pastoralVisits.length ? state.pastoralVisits.map((p) => `
            <div class="card" style="padding:10px;box-shadow:none" data-row-id="${escA(p.id)}" data-row-kind="pastoral">
              <div class="form-grid">
                <label><span class="small">Имя</span><input data-field="name" type="text" value="${escA(p.name)}" /></label>
                <label><span class="small">День</span><input data-field="day" type="text" value="${escA(p.day)}" /></label>
                <label><span class="small">Время</span><input data-field="time" type="text" value="${escA(p.time)}" /></label>
                <label><span class="small">С кем</span><input data-field="partner" type="text" value="${escA(p.partner)}" /></label>
                <label style="grid-column:1 / -1"><span class="small">Причина</span><input data-field="reason" type="text" value="${escA(p.reason)}" /></label>
              </div>
              <button class="btn danger" type="button" data-remove-row style="margin-top:8px">Удалить</button>
            </div>`).join('') : `<div class="empty">Посещения ещё не добавлены</div>`;
        }
        // Meals
        const MEAL_TIME_OPTIONS = ['12:30', '12:45', '13:00', '13:30'];
        if (App.els.vfMealsList) App.els.vfMealsList.innerHTML = state.meals.length ? state.meals.map((m) => `
          <div class="card" style="padding:10px;box-shadow:none" data-row-id="${escA(m.id)}" data-row-kind="meal">
            <div class="form-grid">
              <label><span class="small">День</span><select data-field="day"><option value=""></option>${vpi.MEAL_DAY_KEYS.map((dk) => { const label = vpi.t(dk); return `<option value="${escA(label)}" ${m.day === label ? 'selected' : ''}>${esc(label)}</option>`; }).join('')}</select></label>
              <label><span class="small">Время</span><select data-field="time"><option value=""></option>${MEAL_TIME_OPTIONS.map((tm) => `<option value="${tm}" ${m.time === tm ? 'selected' : ''}>${tm}</option>`).join('')}</select></label>
              <label><span class="small">Место</span><input data-field="place" type="text" value="${escA(m.place)}" /></label>
              <label><span class="small">Кто принимает</span><input data-field="host" type="text" value="${escA(m.host)}" /></label>
              <label><span class="small">Телефон</span><input data-field="phone" type="text" value="${escA(m.phone)}" /></label>
              <label><span class="small">Примечание</span><input data-field="note" type="text" value="${escA(m.note)}" /></label>
            </div>
            <button class="btn danger" type="button" data-remove-row style="margin-top:8px">Удалить</button>
          </div>`).join('') : `<div class="empty">Обеды ещё не добавлены</div>`;
        this.bindVisitFormRowEvents();
      },
      bindVisitFormRowEvents() {
        const state = App.state.visitFormData; if (!state) return;
        const findArray = (kind) => kind === 'meeting' ? state.meetings : kind === 'pastoral' ? state.pastoralVisits : kind === 'meal' ? state.meals : null;
        document.querySelectorAll('#vfMeetingsList [data-row-id], #vfPastoralList [data-row-id], #vfMealsList [data-row-id]').forEach((row) => {
          row.querySelectorAll('[data-field]').forEach((input) => input.addEventListener('input', () => {
            const arr = findArray(row.dataset.rowKind); const obj = arr && arr.find((o) => o.id === row.dataset.rowId);
            if (obj) { obj[input.dataset.field] = input.value; App.ui.saveVisitFormState(); }
          }));
          row.querySelector('[data-remove-row]')?.addEventListener('click', () => {
            const arr = findArray(row.dataset.rowKind);
            if (arr) { const idx = arr.findIndex((o) => o.id === row.dataset.rowId); if (idx >= 0) arr.splice(idx, 1); }
            App.ui.saveVisitFormState(); App.ui.renderVisitFormLists();
          });
        });
        document.querySelectorAll('#vfServiceDaysList [data-day-id]').forEach((dayEl) => {
          if (dayEl.hasAttribute('data-row-id')) return; // skip nested row grids matched by the day-id attr too
        });
        document.querySelectorAll('#vfServiceDaysList > div[data-day-id]').forEach((dayCard) => {
          const day = state.servicePlan.find((d) => d.id === dayCard.dataset.dayId); if (!day) return;
          dayCard.querySelector('[data-day-field="label"]')?.addEventListener('input', (e) => { day.label = e.target.value; App.ui.saveVisitFormState(); });
          dayCard.querySelector('[data-remove-day]')?.addEventListener('click', () => {
            const idx = state.servicePlan.findIndex((d) => d.id === day.id); if (idx >= 0) state.servicePlan.splice(idx, 1);
            App.ui.saveVisitFormState(); App.ui.renderVisitFormLists();
          });
          dayCard.querySelector('[data-add-service-row]')?.addEventListener('click', () => {
            day.rows.push({ id: App.utils.uid('vr'), time: '', place: '', partner: '', kind: '', session: '' });
            App.ui.saveVisitFormState(); App.ui.renderVisitFormLists();
          });
          dayCard.querySelectorAll('[data-row-kind="service"]').forEach((row) => {
            const r = day.rows.find((rr) => rr.id === row.dataset.rowId); if (!r) return;
            row.querySelectorAll('[data-field]').forEach((input) => input.addEventListener('input', () => { r[input.dataset.field] = input.value; App.ui.saveVisitFormState(); }));
            row.querySelectorAll('[data-set-session]').forEach((btn) => btn.addEventListener('click', () => {
              const chosen = btn.dataset.setSession;
              r.session = r.session === chosen ? '' : chosen; // click again to clear
              App.ui.saveVisitFormState(); App.ui.renderVisitFormLists();
            }));
            row.querySelector('[data-remove-row]')?.addEventListener('click', () => {
              const idx = day.rows.findIndex((rr) => rr.id === r.id); if (idx >= 0) day.rows.splice(idx, 1);
              App.ui.saveVisitFormState(); App.ui.renderVisitFormLists();
            });
          });
        });
      },
      buildVisitPdfDoc() {
        const state = App.state.visitFormData;
        if (!state) return null;
        if (typeof window.PdfGenerator === 'undefined' || !window.jspdf) { App.utils.toast('Модуль PDF ещё не загрузился, попробуйте ещё раз через секунду.'); return null; }
        return window.PdfGenerator.generate(state, buildVpI18n(state.language));
      },
      // ===================== Letter PDF (preserves the original document's layout) =====================
      buildLetterPdfDoc(entry, event, draftOverride) {
        if (!window.jspdf) { App.utils.toast('Модуль PDF ещё не загрузился, попробуйте ещё раз через секунду.'); return null; }
        const { jsPDF } = window.jspdf;
        const doc = new jsPDF({ unit: 'pt', format: 'a4' });
        const FONT = 'Aptos';
        if (window.APTOS_REGULAR_B64) {
          doc.addFileToVFS('Aptos.ttf', window.APTOS_REGULAR_B64);
          doc.addFont('Aptos.ttf', FONT, 'normal');
        } else if (window.DEJAVU_SANS_NORMAL_B64) {
          // Fallback if the Aptos font file is ever missing from the build.
          doc.addFileToVFS('DejaVuSans.ttf', window.DEJAVU_SANS_NORMAL_B64);
          doc.addFont('DejaVuSans.ttf', FONT, 'normal');
        }
        if (window.APTOS_BOLD_B64) { doc.addFileToVFS('Aptos-Bold.ttf', window.APTOS_BOLD_B64); doc.addFont('Aptos-Bold.ttf', FONT, 'bold'); }
        else if (window.DEJAVU_SANS_BOLD_B64) { doc.addFileToVFS('DejaVuSans-Bold.ttf', window.DEJAVU_SANS_BOLD_B64); doc.addFont('DejaVuSans-Bold.ttf', FONT, 'bold'); }
        if (window.APTOS_ITALIC_B64) { doc.addFileToVFS('Aptos-Italic.ttf', window.APTOS_ITALIC_B64); doc.addFont('Aptos-Italic.ttf', FONT, 'italic'); }
        if (window.APTOS_BOLDITALIC_B64) { doc.addFileToVFS('Aptos-BoldItalic.ttf', window.APTOS_BOLDITALIC_B64); doc.addFont('Aptos-BoldItalic.ttf', FONT, 'bolditalic'); }
        const hasRealBold = !!(window.APTOS_BOLD_B64 || window.DEJAVU_SANS_BOLD_B64);
        const hasRealItalic = !!window.APTOS_ITALIC_B64;
        const hasRealBoldItalic = !!window.APTOS_BOLDITALIC_B64;
        doc.setFont(FONT, 'normal');
        const margin = 54, pageW = doc.internal.pageSize.getWidth(), pageH = doc.internal.pageSize.getHeight();
        const bottomLimit = pageH - margin - 16;
        const settings = App.state.app.settings;
        const ukDate = (d) => { const dt = new Date(d); return Number.isNaN(dt.getTime()) ? '—' : dt.toLocaleDateString('uk-UA', { day: '2-digit', month: 'long', year: 'numeric' }); };

        const drawHeader = () => {
          doc.setFont(FONT, 'normal'); doc.setFontSize(9.5); doc.setTextColor(60, 64, 74);
          const lines = [settings.senderName, settings.senderAddress, [settings.senderPhone].filter(Boolean).join(' '), settings.senderEmail].filter(Boolean);
          let hy = margin;
          lines.forEach((line) => { doc.text(line, pageW - margin, hy, { align: 'right' }); hy += 13; });
          doc.setTextColor(30, 34, 44);
          return hy + 14;
        };
        const drawFooter = (pageNum, totalPages) => {
          doc.setFont(FONT, 'normal'); doc.setFontSize(8.5); doc.setTextColor(140, 146, 158);
          doc.text(`${pageNum} von ${totalPages}`, margin, pageH - 24);
          doc.setTextColor(30, 34, 44);
        };
        const ensureSpace = (y, needed) => {
          if (y + needed > bottomLimit) { doc.addPage(); return drawHeader(); }
          return y;
        };
        // Renders one paragraph from an array of styled runs ({text,bold,italic,size}), wrapping
        // words onto new lines as needed — each word keeps its own run's formatting, so a
        // single bold or italic word in the middle of a normal sentence renders correctly.
        const resolveStyle = (bold, italic) => {
          if (bold && italic) return hasRealBoldItalic ? 'bolditalic' : (hasRealBold ? 'bold' : 'normal');
          if (bold) return hasRealBold ? 'bold' : 'normal';
          if (italic) return hasRealItalic ? 'italic' : 'normal';
          return 'normal';
        };
        const addRichParagraph = (y, runs, opts = {}) => {
          const defaultSize = opts.size || 11;
          const maxWidth = pageW - margin * 2;
          const words = [];
          (runs || []).forEach((run) => {
            const size = run.size || defaultSize;
            const bold = !!run.bold;
            const italic = !!run.italic;
            const underline = !!run.underline;
            String(run.text || '').split(/(\s+)/).filter((s) => s.length).forEach((part) => words.push({ text: part, bold, italic, underline, size }));
          });
          let line = []; let lineWidth = 0;
          const lineHeight = defaultSize * 1.4;
          const drawWord = (w, x, wordY) => {
            const style = resolveStyle(w.bold, w.italic);
            doc.setFont(FONT, style);
            doc.setFontSize(w.size);
            doc.text(w.text, x, wordY);
            // Synthetic bold fallback: only needed if bold was requested but no real bold face is embedded.
            if (w.bold && style === 'normal' && hasRealBold === false) doc.text(w.text, x + 0.35, wordY);
            if (w.underline && w.text.trim()) {
              const width = doc.getTextWidth(w.text);
              const underlineY = wordY + w.size * 0.09;
              doc.setDrawColor(30, 34, 44); doc.setLineWidth(Math.max(0.5, w.size * 0.045));
              doc.line(x, underlineY, x + width, underlineY);
            }
          };
          const flushLine = () => {
            if (!line.length) return;
            y = ensureSpace(y, lineHeight);
            let x = opts.align === 'center' ? (pageW - lineWidth) / 2 : margin;
            line.forEach((w) => {
              doc.setFont(FONT, resolveStyle(w.bold, w.italic)); doc.setFontSize(w.size);
              drawWord(w, x, y);
              x += doc.getTextWidth(w.text);
            });
            y += lineHeight;
            line = []; lineWidth = 0;
          };
          words.forEach((w) => {
            if (!line.length && /^\s+$/.test(w.text)) return; // no leading space at line start
            doc.setFont(FONT, resolveStyle(w.bold, w.italic));
            doc.setFontSize(w.size);
            const wWidth = doc.getTextWidth(w.text);
            if (lineWidth + wWidth > maxWidth && line.length) flushLine();
            line.push(w); lineWidth += wWidth;
          });
          flushLine();
          return y + (opts.gap ?? 8);
        };
        const singleRun = (text, opts = {}) => [{ text, bold: !!opts.bold, italic: !!opts.italic, size: opts.size }];

        // ---- Page 1: personal letter ----
        let y = drawHeader();
        const congNumberSuffix = event?.congNumber ? ` (${event.congNumber})` : '';
        y = addRichParagraph(y, singleRun(`До старійшин збору ${entry?.title || event?.name || ''}${congNumberSuffix}`, { bold: true, size: 11.5 }), { size: 11.5, gap: 20 });
        doc.setFont(FONT, 'normal'); doc.setFontSize(11); doc.text(ukDate(new Date()), pageW - margin, y - 8, { align: 'right' });
        y = addRichParagraph(y, singleRun('Дорогі брати!', { bold: true }), { gap: 14 });
        const bodyHtml = draftOverride ? draftOverride.bodyHtml : App.ui.substitutePlaceholders(App.ui.getLetterTemplateFor(event?.visitType), entry, event);
        App.ui.parseRichLetterBlocks(bodyHtml).forEach((block) => { y = addRichParagraph(y, block.runs, { size: 11, gap: 14 }); });
        y += 6;
        y = addRichParagraph(y, singleRun('Я вже з нетерпінням чекаю на цю зустріч і надсилаю вам теплі вітання братньої любові,'), { gap: 22 });
        y = addRichParagraph(y, singleRun(`Ваш ${settings.senderName || ''}`, { bold: true }), {});

        // ---- Additional pages (configurable per visit type: add/remove in settings) ----
        const suffix = App.ui.letterTypeSuffix(event?.visitType);
        const extraPages = draftOverride ? draftOverride.pages : (App.state.app.settings.letterPages?.[suffix] || []);
        extraPages.forEach((page) => {
          doc.addPage();
          y = drawHeader();
          if (page.title && page.title.trim()) y = addRichParagraph(y, singleRun(page.title.trim(), { bold: true, size: 12.5 }), { size: 12.5, align: 'center', gap: 18 });
          const pageHtml = draftOverride ? page.html : App.ui.substitutePlaceholders(page.html || '', entry, event);
          App.ui.parseRichLetterBlocks(pageHtml).forEach((block) => { y = addRichParagraph(y, block.runs, { size: 10, gap: 10 }); });
        });

        const totalPages = doc.internal.getNumberOfPages();
        for (let p = 1; p <= totalPages; p += 1) { doc.setPage(p); drawFooter(p, totalPages); }
        return doc;
      },
      substitutePlaceholders(tpl, entry, event) {
        const congNumberSuffix = event?.congNumber ? ` (${event.congNumber})` : '';
        const ukDate = (d) => { const dt = new Date(d); return Number.isNaN(dt.getTime()) ? '—' : dt.toLocaleDateString('uk-UA', { day: '2-digit', month: 'long', year: 'numeric' }); };
        return String(tpl || '')
          .replace(/\{congregation\}/g, entry?.title || event?.name || '')
          .replace(/\{cong_number_suffix\}/g, congNumberSuffix)
          .replace(/\{cong_number\}/g, event?.congNumber || '')
          .replace(/\{start_date\}/g, ukDate(entry?.start))
          .replace(/\{end_date\}/g, ukDate(entry?.end))
          .replace(/\{today\}/g, ukDate(new Date()))
          .replace(/\{sender\}/g, App.state.app.settings.senderName || '');
      },
      fillLetterTemplate(entry, event) {
        const congNumberSuffix = event?.congNumber ? ` (${event.congNumber})` : '';
        const html = this.substitutePlaceholders(this.getLetterTemplateFor(event?.visitType), entry, event);
        const body = this.parseRichLetterBlocks(html).map((b) => b.runs.map((r) => r.text).join('')).join('\n\n');
        return `До старійшин збору ${entry?.title || event?.name || ''}${congNumberSuffix}\n\nДорогі брати!\n\n${body}\n\nЯ вже з нетерпінням чекаю на цю зустріч і надсилаю вам теплі вітання братньої любові,\n\nВаш ${App.state.app.settings.senderName || ''}`;
      },
      openLetterModal(itemId) {
        const item = App.data.getCalendarItemById(itemId);
        if (!item || item.source !== 'entry') return App.utils.toast('Письмо доступно только для записей визитов.');
        const entry = App.state.app.entries.find((e) => e.id === item.refId);
        if (!entry) return;
        const event = App.data.getEventById(entry.eventId);
        App.state.letterEntryId = entry.id;
        const suffix = this.letterTypeSuffix(event?.visitType);
        const visitLabel = { Congregation: 'собрание', Group: 'группа', Pregroup: 'предгруппа' }[suffix];
        if (App.els.letterModalSub) App.els.letterModalSub.textContent = `${entry.title || event?.name || ''} (${visitLabel}) · ${App.utils.prettyDateLong(entry.start)} — ${App.utils.prettyDateLong(entry.end)}`;
        // The email-body text is saved on the entry itself, so reopening this modal for the same
        // visit later shows what was written before. Only a brand-new (never-edited) visit falls
        // back to the type-specific default template configured in Settings.
        if (App.els.letterEmailBodyInput) {
          const defaultTemplate = App.state.app.settings['emailBody' + suffix] || DEFAULT_EMAIL_BODY_TEMPLATES[suffix];
          App.els.letterEmailBodyInput.value = entry.emailBody || this.substitutePlaceholders(defaultTemplate, entry, event);
        }
        const extraPages = App.state.app.settings.letterPages?.[suffix] || [];
        const totalPages = 1 + extraPages.length;
        if (App.els.letterAttachStatus) App.els.letterAttachStatus.textContent = entry.visitForm ? `📎 Письмо (${totalPages} стр.) и график визита будут отправлены как PDF-вложения.` : `📎 Письмо будет отправлено как PDF-вложение (${totalPages} стр.). График визита ещё не заполнен — если нужен, сначала открой «Формуляр визита».`;
        this.openModal(App.els.letterModal);
      },
      async sendLetterNow() {
        const entry = App.state.app.entries.find((e) => e.id === App.state.letterEntryId);
        const event = entry ? App.data.getEventById(entry.eventId) : null;
        const text = App.els.letterEmailBodyInput?.value || '';
        const to = event?.contactEmail || '';
        const files = [];
        try {
          const letterDoc = this.buildLetterPdfDoc(entry, event);
          if (letterDoc) files.push(new File([letterDoc.output('blob')], `${App.utils.slug(entry?.title || 'letter')}-letter.pdf`, { type: 'application/pdf' }));
        } catch (err) { console.error('Letter PDF build failed', err); }
        if (entry?.visitForm) {
          try {
            App.state.visitFormData = JSON.parse(JSON.stringify(entry.visitForm));
            const scheduleDoc = this.buildVisitPdfDoc();
            if (scheduleDoc) files.push(new File([scheduleDoc.output('blob')], `${App.utils.slug(entry.title || 'visit')}-schedule.pdf`, { type: 'application/pdf' }));
          } catch (err) { console.error('Schedule PDF build for sharing failed', err); }
        }
        const mailto = () => {
          const subject = App.utils.t('letter_subject');
          if (App.state.app.settings.emailMethod === 'owa') {
            const base = App.state.app.settings.owaUrl || 'https://outlook.office.com/mail/deeplink/compose';
            const url = `${base}?to=${encodeURIComponent(to)}&subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(text)}`;
            window.open(url, '_blank');
          } else {
            window.location.href = `mailto:${encodeURIComponent(to)}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(text)}`;
          }
        };
        if (navigator.share && files.length && navigator.canShare && navigator.canShare({ files })) {
          try {
            await navigator.share({ text, files });
            App.utils.toast('Отправлено');
            App.ui.closeLetterModal();
            return;
          } catch (err) { /* user cancelled or unsupported — fall through to fallback below */ }
        }
        if (files.length) {
          files.forEach((f) => App.utils.downloadBlob(f, f.name));
          App.utils.toast(files.length > 1 ? 'Файлы скачаны — прикрепи их к письму вручную.' : 'Файл скачан — прикрепи его к письму вручную.');
        }
        mailto();
        App.ui.closeLetterModal();
      },
      closeCalendarEditor() {
        if (App.els.calendarEditor) App.els.calendarEditor.hidden = true; App.state.calendarEditingTarget = null;
      },
      renderRemindersModal() {
        const items = App.data.getUpcomingReminders();
        if (App.els.remindersModalTitle) App.els.remindersModalTitle.textContent = App.utils.t('reminders_title');
        if (App.els.remindersModalSub) App.els.remindersModalSub.textContent = App.utils.t('reminders_subtitle');
        if (!App.els.remindersModalList) return;
        if (!items.length) {
          App.els.remindersModalList.innerHTML = `<div class="empty">${App.utils.t('reminders_none')}</div>`;
          return;
        }
        App.els.remindersModalList.innerHTML = items.map((item) => {
          const dayLabel = item.daysUntil < 0 ? `<span class="flag-badge" style="background:#b91c1c">${App.utils.t('reminders_overdue')}</span>` : `<span class="small">${App.utils.t('reminders_days_left', { days: item.daysUntil })}</span>`;
          const s302Btn = item.needsS302 ? `<button class="btn danger" type="button" data-mark-reminder="s302" data-entry-id="${App.utils.escapeAttr(item.id)}">${App.utils.t('reminders_mark_s302')}</button>` : '';
          const letterBtn = item.needsLetter ? `<button class="btn" type="button" data-mark-reminder="letter" data-entry-id="${App.utils.escapeAttr(item.id)}">${App.utils.t('reminders_mark_letter')}</button>` : '';
          return `<div class="card" style="padding:14px">
            <div style="display:flex;justify-content:space-between;align-items:start;gap:10px;flex-wrap:wrap">
              <div><strong>${App.utils.escapeHtml(item.title)}</strong><div class="small">${App.utils.escapeHtml(App.utils.prettyDate(item.start))} — ${App.utils.escapeHtml(App.utils.prettyDate(item.end))}</div></div>
              ${dayLabel}
            </div>
            <div style="display:flex;gap:8px;flex-wrap:wrap;margin-top:10px">
              ${item.needsS302 ? `<span class="pill">${App.utils.t('reminders_s302_needed')}</span>` : ''}
              ${item.needsLetter ? `<span class="pill">${App.utils.t('reminders_letter_needed')}</span>` : ''}
            </div>
            <div style="display:flex;gap:8px;flex-wrap:wrap;margin-top:10px">${s302Btn}${letterBtn}<button class="btn" type="button" data-open-reminder-entry="${App.utils.escapeAttr(item.id)}">${App.utils.t('reminders_open_entry')}</button></div>
          </div>`;
        }).join('');
        document.querySelectorAll('[data-mark-reminder]').forEach((btn) => btn.addEventListener('click', () => {
          const entry = App.state.app.entries.find((item) => item.id === btn.dataset.entryId);
          if (entry) {
            if (!entry.flags) entry.flags = { f302: false, letter: false };
            if (btn.dataset.markReminder === 's302') entry.flags.f302 = true;
            if (btn.dataset.markReminder === 'letter') entry.flags.letter = true;
            App.store.save();
          }
          App.ui.renderRemindersModal();
          App.ui.renderAll();
        }));
        document.querySelectorAll('[data-open-reminder-entry]').forEach((btn) => btn.addEventListener('click', () => {
          App.ui.closeRemindersModal();
          App.state.selectedScreen = 'calendar';
          App.ui.renderAll();
          App.ui.openCalendarEditorForItem(`entry:${btn.dataset.openReminderEntry}`);
        }));
      },
      openRemindersModal() {
        this.renderRemindersModal();
        if (App.els.remindersModal) App.els.remindersModal.hidden = false;
      },
      closeRemindersModal() {
        if (App.els.remindersModal) App.els.remindersModal.hidden = true;
      },
      showRemindersModalIfNeeded() {
        if (App.data.getUpcomingReminders().length) this.openRemindersModal();
      },
      renderEvents() {
        const query = (App.state.eventSearch || '').trim().toLowerCase();
        const colorFilter = App.state.eventColorFilter || 'all';
        const visitFilter = App.state.eventVisitFilter || 'all';
        const allEvents = App.state.app.events || [];
        const colors = App.utils.uniqueBy(allEvents.map((event) => App.utils.clampColor(event.color)).filter(Boolean), (color) => color.toLowerCase());
        if (App.els.eventSearchInput) {
          App.els.eventSearchInput.placeholder = App.utils.t('events_search');
          App.els.eventSearchInput.value = App.state.eventSearch || '';
        }
        if (App.els.eventColorFilter) {
          const options = ['<option value="all">' + App.utils.t('all_event_groups') + '</option>'].concat(colors.map((color) => `<option value="${App.utils.escapeAttr(color)}">${App.utils.escapeHtml(App.utils.colorName(color))}</option>`));
          App.els.eventColorFilter.innerHTML = options.join('');
          if (colorFilter !== 'all' && !colors.some((color) => color.toLowerCase() === String(colorFilter).toLowerCase())) App.state.eventColorFilter = 'all';
          App.els.eventColorFilter.value = App.state.eventColorFilter || 'all';
          App.els.eventColorFilter.setAttribute('aria-label', App.utils.t('event_group_filter'));
        }
        if (App.els.eventVisitFilter) App.els.eventVisitFilter.value = visitFilter;
        const visitLabel = (visitType) => visitType === 'congregation' ? App.utils.t('visit_type_congregation') : visitType === 'group' ? App.utils.t('visit_type_group') : visitType === 'pregroup' ? App.utils.t('visit_type_pregroup') : '';
        const visibleEvents = allEvents.filter((event) => {
          const haystack = [event.name, event.address, event.schedule, App.utils.colorName(event.color)].join(' ').toLowerCase();
          const queryMatch = !query || haystack.includes(query);
          const colorMatch = App.state.eventColorFilter === 'all' || String(event.color).toLowerCase() === String(App.state.eventColorFilter).toLowerCase();
          const visitMatch = visitFilter === 'all' || (visitFilter === 'unset' ? !event.visitType : event.visitType === visitFilter);
          return queryMatch && colorMatch && visitMatch;
        }).sort((a,b) => String(a.name || '').localeCompare(String(b.name || ''), App.utils.lang()));
        if (App.els.eventsListCount) App.els.eventsListCount.textContent = App.utils.t('events_shown_count', { shown: visibleEvents.length, total: allEvents.length });
        if (App.els.deleteAllEventsBtn) {
          App.els.deleteAllEventsBtn.textContent = App.utils.t('delete_all_events');
          App.els.deleteAllEventsBtn.disabled = !allEvents.length;
          App.els.deleteAllEventsBtn.style.opacity = allEvents.length ? '' : '.55';
        }
        if (App.els.eventsList) App.els.eventsList.innerHTML = visibleEvents.map((event) => `
          <div class="event-row" data-edit-event="${App.utils.escapeAttr(event.id)}" style="cursor:pointer">
            <div>
              <strong>${App.utils.escapeHtml(event.name)}</strong>
              <div class="small">${App.utils.escapeHtml(event.schedule || App.utils.t('no_schedule'))}</div>
              <div class="small">${event.address ? `<a href="${App.utils.mapUrl(event.address)}" target="_blank" rel="noopener noreferrer" onclick="event.stopPropagation()">${App.utils.escapeHtml(event.address)}</a>` : App.utils.escapeHtml(App.utils.t('no_address'))}</div>
              ${(event.contactName || event.contactPhone) ? `<div class="small">👤 ${App.utils.escapeHtml([event.contactName, event.contactPhone].filter(Boolean).join(' · '))}</div>` : ''}
            </div>
            <div style="display:grid;gap:8px;justify-items:end">
              <span class="pill"><span class="dot" style="background:${App.utils.clampColor(event.color)}"></span>${App.utils.escapeHtml(App.utils.colorName(event.color))}</span>
              ${event.visitType ? `<span class="pill">${App.utils.escapeHtml(visitLabel(event.visitType))}</span>` : `<span class="pill" style="background:#fef3c7;color:#92400e;border-color:#fde68a">⚠️ ${App.utils.escapeHtml(App.utils.t('visit_type_none'))}</span>`}
            </div>
          </div>`).join('') || `<div class="empty">${query || App.state.eventColorFilter !== 'all' ? App.utils.t('no_events_found') : App.utils.t('no_events_month')}</div>`;
        document.querySelectorAll('[data-edit-event]').forEach((btn) => btn.addEventListener('click', () => {
          const event = App.data.getEventById(btn.dataset.editEvent);
          App.state.editingEventId = event?.id || null;
          if (App.els.eventNameInput) App.els.eventNameInput.value = event?.name || '';
          if (App.els.eventColorInput) { App.els.eventColorInput.innerHTML = App.utils.colorOptionsHtml(event?.color || '#1f7a45'); App.els.eventColorInput.value = event?.color || '#1f7a45'; if (!App.els.eventColorInput.value) App.els.eventColorInput.selectedIndex = 0; }
          if (App.els.eventAddressInput) App.els.eventAddressInput.value = event?.address || '';
          if (App.els.eventScheduleInput) App.els.eventScheduleInput.value = event?.schedule || '';
          if (App.els.eventVisitTypeInput) App.els.eventVisitTypeInput.value = event?.visitType || '';
          App.ui.syncEventVisitFieldsVisibility();
          if (App.els.eventContactNameInput) App.els.eventContactNameInput.value = event?.contactName || '';
          if (App.els.eventContactPhoneInput) App.els.eventContactPhoneInput.value = event?.contactPhone || '';
          if (App.els.eventContactEmailInput) App.els.eventContactEmailInput.value = event?.contactEmail || '';
          if (App.els.eventContactNoteInput) App.els.eventContactNoteInput.value = event?.contactNote || '';
          if (App.els.eventCongNumberInput) App.els.eventCongNumberInput.value = event?.congNumber || '';
          App.state.editingEventCoords = (typeof event?.lat === 'number' && typeof event?.lng === 'number') ? { lat: event.lat, lng: event.lng } : null;
          App.ui.renderEventDistanceStatus();
          if (App.els.eventFormLanguageSelect) App.els.eventFormLanguageSelect.value = event?.formLanguage || '';
          App.ui.openModal(App.els.eventEditorModal);
          if (App.els.deleteEventBtn) App.els.deleteEventBtn.hidden = false;
          App.els.eventNameInput?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }));
      },

      renderSettings() { if (App.els.languageSelect) App.els.languageSelect.value = App.state.app.settings.language || 'ru'; if (App.els.accentSelect) App.els.accentSelect.value = App.state.app.settings.accentColor || 'green'; if (App.els.fontSizeSelect) App.els.fontSizeSelect.value = App.state.app.settings.fontSize || '100'; if (App.els.letterTemplateEditor && document.activeElement !== App.els.letterTemplateEditor) App.els.letterTemplateEditor.innerHTML = App.state.app.settings['letterTemplate' + (App.state.letterEditingType || 'Congregation')] || DEFAULT_LETTER_TEMPLATE_HTML; this.renderLetterPagesList(); if (App.els.emailBodyDefaultInput && document.activeElement !== App.els.emailBodyDefaultInput) App.els.emailBodyDefaultInput.value = App.state.app.settings['emailBody' + (App.state.letterEditingType || 'Congregation')] || DEFAULT_EMAIL_BODY_TEMPLATES[App.state.letterEditingType || 'Congregation']; if (App.els.senderNameInput && document.activeElement !== App.els.senderNameInput) App.els.senderNameInput.value = App.state.app.settings.senderName || ''; if (App.els.senderAddressInput && document.activeElement !== App.els.senderAddressInput) App.els.senderAddressInput.value = App.state.app.settings.senderAddress || ''; if (App.els.senderPhoneInput && document.activeElement !== App.els.senderPhoneInput) App.els.senderPhoneInput.value = App.state.app.settings.senderPhone || ''; if (App.els.senderEmailInput && document.activeElement !== App.els.senderEmailInput) App.els.senderEmailInput.value = App.state.app.settings.senderEmail || ''; if (App.els.emailMethodSelect) App.els.emailMethodSelect.value = App.state.app.settings.emailMethod || 'mailto'; if (App.els.owaUrlInput && document.activeElement !== App.els.owaUrlInput) App.els.owaUrlInput.value = App.state.app.settings.owaUrl || 'https://outlook.office.com/mail/deeplink/compose'; if (App.els.owaUrlRow) App.els.owaUrlRow.style.display = (App.state.app.settings.emailMethod === 'owa') ? '' : 'none'; if (App.els.homeAddressInput && document.activeElement !== App.els.homeAddressInput) App.els.homeAddressInput.value = App.state.app.settings.homeAddress || ''; if (App.els.homeGeocodeStatus && typeof App.state.app.settings.homeLat === 'number') App.els.homeGeocodeStatus.textContent = `📍 Координаты сохранены (${App.state.app.settings.homeLat.toFixed(3)}, ${App.state.app.settings.homeLng.toFixed(3)})`; if (App.els.addYearInput && !App.els.addYearInput.value) App.els.addYearInput.value = String(Math.max(...Object.keys(App.state.app.serviceYears).map(Number), App.utils.getServiceYearForDate(new Date())) + 1); if (App.els.syncStatus) { const meta = App.state.app.meta || {}; const fmt = (value) => value ? new Date(value).toLocaleString(App.utils.lang()) : ''; const parts = []; if (meta.lastSyncExportAt) parts.push(`${App.utils.t('sync_last_export')}: ${fmt(meta.lastSyncExportAt)}`); if (meta.lastSyncImportAt) parts.push(`${App.utils.t('sync_last_import')}: ${fmt(meta.lastSyncImportAt)}`); App.els.syncStatus.textContent = parts.join(' · ') || App.utils.t('sync_never'); } },
      closeMobileMenu() {
        if (App.els.appRoot) App.els.appRoot.classList.remove('menu-open');
        if (App.els.mobileOverlay) {
          App.els.mobileOverlay.hidden = true;
          App.els.mobileOverlay.classList.remove('show');
        }
        App.els.mobileMenuToggleBtn?.setAttribute('aria-expanded', 'false');
      },
      toggleMobileMenu() {
        if (!App.els.appRoot) return;
        const open = !App.els.appRoot.classList.contains('menu-open');
        App.els.appRoot.classList.toggle('menu-open', open);
        if (App.els.mobileOverlay) {
          App.els.mobileOverlay.hidden = !open;
          App.els.mobileOverlay.classList.toggle('show', open);
        }
        App.els.mobileMenuToggleBtn?.setAttribute('aria-expanded', String(open));
      }
    },

    bind() {
      App.els.resetEventBtn?.addEventListener('click', () => App.actions.resetEventForm());
      App.els.newEventBtn?.addEventListener('click', () => { App.actions.resetEventForm(); App.ui.openModal(App.els.eventEditorModal); App.els.eventNameInput?.focus(); });
      App.els.deleteEventBtn?.addEventListener('click', () => { if (App.state.editingEventId) App.actions.deleteEventTemplate(App.state.editingEventId); });
      document.querySelectorAll('.copy-btn[data-copy-input]').forEach((btn) => btn.addEventListener('click', (e) => {
        e.preventDefault();
        const input = document.getElementById(btn.dataset.copyInput);
        const text = input?.value || '';
        if (!text) return;
        const done = () => App.utils.toast(App.utils.t('copied'));
        if (navigator.clipboard?.writeText) navigator.clipboard.writeText(text).then(done).catch(() => done());
        else done();
      }));
      App.els.eventEditorCloseBtn?.addEventListener('click', () => App.ui.closeModal(App.els.eventEditorModal));
      App.els.saveEventBtn?.addEventListener('click', () => App.actions.saveEventTemplate());
      App.els.eventSearchInput?.addEventListener('input', (e) => { App.state.eventSearch = e.target.value; App.ui.renderEvents(); });
      App.els.eventColorFilter?.addEventListener('change', (e) => { App.state.eventColorFilter = e.target.value; App.ui.renderEvents(); });
      App.els.eventVisitFilter?.addEventListener('change', (e) => { App.state.eventVisitFilter = e.target.value; App.ui.renderEvents(); });
      App.els.deleteAllEventsBtn?.addEventListener('click', () => App.actions.deleteAllEventTemplates());
      App.els.themeBtn?.addEventListener('click', () => { App.state.app.settings.theme = App.state.app.settings.theme === 'dark' ? 'light' : 'dark'; App.store.save(); App.ui.renderAll(); });
      App.els.themeSelect?.addEventListener('change', (e) => { App.state.app.settings.theme = e.target.value; App.store.save(); App.ui.renderAll(); });
      App.els.accentSelect?.addEventListener('change', (e) => { App.state.app.settings.accentColor = e.target.value; App.store.save(); App.ui.applyAccent(); });
      App.els.fontSizeSelect?.addEventListener('change', (e) => { App.state.app.settings.fontSize = e.target.value; App.store.save(); App.ui.applyFontSize(); });
      App.els.languageSelect?.addEventListener('change', (e) => { App.state.app.settings.language = e.target.value; App.store.save(); App.ui.renderAll(); });
      App.els.layoutPresetSelect?.addEventListener('change', (e) => { App.state.app.settings.layoutPreset = e.target.value; App.store.save(); App.ui.renderAll(); });
      App.els.calendarLayoutPresetSelect?.addEventListener('change', (e) => { App.state.app.settings.layoutPreset = e.target.value; App.store.save(); App.ui.renderAll(); });
      App.els.prevMonthBtn?.addEventListener('click', () => { if (App.state.calendarView === 'year') { const sy = App.utils.getServiceYearForDate(new Date(App.state.calendarYear, App.state.calendarMonth, 1)) - 1; App.state.calendarYear = sy; App.state.calendarMonth = App.config.serviceYearStartMonth; App.ui.renderCalendar(); return; } const date = new Date(App.state.calendarYear, App.state.calendarMonth - 1, 1); App.state.calendarMonth = date.getMonth(); App.state.calendarYear = date.getFullYear(); App.ui.renderCalendar(); });
      App.els.todayMonthBtn?.addEventListener('click', () => { const now = new Date(); App.state.calendarMonth = now.getMonth(); App.state.calendarYear = now.getFullYear(); App.state.calendarSelectedDateIso = App.utils.iso(now); App.ui.renderCalendar(); });
      App.els.nextMonthBtn?.addEventListener('click', () => { if (App.state.calendarView === 'year') { const sy = App.utils.getServiceYearForDate(new Date(App.state.calendarYear, App.state.calendarMonth, 1)) + 1; App.state.calendarYear = sy; App.state.calendarMonth = App.config.serviceYearStartMonth; App.ui.renderCalendar(); return; } const date = new Date(App.state.calendarYear, App.state.calendarMonth + 1, 1); App.state.calendarMonth = date.getMonth(); App.state.calendarYear = date.getFullYear(); App.ui.renderCalendar(); });
      // Mobile swipe navigation: swipe left/right over the calendar to move a month (or a whole
      // service year, in year view) — reuses the exact same prev/next button logic above.
      if (App.els.calendarGrid) {
        let touchStartX = 0, touchStartY = 0, touchStartTime = 0, touchActive = false;
        App.els.calendarGrid.addEventListener('touchstart', (e) => {
          if (e.touches.length !== 1) { touchActive = false; return; }
          touchActive = true;
          touchStartX = e.touches[0].clientX; touchStartY = e.touches[0].clientY; touchStartTime = Date.now();
        }, { passive: true });
        App.els.calendarGrid.addEventListener('touchend', (e) => {
          if (!touchActive) return;
          touchActive = false;
          const t = e.changedTouches[0];
          const dx = t.clientX - touchStartX, dy = t.clientY - touchStartY, dt = Date.now() - touchStartTime;
          // Require a clearly horizontal, deliberate swipe so vertical scrolling and taps aren't affected.
          if (Math.abs(dx) > 60 && Math.abs(dx) > Math.abs(dy) * 1.5 && dt < 600) {
            if (dx < 0) App.els.nextMonthBtn?.click(); else App.els.prevMonthBtn?.click();
          }
        }, { passive: true });
      }
      App.els.calendarYearSelect?.addEventListener('change', (e) => { App.state.calendarYear = Number(e.target.value); if (App.state.calendarView === 'year') App.state.calendarMonth = App.config.serviceYearStartMonth; App.ui.renderCalendar(); });
      App.els.toggleTeamPanelBtn?.addEventListener('click', () => { App.state.calendarView = App.state.calendarView === 'year' ? 'month' : 'year'; if (App.state.calendarView === 'year') { const now = new Date(); App.state.calendarSelectedDateIso = App.utils.iso(now); App.state.calendarYear = now.getFullYear(); App.state.calendarMonth = now.getMonth(); } App.state.app.settings.calendarView = App.state.calendarView; App.store.save(); App.ui.renderCalendar(); });
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
      App.els.remindersModalCloseBtn?.addEventListener('click', () => App.ui.closeRemindersModal());
      App.els.remindersModalOkBtn?.addEventListener('click', () => App.ui.closeRemindersModal());
      App.els.checkRemindersBtn?.addEventListener('click', () => App.ui.openRemindersModal());
      document.querySelectorAll('.settings-tab').forEach((btn) => btn.addEventListener('click', () => {
        document.querySelectorAll('.settings-tab').forEach((b) => b.classList.toggle('active', b === btn));
        const panels = { appearance: 'settingsPanelAppearance', letter: 'settingsPanelLetter', data: 'settingsPanelData' };
        Object.entries(panels).forEach(([key, id]) => { const el = document.getElementById(id); if (el) el.hidden = btn.dataset.settingsTab !== key; });
      }));
      App.els.statsBtn?.addEventListener('click', () => App.ui.openStatsModal());
      App.els.statsModalCloseBtn?.addEventListener('click', () => App.ui.closeModal(App.els.statsModal));
      App.els.statsModalOkBtn?.addEventListener('click', () => App.ui.closeModal(App.els.statsModal));
      App.els.plannerBtn?.addEventListener('click', () => App.ui.openPlannerModal());
      App.els.plannerModalCloseBtn?.addEventListener('click', () => App.ui.closeModal(App.els.plannerModal));
      App.els.plannerCancelBtn?.addEventListener('click', () => App.ui.closeModal(App.els.plannerModal));
      App.els.plannerApplyBtn?.addEventListener('click', () => App.ui.applyAutoPlan());
      App.els.pinSetupBtn?.addEventListener('click', () => App.ui.setupPin());
      App.els.holidaysToggle?.addEventListener('change', (e) => { App.state.app.settings.showHolidays = !!e.target.checked; App.store.save(); App.ui.renderAll(); });
      // Visit Form modal
      App.els.visitFormCloseBtn?.addEventListener('click', () => { App.ui.saveVisitFormState(); App.ui.closeModal(App.els.visitFormModal); });
      App.els.vfCloseBtn2?.addEventListener('click', () => { App.ui.saveVisitFormState(); App.ui.closeModal(App.els.visitFormModal); });
      App.els.vfVisitType?.addEventListener('change', (e) => {
        if (!App.state.visitFormData) return;
        App.state.visitFormData.visitType = e.target.value;
        App.ui.vpDefaultsForType(App.state.visitFormData, e.target.value);
        App.ui.saveVisitFormState(); App.ui.renderVisitFormLists();
      });
      App.els.vfLanguageSelect?.addEventListener('change', (e) => {
        if (!App.state.visitFormData) return;
        const oldLang = App.state.visitFormData.language;
        App.state.visitFormData.language = e.target.value;
        App.ui.retranslateVisitFormWeekdays(oldLang, e.target.value);
        App.ui.saveVisitFormState();
        App.ui.renderVisitFormLanguageReminder();
        App.ui.renderVisitFormLists();
      });
      App.els.vfNotesInput?.addEventListener('input', () => App.ui.saveVisitFormState());
      App.els.vfAddMeetingBtn?.addEventListener('click', () => {
        if (!App.state.visitFormData) return;
        App.state.visitFormData.meetings.push({ id: App.utils.uid('vm'), type: 'meetingTypeMidweek', day: '', time: '', place: '' });
        App.ui.saveVisitFormState(); App.ui.renderVisitFormLists();
      });
      App.els.vfAddDayBtn?.addEventListener('click', () => {
        if (!App.state.visitFormData) return;
        App.state.visitFormData.servicePlan.push({ id: App.utils.uid('vd'), label: 'Новый день', rows: [{ id: App.utils.uid('vr'), time: '', place: '', partner: '', kind: '', session: '' }] });
        App.ui.saveVisitFormState(); App.ui.renderVisitFormLists();
      });
      App.els.vfAddPastoralBtn?.addEventListener('click', () => {
        if (!App.state.visitFormData) return;
        App.state.visitFormData.pastoralVisits.push({ id: App.utils.uid('vp'), name: '', day: '', time: '', partner: '', reason: '' });
        App.ui.saveVisitFormState(); App.ui.renderVisitFormLists();
      });
      App.els.vfAddMealBtn?.addEventListener('click', () => {
        if (!App.state.visitFormData) return;
        App.state.visitFormData.meals.push({ id: App.utils.uid('vm'), day: '', time: '', place: '', host: '', phone: '', note: '' });
        App.ui.saveVisitFormState(); App.ui.renderVisitFormLists();
      });
      App.els.vfGeneratePdfBtn?.addEventListener('click', () => {
        App.ui.saveVisitFormState();
        const doc = App.ui.buildVisitPdfDoc();
        if (!doc) return;
        const entry = App.state.app.entries.find((e) => e.id === App.state.visitFormEntryId);
        doc.save(`${App.utils.slug(entry?.title || 'visit')}.pdf`);
        App.utils.toast('PDF сформирован');
      });
      // Letter modal
      App.els.letterModalCloseBtn?.addEventListener('click', () => App.ui.closeLetterModal());
      App.els.letterEmailBodyInput?.addEventListener('input', (e) => {
        const entry = App.state.app.entries.find((en) => en.id === App.state.letterEntryId);
        if (!entry) return;
        entry.emailBody = e.target.value;
        App.store.save();
      });
      App.els.letterPreviewPdfBtn?.addEventListener('click', () => {
        const entry = App.state.app.entries.find((e) => e.id === App.state.letterEntryId);
        if (!entry) return;
        const event = App.data.getEventById(entry.eventId);
        const doc = App.ui.buildLetterPdfDoc(entry, event);
        if (!doc) return;
        doc.save(`${App.utils.slug(entry.title || 'letter')}-letter.pdf`);
      });
      App.els.letterAttachPdfBtn?.addEventListener('click', () => {
        const entry = App.state.app.entries.find((e) => e.id === App.state.letterEntryId);
        if (!entry?.visitForm) return App.utils.toast('Сначала заполни «Формуляр визита» для этой записи.');
        App.state.visitFormData = JSON.parse(JSON.stringify(entry.visitForm));
        const doc = App.ui.buildVisitPdfDoc();
        if (!doc) return;
        doc.save(`${App.utils.slug(entry.title || 'visit')}-schedule.pdf`);
        if (App.els.letterAttachStatus) App.els.letterAttachStatus.textContent = '📎 График скачан отдельно — «Отправить» приложит письмо и график вместе, если платформа поддерживает.';
      });
      App.els.letterSendBtn?.addEventListener('click', () => App.ui.sendLetterNow());
      App.ui.wireRteToolbar();
      document.querySelectorAll('.letter-type-tab').forEach((btn) => btn.addEventListener('click', () => {
        document.querySelectorAll('.letter-type-tab').forEach((b) => b.classList.toggle('active', b === btn));
        App.state.letterEditingType = btn.dataset.letterType;
        if (App.els.letterTemplateEditor) App.els.letterTemplateEditor.innerHTML = App.state.app.settings['letterTemplate' + btn.dataset.letterType] || DEFAULT_LETTER_TEMPLATE_HTML;
        App.ui.renderLetterPagesList();
        if (App.els.emailBodyDefaultInput && document.activeElement !== App.els.emailBodyDefaultInput) App.els.emailBodyDefaultInput.value = App.state.app.settings['emailBody' + btn.dataset.letterType] || DEFAULT_EMAIL_BODY_TEMPLATES[btn.dataset.letterType];
      }));
      App.els.senderNameInput?.addEventListener('input', (e) => { App.state.app.settings.senderName = e.target.value; App.store.save(); });
      App.els.emailBodyDefaultInput?.addEventListener('input', (e) => {
        const type = App.state.letterEditingType || 'Congregation';
        App.state.app.settings['emailBody' + type] = e.target.value;
        App.store.save();
      });
      App.els.emailBodyDefaultResetBtn?.addEventListener('click', () => {
        const type = App.state.letterEditingType || 'Congregation';
        App.state.app.settings['emailBody' + type] = DEFAULT_EMAIL_BODY_TEMPLATES[type];
        App.store.save();
        if (App.els.emailBodyDefaultInput) App.els.emailBodyDefaultInput.value = DEFAULT_EMAIL_BODY_TEMPLATES[type];
        App.utils.toast('Текст по умолчанию восстановлен');
      });
      App.els.geocodeEventBtn?.addEventListener('click', () => App.ui.geocodeCurrentEvent());
      App.els.eventVisitTypeInput?.addEventListener('change', () => App.ui.syncEventVisitFieldsVisibility());
      App.els.geocodeHomeBtn?.addEventListener('click', () => App.ui.geocodeHome());
      App.els.homeAddressInput?.addEventListener('input', (e) => { App.state.app.settings.homeAddress = e.target.value; App.store.save(); });
      App.els.senderAddressInput?.addEventListener('input', (e) => { App.state.app.settings.senderAddress = e.target.value; App.store.save(); });
      App.els.senderPhoneInput?.addEventListener('input', (e) => { App.state.app.settings.senderPhone = e.target.value; App.store.save(); });
      App.els.senderEmailInput?.addEventListener('input', (e) => { App.state.app.settings.senderEmail = e.target.value; App.store.save(); });
      App.els.emailMethodSelect?.addEventListener('change', (e) => { App.state.app.settings.emailMethod = e.target.value; App.store.save(); if (App.els.owaUrlRow) App.els.owaUrlRow.style.display = e.target.value === 'owa' ? '' : 'none'; });
      App.els.owaUrlInput?.addEventListener('input', (e) => { App.state.app.settings.owaUrl = e.target.value; App.store.save(); });
      App.els.addLetterPageBtn?.addEventListener('click', () => {
        const type = App.state.letterEditingType || 'Congregation';
        const pages = App.state.app.settings.letterPages[type] || (App.state.app.settings.letterPages[type] = []);
        pages.push({ id: App.utils.uid('lp'), title: '', html: '<div></div>' });
        App.store.save();
        App.ui.renderLetterPagesList();
      });
      App.els.previewLetterPdfBtn?.addEventListener('click', () => {
        const type = App.state.letterEditingType || 'Congregation';
        const visitTypeMap = { Congregation: 'congregation', Group: 'group', Pregroup: 'pregroup' };
        const sampleEvent = { id: 'preview', name: 'Приклад — ' + { Congregation: 'Собрание', Group: 'Группа', Pregroup: 'Предгруппа' }[type], visitType: visitTypeMap[type], congNumber: '00000', address: '', schedule: '' };
        const today = new Date();
        const end = new Date(today); end.setDate(end.getDate() + 5);
        const sampleEntry = { id: 'preview', title: sampleEvent.name, start: App.utils.iso(today), end: App.utils.iso(end), note: '' };
        const doc = App.ui.buildLetterPdfDoc(sampleEntry, sampleEvent);
        if (!doc) return;
        try {
          const url = doc.output('bloburl');
          window.open(url, '_blank');
        } catch (err) {
          console.error('Preview failed, falling back to download', err);
          doc.save('preview-letter.pdf');
        }
      });
      App.els.letterTemplateResetBtn?.addEventListener('click', () => {
        const type = App.state.letterEditingType || 'Congregation';
        App.ui.setLetterTemplateFor(type, DEFAULT_LETTER_TEMPLATE_HTML);
        if (App.els.letterTemplateEditor) App.els.letterTemplateEditor.innerHTML = DEFAULT_LETTER_TEMPLATE_HTML;
        App.utils.toast('Шаблон восстановлен');
      });
      App.els.countdownUnitSelect?.addEventListener('change', (e) => { App.state.countdownUnit = e.target.value; App.ui.renderAll(); });
      App.els.checkRemindersBtnMain?.addEventListener('click', () => App.ui.openRemindersModal());
      App.els.exportCancelBtn?.addEventListener('click', () => { if (App.els.exportModal) App.els.exportModal.hidden = true; });
      App.els.exportConfirmBtn?.addEventListener('click', () => { if (App.state.exportType === 'ics') App.actions.exportIcs(); else App.actions.exportJson(); if (App.els.exportModal) App.els.exportModal.hidden = true; });
      App.els.syncExportBtn?.addEventListener('click', () => App.actions.exportSyncFile());
      App.els.syncImportInput?.addEventListener('change', (e) => App.actions.importSyncFile(e.target.files?.[0] || null));
      document.querySelectorAll('[data-export-type]').forEach((btn) => btn.addEventListener('click', () => { App.state.exportType = btn.dataset.exportType; document.querySelectorAll('[data-export-type]').forEach((node) => node.classList.toggle('active', node === btn)); if (App.els.exportRangeCard) App.els.exportRangeCard.style.display = App.state.exportType === 'ics' ? 'block' : 'none'; }));
      document.querySelectorAll('[data-pdf-type]').forEach((btn) => btn.addEventListener('click', () => { App.state.pdfExportType = btn.dataset.pdfType; document.querySelectorAll('[data-pdf-type]').forEach((node) => node.classList.toggle('active', node === btn)); if (App.els.pdfRangeCard) App.els.pdfRangeCard.style.display = ['custom-range-calendar','custom-range'].includes(App.state.pdfExportType) ? 'block' : 'none'; }));
      App.els.backupBtn?.addEventListener('click', () => App.actions.exportJson());
      App.els.importInput?.addEventListener('change', (e) => App.actions.importJson(e.target.files?.[0] || null));
      App.els.resetAppBtn?.addEventListener('click', () => { if (window.confirm(App.utils.t('reset_confirm'))) App.actions.resetApp(); });
      App.els.mobileMenuToggleBtn?.addEventListener('click', () => App.ui.toggleMobileMenu());
      App.els.mobileOverlay?.addEventListener('click', () => App.ui.closeMobileMenu());
      // sidebarClickStopper: prevent overlay/pointer issues on small screens
      document.querySelector('.sidebar')?.addEventListener('click', (e) => { e.stopPropagation(); });
      // Tap-outside-to-close for the mobile drawer menu (the dimmed backdrop element
      // is intentionally kept disabled elsewhere, so this is the actual dismiss mechanism).
      document.addEventListener('click', (e) => {
        if (!App.els.appRoot?.classList.contains('menu-open')) return;
        if (e.target.closest('.sidebar') || e.target.closest('#mobileMenuToggleBtn')) return;
        App.ui.closeMobileMenu();
      });
 document.addEventListener('click', (e) => { const popover = document.getElementById('dayPopover'); if (!popover || popover.hidden) return; if (popover.contains(e.target) || e.target.closest('.sy-day')) return; App.ui.hideDayPopover(true); });
      App.els.addYearBtn?.addEventListener('click', () => { if (App.data.addServiceYear(Number(App.els.addYearInput?.value))) App.ui.renderAll(); });
      App.els.addNextYearBtn?.addEventListener('click', () => { const years = Object.keys(App.state.app.serviceYears).map(Number); const nextYear = (years.length ? Math.max(...years) : App.utils.getServiceYearForDate(new Date())) + 1; if (App.data.addServiceYear(nextYear)) { if (App.els.addYearInput) App.els.addYearInput.value = String(nextYear + 1); App.ui.renderAll(); } });
      window.addEventListener('online', () => App.els.offlineBanner?.classList.remove('show'));
      window.addEventListener('offline', () => App.els.offlineBanner?.classList.add('show'));
      if (!navigator.onLine) App.els.offlineBanner?.classList.add('show');
      window.addEventListener('pageshow', () => { App.ui.closeMobileMenu(); });
      document.addEventListener('visibilitychange', () => { if (!document.hidden) App.ui.closeMobileMenu(); });
      window.addEventListener('orientationchange', () => { App.ui.closeMobileMenu(); });
      if (window.visualViewport) {
        window.visualViewport.addEventListener('resize', () => App.ui.fixBottomNavViewport());
        window.visualViewport.addEventListener('scroll', () => App.ui.fixBottomNavViewport());
      }
      window.addEventListener('resize', () => App.ui.fixBottomNavViewport());
      // Universal: clicking the dimmed backdrop (outside .modal-card) closes any modal.
      document.querySelectorAll('.modal').forEach((modal) => modal.addEventListener('click', (e) => {
        if (e.target !== modal) return;
        if (modal === App.els.letterModal) App.ui.closeLetterModal();
        else modal.hidden = true;
      }));
      window.addEventListener('keydown', (e) => { if (e.key === 'Escape') { App.ui.hideDayPopover(true); App.ui.closeCalendarEditor(); App.ui.closeModal(App.els.weekEditorModal); App.ui.closeModal(App.els.eventEditorModal); App.ui.closeModal(App.els.visitFormModal); App.ui.closeLetterModal(); App.actions.closePdf(); if (App.els.exportModal) App.els.exportModal.hidden = true; App.ui.closeMobileMenu(); } });
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
      if (!this.state.app.settings.fontSize) this.state.app.settings.fontSize = '100';
      try { if (!this.state.app.settings.accentColor) this.state.app.settings.accentColor = localStorage.getItem('service-year-planner-accent') || 'green'; } catch (_) { if (!this.state.app.settings.accentColor) this.state.app.settings.accentColor = 'green'; }
      this.ui.closeMobileMenu();
      this.ui.renderAll();
      this.bind();
      this.ui.closeMobileMenu();
      this.ui.showPinGateIfNeeded();
      this.ui.showRemindersModalIfNeeded();
      this.ui.checkAutoBackupReminder();
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
  
const hideMonthSummaryDotsStyle = document.createElement('style');
hideMonthSummaryDotsStyle.textContent = '.sy-month-summary{display:none !important}';
document.head.appendChild(hideMonthSummaryDotsStyle);
App.init();
})();
