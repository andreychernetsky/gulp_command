// 1) вывод в консоль. Знакомство с консолью
// 2) виды комментариев
// 3) что такое однострочный комментарий?
//4) что такое многострочный комментарий?
// console.log('hello Roma')
// 5) что такое переменная?

// 6)создай переменную и помести туда свое имя. Сделай вывод в консоль.
// 7)cоздай переменную и помести туда свою фамилию. Сделай вывод в консоль.
//8) виды имени переменной
// 9) что такое typeof

const firstname = 'andrey';
console.log(firstname);
const lastname = 'chernetsky';
console.log(lastname);

// можно создать переменную, но в ней не будет значение, а значение присвоим позже

let nameCar;
const nameCar2 = 'niva2';//значение присваивается сразу
nameCar='niva';
console.log(nameCar);


// ...............................................................
//  какие типы данных существуют? Привести свои пример кодом

let num = 5;// 1) число
let string = '5';//2 строка
let bool = true;//3 булево значение true false
let und; //undefined объявляем переменную и ничего не присваиваем
let symbol = Symbol();//уникальные данные

let doNutVariables = null;//

let obj = {};
let arr = [];
let func = function(){};

let regExp =/D/g;
let error = new Error();
let data = new Date();
let map = new Map();
let set = new Set();

console.log(typeof num);//9
console.log(typeof string);//9