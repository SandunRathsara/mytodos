/**
 * @type {{todos: [], newTodo: {createdAt: null, parentTask: null, dueDate: null, description: null, id: Date, title: null, dueTime: null, done: boolean}}}
 */
const { v4: uuid } = require('uuid');

export const initialState = {
	todos: [],
	// todos: [
	// 	{
	// 		id: uuid(),
	// 		title: 'item1',
	// 		description: 'description1',
	// 		dueDate: new Date(),
	// 		done: false,
	// 		createdAt: new Date(),
	// 		parentTask: null,
	// 	},
	// 	{
	// 		id: uuid(),
	// 		title: 'item2',
	// 		description: 'description2',
	// 		dueDate: new Date(),
	// 		done: false,
	// 		createdAt: new Date(),
	// 		parentTask: null,
	// 	},
	// 	{
	// 		id: uuid(),
	// 		title: 'item3',
	// 		description: 'description3',
	// 		dueDate: new Date(),
	// 		done: false,
	// 		createdAt: new Date(),
	// 		parentTask: null,
	// 	},
	// 	{
	// 		id: uuid(),
	// 		title: 'item4',
	// 		description: 'description4',
	// 		dueDate: new Date(),
	// 		done: false,
	// 		createdAt: new Date(),
	// 		parentTask: null,
	// 	},
	// 	{
	// 		id: uuid(),
	// 		title: 'item5',
	// 		description: 'description5',
	// 		dueDate: new Date(),
	// 		done: false,
	// 		createdAt: new Date(),
	// 		parentTask: null,
	// 	},
	// 	{
	// 		id: uuid(),
	// 		title: 'item6',
	// 		description: 'description6',
	// 		dueDate: new Date(),
	// 		done: false,
	// 		createdAt: new Date(),
	// 		parentTask: null,
	// 	},
	// 	{
	// 		id: uuid(),
	// 		title: 'item7',
	// 		description: 'description7',
	// 		dueDate: new Date(),
	// 		done: false,
	// 		createdAt: new Date(),
	// 		parentTask: null,
	// 	},
	// 	{
	// 		id: uuid(),
	// 		title: 'item8',
	// 		description: 'description8',
	// 		dueDate: new Date(),
	// 		done: false,
	// 		createdAt: new Date(),
	// 		parentTask: null,
	// 	},
	// 	{
	// 		id: uuid(),
	// 		title: 'item9',
	// 		description: 'description9',
	// 		dueDate: new Date(),
	// 		done: false,
	// 		createdAt: new Date(),
	// 		parentTask: null,
	// 	},
	// 	{
	// 		id: uuid(),
	// 		title: 'item10',
	// 		description: 'description10',
	// 		dueDate: new Date(),
	// 		done: false,
	// 		createdAt: new Date(),
	// 		parentTask: null,
	// 	},
	// 	{
	// 		id: uuid(),
	// 		title: 'item11',
	// 		description: 'description11',
	// 		dueDate: new Date(),
	// 		done: false,
	// 		createdAt: new Date(),
	// 		parentTask: null,
	// 	},
	// 	{
	// 		id: uuid(),
	// 		title: 'item12',
	// 		description: 'description12',
	// 		dueDate: new Date(),
	// 		done: false,
	// 		createdAt: new Date(),
	// 		parentTask: null,
	// 	},
	// ],
	newTodo: {
		id: uuid(),
		title: null,
		description: null,
		dueDate: null,
		done: false,
		createdAt: null,
		parentTask: null,
	},
};

export const ACTIONS = {
	FIELD: 'field',
	ADD: 'add',
	CHANGE_DONE_STATUS: 'change-done-status',
};

export function TodoReducer(state, action) {
	switch (action.type) {
		case ACTIONS.FIELD:
			return { ...state, newTodo: { ...state.newTodo, [action.fieldName]: action.payload } };
		case ACTIONS.CHANGE_DONE_STATUS:
			const todoIndex = state.todos.findIndex(todo => todo.id === action.payload.id);
			state.todos[todoIndex].done = !state.todos[todoIndex].done;
			return { ...state, todos: state.todos };
		case ACTIONS.ADD:
			const newTodo = { ...state.newTodo, createdAt: Date.now() };
			return { ...state, todos: [...state.todos, newTodo], newTodo: initialState.newTodo };
		default:
			return;
	}
}

export function useTodoReducerMethods(dispatch) {
	function onChange(fieldName, payload) {
		dispatch({ type: ACTIONS.FIELD, fieldName, payload });
	}

	function addTodo() {
		dispatch({ type: ACTIONS.ADD });
	}

	function changeDoneStatus(id) {
		dispatch({ type: ACTIONS.CHANGE_DONE_STATUS, payload: { id } });
	}

	return { onChange, addTodo, changeDoneStatus };
}
