/**
 * pdf.js
 * -----------------------------------------------------------------------
 * Формирование итогового PDF-документа (jsPDF + jspdf-autotable).
 * Документ содержит два раздела, каждый — ровно на одной странице:
 *   1) Формуляр для Алексея — со всеми разделами, включая пастырские посещения.
 *   2) Формуляр для Лидии — то же самое, но без раздела "Пастырские посещения".
 *
 * Чтобы каждый формуляр гарантированно помещался на одну страницу А4,
 * содержимое сначала "пробно" отрисовывается на черновом документе на
 * нескольких уровнях плотности (обычный / компактный / очень компактный).
 * Выбирается самый просторный уровень, при котором всё ещё помещается
 * на одну страницу — и только затем формируется финальный документ.
 *
 * Используется встроенный TTF-шрифт DejaVu Sans (поддерживает кириллицу
 * и немецкие умляуты), чтобы русский, украинский и немецкий текст
 * корректно отображался в PDF без "квадратиков" вместо букв.
 *
 * Пустые ячейки таблиц (и место для заметок вручную) дополнительно
 * получают интерактивные текстовые поля (AcroForm), чтобы получатель
 * PDF мог вписать данные прямо в файле в программе для чтения PDF —
 * это делается через try/catch, так что при недоступности AcroForm
 * в конкретной сборке jsPDF документ всё равно формируется корректно.
 * -----------------------------------------------------------------------
 */
(function () {
  'use strict';

  const NAVY = [22, 34, 63]; // #16223F — основной тёмно-синий
  const ACCENT = [59, 91, 169]; // #3B5BA9 — акцентный синий
  const LIGHT_GRAY = [243, 245, 247]; // #F3F5F5
  const WHITE = [255, 255, 255];
  const TEXT_DARK = [30, 34, 44];

  const FONT_NAME = 'DejaVuSans';

  /** Полчасовые интервалы 08:00–20:00 — те же подсказки, что и в интерфейсе. */
  const SERVICE_TIME_OPTIONS = (() => {
    const opts = [];
    for (let h = 8; h <= 20; h += 1) {
      opts.push(`${String(h).padStart(2, '0')}:00`);
      if (h < 20) opts.push(`${String(h).padStart(2, '0')}:30`);
    }
    return opts;
  })();
  /** До обеда: 10:00–11:30 с шагом 15 минут (как в интерфейсе). */
  const BEFORE_LUNCH_TIME_OPTIONS = ['10:00', '10:15', '10:30', '10:45', '11:00', '11:15', '11:30'];
  /** После обеда: 14:00–19:30 с шагом 30 минут (как в интерфейсе). */
  const AFTER_LUNCH_TIME_OPTIONS = ['14:00', '14:30', '15:00', '15:30', '16:00', '16:30', '17:00', '17:30', '18:00', '18:30', '19:00', '19:30'];
  /** Варианты времени обеда — как в интерфейсе (select). */
  const MEAL_TIME_OPTIONS = ['12:30', '12:45', '13:00', '13:30'];

  // Уровни плотности макета — от просторного к максимально компактному.
  // Подбирается автоматически под объём данных конкретного формуляра.
  const STYLE_TIERS = [
    {
      name: 'normal',
      margin: 40,
      titleFontSize: 18,
      typeFontSize: 10.5,
      sectionFontSize: 12.5,
      dayFontSize: 10.5,
      bodyFontSize: 9,
      headFontSize: 9,
      cellPadding: 5,
      sectionGap: 18,
      dayGap: 10,
      tableGap: 14,
      noteLineGap: 16,
      maxNoteLines: 3,
    },
    {
      name: 'compact',
      margin: 32,
      titleFontSize: 16,
      typeFontSize: 9.5,
      sectionFontSize: 11,
      dayFontSize: 9.5,
      bodyFontSize: 8,
      headFontSize: 8,
      cellPadding: 3.5,
      sectionGap: 13,
      dayGap: 7,
      tableGap: 9,
      noteLineGap: 12,
      maxNoteLines: 2,
    },
    {
      name: 'ultra',
      margin: 26,
      titleFontSize: 14,
      typeFontSize: 8.5,
      sectionFontSize: 9.5,
      dayFontSize: 8.5,
      bodyFontSize: 7,
      headFontSize: 7,
      cellPadding: 2,
      sectionGap: 9,
      dayGap: 5,
      tableGap: 6,
      noteLineGap: 9,
      maxNoteLines: 1,
    },
  ];

  /** Регистрирует встроенный кириллический шрифт в jsPDF (нужно на каждый экземпляр документа). */
  function registerFonts(doc) {
    if (!window.DEJAVU_SANS_NORMAL_B64 || !window.DEJAVU_SANS_BOLD_B64) {
      console.warn('Шрифт DejaVu Sans не найден — кириллица может отображаться некорректно.');
      return;
    }
    doc.addFileToVFS('DejaVuSans.ttf', window.DEJAVU_SANS_NORMAL_B64);
    doc.addFont('DejaVuSans.ttf', FONT_NAME, 'normal');
    doc.addFileToVFS('DejaVuSans-Bold.ttf', window.DEJAVU_SANS_BOLD_B64);
    doc.addFont('DejaVuSans-Bold.ttf', FONT_NAME, 'bold');
    doc.setFont(FONT_NAME, 'normal');
  }

  function pageWidth(doc) {
    return doc.internal.pageSize.getWidth();
  }
  function pageHeight(doc) {
    return doc.internal.pageSize.getHeight();
  }

  /**
   * Вычисляет ширину столбца "по размеру содержимого": берёт максимум
   * из ширины заголовка (жирным, headFontSize) и всех переданных строк
   * содержимого (обычным начертанием, bodyFontSize), плюс внутренние
   * отступы ячейки. Используется вместо ненадёжного cellWidth:'wrap' —
   * даёт по-настоящему плотную, предсказуемую колонку.
   */
  function fitWidth(doc, style, headerText, bodyTexts, extraPad) {
    doc.setFont(FONT_NAME, 'bold');
    doc.setFontSize(style.headFontSize);
    let maxW = headerText ? doc.getTextWidth(String(headerText)) : 0;
    doc.setFont(FONT_NAME, 'normal');
    doc.setFontSize(style.bodyFontSize);
    (bodyTexts || []).forEach((s) => {
      if (!s) return;
      const w = doc.getTextWidth(String(s));
      if (w > maxW) maxW = w;
    });
    return maxW + style.cellPadding * 2 + (extraPad || 8);
  }

  /**
   * Пытается добавить интерактивный выпадающий список (комбобокс AcroForm)
   * поверх пустой ячейки — со списком подсказок, который получатель PDF
   * может выбрать ИЛИ вписать своё значение (edit = true). Если AcroForm
   * combo box недоступен в этой сборке jsPDF, тихо откатываемся на обычное
   * текстовое поле, чтобы ячейка всё равно осталась заполняемой.
   */
  function addFillableComboField(doc, x, y, width, height, fieldName, optionsList, fontSize) {
    try {
      const AcroFormComboBox = (window.jspdf && window.jspdf.jsPDF && window.jspdf.jsPDF.AcroFormComboBox) || doc.AcroFormComboBox;
      if (!AcroFormComboBox || typeof doc.addField !== 'function') {
        addFillableField(doc, x, y, width, height, fieldName, { fontSize });
        return;
      }
      const field = new AcroFormComboBox();
      field.fieldName = fieldName;
      field.x = x;
      field.y = y;
      field.width = Math.max(6, width);
      field.height = Math.max(6, height);
      field.fontSize = fontSize || 9;
      field.maxFontSize = fontSize || 9;
      field.fontName = FONT_NAME; // пробуем явно указать наш кириллический шрифт
      field.edit = true; // разрешаем ввод произвольного значения, а не только выбор из списка
      if (typeof field.setOptions === 'function') {
        field.setOptions(optionsList);
      } else {
        field.options = optionsList;
      }
      doc.addField(field);
    } catch (err) {
      console.warn('Интерактивный выпадающий список недоступен — используем обычное текстовое поле', err);
      addFillableField(doc, x, y, width, height, fieldName, { fontSize });
    }
  }

  /**
   * Пытается добавить интерактивное текстовое поле (AcroForm) поверх пустой
   * ячейки/области — чтобы получатель PDF мог вписать данные прямо в файле
   * (Adobe Acrobat, Preview и большинство современных PDF-читалок).
   * Обёрнуто в try/catch: если сборка jsPDF не поддерживает AcroForm,
   * документ всё равно формируется как обычный статичный PDF, без ошибок.
   *
   * ВАЖНО: в jsPDF есть известный баг — свойство `fontSize` не применяется
   * к обычным AcroFormTextField (текст рисуется автоматическим, слишком
   * крупным размером и может визуально "вылезать" за пределы поля). Поэтому
   * здесь дополнительно задаётся `maxFontSize` (отдельное свойство, которое
   * не подвержено этому багу) и явно фиксируется однострочный режим —
   * это ограничивает автоматический размер шрифта до разумного.
   */
  function addFillableField(doc, x, y, width, height, fieldName, options) {
    try {
      const AcroFormTextField =
        (window.jspdf && window.jspdf.jsPDF && window.jspdf.jsPDF.AcroFormTextField) || doc.AcroFormTextField;
      if (!AcroFormTextField || typeof doc.addField !== 'function') return;
      const field = new AcroFormTextField();
      field.fieldName = fieldName;
      field.x = x;
      field.y = y;
      field.width = Math.max(6, width);
      field.height = Math.max(6, height);
      const fontSize = (options && options.fontSize) || 9;
      field.fontSize = fontSize;
      field.maxFontSize = fontSize; // обходит известный баг jsPDF с fontSize у текстовых полей
      field.fontName = FONT_NAME; // пробуем явно указать наш кириллический шрифт
      field.multiline = !!(options && options.multiline);
      doc.addField(field);
    } catch (err) {
      // Молча пропускаем — статичный PDF всё равно будет корректным.
      console.warn('Интерактивные поля PDF недоступны в этой сборке jsPDF', err);
    }
  }

  /** Гарантирует, что дальше по вертикали ещё есть место; иначе добавляет страницу. */
  function ensureSpace(doc, y, neededHeight, style) {
    if (y + neededHeight > pageHeight(doc) - style.margin) {
      doc.addPage();
      drawPageChrome(doc);
      return style.margin + 10;
    }
    return y;
  }

  /** Тонкая полоса сверху каждой страницы. */
  function drawPageChrome(doc) {
    const w = pageWidth(doc);
    doc.setFillColor(...NAVY);
    doc.rect(0, 0, w, 6, 'F');
  }

  function sectionHeading(doc, y, text, style) {
    y = ensureSpace(doc, y, style.sectionGap + 8, style);
    doc.setFont(FONT_NAME, 'bold');
    doc.setFontSize(style.sectionFontSize);
    doc.setTextColor(...NAVY);
    doc.text(text, style.margin, y);
    doc.setDrawColor(...ACCENT);
    doc.setLineWidth(1);
    doc.line(style.margin, y + 3, pageWidth(doc) - style.margin, y + 3);
    doc.setFont(FONT_NAME, 'normal');
    doc.setTextColor(...TEXT_DARK);
    return y + style.sectionGap;
  }

  function tableDefaults(style, columnStyles) {
    return {
      styles: {
        font: FONT_NAME,
        fontSize: style.bodyFontSize,
        cellPadding: style.cellPadding,
        textColor: TEXT_DARK,
        lineColor: [214, 219, 226],
        lineWidth: 0.4,
      },
      headStyles: {
        font: FONT_NAME,
        fontStyle: 'bold',
        fillColor: NAVY,
        textColor: WHITE,
        fontSize: style.headFontSize,
      },
      alternateRowStyles: { fillColor: LIGHT_GRAY },
      margin: { left: style.margin, right: style.margin },
      columnStyles: columnStyles || {},
    };
  }

  function drawTable(doc, y, head, body, style, columnStyles, fieldPrefix, interactive, comboColumns) {
    if (body.length === 0) {
      body = [head.map(() => '')];
    }
    const options = Object.assign({}, tableDefaults(style, columnStyles), {
      startY: y,
      head: [head],
      body,
    });
    if (interactive && fieldPrefix) {
      options.didDrawCell = function (data) {
        if (data.section !== 'body') return;
        const raw = data.cell.raw;
        if (raw === '' || raw === null || raw === undefined) {
          const fieldName = `${fieldPrefix}_r${data.row.index}_c${data.column.index}`;
          const comboEntry = comboColumns && comboColumns[data.column.index];
          const comboOptions = typeof comboEntry === 'function' ? comboEntry(data) : comboEntry;
          const fontSize = Math.min(style.bodyFontSize, 9);
          if (comboOptions) {
            addFillableComboField(doc, data.cell.x + 1, data.cell.y + 1, data.cell.width - 2, data.cell.height - 2, fieldName, comboOptions, fontSize);
          } else {
            addFillableField(doc, data.cell.x + 1, data.cell.y + 1, data.cell.width - 2, data.cell.height - 2, fieldName, { fontSize });
          }
        }
      };
    }
    doc.autoTable(options);
    return doc.lastAutoTable.finalY + style.tableGap;
  }

  /** Рисует один раздел (для Алексея — includePastoral=true, для Лидии — false). */
  function drawFormPage(doc, state, i18n, title, includePastoral, style, fieldPrefix, interactive) {
    const t = i18n.t.bind(i18n);
    let y = style.margin + 10;

    drawPageChrome(doc);

    // Заголовок страницы
    doc.setFont(FONT_NAME, 'bold');
    doc.setFontSize(style.titleFontSize);
    doc.setTextColor(...NAVY);
    doc.text(title, style.margin, y);
    y += style.titleFontSize * 0.45;
    doc.setDrawColor(...NAVY);
    doc.setLineWidth(1.5);
    doc.line(style.margin, y, pageWidth(doc) - style.margin, y);
    y += style.sectionGap;

    // Тип посещения
    doc.setFont(FONT_NAME, 'normal');
    doc.setFontSize(style.typeFontSize);
    doc.setTextColor(...TEXT_DARK);
    const typeKey =
      state.visitType === 'meeting' ? 'visitTypeMeeting' : state.visitType === 'group' ? 'visitTypeGroup' : state.visitType === 'pregroup' ? 'visitTypePregroup' : null;
    doc.setFont(FONT_NAME, 'bold');
    doc.text(t('pdfVisitTypeLabel'), style.margin, y);
    doc.setFont(FONT_NAME, 'normal');
    doc.text(typeKey ? t(typeKey) : '', style.margin + doc.getTextWidth(t('pdfVisitTypeLabel')) + 14, y);
    y += style.sectionGap;

    // Расписание встреч
    y = sectionHeading(doc, y, t('pdfMeetingsSchedule'), style);
    const meetingHead = [t('meetingTypeLabel'), t('dayLabel'), t('timeLabel'), t('placeLabel')];
    const meetingBody = state.meetings.map((m) => [
      m.type === 'meetingTypeOther' ? m.customType || t('meetingTypeOther') : t(m.type),
      m.day || '',
      m.time || '',
      m.place || '',
    ]);
    const meetingTypeTexts = i18n.MEETING_TYPES.map((mt) => t(mt)).concat(state.meetings.map((m) => m.customType));
    y = drawTable(
      doc,
      y,
      meetingHead,
      meetingBody,
      style,
      {
        0: { cellWidth: fitWidth(doc, style, t('meetingTypeLabel'), meetingTypeTexts) },
        1: { cellWidth: fitWidth(doc, style, t('dayLabel'), state.meetings.map((m) => m.day), 14) },
        2: { cellWidth: fitWidth(doc, style, t('timeLabel'), state.meetings.map((m) => m.time), 14) },
      },
      'shared_meet',
      interactive
    );

    // План служения — отдельная таблица на каждый день (без столбца "день
    // служения": он и так ясен из заголовка таблицы над ней).
    y = sectionHeading(doc, y, t('pdfServicePlan'), style);
    const serviceHead = [t('serviceTableTime'), t('serviceTablePlace'), t('serviceTablePartner'), t('serviceTableKind')];
    // Ширины считаем один раз по ВСЕМ дням сразу, чтобы все таблицы на
    // странице были одинаково выровнены. "Время", "Место проведення" и
    // "Вид служения" сжимаются по своему содержимому, а всё освободившееся
    // место целиком уходит в "С кем сотрудничаю" (единственный столбец без
    // явной ширины).
    const allServiceTimes = [];
    const allServiceKinds = [];
    const allServicePlaces = [];
    state.servicePlan.forEach((d) => d.rows.forEach((r) => {
      allServiceTimes.push(r.time);
      allServiceKinds.push(r.kind);
      allServicePlaces.push(r.place);
    }));
    const serviceColumnStyles = {
      0: { cellWidth: fitWidth(doc, style, t('serviceTableTime'), allServiceTimes.concat(SERVICE_TIME_OPTIONS.slice(0, 1)), 16) },
      1: { cellWidth: fitWidth(doc, style, t('serviceTablePlace'), allServicePlaces) },
      3: { cellWidth: fitWidth(doc, style, t('serviceTableKind'), allServiceKinds) },
    };
    if (state.servicePlan.length === 0) {
      y = drawTable(doc, y, serviceHead, [], style, serviceColumnStyles, 'shared_svc_empty', interactive, { 0: SERVICE_TIME_OPTIONS });
    } else {
      state.servicePlan.forEach((day) => {
        y = ensureSpace(doc, y, style.dayGap + 14, style);
        doc.setFont(FONT_NAME, 'bold');
        doc.setFontSize(style.dayFontSize);
        doc.setTextColor(...ACCENT);
        doc.text(day.label || '', style.margin, y);
        doc.setTextColor(...TEXT_DARK);
        y += style.dayGap;
        const body = day.rows.map((r) => [r.time || '', r.place || '', r.partner || '', r.kind || '']);
        const timeOptionsForRow = (data) => {
          const row = day.rows[data.row.index];
          if (row && row.session === 'before') return BEFORE_LUNCH_TIME_OPTIONS;
          if (row && row.session === 'after') return AFTER_LUNCH_TIME_OPTIONS;
          return SERVICE_TIME_OPTIONS;
        };
        y = drawTable(doc, y, serviceHead, body, style, serviceColumnStyles, `shared_svc_${day.id}`, interactive, { 0: timeOptionsForRow });
      });
    }

    // Пастырские посещения (только для формуляра Алексея, и не для предгруппы)
    if (includePastoral && state.visitType !== 'pregroup') {
      y = sectionHeading(doc, y, t('pdfPastoralVisits'), style);
      const pastoralHead = [t('pastoralName'), t('pastoralDay'), t('pastoralTime'), t('serviceTablePartner'), t('pastoralReason')];
      const pastoralBody = state.pastoralVisits.map((p) => [p.name || '', p.day || '', p.time || '', p.partner || '', p.reason || '']);
      const pastoralDayTextsForWidth = i18n.MEAL_DAY_KEYS.map((dk) => t(dk));
      y = drawTable(
        doc,
        y,
        pastoralHead,
        pastoralBody,
        style,
        {
          0: { minCellWidth: 95 },
          1: { cellWidth: fitWidth(doc, style, t('pastoralDay'), pastoralDayTextsForWidth.concat(state.pastoralVisits.map((p) => p.day)), 14) },
          2: { cellWidth: fitWidth(doc, style, t('pastoralTime'), state.pastoralVisits.map((p) => p.time), 14) },
        },
        `${fieldPrefix}_past`,
        interactive
      );
    }

    // Обеды
    y = sectionHeading(doc, y, t('pdfMeals'), style);
    const mealHead = [t('mealDay'), t('mealTime'), t('mealPlace'), t('mealHost'), t('mealPhone'), t('mealNote')];
    const mealBody = state.meals.map((m) => [m.day || '', m.time || '', m.place || '', m.host || '', m.phone || '', m.note || '']);
    const mealDayTextsForWidth = i18n.MEAL_DAY_KEYS.map((dk) => t(dk));
    // "День" и остальные короткие столбцы сжимаются по содержимому — всё
    // освободившееся место целиком уходит в "Место" (единственный столбец
    // без явной ширины).
    y = drawTable(
      doc,
      y,
      mealHead,
      mealBody,
      style,
      {
        0: { cellWidth: fitWidth(doc, style, t('mealDay'), mealDayTextsForWidth.concat(state.meals.map((m) => m.day)), 14) },
        1: { cellWidth: fitWidth(doc, style, t('mealTime'), MEAL_TIME_OPTIONS.concat(state.meals.map((m) => m.time)), 16) },
        3: { cellWidth: fitWidth(doc, style, t('mealHost'), state.meals.map((m) => m.host)) },
        4: { cellWidth: fitWidth(doc, style, t('mealPhone'), state.meals.map((m) => m.phone)) },
        5: { cellWidth: fitWidth(doc, style, t('mealNote'), state.meals.map((m) => m.note)) },
      },
      'shared_meals',
      interactive,
      { 1: MEAL_TIME_OPTIONS }
    );

    // Дополнительные заметки
    y = sectionHeading(doc, y, t('pdfNotes'), style);
    doc.setFontSize(style.bodyFontSize + 0.5);
    if (state.notes) {
      const lines = doc.splitTextToSize(state.notes, pageWidth(doc) - style.margin * 2);
      const lineHeight = style.bodyFontSize + 3;
      y = ensureSpace(doc, y, lines.length * lineHeight + 10, style);
      doc.text(lines, style.margin, y);
      y += lines.length * lineHeight + 6;
    }

    // Пустые строки для записей вручную — заполняем ТОЛЬКО оставшееся место
    // на текущей странице и никогда не создаём из-за них новую страницу,
    // чтобы формуляр гарантированно оставался на одной странице. На каждую
    // напечатанную линию добавляется своё ОТДЕЛЬНОЕ интерактивное поле
    // (а не одно большое на всю область), с небольшим зазором между ними,
    // чтобы в PDF-читалке это были явно три разных поля, а не одно.
    // Поле сделано выпадающим списком без вариантов (только edit=true) —
    // это обходит известный баг jsPDF, из-за которого размер шрифта
    // (fontSize) игнорируется у обычных текстовых полей.
    const bottomLimit = pageHeight(doc) - style.margin - 26; // с запасом под подвал
    const linesThatFit = Math.max(0, Math.floor((bottomLimit - y) / style.noteLineGap));
    const linesToDraw = Math.min(style.maxNoteLines, linesThatFit);
    if (linesToDraw > 0) {
      const areaTop = y;
      const fieldGap = 2; // небольшой зазор между полями, чтобы они не соприкасались
      doc.setDrawColor(200, 205, 213);
      doc.setLineWidth(0.6);
      for (let i = 0; i < linesToDraw; i += 1) {
        const lineTop = areaTop + i * style.noteLineGap;
        y += style.noteLineGap;
        doc.line(style.margin, y, pageWidth(doc) - style.margin, y);
        if (interactive) {
          addFillableComboField(
            doc,
            style.margin,
            lineTop,
            pageWidth(doc) - style.margin * 2,
            style.noteLineGap - fieldGap,
            `${fieldPrefix}_manual_notes_${i + 1}`,
            [],
            Math.min(style.bodyFontSize, 9)
          );
        }
      }
    }

    // Подвал
    const generated = new Date().toLocaleDateString(i18n.lang === 'de' ? 'de-DE' : i18n.lang === 'uk' ? 'uk-UA' : 'ru-RU');
    doc.setFontSize(8);
    doc.setTextColor(140, 146, 158);
    doc.text(`${t('pdfGeneratedOn')}: ${generated}`, style.margin, pageHeight(doc) - 16);
  }

  /** Пробный рендер на черновом документе — возвращает true, если всё поместилось на 1 страницу. */
  function fitsOnOnePage(state, i18n, title, includePastoral, style) {
    const { jsPDF } = window.jspdf;
    const scratch = new jsPDF({ unit: 'pt', format: 'a4' });
    registerFonts(scratch);
    drawFormPage(scratch, state, i18n, title, includePastoral, style, null, false);
    return scratch.internal.getNumberOfPages() === 1;
  }

  /** Подбирает самый просторный уровень плотности, при котором формуляр помещается на 1 страницу. */
  function pickStyle(state, i18n, title, includePastoral) {
    for (let i = 0; i < STYLE_TIERS.length; i += 1) {
      if (fitsOnOnePage(state, i18n, title, includePastoral, STYLE_TIERS[i])) {
        return STYLE_TIERS[i];
      }
    }
    // Даже самый компактный уровень не уместился — используем его как есть
    // (лучшее из возможного при таком объёме данных).
    return STYLE_TIERS[STYLE_TIERS.length - 1];
  }

  const PdfGenerator = {
    /**
     * Формирует полный PDF-документ (jsPDF instance) на основе состояния формы.
     * Каждый из двух формуляров (для Алексея и для Лидии) автоматически
     * подбирает свою плотность макета так, чтобы уместиться на одной странице.
     * @param {Object} state — состояние формы из app.js
     * @param {Object} i18n — модуль I18N (для переводов и текущего языка)
     * @returns {jsPDF} готовый документ (ещё не сохранён)
     */
    generate(state, i18n) {
      const { jsPDF } = window.jspdf;

      const alexTitle = i18n.t('pdfPageForAlex');
      const lydiaTitle = i18n.t('pdfPageForLydia');

      const alexStyle = pickStyle(state, i18n, alexTitle, true);
      const lydiaStyle = pickStyle(state, i18n, lydiaTitle, false);

      const doc = new jsPDF({ unit: 'pt', format: 'a4' });
      registerFonts(doc);
      doc.setFont(FONT_NAME, 'normal');

      // Страница 1 — формуляр для Алексея (со всеми разделами)
      drawFormPage(doc, state, i18n, alexTitle, true, alexStyle, 'alex', true);

      // Страница 2 — формуляр для Лидии (без пастырских посещений)
      doc.addPage();
      drawFormPage(doc, state, i18n, lydiaTitle, false, lydiaStyle, 'lydia', true);

      return doc;
    },
  };

  window.PdfGenerator = PdfGenerator;
})();
