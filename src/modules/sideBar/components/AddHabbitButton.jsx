import store from "@/modules/store"

const AddHabbitButton = () => {

	return (
		<button onClick={() => store.updateModalVisible()} className="w-[75px] h-[75px] rounded-2xl border border-acc2 flex justify-center items-center hover:bg-purple duration-500">
			<img src="/Add.svg" alt="Add" width={40} />
		</button>
	)
}

export default AddHabbitButton