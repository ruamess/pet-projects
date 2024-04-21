import Logo from "./Logo";
import { observer } from "mobx-react-lite";
import SideContent from "./SideContent";

const SideBar = observer(() => {


	return (
		<aside className="min-w-[160px] bg-ui min-h-screen">
			<div className="flex flex-col justify-center items-center pt-14">

				<Logo />
				<SideContent />

			</div>
		</aside>
	)
})


export default SideBar