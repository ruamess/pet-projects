import { observer } from "mobx-react-lite"
import { removeHabit } from "../helpers"


const RemoveHabit = observer(({ text }) => {


	return (
		<div className="flex items-center justify-center mt-14">
			<button className="text-white rounded-2xl p-2 bg-[#bd1717] hover:bg-[#932323] 
			dark:hover:bg-[#d83d3d] font-semibold h-14 duration-500"
				onClick={() => removeHabit()}
			>
				{text}
			</button>
		</div>
	)
})

export default RemoveHabit