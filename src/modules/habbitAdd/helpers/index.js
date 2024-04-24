import store from '@/modules/store'
import { toast } from 'sonner'

const addNewHabbit = (goal, title, image) => {
	const lastHabbit = store.habbitList[store.habbitList.length - 1]
	const newHabbit = {
		id: lastHabbit?.id ? lastHabbit.id + 1 : 1,
		goal,
		title,
		image,
		days: []
	}

	if (!image) {
		toast.error('Select an icon!')
	}
	else if (!title) {
		toast.error('The name cannot be empty!')
	}
	else if (!goal) {
		toast.error('The goal cannot be empty!')
	}
	else if (isNaN(goal)) {
		toast.error('Goal can only be a number!')
	}
	else {
		toast.success('Habbit was created')
		store.habbitList.push(newHabbit)
		store.updateModalVisible()
		store.updateHabbitIndex(store.habbitList.length - 1)
	}
}

export {
	addNewHabbit
}