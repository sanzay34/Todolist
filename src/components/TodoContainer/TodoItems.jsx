import TodoItem from "./TodoItem";
import { useRef, useEffect } from "react";
import { filterTodos } from "./TodoContainer";
import Input from "./TodoContainer/input";
import {
	deleteTodoItems,
	editTodoItems,
	setCurrentIndex,
	setEditMode,
	setTodoItems,
	setTodoText,
} from "../features/todos/todoSlice";
import { useDispatch, useSelector } from "react-redux";

const TodoItems = () => {
	const dispatch = useDispatch();
	const inputRef = useRef(null);
	const {
		todoItems: alltodos,
		todoStatus,
		currentEditIndex,
	} = useSelector((state) => state.todos);

	const deleteTodos = (todoId) => {
		dispatch(deleteTodoItems(todoId));
	};

	const editTodos = (todoId) => {
		const todo = alltodos.find((item) => item.id === todoId);
		dispatch(setTodoText(todo.text));
		dispatch(setEditMode(true));
		dispatch(setCurrentIndex(todoId));
		useEffect(() => {
			inputRef.current?.focus();
		}, []);
	};

	const changeTodoStatus = (todoId, checked) => {
		dispatch(editTodoItems({ id: todoId, completed: checked }));
	};

	const filtered_todos = filterTodos(alltodos, todoStatus);

	const handleCheckAllChange = (e) => {
		const changed_status_todos = alltodos.map((item) => {
			return {
				...item,
				completed: e.target.checked,
			};
		});

		dispatch(setTodoItems(changed_status_todos));
	};

	//array functions (every)
	const is_all_checked = filtered_todos.every((item) => item.completed);
	return (
		<div className="flex flex-col gap-2 mt-4">
			{filtered_todos.length > 0 && (
				<div
					className={`flex  items-center mt-1 gap-x-2 rounded-xl px-3 py-1 hover:bg-blue-100 cursor-pointer border border-black 
				}`}
				>
					<div>
						<Input
							checked={is_all_checked}
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
