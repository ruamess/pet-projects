import { observable, autorun } from 'mobx';

const store = observable({
	habitIndex: JSON.parse(localStorage.getItem('habitIndex')) || 0,
	habitList: JSON.parse(localStorage.getItem('habitList')) || [],
	commentText: localStorage.getItem('commentText') || '',
	theme: localStorage.getItem('theme') || 'dark',
	createHabitForm: {
		name: '',
		goal: '',
		icon: '',
	},

	modals: {
		settings: false,
		createHabit: false
	},

	changeTheme() {
		store.theme == 'dark' ? store.theme = 'light' : store.theme = 'dark'
	},


	setHabitIcon(newIcon) {
		store.createHabitForm.icon = newIcon
		console.log(this.habitIcon)
	},

	setHabitName(newName) {
		store.createHabitForm.name = newName
	},

	setHabitGoal(newGoal) {
		store.createHabitForm.goal = newGoal
	},

	setCreateHabitVisibility() {
		store.modals.createHabit ? store.modals.createHabit = false : store.modals.createHabit = true
	},

	setSettingsVisibility() {
		store.modals.settings ? store.modals.settings = false : store.modals.settings = true
	},

	updateCommentText(commentNewText) {
		store.commentText = commentNewText
	},

	updateHabitList(newHabitList) {
		store.habitList = newHabitList
		console.log(store.habitList)
	},

	updateHabitIndex(newHabitIndex) {
		store.habitIndex = newHabitIndex;
		// console.log(store.HabitIndex)
		// console.log(store.HabitList[store.HabitIndex])
	}
})

autorun(() => {
	localStorage.setItem('habitIndex', JSON.stringify(store.habitIndex))
	localStorage.setItem('habitList', JSON.stringify(store.habitList))
	localStorage.setItem('commentText', store.commentText)
	localStorage.setItem('theme', store.theme)
})

export default store



