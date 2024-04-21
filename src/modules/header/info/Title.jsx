import store from "@/modules/store"
import Completed from "./Completed"
import { observer } from "mobx-react-lite"

const Title = observer(({ title }) => {

	const habbit = store?.habbitList[store?.habbitIndex]

	return (
		<div className="flex items-center gap-10">
			<span className="text-6xl">{title}</span>
			{habbit.days.length < habbit.goal ? null : <Completed />}
		</div>
	)
})

export default Title