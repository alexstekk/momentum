# DS // Тестовое задание для стажировки

Необходимо реализовать веб-приложение `momentum`, аналог [расширения](https://chromewebstore.google.com/detail/momentum/laookkfknpbbblfpciffpaejjkokdgca?hl=ru&pli=1).
В приложении есть часы, дата, слайдер изображений, виджеты погоды, список задач.

## Блок погоды
- Состоит из города (текстовое поле)
- Отображения температуры
- Отображения текущей погоды (дождь/солнечная/снег/пасмурно)

**Функционал:**
- Для определения текущего города использовать geolocation api, город по умолчанию — Краснодар
- Для хранения населённого пункта используется локальное хранилище — local storage.
- Для получения прогноза погоды использовать [список api](https://github.com/public-api-lists/public-api-lists?tab=readme-ov-file#weather) (любой из списка можно использовать)
  
## Блок слайдер изображений на фоне
- Динамическая смена обоев в зависимости от текущего времени
  
**Функционал:**
- Для динамической смены обоев дано 4 картинки, и каждая картинка соответствует определенному промежутку времени, например, если сейчас 15:00, то показываем картинку из промежутка 12:00 - 18:00
- Каждому промежутку соответствует свое изображение:<br />
`00:00 - 06:00` - `https://github.com/digitalSector47/traineeship-test-task/images/01.jpg`<br />
`06:00 - 12:00` - `https://github.com/digitalSector47/traineeship-test-task/images/02.jpg`<br />
`12:00 - 18:00` - `https://github.com/digitalSector47/traineeship-test-task/images/03.jpg`<br />
`18:00 - 00:00` - `https://github.com/digitalSector47/traineeship-test-task/images/04.jpg`

## Блок времени и даты
- Отображение времени в формате `hh:mm:ss`
- Отображение даты в формате текущий день и текущий день недели, пример: `09 сентября, понедельник`
  
**Функционал:**
- Время изменяется каждую секунду
- Для работы приложения используем текущий часовой пояс

## Блок задач
- Поле для ввода новой задачи
- Список всех задач (состоит из чекбокса, названия задачи и кнопки удалить задачу)
- Кнопка удалить выполненные задачи
  
**Функционал:**
- Добавление новых задач осуществляется при нажатии на «Enter»
- Если поле для ввода новой задачи пустое — появляется ошибка
- Функционал удаления задачи из списка, у каждой задачи должа быть кнопка удалить
- Функционал перевода задачи в статус выполнено осуществляется при нажатии на чекбокс в списке задач
- Функционал удаления выполненных задач

## Технические требования
- Приложение проверяется в браузере Google Chrome последней версии
- Можно использовать Bootstrap, Material Design, Css-фреймворки, Html и Css препроцессоры
- Не разрешается использовать jQuery, другие js-библиотеки и фреймворки
- js-код приложения должен быть читаемым, без минимизации или обфускации

## Материалы
- [Работа с dom-элементами](https://learn.javascript.ru/searching-elements-dom)
- [TextContent](https://learn.javascript.ru/basic-dom-node-properties#textcontent-prosto-tekst)
- [Дата и время](https://learn.javascript.ru/date)
- [Date.prototype.toLocaleTimeString()](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleTimeString)
- [Date.prototype.toLocaleDateString()](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleDateString)
- [Рекурсивный setTimeout](https://learn.javascript.ru/settimeout-setinterval#rekursivnyy-settimeout)
- [Шаблонные строки](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Template_literals)
- [Тег &lt;input&gt;](https://developer.mozilla.org/ru/docs/Web/HTML/Element/Input)
- [Страница: DOMContentLoaded, load, beforeunload, unload](https://learn.javascript.ru/onload-ondomcontentloaded)
- [localStorage](https://developer.mozilla.org/ru/docs/Web/API/Window/localStorage)
- [Dведение в браузерные события](https://learn.javascript.ru/introduction-browser-events)
- [стили и классы](https://learn.javascript.ru/styles-and-classes)
- [Изменение документа](https://learn.javascript.ru/modifying-document)
- [Асинхронность в JavaScript](https://doka.guide/js/async-in-js/)
- [async/await](https://doka.guide/js/async-await/)


