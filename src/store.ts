
import { observable, autorun } from 'mobx';

const store = observable({
	todoList: localStorage.getItem('todoList') || '[]',
})

autorun(() => {
	localStorage.setItem('todoList', store.todoList)
})

export default store



