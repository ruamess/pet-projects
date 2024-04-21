import { observer } from "mobx-react-lite"
import store from "@/modules/store"
import { switchHabbit } from "../helpers"
import HabbitButtonWrapper from "../../../components/habbitButton/HabbitButtonWrapper"
import HabbitIcon from "../../../components/habbitButton/HabbitIcon"

const HabbitButton = observer(({ el, index }) => {


	return (
		<>
			{el.image ?
				<HabbitButtonWrapper
					onClick={() => switchHabbit(el.id)}
					style={index == store.habbitIndex ? { backgroundColor: '#5051F9' } : null}
				>
					<HabbitIcon image={el.image} />

					{el.days.length < el.goal
						?
						null
						:
						<img src='/CheckMark.svg' className="w-10 absolute mt-12 ml-20" />
					}
				</ HabbitButtonWrapper>
				: null
			}
		</>

	)
})

export default HabbitButton