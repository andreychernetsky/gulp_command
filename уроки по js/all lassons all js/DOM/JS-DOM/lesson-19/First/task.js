// ============================================================================
let name = ('Задачи н основы работы с DOM в JS');
console.log('Урок № 19 ' + name);
// ============================================================================

// ============================================================================
console.log('1. Алерт по нажатию на кнопку <pre>');
// ============================================================================

function take() {
  alert('Привет!');
}

// ============================================================================
console.log('2. Измение текста в инпуте');
// ============================================================================

function change() {
  const input = document.getElementById('input');
  input.value = '!!!';
}

// ============================================================================
console.log('3. Вывод содержимого инпута');
// ============================================================================

function lookIt() {
  const input2 = document.getElementById('input2');
  alert(input2.value);
}

// ============================================================================
console.log('4. Квадрат содержимого инпутаа');
// ============================================================================

function powNumber() {
  const pow = document.getElementById('pow');
  let number = Number(pow.value);
  let square = number * number;
  alert(square);
}

// or

function powNumber() {
  const pow = document.getElementById('pow');
  let square = Math.pow(pow.value, 2);
  alert(square);
}

// ============================================================================
console.log('5. Обмен содержимым между инпутами');
// ============================================================================

function receiveNumber() {
  const left = document.getElementById('left');
  const rigth = document.getElementById('right');
  let rightV = rigth.value;
  let leftV = left.value;
  right.value = leftV;
  left.value = rightV;
}


// ============================================================================
console.log('6. По нажатию на кнопку меняет ее текст');
// ============================================================================

function newString() {
  const newText = document.getElementById('newText');
  newText.value = 'New text button';
}

// or

function newString2(elem) {
  elem.value = 'New text button2';
}

// ============================================================================
console.log('7. Работа с CSS');
// ============================================================================

function changeColor() {
  const colorText = document.getElementById('colorText');
  colorText.style.color = 'red';
}

// or

function changeColor() {
  document.getElementById('colorText').style.color = 'red';
}

// ============================================================================
console.log('8. Блокирование полей ввода');
// ============================================================================

function block() {
  const block = document.getElementById('myString');
  block.disabled = true;
}

function unblock() {
  const unblock = document.getElementById('myString');
  unblock.disabled = false;
}
