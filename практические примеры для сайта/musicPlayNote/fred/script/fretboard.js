const fingerPoints = document.querySelectorAll('.finger-point');//1
const fretNumbers = document.querySelectorAll('.fret-number');

fingerPoints.forEach((fingerPoint, index) => {
  fingerPoint.style.top = `${index * 32}px`
});

function setFingerPoints (pichTheFrets) {//2
  const fret = document.querySelector('.fret');//9
  const fretWidth = fret.clientWidth + 1;//10

  for (let i = 0; i < 6; i++) {//3
    const position = pichTheFrets[i];//4
    const fingerPoint = fingerPoints[i];//5

    if (!position) {//11
      fingerPoint.style.opacity = 0//11
    }

    else {//13
      const {finger, fret} = position;
      const fretNumber = fretNumbers[fret - 1];//14

      fingerPoint.style.opacity = 1;//6 прозрачность кружка
      fingerPoint.textContent = finger;//12

      // fingerPoint.style.left = `${fretNumber.offsetLeft - fretNumber.offsetWidth / 2}px`;//8

      const start = parseInt(fingerPoint.style.left) || 0
      const end = fretNumber.offsetLeft - fretNumber.offsetWidth / 2

      tween(percent => fingerPoint.style.left = `${start + (end - start) * percent}px`, 250)
    }

  }
}


function tween (fun, duration) {
  const startMomemnt = Date.now()

  const intervalFlag = setInterval(() => {
    const percent = Math.min(1, (Date.now() - startMomemnt) / duration)
    fun(percent)

    if (percent === 1) {
      clearInterval(intervalFlag)
    }
  })
}