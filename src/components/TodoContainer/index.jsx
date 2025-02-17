import { useContext, useEffect, useState } from "react";
import TodoForm from "./TodoForm";
import TodoItems from "./TodoItems";
import TodoFilters from "./TodoFilters";
import { ACTION_TYPES} from "../../context/TodoContext";
import { setTodoItems } from "../../features/todos/todoSlice";
import { useDispatch, useSelector } from "react-redux";

export const filterTodos = (todos, status) => {
	let alltodos = [];

	switch (status) {
		case "pending":
			alltodos = todos.filter((item) => !item.completed);
			break;

		case "completed":
			alltodos = todos.filter((item) => item.completed);
			break;

		default:
			alltodos = todos;
	}

	return alltodos;
};

const TodoContainer = () => {
	const dispatch = useDispatch();
	const { todoItems } = useSelector((state) => state.todos);

	useEffect(() => {
		if (localStorage.getItem("todos")) {
			const localTodos = JSON.parse(localStorage.getItem("todos"));
			dispatch(setTodoItems(localTodos));
		}
	}, [dispatch]);

	useEffect(() => {
		if (todoItems.length > 0) {
			localStorage.setItem("todos", JSON.stringify(todoItems));
		} else {
			localStorage.clear("todos");
		}
	}, [todoItems]);

	// useEffect(() => {
	//   const fetchData = async () => {
	//     try {
	//       const response = await fetch(
	//         "https://jsonplaceholder.typicode.com/todos"
	//       );
	//       const result = await response.json();
	//       setTodoItems(result.slice(0, 10));
	//     } catch (err) {
	//       console.log(err);
	//     }
	//   };

	//   fetchData();
	// }, []);

	return (
		<div className="w-full px-5 lg:p-0 mx-auto lg:w-[500px] min-h-screen">
			<TodoForm />

			<TodoFilters />

			<TodoItems />
		</div>
	);
};

export default TodoContainer;
