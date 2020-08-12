// ============================================================================
var name = 'Работа со строковыми функциями в JS';
console.log('Урок № 7 - ' + name);
// ============================================================================

// ============================================================================
console.log('Работа с регистром символов');
// ============================================================================

/*
1. Дана строка 'js'. Сделайте из нее строку 'JS'.
*/

var string = 'js';
console.log(string.toUpperCase());

// ============================================================================

/*
2. Дана строка 'JS'. Сделайте из нее строку 'js'.
*/

var string = 'JS';
console.log(string.toLowerCase());

// ============================================================================
console.log('Работа с length, subsrt, substring, slice. Работа с indexOf');
// ============================================================================

/*
3. Дана строка 'я учу javascript!'. Найдите количество символов в этой строке.
*/

var string = 'я учу javascript!';
console.log(string.length);

// ============================================================================

/*
4.Дана строка 'я учу javascript!'. Вырежите из нее слово 'учу' и слово
'javascript' тремя разными способами (через substr, substring, slice).
*/

var string = 'я учу javascript';
console.log(string.substr(2, 3) + ' ' + string.substr(6));
console.log(string.substring(2, 5) + ' ' + string.substring(6));
console.log(string.slice(2, 5) + ' ' + string.slice(6));

// ============================================================================

/*
5. Дана строка 'я учу javascript!'. Найдите позицию подстроки 'учу'.
*/

var string = 'я учу javascript';
console.log(string.indexOf('учу'));

// ============================================================================

/*
6. Дана переменная str, в которой хранится какой-либо текст. Реализуйте
обрезание длинного текста по следующему принципу: если количество символов
этого текста больше заданного в переменной n, то в переменную result запишем
первые n символов строки str и добавим в конец троеточие '...'. В противном
случае в переменную result запишем содержимое переменной str.
*/

var string = 'безусловно все получиться';
var n = 5;
var result;
if (string.length > n) {
  result = string.substr(0, n) + '...';
  console.log(result);
} else {
  console.log(string);
}

// ============================================================================
console.log('Работа с replace');
// ============================================================================

/*
7. Дана строка 'Я-учу-javascript!'. Замените все дефисы на '!' с помощью
глобального поиска и замены.
*/

var string = 'Я-учу-javascript!';
console.log(string.replace(/-/g, '!'));

// ============================================================================
console.log('Работа на split');
// ============================================================================

/*
8. Дана строка 'я учу javascript!'. С помощью метода split запишите каждое
слово этой строки в отдельный элемент массива.
*/

var string = 'я учу javascript!';
console.log(string.split(' '));

// ============================================================================

/*
9. Дана строка 'я учу javascript!'. С помощью метода split запишите каждый
символ этой строки в отдельный элемент массива.
*/

var string = 'я учу javascript';
console.log(string.split(''));

// ============================================================================

/*
10. В переменной date лежит дата в формате '2025-12-31'. Преобразуйте эту дату
в формат '31.12.2025'
*/

var date = '2025-12-31';
var array = date.split('-').reverse();
var changeDate = array[0] + '.' + array[1] + '.' + array [2];
console.log(changeDate);

// ============================================================================
console.log('Работа с join');
// ============================================================================

/*
11. Дан массив ['я', 'учу', 'javascript', '!']. С помощью метода join
преобразуйте массив в строку 'я+учу+javascript+!'
*/

var array = ['я', 'учу', 'javascript', '!'];
var string = array.join('+');
console.log(string);

// ============================================================================
console.log('Задачи');
// ============================================================================

/*
12. Преобразуйте первую букву строки в верхний регистр.
*/

var string = 'я учу javascript';
var firstRegister = string.substr(0, 1).toUpperCase() + string.substr(1);
console.log(firstRegister);

// ============================================================================

/*
13. Преобразуйте первую букву каждого слова строки в верхний регистр.
*/

var string = 'я учу javascript';
var array = string.split(' ');
array[0] = 'Я';
array[1] = 'Учу';
array[2] = 'Javascript';
console.log(array.join(' '));

// or

var string = 'i learning javascript';
var array = string.split(' ');
for (var i = 0; i < array.length; i++) {
  array[i] = array[i].substr(0, 1).toUpperCase() + array[i].substr(1);
}

console.log(array.join(' '));

// or

var string = 'i learning english every day';
var array = string.split(' ');
for (var key in array) {
  array[key] = array[key].substr(0, 1).toUpperCase() + array[key].substr(1);
}

console.log(array.join(' '));

// ============================================================================

/*
14. Преобразуйте строку 'var_test_text' в 'varTestText'. Скрипт, конечно же,
должен работать с любыми аналогичными строками.
*/

var string = 'var_test_text';
var array = string.split('_');
for (var i = 0; i < array.length; i++) {
  array[0] = array[0].toLowerCase();
  array[i] = array[i].substr(0, 1).toUpperCase() + array[i].substr(1);
}

console.log(array.join(''));

// or

var string = 'var_test_text';
var array = string.split('_');
for (var key in array) {
  array[0] = array[0].toLowerCase();
  array[key] = array[key].substr(0, 1).toUpperCase() + array[key].substr(1);
}

console.log(array.join(''));
