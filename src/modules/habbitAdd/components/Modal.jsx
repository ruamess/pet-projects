
import HabbitButtonWrapper from "@/components/habbitButton/HabbitButtonWrapper"
import HabbitIcon from "@/components/habbitButton/HabbitIcon"
import CloseButton from "./CloseButton"
import ModalTitle from "./ModalTitle"
import InputWrapper from "@/components/input/InputWrapper"
import CustomInput from "@/components/input/CustomInput"
import CreateButton from "../../../components/CreateButton"


const Modal = () => {

	return (
		<div className="fixed top-0 left-0 flex justify-center items-center w-full h-full bg-white bg-opacity-20 z-50">
			<div className="bg-ui p-8 rounded-3xl w-[580px] h-[480px] relative">

				<CloseButton />
				<ModalTitle />


				<div className="flex flex-col items-center gap-6 mt-5">

					<div>
						<span className="text-xl text-[#768396]">Icon</span>
					</div>

					<div className="flex gap-14">
						<HabbitButtonWrapper >
							<HabbitIcon image='Sport' />
						</HabbitButtonWrapper>
						<HabbitButtonWrapper >
							<HabbitIcon image='Water' />
						</HabbitButtonWrapper>
						<HabbitButtonWrapper >
							<HabbitIcon image='Food' />
						</HabbitButtonWrapper>
					</div>

					<div className="flex flex-col gap-5 w-full">
						<InputWrapper >
							<CustomInput placeholder="Name" />
						</InputWrapper>

						<InputWrapper >
							<CustomInput placeholder="Goal" />
						</InputWrapper>
					</div>

					<div>
						<CreateButton text='Add habbit' />
					</div>
				</div>

			</div>
		</div>
	)
}

export default Modal