import store from "@/modules/store"

const AddHabitButton = () => {

	return (
		<button className="w-[75px] h-[75px] rounded-2xl border border-[#CAD4FF] dark:border-acc2 flex justify-center 
		items-center hover:bg-[#dedeff] dark:hover:bg-purple duration-500"
			onClick={() => store.setCreateHabitVisibility()} >
			<img src="/Add2.svg" alt="Add" width={40} />
		</button>
	)
}

export default AddHabitButton