// 1)сдвиг по клику на бургер боковой панели
/*
document.addEventListener('DOMContentLoaded',()=>{
  const menuTrigger = document.querySelector('#menu-trigger');
  menuTrigger.addEventListener('click',event => {
    event.preventDefault();
    menuTrigger.classList.toggle('menu-btn-open');
    document.body.classList.toggle('body-menu-open');
    document.querySelector('nav > ul').classList.toggle('menu-open');
  })
})

*/

document.addEventListener('DOMContentLoaded',()=>{
  const menuTrigger = document.querySelector('#menu-trigger');
  menuTrigger.addEventListener('click',event => {
    event.preventDefault();
    menuTrigger.classList.toggle('menu-btn-open');
    document.body.classList.toggle('body-menu-open');
    document.querySelector('nav > ul').classList.toggle('menu-open');
  })

  // 2_выбираем все дочерние ul
  //3
  //4
  //5 вставляем строку нам нужен дом элемент для этого напишем функцию которая возвращает элемент

 /*const menuItemTrigger = "<span class='caret caret-up'></span>" ;
  // document.querySelectorAll('ul li > ul').forEach(element=>{//2
    // console.log(element);

  document.querySelectorAll('ul li > ul').forEach(ul=>{
    const li = ul.closest('li');//3
    const a = li.querySelector('a');//4

    li.classList.add('hasSubmenu');
    a.append(menuItemTrigger);//5
    // console.log(a)
  })
*/

  //5 вставляем строку нам нужен дом элемент для этого напишем функцию которая возвращает элемент

  const menuItemTrigger = () => {
    const span = document.createElement('span');
    span.className = 'caret caret-up';
    return span;
  }

  document.querySelectorAll('ul li > ul').forEach(ul => {
    const li = ul.closest('li');
    const a = li.querySelector('a');

    li.classList.add('hasSubmenu');
    a.append(menuItemTrigger());
  })


  //6 плюс меняется на минус
  document.querySelectorAll('.menu li.hasSubmenu > a').forEach(a=>{
    a.addEventListener('click',event=>{
      const span = a.querySelector('span');
      const li = span.closest('li');

      span.classList.toggle('caret-down');
      Array.from(li.parentElement.children).forEach(child=>{
        if(child !== li) {
          child.classList.remove('caret-down');
        }
      })
    })
  })
})




/*
document.addEventListener('DOMContentLoaded', () => {
  const menuTrigger = document.querySelector('#menu-trigger')
  menuTrigger.addEventListener('click', event => {
    event.preventDefault();
    menuTrigger.classList.toggle('menu-btn-open')
    // document.querySelector('body') === document.body
    document.body.classList.toggle('body-menu-open')
    document.querySelector('nav > ul').classList.toggle('menu-open')
  })

  const menuItemTrigger = () => {
    const span = document.createElement('span')
    span.className = 'caret caret-up'
    return span
  }

  document.querySelectorAll('ul li > ul').forEach(ul => {
    const li = ul.closest('li')
    const a = li.querySelector('a')

    li.classList.add('hasSubmenu')
    a.append(menuItemTrigger())
  })

  document.querySelectorAll('.menu li.hasSubmenu > a').forEach(a => {
    a.addEventListener('click', event => {
      event.preventDefault()

      const span = a.querySelector('span')
      const li = span.closest('li')
      const ul = li.querySelector('ul')

      if (ul) {
        ul.style.display = ul.style.display === 'block' ? 'none' : 'block'
      }

      span.classList.toggle('caret-down')
      Array.from(li.parentElement.children).forEach(child => {
        if (child !== li) {
          const caret = child.querySelector('.caret')
          const ul = child.querySelector('ul')

          if (caret) {
            caret.classList.remove('caret-down')
          }

          if (ul) {
            ul.style.display = 'none'
          }
        }
      })
    })
  })
})

*/

// jQuery('html').on('click', function(event) {
// 	if( jQuery('body').hasClass('body-menu-open') ) {
// 		menuTrigger.removeClass('menu-btn-open');
// 		jQuery('body').removeClass('body-menu-open');
// 		jQuery('nav > ul').removeClass('menu-open');
// 	}
// });
// $('nav').click(function(event){
// 	event.stopPropagation();
// });