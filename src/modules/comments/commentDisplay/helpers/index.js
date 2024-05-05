import store from '@/modules/store'

const deleteComment = (dayIndex) => {
	const day = store.habitList[store.habitIndex].days.filter((el, index) => index == dayIndex ? 0 : 1)
	store.habitList[store.habitIndex].days = day
}


export {
	deleteComment
}