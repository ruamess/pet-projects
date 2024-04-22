import { HabbitButtonWrapper } from "@/components"
import { HabbitIcon } from "@/components"
import store from "@/modules/store"
import { observer } from "mobx-react-lite"



const ModalIcons = observer(() => {




	return (
		<div className="flex gap-14">

			<HabbitButtonWrapper
				onClick={() => store.updateHabbitIcon('Sport')}
				style={store.habbitIcon == 'Sport' ? { backgroundColor: '#5051F9' } : null}>
				<HabbitIcon image='Sport' />
			</HabbitButtonWrapper>

			<HabbitButtonWrapper
				onClick={() => store.updateHabbitIcon('Water')}
				style={store.habbitIcon == 'Water' ? { backgroundColor: '#5051F9' } : null} >
				<HabbitIcon image='Water' />
			</HabbitButtonWrapper>

			<HabbitButtonWrapper
				onClick={() => store.updateHabbitIcon('Food')}
				style={store.habbitIcon == 'Food' ? { backgroundColor: '#5051F9' } : null}>
				<HabbitIcon image='Food' />
			</HabbitButtonWrapper>

		</div>
	)
})

export default ModalIcons