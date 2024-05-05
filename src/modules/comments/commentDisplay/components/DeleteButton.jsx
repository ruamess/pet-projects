import store from "@/modules/store";
import { deleteComment } from "../helpers"
import { observer } from "mobx-react-lite";

const DeleteButton = observer(({ index }) => {

	return (
		<button className="flex items-center justify-center hover:opacity-50 duration-500"
			onClick={() => deleteComment(index)}>
			<img src="/Delete2.svg"
				alt="Delete"
				className="min-w-10"
				style={store.theme == 'dark' ? { filter: 'brightness(0) invert(1)' } : null} />
		</button>
	)
})

export default DeleteButton