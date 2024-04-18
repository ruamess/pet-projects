import { TodoProps } from "interfaces"
import TodoState from "./TodoState"


const Todo: React.FC<TodoProps> = ({ text, state }) => {

	return (

		<div className="flex items-center gap-5 h-fit p-5 border-t">
			{state == 'true' ? <TodoState /> : null}
			<span>{text}</span>
		</div>
	)
}

export default Todo