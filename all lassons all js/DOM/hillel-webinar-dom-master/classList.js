window.onload = ()=> {
  const blocks = document.querySelector('.block');
  // console.dir(blocks);
  // example добавим еще один class
  // класс может добавиться в html <div id="super-block" align="right" class="block target foo f1 f2 f3">ли через js
  blocks.classList.add('target');
  // console.dir(blocks);
  // exemple удалим класс f1
  blocks.classList.remove('f1');
  console.dir(blocks)


  // exemple toggle

}