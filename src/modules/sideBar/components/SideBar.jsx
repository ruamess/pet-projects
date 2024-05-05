import Logo from "./Logo";
import { observer } from "mobx-react-lite";
import HabitsList from "./HabitsList";
import AddHabitButton from "./AddHabitButton";
import SettingsButton from "./SettingsButton";

const SideBar = observer(() => {


	return (
		<aside className="bg-[#FBFAFF] dark:bg-ui md:min-w-[160px] h-fit md:h-screen md:max-h-screen overflow-y-auto overflow-x-auto
		 whitespace-no-wrap scrollBar max-w-screen ">
			<div className="flex flex-row md:flex-col justify-center items-center pt-14 pb-14 md:gap-20">

				<div className="flex flex-row md:flex-col  justify-center items-center gap-10">
					<Logo />
					<SettingsButton />
				</div>

				<div className="flex flex-row md:flex-col justify-center items-center gap-10">
					<HabitsList />
					<AddHabitButton />
				</div>
			</div>
		</aside >
	)
})


export default SideBar