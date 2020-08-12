

function getMonthMatrix (year, month) {


  const firstDate = new Date(year, month, 1)
  const lastDate = new Date(year, month + 1, 0)

  const firstDay = firstDate.getDay() || 7

  const days = Array(lastDate.getDate()).fill().map((_, i) => i + 1)

  // В начале
  if (firstDay - 1) {
    days.unshift(...Array(firstDay - 1).fill(''))
  }

  // В конец
  while (days.length % 7) {
    days.push('');
  }

  const matrix = []
  while (days.length) {
    const week = days.splice(0, 7)
    matrix.push(week)
  }

  return matrix
}

function getDomMatrix (monthMatrix) {
  const tbody = document.createElement('tbody')

  for (const week of monthMatrix) {
    const tr = document.createElement('tr');

    for (const day of week) {
      const td = document.createElement('td')
      tr.append(td)
      td.textContent = day
    }

    tbody.append(tr)
  }

  return tbody
}
// 12) перемещение с помощью стрелок лево право
// создадим функцию
const DATE = new Date;
showDate();

function showDate() {
  const monthMatrix = getMonthMatrix(DATE.getFullYear(), DATE.getMonth());
  const domMatrix = getDomMatrix(monthMatrix);

  const monthName = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'[DATE.getMonth()]];

  document.querySelector('tbody').innerHTML = domMatrix.innerHTML;
 document.querySelector('info')=`` // 14) добавим вывод информации о смене месяца
}

// 13)
// повесим на стрелки обработчики событий
document.querySelector('.prev').addEventListener('click', ()=>{
  event.preventDefault();
  DATE.setMonth(DATE.getMonth()-1);//следующий после текущего
showDate();
})

document.querySelector('.next').addEventListener('click', ()=>{
  event.preventDefault();
DATE.setMonth(DATE.getMonth()+1);//следующий после текущего
showDate();
})


