import store from "@/store"


const TodoState = () => {

	const completeTodo = () => {
		store
	}

	return (
		<button className="min-w-10 min-h-10 flex items-center justify-center rounded-full border
		 border-acc hover:bg-acc duration-500">
			<img src="./CheckMark.png" alt="+" width={30} />
		</button>
	)
}

export default TodoState