import store from '@/modules/store'

function switchHabbit(id) {
	store.habbitList.map((el, index) => {
		if (el.id == id) {
			store.updateHabbitIndex(index)
		}
	})
}

export {
	switchHabbit
}