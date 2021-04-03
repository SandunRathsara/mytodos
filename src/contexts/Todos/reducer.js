/**
 * IMPORTANT!!! this reducer is written with the intention of using immer reducer
 *
 * @type {{description: null, id: null, title: null, done: boolean}}
 */
export const initialState = {
	todos: [
		{
			id: '001',
			title: 'DigiEye',
			description: 'Create the draw pad',
			done: false,
		},
		{
			id: '002',
			title: 'DigiEx',
			description: 'Learn React Native',
			done: false,
		},
	],
	id: null,
	title: null,
	description: null,
	done: false,
};

export const ACTIONS = {
	FIELD: 'field',
	ADD: 'add',
};

export function TodoReducer(draft, action) {
	switch (action.type) {
		case ACTIONS.FIELD:
			draft[action.fieldName] = action.payload;
			return;
		case ACTIONS.ADD:
			draft.todos.append(action.payload);
			return;
		default:
			return;
	}
}
