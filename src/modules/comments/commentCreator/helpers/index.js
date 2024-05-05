import store from "@/modules/store"
import { toast } from 'sonner'


const createComment = () => {
	const text = store.commentText

	if (text.trim() == '') {
		toast.error("Comment cannot be empty")
	}
	else {
		store.habitList[store.habitIndex].days.push({ text: text })
		store.updateCommentText('')
	}
}


const inputChange = (event) => {
	store.updateCommentText(event.target.value)
}


const onPressEnter = (event) => {
	if (event.key === 'Enter') {
		createComment()
	}
}


export {
	createComment,
	inputChange,
	onPressEnter
}
