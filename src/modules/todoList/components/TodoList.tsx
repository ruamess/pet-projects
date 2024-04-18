
import { Todo } from "../../todo";
import store from "../../../store";



const TodoList = () => {

	const todoList = JSON.parse(store.todoList)

	return (
		<li className="border">
			{todoList.map((el: { text: string }, index: number) => (
				<Todo key={index} text={el.text} state={el.completed} />
			))}
		</li>
	)
}

export default TodoList;