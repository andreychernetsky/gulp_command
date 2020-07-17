//меню
  const leftmenu = document.querySelector('.left-menu');
  const hamburger = document.querySelector('.hamburger');

  //открытие на кнопку
  hamburger.addEventListener('click', () => {
    leftmenu.classList.toggle('openMenu');
  hamburger.classList.toggle('open');
  });

  //закрытие при клике не на меню
  document.addEventListener('click',(event)=>{
    if (!event.target.closest('.left-menu')){ //ищет вверх по дум дереву элемент left-menu
    leftmenu.classList.remove('openMenu');
  }
  });

  //открытие при клике на конкретный пункт
  leftmenu.addEventListener('click',(event)=>{
    const target = event.target;
  const dropdown = target.closest('.left-menu__link');
  if (dropdown){
    dropdown.classList.toggle('active');
    leftmenu.classList.add('openMenu');
    hamburger.classList.add('open');
  };
  });
