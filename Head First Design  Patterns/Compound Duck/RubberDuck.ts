import Quackable from './Quackable'
import Observer from './Observer'
import Observable from './Observable'

export default class RubberDuck implements Quackable {
	observerable: Observable
	name = 'Rubber'

	constructor() {
		this.observerable = new Observable(this)
	}

	registerObserver(observer: Observer): void {
		this.observerable.registerObserver(observer)
	}

	notifyObservers(): void {
		this.observerable.notifyObservers()
	}

	getName() {
		return this.name
	}

	quack() {
		console.log('Squeak')
		this.notifyObservers()
	}
}
