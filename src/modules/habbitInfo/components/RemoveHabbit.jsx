import store from "@/modules/store"
import { observer } from "mobx-react-lite"


const RemoveHabbit = observer(() => {


	function removeHabbit() {
		const newHabbitList = store.habbitList.filter((el, index) => {
			if (index == store.habbitIndex) {
				return 0
			}
			return 1
		})
		store.updateHabbitList(newHabbitList)
	}


	return (
		<div className="flex items-center justify-center mt-14">
			<button onClick={() => removeHabbit()} className="rounded-2xl p-2 bg-[#bd1717] 
			hover:bg-red-700 font-semibold h-14 duration-500">
				Удалить привычку
			</button>
		</div>
	)
})

export default RemoveHabbit