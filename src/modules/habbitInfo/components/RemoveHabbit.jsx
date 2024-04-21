import { observer } from "mobx-react-lite"
import { removeHabbit } from "../helpers"


const RemoveHabbit = observer(() => {


	return (
		<div className="flex items-center justify-center mt-14">
			<button onClick={() => removeHabbit()} className="rounded-2xl p-2 bg-[#bd1717] 
			hover:bg-red-700 font-semibold h-14 duration-500">
				Delete habbit
			</button>
		</div>
	)
})

export default RemoveHabbit