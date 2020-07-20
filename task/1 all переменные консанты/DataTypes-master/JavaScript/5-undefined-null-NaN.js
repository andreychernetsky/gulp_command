'use strict';

// undefined
let emptyScalar;
console.log({ emptyScalar }, typeof emptyScalar);//{emptyScalar:undefined} 'undefined

// example undefined
function test(t) {
  if(t === undefined) {
    return 'Undefined value';
  }
  return t;
}
 let emptyScalar;
console.log(test(emptyScalar));// Undefined value

/*undefined является свойством глобального объекта, то есть, это переменная в глобальной области видимости.
  Начальным значением undefined является примитивное значение undefined.*/

/*Переменная, не имеющая присвоенного значения, обладает типом undefined.
  Также undefined возвращают метод или инструкция, если переменная, участвующая в вычислениях, не имеет присвоенного значения.
  Функция возвращает undefined, если она не возвращает какого-либо значения.*/
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// null
const emptyObject = null;
console.log({emptyObject}, typeof emptyObject);//emptyObject:null 'object'

/*Значение null представляет отсутствие какого-либо объектного значения.
  В JavaScript, null является примитивом, и в контексте логических операций, рассматривается как ложное (falsy).

  null часто присутствует в местах где ожидается объект, но подходящего объекта нет.
  */


// NaN Глобальное свойство NaN является значением, представляющим не-число (Not-A-Number).
let count = NaN;
console.log({count}, typeof count);//{count:NaN} 'number'

// example
const = undefined + 1;
console.log({count});//const is not defined

// example
console.log(Infinity, -Infinity, typeof Infinity);
// Глобальное свойство Infinity является числовым значением, представляющим бесконечность.
console.log(Infinity, -Infinity, typeof Infinity);

console.log(Infinity          ); /* Infinity */
console.log(Infinity + 1      ); /* Infinity */
console.log(Math.pow(10, 1000)); /* Infinity */
console.log(Math.log(0)       ); /* -Infinity */
console.log(1 / Infinity      ); /* 0 */

// example
const s = (
  emptyObject === null ?
    'emptyObject is null' :
    'emptyObject is not null'
);
console.log(s);//emptyObject is not defined