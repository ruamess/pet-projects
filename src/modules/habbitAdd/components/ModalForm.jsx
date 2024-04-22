import { InputWrapper } from "@/components"
import { CustomInput } from "@/components"
import { CreateButton } from "../../../components"
import { useState } from "react"
import store from "../../store"
import { observer } from "mobx-react-lite"


const ModalForm = observer(() => {


	const handleNameChange = (e) => {
		store.updateHabbitName(e.target.value)
	}

	const handleGoalChange = (e) => {
		store.updateHabbitGoal(e.target.value)
	}

	return (
		<div className="flex flex-col gap-5 w-full">

			<InputWrapper >
				<CustomInput
					placeholder="Name"
					value={store.habbitName}
					onChange={handleNameChange}
				/>
			</InputWrapper>

			<InputWrapper >
				<CustomInput
					placeholder="Goal"
					value={store.habbitGoal}
					onChange={handleGoalChange}
				/>
			</InputWrapper>

			<div className="flex justify-center">
				<CreateButton text='Add habbit' />
			</div>

		</div>
	)
})

export default ModalForm