/*
JavaScript Вывод даты
По умолчанию JavaScript использует часовой пояс браузера и отображает дату в виде полнотекстовой строки:

  Wed Jul 22 2020 14:48:45 GMT+0300 (Москва, стандартное время)

Объекты даты создаются с помощью конструктора new Date().
  Есть 4 варианта создание нового объекта даты:
*/

new Date();
new Date(год, месяц, день, часы, минуты, секунды, миллисекунды);
new Date(миллисекунды);
new Date(строка даты);

// example создает новый объект дата с текущей датой и время:

 const d = new Date();
console.log(d);

// example new Date(год, месяц, ...) создает новый объект дата с указанными датой и время.
// 7 чисел указывают год, месяц, день, час, минуты, секунды и миллисекунды (в указанном порядке):

const d = new Date(2020, 06, 22, 15, 01, 30, 0);
console.log(d);// Wed Jul 22 2020 15:01:30 GMT+0300 (Москва, стандартное время)


// example 2 числа определяют год и месяц:
const d = new Date(2020, 11);
console.log(d);//Tue Dec 01 2020 00:00:00 GMT+0300(GMT+03:00)


// example Вы не можете пропустить месяц. Если указать только один параметр, он будет обрабатываться как миллисекунды.
const d = new Date(2020);
console.log(d);//Thu Jan 01 1970 03:00:02 GMT+0300 (Москва, стандартное время)

// example
// Прошлое время
// Один и два цифровых года будут интерпретироваться как 19xx:
  const d = new Date(99, 11, 24);
console.log(d);//Fri Dec 24 1999 00:00:00 GMT+0300 (Москва, стандартное время)

// example Одна цифра года будет интерпретироваться как 19xx
const d = new Date(9, 11, 24);
console.log(d);//Fri Dec 24 1909 00:00:00 GMT+0230 (Москва, стандартное время)

// new Date(строка даты) создает новый объект даты со строкой даты:
//  example
const d = new Date("October 13, 2020 11:13:00");
console.log(d);//Tue Oct 13 2020 11:13:00 GMT+0300 (Москва, стандартное время)

// new Date(миллисекунды) создает новый объект даты, как нулевое время плюс миллисекунды:
const d = new Date(0);
console.log(d);// Thu Jan 01 1970 03:00:00 GMT+0300 (Москва, стандартное время)

const d = new Date(1595418525238);
console.log(d);//Wed Jul 22 2020 14:48:45 GMT+0300 (Москва, стандартное время)

/*
Методы дат
При создании объекта даты, ряд методов позволяют работать с ней.

  Методы даты позволяют получить и установить год, месяц, день, час, минуты, секунды и миллисекунды объектов даты с использованием местного времени или UTC (или универсальное, GMT) время.*/
