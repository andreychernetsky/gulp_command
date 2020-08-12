//1 найдем все селекторы через querySelectorAll
// 2) каждому элементу добавим обработчик события по keydown пользователь должен нажать клавишу вниз keyup срабатывает  пользователь отпускает клавишу
// 3)после того как сработает события по keydown то запустится функция function(event)
// задача
//    определение клавиши которую нажал
//       функция принимает один аргумент event function(event)
// 4)пишем условие, что если нажата клавиша tab то произойдет следующее действие
// 5)отменим стандартную отработку методом preventDefault()

// задача написать четыре пробела
// 6) создадим пустую строку
//7) кладем пустую строку
// задача собирать код в один проект
//8) положим все что будет в textarea
//9) вставляем четыре пробела
//10)вставляем все что находится после selectionEnd
//11) делаем замену в набранной строке пустыми пробелами
//12) равен равно завершению текущего и плюс четыре символа
//13 13a будет при нажатие возвращать курсор в конец четвертого пробела

/*
document.querySelectorAll('textarea')//2
  .forEach(element => element.addEventListener('keydown', function(event){//3
  // /!*console.log(event);//дает возможность в консоли определить какая клавиша была нажата
    //появится объект служебной информации*!/
  if(event.key === 'Tab') {//4
    event.preventDefault();//5
    // /!*console.log(this.selectionStart);//ссылается на то, где произошло событие
    /!*console.log(this.selectionEnd);*!/
    let value = '';//6
    let nextSelectionStart = this.selectionStart + 4;//12
    value = this.value.substring(0, this.selectionStart);//8 начальная точка каретки
    value += '   '; //вставляем четыре пробела//9
    value += this.value.substring(this.selectionEnd);//10 конечная точка каретки
    this.value = value;//11
    this.selectionStart = nextSelectionStart;//13
    this.selectionEnd = nextSelectionStart;//13a
  }

}));
*/

// следующая задача. Написать код для сбора кода в один проект и загружалось в качестве страницы
// у нас есть событие keydown которое срабатывает, когда нажато keydown

// 14) Повесить обработчик события отпускания клавиши внутри textarea.
// 15 Содержимое DOM-элементов с кодом.
// 16  Содержимое итоговой страницы.
//17
document.querySelectorAll('textarea')//2
  .forEach(element => {
    element.addEventListener('keydown', function (event) {//3
      // /!*console.log(event);//дает возможность в консоли определить какая клавиша была нажата
      //появится объект служебной информации*!/
      if (event.key === 'Tab') {//4
        event.preventDefault();//5
        // /!*console.log(this.selectionStart);//ссылается на то, где произошло событие
        /*console.log(this.selectionEnd);*/
        let value = '';//6
        let nextSelectionStart = this.selectionStart + 4;//12
        value = this.value.substring(0, this.selectionStart);//8
        // console.log(value);
        value += '   '; //вставляем четыре пробела//9
        value += this.value.substring(this.selectionEnd);//10
        this.value = value;//11
        console.log(value);
        this.selectionStart = nextSelectionStart;//13
        this.selectionEnd = nextSelectionStart;//13a
      }
    });
    element.addEventListener('keyup', updateIframePage);//14
  });

function updateIframePage() {
  const mountedPoint =  document.querySelector('[data-iframe]');//17
  // 15 Содержимое DOM-элементов с кодом.
  const html = document.querySelector('.square-html>textarea').value;//окошко html
  const javascript = document.querySelector('.square-javascript>textarea').value;//окошко javascript
  const css = document.querySelector('.square-css>textarea').value;//окошко css

  const page = `${html}<style>${css}</style><script>${javascript}</script>`; // 16
  // console.log(page);
  const iframe = document.createElement('iframe');//19
  mountedPoint.innerHTML = '';//18
  iframe.src='data:text/html;charset = utf-8' + page; //20
  mountedPoint.append(iframe);//21
}
