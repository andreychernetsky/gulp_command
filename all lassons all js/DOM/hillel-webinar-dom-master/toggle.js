// Метод toggle объекта classList чередует заданный CSS класс элемента: добавляет класс, если его нет и удаляет, если есть.


{
  const blocks = document.querySelector('.block');
  setInterval(function(){
    blocks.classList.toggle('target');
  },100);
  console.dir(blocks);
}


