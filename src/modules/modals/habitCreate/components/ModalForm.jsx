import { InputWrapper } from "@/components"
import { CustomInput } from "@/components"
import { CreateButton } from "@/components"
import store from "@/modules/store"
import { observer } from "mobx-react-lite"
import { addNewHabit } from "../helpers"
import { useTranslation } from "react-i18next"



const ModalForm = observer(() => {
	const { t } = useTranslation()


	const handleNameChange = (e) => {
		store.setHabitName(e.target.value)
	}

	const handleGoalChange = (e) => {
		store.setHabitGoal(e.target.value)
	}

	return (
		<div className="flex flex-col gap-5 w-full">

			<InputWrapper >
				<CustomInput
					placeholder={t("name")}
					value={store.createHabitForm.name}
					onChange={handleNameChange}
				/>
			</InputWrapper>

			<InputWrapper >
				<CustomInput
					placeholder={t("goal")}
					value={store.createHabitForm.goal}
					onChange={handleGoalChange}
				/>
			</InputWrapper>

			<div className="flex justify-center">
				<CreateButton onClick={() => addNewHabit(
					store.createHabitForm.goal,
					store.createHabitForm.name,
					store.createHabitForm.icon
				)} text={t("addHabit")} />
			</div>

		</div>
	)
})

export default ModalForm