import { makeAutoObservable } from "mobx"

class Store {

	spinnerVisibility = false
	inputValue = ''
	cities = ['Moscow', 'Москва', 'Shymkent', 'Шымкент', 'Almaty', 'Astana', 'Астана', 'Saint Petersburg', 'Питербург']

	foundCities = []

	constructor() {
		makeAutoObservable(this)
	}

	spinnerVisible() {
		this.spinnerVisibility = true
	}

	spinnerHidden() {
		this.spinnerVisibility = false
	}

	getCurrentFullDate(offsetInSeconds) {
		return new Intl.DateTimeFormat('en-US', {
			weekday: 'long',
			year: 'numeric',
			month: 'long',
			day: '2-digit',
			hour: 'numeric',
			minute: 'numeric',
			second: 'numeric',
			hour12: false,
			timeZone: 'UTC'
		}).format(new Date(Date.now() + offsetInSeconds * 1000));
	}

	searchCity() {

		for (let i of this.cities) {
			// Если инпут пустой то массив с найденными городами очищается
			if (this.inputValue == '') {
				this.foundCities = []
			}

			// Если инпут пустой и i обрезанный с 0 индекса по длину написанного в инпуте равен тому что в инпуте то
			else if (this.inputValue != '' && i.slice(0, this.inputValue.length).toLowerCase() == this.inputValue.toLowerCase()) {
				// Если массив с городами не имеет в себе i то мы его добовляем
				if (this.foundCities.includes(i) == false) {
					this.foundCities.push(i)
				}
			}
			else if (this.inputValue != '' && i.slice(0, this.inputValue.length).toLowerCase() != this.inputValue.toLowerCase()) {
				while (this.foundCities.includes(i) == true) {
					this.foundCities = this.foundCities.filter(el => {
						if (el == i) {
							return false
						}
						else {
							return true
						}
					})
				}
			}

		}
	}

}


export default new Store()