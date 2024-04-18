import TodoAddButton from "./TodoAddButton"
import TodoTextInput from "./TodoTextInput"


const TodoAddForm = () => {

	return (
		<div className="container flex gap-4">
			<TodoTextInput />
			<TodoAddButton />
		</div>
	)
}

export default TodoAddForm