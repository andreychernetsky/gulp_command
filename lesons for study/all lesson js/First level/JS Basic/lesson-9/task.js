
// ============================================================================
var name = 'Практика';
console.log('Урок № 9 - ' + name);
// ============================================================================

/*
1. Дана строка. Сделайте заглавным первый символ этой строки не используя цикл.
 Найдите два решения.
*/

var string = 'дана строка';
var newString = string[0].toUpperCase() + string.substr(1);
console.log(newString);

var string = 'дана строка';
var newString = string.substr(0, 1).toUpperCase();
console.log(newString + string.substring(1));

var string = 'дана строка';
string = string.split('');
string[0] = string[0].toUpperCase();
var newString = string.join('');
console.log(newString);

// ============================================================================

/*
2. Дана строка, например, '123456'. Переверните эту строку (сделайте из нее
'654321') не используя цикл.
*/

var string = '123456';
string = string.split('').reverse().join('');
console.log(string);

// ============================================================================

/*
3. Дано число, например, 3751. Отсортируйте цифры в нем (сделайте из него 1357)
не используя цикл.
*/

var num = 3751;
var result = String(num).split('').sort().join('');
console.log(result);

// ============================================================================

// 4. Проверьте, что строка начинается на http://

var string = 'http://theory.phphtml.net';
if (string.substr(0, 7) === 'http://') {
  console.log('Строка начинаеть с ' + string.substr(0, 7));
} else {
  console.log('Строка начинаеться с чего-то другого');
}

// ============================================================================

// 5. Проверьте, что строка заканчивается на .html.

var string = 'http://theory.php.html';
if (string.substr(-5) === '.html') {
  console.log('Строка заканчиваеться на ' + string.substr(-5));
} else {
  console.log('Строка заканчиваеться чем-то другим');
}
