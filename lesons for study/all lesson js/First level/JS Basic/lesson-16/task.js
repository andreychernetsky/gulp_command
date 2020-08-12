// ============================================================================
var name = 'Практика на пользовательских функций';
console.log('Урок № 16 - ' + name);
// ============================================================================

// Реализуйте функцию inArray, которая будет проверять, есть ли в массиве элемент
// с таким значением или нет. Первым параметром функция должна принимать значение,
// а вторым - массив. Если такой элемент есть - функция должна вернуть true,
// а если нет - false.

// Функция inArray

function inArray(value, arr) {
  for (var i = 0; i < arr.length; i++) {
    if (value === arr[i]) {
      return true;
    }
  } return false;
}

var arr = [1, 2, 3, 4, 5];
console.log(inArray(5, arr));

// ============================================================================

// Реализуйте функцию isSimple, которая параметром будет принимать число и
// проверять, простое оно или нет. Простое число - это число, которое не делится
// ни на одно другое число (кроме как на 1 и на само себя - на это делятся все
// числа). Если число простое - функция должна вернуть true,
// в противном случае false.

// Простые числа - isSimple

function isSimple(num) {
  for (var i = 2; i < num; i++) {
    if (num % i == 0) {
      return false;
    } return true;
  }
}

var num = 6;
console.log(isSimple(num));

// ============================================================================

// Реализуйте функцию getDivisors, которая параметром будет принимать число и
// возвращать массив его делителей, то есть чисел, на которое делится наше число.
// К примеру, если мы передадим число 24 - мы должны получить
// массив [1, 2, 3, 4, 6, 12, 24].

// Делители - getDivisors

function getDivisors(n) {
  var arrayNum = [];
  for (var i = 1; i <= n; i++) {
    if (n % i == 0) {
      arrayNum.push(i);
    }
  } return arrayNum;
}

var n = 24;
console.log(getDivisors(n));

// ============================================================================

// Реализуйте функцию getIntersection, которая параметрами будет принимать два
// массива и возвращать массив элементов, которые есть и в одном, и во втором
// массиве (это называется пересечение массивов). К примеру,
// getIntersection([1, 2, 3], [2, 3, 4]) должно вернуть [2, 3].

// Пересечение массивов getIntersection

function getIntersection(arr1, arr2) {
  result = [];
  for (var i = 0; i < arr1.length; i++) {
    if (inArray(arr1[i], arr2)) {
      result.push(arr1[i]);
    }
  } return result;
}

console.log(getIntersection([1, 2, 3], [2, 3, 4]));

// ============================================================================

// Реализуйте функцию getGreatestCommonDivisor, которая параметрами будет
// принимать два числа и возвращать наибольший общий делитель (НОД) этих двух
// чисел. К примеру, для чисел 12 и 18 НОД равен 6.

function getGreatestCommonDivisor(a, b) {
  var result = getIntersection(getDivisors(a), getDivisors(b));
  return Math.max.apply(null, result);
}

var a = 12;
var b = 18;
console.log(getGreatestCommonDivisor(a, b));

// or

function getGreatestCommonDivisor(a, b) {
  var result;
  return (getIntersection(getDivisors(a), getDivisors(b)).pop(result));
}

var a = 12;
var b = 18;
console.log(getGreatestCommonDivisor(a, b));

// ============================================================================
var name = 'Практика на пользовательских функций';
console.log('Урок № 16 - ' + name);
// ============================================================================

/*
1. Дана строка. Сделайте заглавным первый символ каждого слова этой строки.
Для этого сделайте вспомогательную функцию ucfirst, которая будет получать
строку, делать первый символ этой строки заглавным и возвращать обратно
строку с заглавной первой буквой.
*/

function ucfirst(str) {
  var arr = str.split(' ');
  var result = [];
  for (var i = 0; i < arr.length; i++) {
    result.push(arr[i][0].toUpperCase() + arr[i].substr(1));
  } return result.join(' ');
}

var str = 'i was happy the day before yesterday';
console.log(ucfirst(str));

// or

function ucfirst(str) {
  var arr = str.split(' ');
  for (var i = 0; i < arr.length; i++) {
    arr[i] = arr[i][0].toUpperCase() + arr[i].substr(1);
  } return arr.join(' ');
}

var str = 'i was happy the day before yesterday';
console.log(ucfirst(str));

// ============================================================================

/*
2. Дана строка вида 'var_text_hello'. Сделайте из него текст 'varTextHello'.
*/

function joinString(str) {
  var arr = str.split('_');
  for (var i = 0; i < arr.length; i++) {
    arr[0] = arr[0].toLowerCase();
    arr[i] = arr[i][0].toUpperCase() + arr[i].substr(1);
  } return arr.join('');
}

var str = 'var_text_hello';
console.log(joinString(str));

// or

function joinString(str) {
  var arr = str.split('_');
  for (var key in arr) {
    arr[0] = arr[0].toLowerCase();
    arr[key] = arr[key][0].toUpperCase() + arr[key].substr(1);
  } return arr.join('');
}

var str = 'var_text_hello';
console.log(joinString(str));

// ============================================================================

/*
3. Сделайте функцию inArray, которая определяет, есть в массиве элемент с
заданным текстом или нет. Функция первым параметром должна принимать текст
элемента, а вторым - массив, в котором делается поиск. Функция должна
возвращать true или false.
*/

function isArray(value, arr) {
  var newArray = arr.split(' ');
  console.log(newArray);
  for (var i = 0; i < newArray.length; i++) {
    if (value === newArray[i]) {
      return true;
    }
  } return false;
}

var arr = 'i was happy the day before yesterday';
console.log(isArray('before', arr));

// ============================================================================

// 4. Дана строка, например, '123456'. Сделайте из нее '214365'.

function reverseEvenNumber(str) {
  var arr = str.split('');
  var newArr = [];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      newArr.push(arr[i] + arr[i] - 1);
    }
  } return newArr.join('');
}

var str = '123456';
console.log(reverseEvenNumber(str));

// or

function reverseEvenNumber(str) {
  var arr = str.split('');
  var newArr = [];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) {
      newArr.push((Number(arr[i]) + (1)) + arr[i]);
    }
  } return newArr.join('');
}

var str = '123456';
console.log(reverseEvenNumber(str));

// ============================================================================
console.log('Дополнительно к 16 уроку');
// ============================================================================

// Дана строка. Сделайте заглавным последний символ каждого слова этой строки

function lastWordUp(str) {
  var arr = str.split(' ');
  var newArr = [];
  for (var i = 0; i < arr.length; i++) {
    newArr.push(arr[i].slice(0, -1) + arr[i].substr(-1).toUpperCase());
  } return newArr.join(' ');
}

var str = 'why will not you talk to me';
console.log(lastWordUp(str));

// ============================================================================

// Дана строка. Сделайте заглавным каждый четный символ этой строки.

function getEveryEvenUp(str) {
  var arr = str.split(' ');
  var string;
  var result = [];
  for (var i = 0; i < arr.length; i++) {
    string = arr[i].substr(0, 1) + arr[i].toUpperCase().substr(1, 1) +
    arr[i].toLowerCase().substr(2, 1) + arr[i].toUpperCase().substr(3, 1);
    result.push(string);
  } return result.join(' ');
}

var str = 'why will not you talk to me';
console.log(getEveryEvenUp(str));

// ============================================================================

// Дана строка с дефисами, например '12-345-67-89-10'.
// Замените первые 3 дефиса на !

var string = '12-345-67-89-10';
var newStr = string.replace(/-/g, '!').slice(0, -3) + string.slice(-3);
console.log(newStr);

// ============================================================================

// Дана строка с дефисами, например '12-345-67-89-10'.
// Замените первые 3 дефиса с конца на !.

var string = '12-345-67-89-10';
var newStr = string.slice(0, 3) + string.replace(/-/g, '!').slice(3);
console.log(newStr);

// ============================================================================

// Дана строка с пробелами по краям. Реализуйте функцию ltrim, которая будет
// убирать пробелы слева. Реализуйте функцию rtrim, которая будет убирать
// пробелы справа. Реализуйте функцию trim, которая будет убирать пробелы
// по концам строки.

// ltrim

function ltrim(string) {
  newStr = string.slice(1);
  return newStr;
}

var string = '_It_is_my_new_string_';
console.log(ltrim(string));

// rtrim

function rtrim(string) {
  newStr = string.slice(0, -1);
  return newStr;
}

var string = '_It_is_my_new_string_';
console.log(rtrim(string));

// trim

function trim(string) {
  newStr = string.slice(1, -1);
  return newStr;
}

var string = '_It_is_my_new_string_';
console.log(trim(string));

// ============================================================================

// Сделайте функцию, которая меняет местами ключи и значения в объекте.

function getChangeKey(object) {
  var newObj = {};
  for (var key in object) {
    newObj[object[key]] = key;
  } return newObj;
}

var object = { a: 1, b: 2, c: 3, d: 4, e: 5 };
console.log(getChangeKey(object));
