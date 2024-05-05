import store from '@/modules/store'

function switchHabit(id) {
	store.habitList.map((el, index) => {
		if (el.id == id) {
			store.updateHabitIndex(index)
		}
	})
}

export {
	switchHabit
}