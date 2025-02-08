import { useContext } from "react";
import TodoItem from "./TodoItem";
import { ACTION_TYPES, TodoContext } from "../../context/TodoContext";
import { filterTodos } from ".";
import Input from "./Input";
const TodoItems = () => {
	const [state, dispatch] = useContext(TodoContext);

	const { todoItems: alltodos=[], todoStatus, currentEditIndex } = state;

	const deleteTodos = (todoId) => {
		const todos = alltodos.filter((item) => item.id !== todoId);
		dispatch({ type: ACTION_TYPES.SET_TODO_ITEMS, payload: todos });

		// setTodoItems(todos);
	};

	const editTodos = (todoId) => {
		const todo = alltodos.find((item) => item.id === todoId);
		dispatch({ type: ACTION_TYPES.SET_TODO_TEXT, payload: todo.text });
		dispatch({ type: ACTION_TYPES.SET_EDIT_MODE, payload: true });
		dispatch({ type: ACTION_TYPES.SET_CURRENT_EDIT_INDEX, payload: todoId });
	};

	const changeTodoStatus = (todoId, checked) => {
		const updated_todos = alltodos.map((item) => {
			if (item.id === todoId) {
				return {
					...item,
					completed: checked,
				};
			}

			return item;
		});

		// setTodoItems(updated_todos);
		dispatch({ type: ACTION_TYPES.SET_TODO_ITEMS, payload: updated_todos });
	};

	const filtered_todos = filterTodos(alltodos, todoStatus);
	const handleCheckAllChange = (e) => {
		const changed_status_todos = alltodos.map((item) => {
			return {
				...item,
				completed: e.target.checked,
			};
		});
		dispatch({
			type: ACTION_TYPES.SET_TODO_ITEMS,
			payload: changed_status_todos,
		});
	};
	const is_checked_all=filtered_todos.every((item)=>item.completed)
	return (
		<div className="flex flex-col gap-2 mt-4">
			{filtered_todos.length > 0 && (
				<div
					className={`flex  items-center mt-1 gap-x-2 rounded-xl px-3 py-1 hover:bg-blue-100 cursor-pointer border border-slate-300 
				}`}
				>
					<div>
						<Input
							checked={is_checked_all}
							onChange={handleCheckAllChange}
							inputStyles="w-[25px] h-[25px]"
							type="checkbox"
						/>
					</div>
					Select All
				</div>
			)}

			{filtered_todos.map((item, index) => (
				<TodoItem
					deleteTodos={deleteTodos}
					selected={currentEditIndex === item.id}
					editTodos={editTodos}
					changeTodoStatus={changeTodoStatus}
					key={index}
					item={item}
					itemIndex={index}
				/>
			))}
		</div>
	);
};

export default TodoItems;
