
import AddHabbitButton from "./AddHabbitButton"
import HabbitsList from "./HabbitsList"


const SideContent = () => {


	return (
		<div className="flex flex-col justify-center items-center mt-28 gap-10">
			<HabbitsList/>
			<AddHabbitButton />
		</div>
	)
}

export default SideContent