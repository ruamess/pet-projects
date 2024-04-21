import { deleteComment } from "../helpers";


export default function DeleteButton({ index }) {

	return (
		<button className="flex items-center justify-center hover:opacity-50 duration-500"
			onClick={() => deleteComment(index)}>
			<img src="/Delete.svg" alt="Delete" className="min-w-10" />
		</button>
	)
}