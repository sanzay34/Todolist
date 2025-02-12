import { useContext } from "react";
import Button from "./Button";
import Input from "./Input";
import { ACTION_TYPES, TodoContext } from "../../context/TodoContext";

import { useDispatch, useSelector } from "react-redux";
import {
	addTodoItems,
	editTodoItems,
	setCurrentIndex,
	setEditMode,
	setTodoText,
} from "../../features/todos/todoSlice";

const TodoForm = () => {
	const { isEditMode, todoText, currentEditIndex } = useSelector(
		(state) => state.todos
	);
	const dispatch = useDispatch();

	const handleTodoTextChange = (e) => {
		if (e.target.value === "") {
			dispatch(setEditMode(false));
			dispatch(setCurrentIndex(null));
		}

		dispatch(setTodoText(e.target.value));
	};

	const handleAddTodo = () => {
		if (isEditMode) {
			dispatch(editTodoItems({ id: currentEditIndex, text: todoText }));
			dispatch(setEditMode(false));
		} else {
			if (todoText.length > 0) {
				const newTodo = {
					id: Date.now(),
					text: todoText,
					completed: false,
				};

				dispatch(addTodoItems(newTodo));
			}
		}

		dispatch(setTodoText(""));
		dispatch(setCurrentIndex(null));
	};

	return (
		<div className="flex gap-1 items-center">
			<div className="flex-1">
				<Input
					onEnterPress={handleAddTodo}
					onChange={handleTodoTextChange}
					value={todoText}
					placeholder="Enter your todo"
				/>
			</div>

			<div>
				<Button
					disabled={todoText.length <= 0}
					handleClick={handleAddTodo}
					extraStyles={` ${
						isEditMode
							? "bg-blue-500 hover:!bg-blue-400"
							: "bg-green-500 hover:!bg-green-400"
					}  font-semibold text-white border-none disabled:bg-slate-300 `}
				>
					{isEditMode ? "Edit todos" : "Add todos"}
				</Button>
			</div>
		</div>
	);
};

export default TodoForm;
