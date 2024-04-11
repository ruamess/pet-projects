import { makeAutoObservable } from "mobx"

class Store {
	spinnerVisibility = false
	inputValue = ''



	cities = ['Moscow', 'Москва', 'Shymkent', 'Шымкент', 'Шуаньцзы', 'Шлюха', 'Almaty', 'Алмата', 'Astana', 'Астана', 'Sanct Peter', 'Санкт-Питербург']

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

	getWeatherInfo(city) {
		this.inputValue = city
		this.spinnerVisible()
		fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=46dfd9dccebddf5a434ffa1510f7f02c`)
			.then(response => {
				if (!response.ok) {
					throw new Error('Network response was not ok');
				}
				return response.json();
			})
			.then(data => {
				console.log(data)
				localStorage.setItem('cityInfo', JSON.stringify(data))
				localStorage.setItem('cityName', data.city.name)
				this.spinnerHidden()
				this.foundCities = []
			})
			.catch(error => {
				console.error('There was a problem with the fetch operation:', error);
			})
	}
}


export default new Store()