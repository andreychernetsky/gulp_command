const numbers = [];

while (true) {
  let value = prompt('введите число', 0);
// проверям, что значение не равно строке, пустому значению
  if (value === '' || value === null || isNaN(value) ) break;

  numbers.push(+value);//добавляем числов массив
}

let sum = 0;

for (let i = 0; i < numbers.length; i++) {
  sum += numbers[i];//помещаем число в пременную sum для суммирования
}

alert( sum );