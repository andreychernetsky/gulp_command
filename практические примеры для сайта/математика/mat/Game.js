import Task from './Task.js'

export default class Game {
	tasks = []
	view = null
	checkBtn = null
	resultDiv = null
	taskPlate = null
	currentTaskNumber = 0

	constructor (props = {}) {
		for (let i = 0; i < (props.tasksNumber || 3); i++) {
			this.tasks.push(new Task)
		}

		this.view = document.createElement('div')
		this.view.classList.add('victorina')
		
		this.checkBtn = document.createElement('button')
		this.checkBtn.classList.add('button')
		this.checkBtn.id = 'check'
		this.checkBtn.textContent = 'Проверить'
		this.view.append(this.checkBtn)

		this.checkBtn.addEventListener('click', e => this.handlerCheckBtnClick(e))

		this.resultDiv = document.createElement('div')
		this.resultDiv.classList.add('text')
		this.resultDiv.id = 'text'
		this.view.append(this.resultDiv)
		
		this.taskPlate = document.createElement('div')
		this.taskPlate.id = 'inputs'
		this.view.append(this.taskPlate)

		this.updateView()
	}

	updateView () {
		if (this.checkBtn.textContent === 'Начать заново') {
			const n = this.tasks.length
			this.tasks = []

			for (let i = 0; i < n; i++) {
				this.tasks.push(new Task)
			}

			this.checkBtn.textContent = "Проверить"
			this.currentTaskNumber = 0
			this.updateView()
		}

		else if (this.currentTaskNumber === this.tasks.length) {
			this.taskPlate.innerHTML = ''
			const percent = parseInt(100 * this.tasks.reduce((p, i) => p + i.isRight, 0) / this.tasks.length)

			this.resultDiv.textContent = `Кол-во правильных ответов ${this.tasks.reduce((p, i) => p + i.isRight, 0)} из ${this.tasks.length}! Задание выполнено на ${percent}%`
			this.checkBtn.textContent = 'Начать заново'

			this.taskPlate.append(
				...this.tasks.map(task => {
					const view = task.getView()

					const input = view.querySelector('input')
					input.value = task.answer
					input.disabled = true

					if (task.answer === task.result) {
						input.classList.add('success')
					}

					else {
						input.classList.add('error')
					}
					
					return view
				})
			)
		}

		else {
			this.resultDiv.textContent = ''
			const task = this.tasks[this.currentTaskNumber]
			this.taskPlate.innerHTML = ''
			this.taskPlate.append(task.getView())
			this.taskPlate.querySelector('input').focus()

			task.handlerEnter = () => this.handlerCheckBtnClick()
		}
	}

	handlerCheckBtnClick (event) {
		this.currentTaskNumber++
		this.updateView()
	}
}
