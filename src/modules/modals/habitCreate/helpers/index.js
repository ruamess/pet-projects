import store from '@/modules/store'
import i18n from 'i18next';
import { toast } from 'sonner'



const addNewHabit = (goal, title, image) => {

	const t = i18n.t.bind(i18n);
	const lastHabit = store.habitList[store.habitList.length - 1]
	const newHabit = {
		id: lastHabit?.id ? lastHabit.id + 1 : 1,
		goal,
		title,
		image,
		days: []
	}

	if (!image) {
		toast.error(t('selectAnIcon!'))
	}
	else if (!title) {
		toast.error(t('theNameCannotBeEmpty!'))
	}
	else if (!goal) {
		toast.error(t('theGoalCannotBeEmpty!'))
	}
	else if (isNaN(goal)) {
		toast.error(t('goalCanOnlyBeANumber!'))
	}
	else {
		toast.success(t('habitWasCreated'))
		store.habitList.push(newHabit)
		store.setCreateHabitVisibility()
		store.updateHabitIndex(store.habitList.length - 1)
	}
}





export {
	addNewHabit
}