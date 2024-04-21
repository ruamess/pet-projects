import { observer } from "mobx-react-lite";
import Progress from "../progress/Progress";
import Title from "./Title";


const Header = observer(({ title, goal, days }) => {

	return (
		<header className="flex justify-between">
			<Title title={title} />
			<Progress goal={goal} days={days} />
		</header>
	)
})

export default Header