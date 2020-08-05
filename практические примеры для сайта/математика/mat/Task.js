export default class Task {
	a = null
	b = null
	result = null
	operation = null
	answer = null

	constructor (props = {}) {
		this.a = props.a || Math.floor(Math.random() * 30)
		this.b = props.b || Math.floor(Math.random() * 30)
		this.operation = ['+', '-', '*'][Math.floor(Math.random() * 3)]
		this.result = Number(eval(`${this.a}${this.operation}${this.b}`))
	}

	get isRight () {
		return this.answer === this.result
	}

	getView () {
		const div = document.createElement('div')
		div.textContent = `${this.a} ${this.operation} ${this.b} = `
		
		const input = document.createElement('input')
		input.type = 'number'
		input.autofocus = true
		input.classList.add('input')
		div.append(input)

		input.addEventListener('change', e => this.answer = parseInt(input.value))
		input.addEventListener('keyup', e => {
			if (e.key === 'Enter') {
				this.handlerEnter()
			}
		})

		return div
	}

	handlerEnter () {}
}