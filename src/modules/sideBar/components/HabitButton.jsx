import { observer } from "mobx-react-lite"
import store from "@/modules/store"
import { switchHabit } from "../helpers"
import HabitButtonWrapper from "@/components/habitButton/HabitButtonWrapper"
import HabitIcon from "@/components/habitButton/HabitIcon"

const HabitButton = observer(({ el, index }) => {


	return (
		<>
			{el.image ?
				<HabitButtonWrapper
					onClick={() => switchHabit(el.id)}
					style={index == store.habitIndex ? { backgroundColor: '#5051F9' } : null}
				>
					<HabitIcon image={el.image} color={index == store.habitIndex ? 'white' : store.theme == 'dark' ? 'white' : null} />

					{el.days.length < el.goal
						?
						null
						:
						<img src='/CheckMark.svg' className="w-10 absolute mt-12 ml-20" />
					}
				</ HabitButtonWrapper>
				: null
			}
		</>

	)
})

export default HabitButton