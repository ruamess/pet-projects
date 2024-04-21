import store from "@/modules/store"



const createComment = () => {
	const text = store.inputValue
	store.habbitList[store.habbitIndex].days.push({ text: text })
	store.updateInputValue('')
}


const inputChange = (event) => {
	store.updateInputValue(event.target.value)
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
