import HabbitButtonWrapper from "@/components/HabbitButtonWrapper"
import CloseButton from "./CloseButton"
import ModalTitle from "./ModalTitle"


const Modal = () => {

	return (
		<div className="fixed top-0 left-0 flex justify-center items-center w-full h-full bg-white bg-opacity-20 z-50">
			<div className="bg-ui p-8 rounded-3xl w-[580px] h-[480px]">

				<CloseButton />
				<ModalTitle />


				<div className="flex flex-col items-center mt-6 gap-6">
					<div>
						<span className="text-xl text-[#768396]">Иконка</span>
					</div>
					<div className="flex gap-14">
						<HabbitButtonWrapper image={'Sport'} />
						<HabbitButtonWrapper image={'Water'} />
						<HabbitButtonWrapper image={'Food'} />
					</div>
					<div>
					</div>
				</div>

			</div>
		</div>
	)
}

export default Modal