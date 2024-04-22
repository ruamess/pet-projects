import store from "@/modules/store"



const createComment = () => {
	const text = store.commentText
	store.habbitList[store.habbitIndex].days.push({ text: text })
	store.updateCommentText('')
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
