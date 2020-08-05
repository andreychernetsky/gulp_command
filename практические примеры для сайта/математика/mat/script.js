import Game from './Game.js'

const game = new Game({
	tasksNumber: 10
})

document.querySelector('.container').append(game.view)
