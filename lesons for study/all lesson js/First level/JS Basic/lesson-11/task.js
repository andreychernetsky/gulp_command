// ============================================================================
var name = 'Работа с флагами';
console.log('Урок № 11 - ' + name);
// ============================================================================


// ============================================================================
/*
1. Дан массив с числами. Проверьте, что в этом массиве есть число 5. Если есть
- выведите 'да', а если нет - выведите 'нет'.
*/

var array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var flag = false;

for (var i = 0; i < array.length; i++) {
  if (array[i] === 5) {
    flag = true;
  }
}

if (flag === true) {
  console.log('Да');
} else {
  console.log('Нет');
}

// or

var array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function searchArray(array) {
  for (var i = 0; i < array.length; i++) {
    if (array[i] === 5) {
      return true;
    }
  } return false;
}

console.log(searchArray(array));

// ============================================================================

/*
2. Дано число, например 31. Проверьте, что это число не делится ни на одно
другое число кроме себя самого и единицы. То есть в нашем случае нужно проверить,
что число 31 не делится на все числа от 2 до 30. Если число не делится - выведите
'false', а если делится - выведите 'true'.
*/

var num = 31;
var flag = false;

for (var i = 2; i < num; i++) {
  if (num % i === 0) {
    flag = true;
  }
}

if (flag === true) {
  console.log(true);
} else {
  console.log(false);
}

// По мне ниже пример более понятнее, с флагами у меня какая то путаница..

var num = 31;
for (var i = 2; i < num; i++) {
  if (num % i === 0) {
    console.log(true);
  } else {
    console.log(false);
    break;
  }
}

// Так же через функцию

function decideTwo(x) {
  for (var i = 2; i < x; i++) {
    if (x % i === 0) {
      return true;
    }
  } return false;
}

console.log(decideTwo(31));

// or

function decideThree(x) {
  for (var i = 2; i < x; i++) {
    return x % i === 0;
  }
}

console.log(decideThree(31));

// ============================================================================

/*
Для себя придумал еще задачу

Вернуть числа, которые делять на число Х без остатка.
*/

function remainder(x) {
  for (var i = 1; i <= x; i++) {
    if (x % i === 0) {
      console.log(i);
    }
  }
}

remainder(31);

/*
3. Дан массив с числами. Проверьте, есть ли в нем два одинаковых числа подряд.
Если есть - выведите 'да', а если нет - выведите 'нет'
*/

var array = [1, 2, 3, 4, 5, 6, 7, 7];
var flag = false;

for (var i = 0; i < array.length; i++) {
  if (array[i] === array[i - 1]) {
    flag = true;
  }
}

if (flag === true) {
  console.log('Есть');
} else {
  console.log('Нет');
}

// or

var array = [1, 2, 3, 4, 5, 6, 7, 7];

function sameNumber(array) {
  for (var i = 0; i < array.length; i++) {
    if (array[i] === array[i - 1]) {
      return 'Есть';
    }
  } return 'Нет';
}

console.log(sameNumber(array));

// Создайте функцию, которая вернет одинаковые значение из массива.

var array = [1, 1, 2, 3, 4, 4, 5, 6, 7, 7];

function sameSecond(array) {
  for (var i = 0; i < array.length; i++) {
    if (array[i] === array[i - 1]) {
      console.log(array[i]);
    }
  }
}

sameSecond(array);

// Создайте функцию, которая вернет одинаковые значение из массива в новый массив

var arr = [1, 1, 2, 3, 4, 4, 5, 6, 7, 7];
var result = [];

function sameS(arr) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === arr[i - 1]) {
      result.push(arr[i]);
    }
  } console.log(result);
}

sameS(arr);
