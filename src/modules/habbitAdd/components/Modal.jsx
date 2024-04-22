import CloseButton from "./CloseButton"
import ModalTitle from "./ModalTitle"
import { observer } from "mobx-react-lite"
import ModalForm from "./ModalForm"
import ModalIcons from "./ModalIcons"


const Modal = observer(() => {

	return (
		<div className="fixed top-0 left-0 flex justify-center items-center w-full h-full bg-white bg-opacity-20 z-50">
			<div className="bg-ui p-8 rounded-3xl w-[580px] h-[480px] relative">

				<CloseButton />
				<ModalTitle />


				<div className="flex flex-col items-center gap-6 mt-5">

					<div>
						<span className="text-xl text-[#768396]">Icon</span>
					</div>

					<ModalIcons />

					<ModalForm />
				</div>

			</div>
		</div>
	)
})

export default Modal