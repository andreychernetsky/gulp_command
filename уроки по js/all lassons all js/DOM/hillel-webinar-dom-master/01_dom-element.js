/*
    JS DOM (для начинающий);
    ▪ методы getElement(s)...
    ▪ Простая манипуляция dom-коллекцией
    ▪ Events
    ▪ *bubbling and capturing
*/
// ----------------------------------------------------------
/*
    getElementById
    getElementsByName
    getElementsByClassName

    --
    querySelector
    querySelectorAll
*/
window.onload = function () {
  const elem = document.getElementById('super-block'); // ссылка на element
  // console.log(elem.id);
  // example добавляем foo
  // elem.id +='foo';
  // запустим через timer
  setTimeout(() => {
    elem.id += 'foo';
  }, 2000);
  // console.dir(elem);
  // getElementsByClassName
  const elems = document.getElementsByClassName('block');
  // console.log(elems);
};
// exemple querySelector
window.onload = function () {
  const block = document.querySelector('.block');
  // console.dir(block);
  // exemple окрасим block в красный цвет
  block.style.backgroundColor = 'rgba(13,203,167,0.7)';
  // exampl equerySelectorAll
  /*const blocks = document.querySelectorAll('.block');
  console.dir(blocks)*/
  // exemple обратимся к каждому блоку отдельно
  /*{
    const blocks = document.querySelectorAll('.block');
    console.dir(blocks);
    for(let i = 0; i < blocks.length; i++) {
      blocks[i].style.backgroundColor = 'rgba(13,203,167,0.7)';
    }
  }*/
  // exemple forEach
  const blocks = document.querySelectorAll('.block');
  blocks.forEach(function (item) {
    // console.log(item);
    item.style.backgroundColor = 'rgba(15,103,167.0.7)';
  })
}

