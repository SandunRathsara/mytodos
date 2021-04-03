import React, { createContext } from 'react';

import { useImmerReducer as useReducer } from 'use-immer';
import { initialState, TodoReducer } from './reducer';

export const TodoStateContext = createContext();
export const TodosDispatchContext = createContext();

export default function TodoContextProvider(props) {
	const [todoState, todosDispatch] = useReducer(TodoReducer, initialState);
	return (
		<TodoStateContext.Provider value={todoState}>
			<TodosDispatchContext.Provider value={todosDispatch}>{props.children}</TodosDispatchContext.Provider>
		</TodoStateContext.Provider>
	);
}
