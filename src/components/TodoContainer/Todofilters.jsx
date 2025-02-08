import Button from "./Button";
import { filterTodos } from ".";
import { useContext } from "react";
import { ACTION_TYPES, TodoContext } from "../../context/TodoContext";

const TodoFilters = () => {
	const [state, dispatch] = useContext(TodoContext);
	const handleFilterClick = (status) => {
		dispatch({type:ACTION_TYPES.SET_TODO_STATUS,payload:status})
	};

	const { todoItems } = state;

	const allTodoList = todoItems.length
	const completedTodos = filterTodos(todoItems, 'completed')?.length;
	const pendingTodos = filterTodos(todoItems, "pending")?.length;
	
	
	return (
		<>
			<div className="flex  mt-3 gap-x-2 items-center">
				<Button
					handleClick={() => handleFilterClick("all")}
					extraStyles="bg-blue-500 hover:!bg-blue-400 border-none text-white"
					fullWidth
				>
					All Todos {`(${allTodoList})`}
				</Button>
				<Button
					handleClick={() => handleFilterClick("completed")}
					extraStyles="bg-green-500 hover:!bg-green-400 border-none text-white"
					fullWidth
				>
					Completed{`(${completedTodos})`}
				</Button>
				<Button
					handleClick={() => handleFilterClick("pending")}
					extraStyles="bg-yellow-500 hover:!bg-yellow-400 border-none text-white"
					fullWidth
				>
					Pending{`(${pendingTodos})`}
				</Button>
			</div>
			
		</>
	);
};

export default TodoFilters;
