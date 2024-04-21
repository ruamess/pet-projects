import { observable, autorun } from 'mobx';

const store = observable({
	habbitIndex: JSON.parse(localStorage.getItem('habbitIndex')) || 0,
	habbitList: JSON.parse(localStorage.getItem('habbitList')) || [{}],
	inputValue: localStorage.getItem('inputValue') || '',
	modalVisible: JSON.parse(localStorage.getItem('modalVisible') || false),


	updateModalVisible() {
		store.modalVisible == false ? store.modalVisible = true : store.modalVisible = false
	},

	updateInputValue(inputValue) {
		store.inputValue = inputValue
	},

	updateHabbitList(newHabbitList) {
		store.habbitList = newHabbitList
		console.log(store.habbitList)
	},

	updateHabbitIndex(newHabitIndex) {
		store.habbitIndex = newHabitIndex;
		// console.log(store.habbitIndex)
		// console.log(store.habbitList[store.habbitIndex])
	}
})

autorun(() => {
	localStorage.setItem('habbitIndex', JSON.stringify(store.habbitIndex))
	localStorage.setItem('habbitList', JSON.stringify(store.habbitList))
	localStorage.setItem('inputValue', store.inputValue)
	localStorage.setItem('modalVisible', JSON.stringify(store.modalVisible))
})

export default store



