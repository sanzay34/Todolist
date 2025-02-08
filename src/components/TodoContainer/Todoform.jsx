import { useContext } from "react";
import Button from "./Button";
import Input from "./Input";
import { ACTION_TYPES, TodoContext } from "../../context/TodoContext";

const TodoForm = () => {
	const [state, dispatch] = useContext(TodoContext);

	const { todoText, isEditMode, currentEditIndex, todoItems } = state;

	const handleTodoTextChange = (e) => {
		if (e.target.value === "") {
			dispatch({ type: ACTION_TYPES.SET_EDIT_MODE, payload: false });
			dispatch({ type: ACTION_TYPES.SET_CURRENT_EDIT_INDEX, payload: null });
		}

		dispatch({ type: ACTION_TYPES.SET_TODO_TEXT, payload: e.target.value });
	};

	const handleAddTodo = () => {
		if (isEditMode) {
			const edited_todos = todoItems.map((item, index) => {
				if (item.id === currentEditIndex) {
					const updated_todos = { ...item, text: todoText };
					return updated_todos;
				}
				return item;
			});

			dispatch({ type: ACTION_TYPES.SET_TODO_ITEMS, payload: edited_todos });
			dispatch({ type: ACTION_TYPES.SET_EDIT_MODE, payload: false });

			// setIsEditMode(false);
		} else {
			if (todoText.length > 0) {
				const newTodo = {
					id: Date.now(),
					text: todoText,
					completed: false,
				};

				dispatch({
					type: ACTION_TYPES.SET_TODO_ITEMS,
					payload: [...todoItems, newTodo],
				});
			}
		}
		// setTodoText("");

		dispatch({ type: ACTION_TYPES.SET_TODO_TEXT, payload: "" });
		dispatch({ type: ACTION_TYPES.SET_CURRENT_EDIT_INDEX, payload: null });
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
