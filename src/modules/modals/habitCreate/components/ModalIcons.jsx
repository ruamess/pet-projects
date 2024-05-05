import { HabitButtonWrapper } from "@/components"
import { HabitIcon } from "@/components"
import store from "@/modules/store"
import { observer } from "mobx-react-lite"
import { useTranslation } from "react-i18next"



const ModalIcons = observer(() => {

	const { t } = useTranslation()




	return (
		<div className="flex flex-col gap-5 items-center ">

			<span className="flex justify-center text-xl text-[#768396]">
				{t('icon')}
			</span>

			<div className="flex items-center gap-14">
				<HabitButtonWrapper
					onClick={() => store.setHabitIcon('Sport')}
					style={store.createHabitForm.icon == 'Sport' ? { backgroundColor: '#5051F9' } : null}>
					<HabitIcon image='Sport'
						color={store.createHabitForm.icon == 'Sport' ? 'white' : store.theme == 'dark' ? 'white' : null} />
				</HabitButtonWrapper>

				<HabitButtonWrapper
					onClick={() => store.setHabitIcon('Water')}
					style={store.createHabitForm.icon == 'Water' ? { backgroundColor: '#5051F9' } : null} >
					<HabitIcon image='Water'
						color={store.createHabitForm.icon == 'Water' ? 'white' : store.theme == 'dark' ? 'white' : null} />
				</HabitButtonWrapper>

				<HabitButtonWrapper
					onClick={() => store.setHabitIcon('Food')}
					style={store.createHabitForm.icon == 'Food' ? { backgroundColor: '#5051F9' } : null}>
					<HabitIcon image='Food'
						color={store.createHabitForm.icon == 'Food' ? 'white' : store.theme == 'dark' ? 'white' : null} />
				</HabitButtonWrapper>

			</div>


		</div>
	)
})

export default ModalIcons