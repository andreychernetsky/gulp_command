/*
const acc = document.getElementsByClassName("accordion__button");
let i;
for(i = 0; i < acc.length; i++) {
  acc[i].addEventListener('click', function() {
    this.classList.toggle("active");
    let panel = this.nextElementSibling;
    if(panel.style.display == 'block') {
      panel.style.display ='none';
    } else {
      panel.style.display = 'block';
    }
  });
}
*/

const acc = document.getElementsByClassName("accordion__button");
let i;
for(i = 0; i < acc.length; i++) {
  acc[i].addEventListener('click', function() {
    this.classList.toggle("active");
    const panel = this.nextElementSibling;
    panel.style.display == 'block' ?  panel.style.display ='none' :  panel.style.display = 'block';

  });
}