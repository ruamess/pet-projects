import store from "@/modules/store"
import { toast } from "sonner"


const removeHabbit = () => {
	const newHabbitList = store.habbitList.filter((el, index) => {
		if (index == store.habbitIndex) {
			return 0
		}
		return 1
	})
	toast.success('Habit successfully removed')
	store.updateHabbitList(newHabbitList)
}

export {

	removeHabbit
}