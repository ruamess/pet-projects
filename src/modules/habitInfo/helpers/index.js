import store from "@/modules/store"
import i18n from "i18next";
import { toast } from "sonner"


const removeHabit = () => {
	const t = i18n.t.bind(i18n);
	const newHabitList = store.habitList.filter((el, index) => {
		if (index == store.habitIndex) {
			return 0
		}
		return 1
	})
	toast.success(t('habitSuccessfullyRemoved'))
	store.updateHabitList(newHabitList)
}

export {

	removeHabit
}