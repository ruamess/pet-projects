import Logo from "./Logo";
import { observer } from "mobx-react-lite";
import HabbitsList from "./HabbitsList";
import AddHabbitButton from "./AddHabbitButton";

const SideBar = observer(() => {


	return (
		<aside className="min-w-[160px] bg-ui min-h-screen">
			<div className="flex flex-col justify-center items-center pt-14">
				<Logo />
				<div className="flex flex-col justify-center items-center mt-28 gap-10">
					<HabbitsList />
					<AddHabbitButton />
				</div>
			</div>
		</aside>
	)
})


export default SideBar