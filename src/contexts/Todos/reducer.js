/**
 * IMPORTANT!!! this reducer is written with the intention of using immer reducer
 *
 * @type {{todos: [], newTodo: {createdAt: null, parentTask: null, dueDate: null, description: null, id: Date, title: null, dueTime: null, done: boolean}}}
 */
export const initialState = {
	todos: [
		{
			id: new Date(),
			title: 'item1',
			description: 'description1',
			dueDate: new Date(),
			done: false,
			createdAt: new Date(),
			parentTask: null,
		},
		{
			id: new Date(),
			title: 'item1',
			description: 'description1',
			dueDate: new Date(),
			done: false,
			createdAt: new Date(),
			parentTask: null,
		},
		{
			id: new Date(),
			title: 'item1',
			description: 'description1',
			dueDate: new Date(),
			done: false,
			createdAt: new Date(),
			parentTask: null,
		},
		{
			id: new Date(),
			title: 'item1',
			description: 'description1',
			dueDate: new Date(),
			done: false,
			createdAt: new Date(),
			parentTask: null,
		},
		{
			id: new Date(),
			title: 'item1',
			description: 'description1',
			dueDate: new Date(),
			done: false,
			createdAt: new Date(),
			parentTask: null,
		},
		{
			id: new Date(),
			title: 'item1',
			description: 'description1',
			dueDate: new Date(),
			done: false,
			createdAt: new Date(),
			parentTask: null,
		},
		{
			id: new Date(),
			title: 'item1',
			description: 'description1',
			dueDate: new Date(),
			done: false,
			createdAt: new Date(),
			parentTask: null,
		},
		{
			id: new Date(),
			title: 'item1',
			description: 'description1',
			dueDate: new Date(),
			done: false,
			createdAt: new Date(),
			parentTask: null,
		},
		{
			id: new Date(),
			title: 'item1',
			description: 'description1',
			dueDate: new Date(),
			done: false,
			createdAt: new Date(),
			parentTask: null,
		},
		{
			id: new Date(),
			title: 'item1',
			description: 'description1',
			dueDate: new Date(),
			done: false,
			createdAt: new Date(),
			parentTask: null,
		},
		{
			id: new Date(),
			title: 'item1',
			description: 'description1',
			dueDate: new Date(),
			done: false,
			createdAt: new Date(),
			parentTask: null,
		},
		{
			id: new Date(),
			title: 'item1',
			description: 'description1',
			dueDate: new Date(),
			done: false,
			createdAt: new Date(),
			parentTask: null,
		},
	],
	newTodo: {
		id: new Date(),
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
};

export function TodoReducer(draft, action) {
	switch (action.type) {
		case ACTIONS.FIELD:
			draft.newTodo[action.fieldName] = action.payload;
			return;
		case ACTIONS.ADD:
			draft.newTodo = { ...draft.newTodo, createdAt: Date.now() };
			draft.todos = [...draft.todos, draft.newTodo];
			draft.newTodo = initialState.newTodo;
			return;
		default:
			return;
	}
}

export function TodoReducerMethods(dispatch) {
	function onChange(fieldName, payload) {
		dispatch({ type: ACTIONS.FIELD, fieldName, payload });
	}

	function addTodo() {
		dispatch({ type: ACTIONS.ADD });
	}

	return { onChange, addTodo };
}
