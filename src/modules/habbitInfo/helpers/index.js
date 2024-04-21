import store from "../../store"


const removeHabbit = () => {
	const newHabbitList = store.habbitList.filter((el, index) => {
		if (index == store.habbitIndex) {
			return 0
		}
		return 1
	})
	store.updateHabbitList(newHabbitList)
}

export {

	removeHabbit
}