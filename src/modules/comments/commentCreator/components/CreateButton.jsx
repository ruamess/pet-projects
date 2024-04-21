import { createComment } from "../helpers"


const CreateButton = () => {


	return (
		<button className="flex items-center justify-center duration-500 min-w-[160px] h-[50px]
		 bg-acc2  hover:bg-purple  rounded-2xl"
			onClick={() => createComment()}
		>
			<span className="text-[#EDECFE] text-lg">Готово</span>
		</button>
	)
}

export default CreateButton