// задачи для проработки.
function myFoo(x,y){
  console.log(x+y);//14,7
  function myFoo2(){
    console.log(x-y) ;
    // return x-y;
  }
  return myFoo2();
}
myFoo(myFoo(10,4),1);

example
function getFactorial(n){
  if(n<1){

    return 1;
  }
  let result = n*getFactorial(n-1);
  // console.log(result) ;
  return result;
}

console.log(getFactorial(3));//6

// example
function countNumbers (str = '') {
  function stringOrNot(date){
    return !isNaN(data);
  }
  if(stringOrNot(str)) return 'this is no string';
  let lesnStr = str.length, sum = 0;

  for(let i = 0; i < lenStr; i++) {
    sum+=stringOrNot(+str[i]);
  }
  return sum;
}
console.log(countNumbers (555));
console.log(countNumbers ('dgsg4g3gd5g5g'));
console.log(countNumbers ('dgsg4g3gd5g5g dssjh445jh4j5j'));
/////////////////////////////////////////////////////



function myFoo(){
  //локальная область функции
  console.log('hello');//hello
}
myFoo();//вызов функции

// example
let a = 10;//глобальная область видимости
function myFoo(){
  let a = 1000;
  console.log(a);//1000 локальная область видимости
}
console.log(myFoo());//undefined

// example

let a = 10;//глобальная область видимости
function myFoo(){
  let a = 1000;
  return a;//возвращаем переменную a
}
console.log(myFoo());//1000

// example
let a = 10;//глобальная область видимости
function myFoo(){
  let a = 1000;
  return a;//1000 локальная область видимости
}
console.log(myFoo());//1000
console.log(a)//10
// example параметр передаем ф функцию

function myFoo(str){//параметр который передает вызов функции

  return str;//возвращаем параметр
}
const str = 'hello';//строка
console.log(myFoo(str));// передаем аргумент в функцию

// example сложение двух чисел

function getSumm(a,b) {
  let result = a + b;

  return result
}
// const res = getSumm(12,34);//вызов функции можно поместить в переменную и передать ее на вызов
console.log(getSumm(12,34));//46

// example
const getSumm = (a,b)=> {
  let result = a + b;

  return result
}
const res = getSumm(12,34);//вызов функции можно поместить в переменную и передать ее на вызов
console.log( res);//46

// example
const getSumm = (a,b)=> {
  let result = a + b;

  return result
};
//можно создать переменные со значениями и передать переменные в параметр функции
const num1 = 12;
const num2 = 34;
console.log( getSumm(num1,num2));//46


// example не работает ?
function getStr(){
  const str = prompt('введите строку');
  if(!str){// если ввели не строку
    return 'введи строку' ;
  }else{
    alert (str);
    return;
  }
}
console.log(getStr());

// example

const func = (function (a,b){
  console.log(a-b);//5
}(10,5));

// example
const func = ((a,b)=>{
  console.log(a-b); //5
}(10,5));

// example

function myFoo(array){
  let lastEl = null;
  for(let i = 0; i < array.length; i++){
    console.log("ячейка - " + i + " значение - "+ array[i] + " сам массив -" + array);
    lastEl = array[i];
  }
  // return lastEl;
  console.log(lastEl);//34 последний элемент массива

}
const result = myFoo([12,4,34]);
console.log(result);//34

// example
function foo(){

  // console.log(arguments[0]);//hello 2
  // console.log(arguments[1]);//undefined 3 почему выдает undefined?
}
foo('hello');
foo(2,3,4,5,6);

example
function foo(arr1){
  let arr = arguments;

  for(let i = 0; i < arr1.length; i++){
    console.log(`ячейка ${i} значение ${arr1[i]}`);
  }

}
foo('hello','hello2','hello3');
foo(2,3,4,5,6);

example
function matrixArray(rows,columns) {
  // let arr = [];
  let arr = new Array();
  for(let i = 0; i < rows; i++){
    arr[i] = new Array();
    for(let j=0; j < columns; j++) {
      // arr[i] = i;//[0,1,2]
      // arr[i][j]=i;//[[0,0,0],[1,1,1],[2,2,2]]
      //   arr[i][j]=i+j;//[[0,1,2],[1,2,3],[2,3,4]]
      arr[i][j]=i+j+1;//[[1,2,3],[2,3,4],[3,4,5]]

    }
  }
  return arr;
}
const myMatrix = matrixArray(3,3);
console.log(myMatrix);//[[1,2,3],[2,3,4],[3,4,5]]

// example
function myFoo(){
  let res_max = 0;
  for(let i = 0; i < arguments.length; i++){
    console.log(arguments.length);//5,5,5,5,5
    if(arguments[i]>res_max){
      console.log(a);//10,10,10,10
      res_max += arguments[i];
      console.log(res_max);//1,4,24,104
    }
  }
  return res_max;
}
const result = myFoo(1,3,2,20,80);
console.log(result);//80