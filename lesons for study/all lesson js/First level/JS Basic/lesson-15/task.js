// ============================================================================
var name = 'Правильеное использование пользовательских функций';
console.log('Урок № 15 - ' + name);
// ============================================================================

// Функции getDigits, которая параметром будет принимать число,
// а возвращать массив цифр.

function getDigits(num) {
  return String(num).split('');
}

console.log(getDigits(1234));

// ============================================================================

// Параметром принимающая массив и возвращающая сумму элементов этого массива.
// Пусть эта функция работает и с массивом ['1', '2', '3'], и с массивом [1, 2, 3].

function arraySum(arr) {
  var result = 0;
  for (var i = 0; i < arr.length; i++) {
    result += Number(arr[i]);
  } return result;
}

var sum = arraySum(getDigits(1234));
console.log(sum);

// ============================================================================

// Параметром принимает число и возвращает true, если сумма цифр этого числа
// от 1 до 9, и false - если это не так.

function inRange(num) {
  var sum = arraySum(getDigits(num));

  if (sum >= 1 && sum <= 9) {
    return true;
  } else {
    return false;
  }
}

console.log(sum);

// or

function inRange(num) {
  var sum = arraySum(getDigits(num));

  return (sum >= 1 && sum <= 9);
}

console.log(sum);

// ============================================================================

// Дан массив с числами, запишем в новый массив только те элементы, сумма цифр
// которых от 1 до 9.

var arr = [12, 19, 28, 13, 14, 345];
var result = [];

for (var i = 0; i < 10; i++) {
  if (inRange(arr[i])) {
    result.push(arr[i]);
  }
}

console.log(result);

// ============================================================================

// Окончательное решение

var arr = [15, 19, 28, 15, 15, 345];
var result = [];

for (var i = 0; i < 10; i++) {
  if (inRange(arr[i])) {
    result.push(arr[i]);
  }
}

function inRange(num) {
  var sum = arraySum(getDigits(num));

  return (sum >= 1 && sum <= 9);
}

function getDigits(num) {
  return String(num).split('');
}

function arraySum(arr) {
  var sum = 0;
  for (var i = 0; i < arr.length; i++) {
    sum += Number(arr[i]);
  } return sum;
}

// ============================================================================

// Дан массив с числами, найдем сумму всех цифр из этих чисел.

var arr = [12, 19, 28, 13, 14, 345];

function sumArr(arr) {
  var result = 0;

  for (var i = 0; i < arr.length; i++) {
    result += arr[i];
  } return result;
}

console.log(sumArr(arr));


// Дан массив с числами. Создайте из него новый массив, где останутся лежать только
// положительные числа. Создайте для этого вспомогательную функцию isPositive(),
// которая параметром будет принимать число и возвращать true, если число
// положительное, и false - если отрицательное

var arr = [1, 2, 3, -1, -2, -3];

function isPositive(arr) {
  var newArr = [];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      newArr.push(arr[i]);
    }
  } return newArr;
}

console.log(isPositive([1, 2, 3, -1, -2, -3]));

// or

var arr = [1, 2, 3, -1, -2, -3];

function isPositive(num) {
	if (num >= 0) {
		return true;
	} else {
		return false;
	}
}

var newArr = [];
for (var i = 0; i <= arr.length; i++) {
	if (isPositive(arr[i])) {
		newArr.push(arr[i]);
	}
}

console.log(newArr);


// ============================================================================
console.log('Здачи для решения');
// ============================================================================

/*
1. Сделайте функцию isNumberInRange, которая параметром принимает число и
проверяет, что оно больше нуля и меньше 10. Если это так - пусть функция
возвращает true, если не так - false.
*/

function isNumberInRange(num) {
  if (num > 0 && num < 10) {
    return true;
  } else {
    return false;
  }
}

console.log(isNumberInRange(9));

// or

function isNumberInRange(num) {
  return num > 0 && num < 10;
}

console.log(isNumberInRange(10));

// ============================================================================

/*
2. Дан массив с числами. Запишите в новый массив только те числа, которые больше
нуля и меньше 10-ти. Для этого используйте вспомогательную функцию
isNumberInRange из предыдущей задачи.
*/

var array = [1, 124, 16, 5, 84, 9, 10];
var newArray = [];
for (var i = 0; i < array.length; i++) {
  if (isNumberInRange(array[i])) {
    newArray.push(array[i]);
  }
} console.log(newArray);

// ============================================================================

/*
3. Сделайте функцию getDigitsSum (digit - это цифра), которая параметром
принимает целое число и возвращает сумму его цифр.
*/

function isDigits(num) {
  return String(num).split('');
}

console.log(isDigits(12345));

function isDigitsSum(arr) {
  result = 0;
  for (var i = 0; i < arr.length; i++) {
    result += Number(arr[i]);
  } return result;
}

console.log(isDigitsSum(isDigits(12345)));


// or

function areDigitsSum(array) {
  array = String(array).split('');
  var result = 0;
  for (var i = 0; i < array.length; i++) {
    result += Number(array[i]);
  } return result;
}

console.log(areDigitsSum(12345));

// ============================================================================

/*
4. Найдите все года от 1 до 2018, сумма цифр которых равна 13. Для этого
используйте вспомогательную функцию getDigitsSum из предыдущей задачи.
*/

for (var i = 1; i < 2018; i++) {
  if (areDigitsSum(i) === 13) {
    console.log(i);
  }
}

// ============================================================================

/*
5. Сделайте функцию isEven() (even - это четный), которая параметром принимает
целое число и проверяет: четное оно или нет. Если четное - пусть функция
возвращает true, если нечетное - false.
*/

function isEven(num) {
  if (num % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

console.log(isEven(10));

// or

function isEven(num) {
  return num % 2 === 0;
}

console.log(isEven(3));

// ============================================================================

/*
6. Дан массив с целыми числами. Создайте из него новый массив, где останутся
лежать только четные из этих чисел. Для этого используйте вспомогательную
функцию isEven из предыдущей задачи.
*/

var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var arrayNew = [];

for (var i = 0; i < array.length; i++) {
  if (isEven([array[i]])) {
    arrayNew.push(array[i]);
  }
} console.log(arrayNew);

// ============================================================================

/*
7. Сделайте функцию getDivisors, которая параметром принимает число и
возвращает массив его делителей (чисел, на которое делится данное число).
*/

function getDivisors(num) {
  var array = [];
  for (var i = 0; i <= num; i++) {
    if (num % i === 0) {
      array.push(i);
    }
  } return array;
}

console.log(getDivisors(100));

// 9. Пусть у нас есть автобусные билеты. Номер каждого билета состоит из 6 цифр.
// Счастливый билет - это билет, сумма первых трех цифр которого равна сумме
// вторых трех цифр. Сделайте функцию isHappy, которая проверяет, счастливый
// билет или нет. Если это так - пусть функция возвращает true,
// а если не так - то false.

function isHappy(ticket) {
  var arr;
  arr = String(ticket).split('');
  var countFirst = 0;
  var countSecond = 0;
  for (var i = 0, j = 3; i < arr.length - 3, j < arr.length; i++, j++) {
    countFirst += Number(arr[j]);
    countSecond += Number(arr[i]);
  } return (countFirst === countSecond);
}

var ticket = 123222;
console.log(isHappy(ticket));

// or

// 10, 11. Выведите столбец всех счастливых билетов. Для этого
// используйте вспомогательную функцию isHappy из предыдущей задачи.

// Функция перевода числа, в массив числа

function getArrayNumber(num) {
  var arr = String(num).split('');
  var newArr = [];
  for (var i = 0; i < arr.length; i++) {
    newArr.push(Number(arr[i]));
  } return newArr;
}

var num = 999999;
console.log(getArrayNumber(num));

// Функция сравнения суммы первых трех чисел и вторых трех чисел

function getCompareNumber(num) {
  var arrNum = (getArrayNumber(num));
  var countFirst = 0;
  var countSecond = 0;
  countFirst += arrNum[0] + arrNum[1] + arrNum[2];
  countSecond += arrNum[3] + arrNum[4] + arrNum[5];
  if (countFirst === countSecond) {
    return true;
  } return false;
}

var num = '000000';
console.log(getCompareNumber(num));

for (var i = 000000; i < 111111; i++) {
  if (getCompareNumber(i)) {
    console.log(i);
  }
}
