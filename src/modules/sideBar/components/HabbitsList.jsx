import { observer } from "mobx-react-lite"
import HabbitButton from "./HabbitButton"
import store from "@/modules/store"


const HabbitsList = observer(() => {


	return (
		<>
			{store.habbitList
				? store.habbitList.map((el, index) => <HabbitButton key={el?.id} el={el} index={index} />)
				: <h1>No Habbits</h1>
			}
		</>
	)
})

export default HabbitsList