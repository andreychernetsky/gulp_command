


let  btn = document.querySelector('.section');
let  nav = document.getElementById('nav');

btn.addEventListener('click', function() {
  nav.classList.toggle('active');
});



(function Accordion() {
  let titles = [...document.querySelectorAll('.accordion__title')];
  let lists = [...document.querySelectorAll('.accordion__list')];
  titles.forEach((elem,index)=>{
    elem.addEventListener('click',()=>{
      removeActive();
      lists[index].classList.add('active1')
    });
  })

  function removeActive(){
    lists.forEach(elem => elem.classList.remove('active1'));
  }


})();