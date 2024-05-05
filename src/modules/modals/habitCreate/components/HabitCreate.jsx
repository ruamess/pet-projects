import CloseButton from "../../components/CloseButton"
import ModalTitle from "./ModalTitle"
import { observer } from "mobx-react-lite"
import ModalForm from "./ModalForm"
import ModalIcons from "./ModalIcons"
import ModalWrapper from "../../components/ModalWrapper"
import store from '@/modules/store'

const HabitCreate = observer(() => {

	return (
		<ModalWrapper>

			<CloseButton onClick={() => store.setCreateHabitVisibility()} />
			<ModalTitle />


			<div className="flex flex-col items-center gap-6 mt-5">
				<ModalIcons />

				<ModalForm />
			</div>

		</ModalWrapper>
	)
})

export default HabitCreate