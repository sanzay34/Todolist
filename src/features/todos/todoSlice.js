import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	todoText: "",
	isEditMode: false,
	currentEditIndex: null,
	todoStatus: "all",
	todoItems: [],
};

export const todoSlice = createSlice({
	name: "todos",
	initialState,
	reducers: {
		setTodoStatus: (state, action) => {
			state.todoStatus = action.payload;
		},
		setTodoText: (state, action) => {
			state.todoText = action.payload;
		},
		setEditMode: (state, action) => {
			state.isEditMode = action.payload;
		},
		setCurrentIndex: (state, action) => {
			state.currentEditIndex = action.payload;
		},
		addTodoItems: (state, action) => {
			state.todoItems.push(action.payload);
		},
		deleteTodoItems: (state, action) => {
			state.todoItems = state.todoItems.filter(
				(item) => item.id !== action.payload
			);
		},
		editTodoItems: (state, action) => {
			const { id, ...rest } = action.payload;
			state.todoItems = state.todoItems.map((item) => {
				if (item.id === id) {
					return {
						...item,
						...rest,
					};
				}
				return item;
			});
		},
		setTodoItems: (state, action) => {
			state.todoItems = action.payload;
		},
	},
});

export const {
	deleteTodoItems,
	setTodoText,
	setTodoStatus,
	setEditMode,
	setCurrentIndex,
	addTodoItems,
	editTodoItems,
	setTodoItems,
} = todoSlice.actions;

export default todoSlice.reducer;
