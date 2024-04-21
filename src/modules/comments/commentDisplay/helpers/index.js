import store from '@/modules/store'

const deleteComment = (dayIndex) => {
	const day = store.habbitList[store.habbitIndex].days.filter((el, index) => index == dayIndex ? 0 : 1)
	store.habbitList[store.habbitIndex].days = day
}


export {
	deleteComment
}