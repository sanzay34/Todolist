import { createContext, useReducer, useState } from "react";

const initialState = {
	todoText: "",
	isEditMode: false,
	currentEditIndex: null,
	todoStatus: "all",
	todoItems: [],
};

export const ACTION_TYPES = {
	SET_TODO_TEXT: "SET_TODO_TEXT",
	SET_TODO_STATUS: "SET_TODO_STATUS",
	SET_TODO_ITEMS: "SET_TODO_ITEMS",
	SET_EDIT_MODE: "SET_EDIT_MODE",
	SET_CURRENT_EDIT_INDEX: "SET_CURRENT_EDIT_INDEX",
};

const reducer = (state, action) => {
	switch (action.type) {
		case ACTION_TYPES.SET_TODO_TEXT:
			return {
				...state,
				todoText: action.payload,
			};

		case ACTION_TYPES.SET_TODO_STATUS:
			return {
				...state,
				todoStatus: action.payload,
			};

		case ACTION_TYPES.SET_TODO_ITEMS:
			return {
				...state,
				todoItems: action.payload,
			};

		case ACTION_TYPES.SET_EDIT_MODE:
			return {
				...state,
				isEditMode: action.payload,
			};

		case ACTION_TYPES.SET_CURRENT_EDIT_INDEX:
			return {
				...state,
				currentEditIndex: action.payload,
			};

		default:
			break;
	}
};

const TodoContext = createContext(initialState);

const TodoContextProvider = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, initialState);

	return (
		<TodoContext.Provider value={[state, dispatch]}>
			{children}
		</TodoContext.Provider>
	);
};

export { TodoContext, TodoContextProvider };
