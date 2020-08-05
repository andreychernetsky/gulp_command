'use strict';

const person = {
  name: 'Marcus Aurelius',
  born: 121,
  city: 'Roma',
  position: 'emperor'
};
console.log(person.city);//Roma

person.city = 'Odessa';
console.log(person.city);// Odessa

console.log(person['name']);//Marcus Aurelius
console.log(person.name);//Marcus Aurelius

//создаем константу и помещаем массив элементов
const cities = ['Athens', 'Roma', 'London', 'Beijing', 'Kiev', 'Riga'];
console.log(cities);

cities.push('Odessa');//Метод push() добавляет один или более элементов в конец массива и возвращает новую длину массива.
console.log(cities);//['Athens', 'Roma', 'London', 'Beijing', 'Kiev', 'Riga','Odessa'];

cities.unshift('New York');//Метод unshift() добавляет один или более элементов в начало массива и возвращает новую длину массива.
console.log(cities);//['New York','Athens', 'Roma', 'London', 'Beijing', 'Kiev', 'Riga','Odessa'];


const cities = ['Athens', 'Roma', 'London', 'Beijing', 'Kiev', 'Riga'];
console.log('shift: ' + cities.shift());//shift:Athens Метод shift() удаляет первый элемент из массива и возвращает его значение. Этот метод изменяет длину массива.
console.log(cities)//['Roma', 'London', 'Beijing', 'Kiev', 'Riga']
console.log('pop: ' + cities.pop());//pop:Riga


console.log({ i }, typeof i);//i is not defined
console.log({ s }, typeof s);
console.log({ b }, typeof b);
console.log({ f }, typeof f);

console.log({ person }, typeof person);
console.log({ isArray: Array.isArray(person) });

console.log({ cities }, typeof cities);
console.log({ isArray: Array.isArray(cities) });

console.log({ instanceofArray: cities instanceof Array });
