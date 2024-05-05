import { observer } from "mobx-react-lite"
import HabitButton from "./HabitButton"
import store from "@/modules/store"


const HabitsList = observer(() => {


	return (
		<>
			{store.habitList
				? store.habitList.map((el, index) => <HabitButton key={el?.id} el={el} index={index} />)
				: <h1>No Habits</h1>
			}
		</>
	)
})

export default HabitsList