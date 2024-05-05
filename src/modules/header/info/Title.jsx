import store from "@/modules/store"
import Completed from "./Completed"
import { observer } from "mobx-react-lite"

const Title = observer(({ title }) => {

	const habit = store?.habitList[store?.habitIndex]

	return (
		<div className="flex items-center gap-10">
			<span className="text-6xl  flex flex-wrap">{title}</span>
			{habit.days.length < habit.goal ? null : <Completed />}
		</div>
	)
})

export default Title