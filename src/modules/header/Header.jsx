import { observer } from "mobx-react-lite";

import Title from "./info/Title";
import Progress from "./progress/Progress";



const Header = observer(({ title, goal, days }) => {

	return (
		<header className="flex justify-around xl:justify-between flex-wrap gap-10">
			<Title title={title} />
			<Progress goal={goal} days={days} />
		</header>
	)
})

export default Header