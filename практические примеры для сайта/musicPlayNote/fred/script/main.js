// const fingerPoints = document.querySelectorAll('.finger-point')
// const fretNumbers = document.querySelectorAll('.fret-number')

// fingerPoints.forEach((fingerPoint, index) => {
// 	fingerPoint.style.top = `${index * 32}px`
// })



// setFingerPoints(A)

// function setFingerPoints (positions) {
// 	const fret = document.querySelector('.fret')
// 	const fretWidth = fret.clientWidth + 1

// 	for (let i = 0; i < 6; i++) {
// 		const position = positions[i]
// 		const fingerPoint = fingerPoints[i]

// 		if (!position) {
// 			fingerPoint.style.opacity = 0
// 		}

// 		else {
// 			const {finger, fret} = position
// 			const fretNumber = fretNumbers[fret - 1]

// 			fingerPoint.style.opacity = 1
// 			fingerPoint.style.left = `${fretNumber.offsetLeft - fretNumber.offsetWidth / 2}px`
// 			fingerPoint.textContent = finger
// 		}

// 	}
// }

//1) выбираем наши точки, расположенные на струнах
//2) создаем функцию для создания 6 струн
//3) напишем цикл
//4) пишем переменную в которую поместим все выбранные точки на грифе гитары
//5)
//6 для fingerPoint задаем позицию position чтобы, располагался по середине лада
//7) массив объектов струн и пальцев
//8) смещаем точки по вертикальной оси
//9) находим один лад
//10) спросим какая ширина лада
//11 вставляем число в кружок струны
//12 если позиция струны отсутствует, то мы убираем
//13 отображаем позицию струны
//14 размещаем номер струны относительно цифры лада
//итого
//пишем функцию fingerPoints которая проходит циклом по количеству струн и расставляет номера пальцев внутри кружочка

//null это открытая струна


//////////////////////////////////////////////////////////*/
//перемещение аккордов c-dur




//setFingerPoints(A);//2
//	setFingerPoints(Apos2);
//	setFingerPoints(Apos3)

//setFingerPoints(C)
//setFingerPoints(Cpos2);
// setFingerPoints(Cpos3)


const chords = document.querySelectorAll('[data-chord]');

chords.forEach(chord => chord.addEventListener('click', handlerChordClick));

function handlerChordClick () {
  if (!this.dataset.pos) {
    this.dataset.pos = 0
  }

  this.dataset.pos = parseInt(this.dataset.pos) + 1

  const chord = this.dataset.chord

  if (!Accourds[`${chord}pos${this.dataset.pos}`]) {
    this.dataset.pos = 1
  }

  const accourd = Accourds[`${chord}pos${this.dataset.pos}`]
  setFingerPoints(accourd)
}