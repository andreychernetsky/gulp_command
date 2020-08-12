// Выбрать все textarea на странице.
document
  .querySelectorAll('textarea')
  .forEach(element => {
    // Повесить обработчик события нажатия клавиши внутри textarea.
    element.addEventListener('keydown', function (event) {
      // Если нажата клавиша "Tab":
      if (event.key === 'Tab') {
        /*
          Отменить стандартную обработку нажатия клавиши Tab
          для того, чтобы реализовать отбивку кода.
        */
        event.preventDefault()

        /*
          selectionStart
          Получает или устанавливает начало выделения области
          текста в поле ввода. Используется в паре со свойством
          selectionEnd. Значение указывает на порядковый номер
          первого символа в выделенном фрагменте относительно
          всего текста.
        */

        // Здесь будет содержимое textarea, на котором произошло событие.
        let value = ''
        /*
          Позиция, в которой должен остаться курсор
          после замены содержимого textarea.
        */
        let nextSelectionStart = this.selectionStart + 4

        // Присвоить содержимое textarea до курсора.
        value += this.value.substring(0, this.selectionStart)
        // Выделенный текст (где находится курсор) заменить на 4 пробела.
        value += '    '
        /*
          Добавить содержимое textarea от курсора
          (выделенного текста) и до конца.
        */
        value += this.value.substring(this.selectionEnd)

        // Заменить содержимое textarea, на котором произошло событие.
        this.value = value
        // Установить курсор сразу после вставленных пробелов.
        this.selectionStart = nextSelectionStart
        this.selectionEnd = nextSelectionStart
      }
    })

    // Повесить обработчик события отпускания клавиши внутри textarea.
    element.addEventListener('keyup', updateIframe)
  })

function updateIframe () {
  // Точка монтирования итоговой страницы.
  const mountedPoint = document.querySelector('[data-iframe]')
  // Содержимое DOM-элементов с кодом.
  const html = document.querySelector('.square-html>textarea').value
  const javascript = document.querySelector('.square-javascript>textarea').value
  const css = document.querySelector('.square-css>textarea').value

  // Содержимое итоговой страницы.
  const page = `${html}<style>${css}</style><script>${javascript}</script>`

  // iframe с итоговой страницей.
  const iframe = document.createElement('iframe')
  // Очистить точку монтирования итоговой страницы.
  mountedPoint.innerHTML = ''
  // Присвоить содержимое iframe'у.
  iframe.src = 'data:text/html;charset=utf-8,' + page
  // Вставить iframe на страницу.
  mountedPoint.append(iframe)
}