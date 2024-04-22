import { observable, autorun } from 'mobx';

const store = observable({
	habbitIndex: JSON.parse(localStorage.getItem('habbitIndex')) || 0,
	habbitList: JSON.parse(localStorage.getItem('habbitList')) || [{}],
	commentText: localStorage.getItem('commentText') || '',
	habbitName: '',
	habbitGoal: '',
	habbitIcon: '',
	modalVisible: JSON.parse(localStorage.getItem('modalVisible') || false),


	updateModalVisible() {
		store.modalVisible == false ? store.modalVisible = true : store.modalVisible = false
	},

	updateHabbitIcon(habbitNewIcon) {
		store.habbitIcon = habbitNewIcon
		console.log(this.habbitIcon)
	},

	updateHabbitName(habbitNewName) {
		store.habbitName = habbitNewName
	},

	updateHabbitGoal(habbitNewGoal) {
		store.habbitGoal = habbitNewGoal
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
	localStorage.setItem('commentTexte', store.commentText)
	localStorage.setItem('modalVisible', JSON.stringify(store.modalVisible))
})

export default store



