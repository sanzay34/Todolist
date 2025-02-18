import Button from "./Button";
import { useDispatch } from "react-redux";
import { setTodoStatus } from "../../features/todos/todoSlice";

const TodoFilters = () => {
	const dispatch = useDispatch();

	const handleFilterClick = (status) => {
		dispatch(setTodoStatus(status));
	};

	return (
		<div className="flex  mt-3 gap-x-2 items-center">
			<Button
				handleClick={() => handleFilterClick("all")}
				extraStyles="bg-blue-500 hover:!bg-blue-400 border-none text-white"
				fullWidth
			>
				All Todos
			</Button>
			<Button
				handleClick={() => handleFilterClick("completed")}
				extraStyles="bg-green-500 hover:!bg-green-400 border-none text-white"
				fullWidth
			>
				Completed
			</Button>
			<Button
				handleClick={() => handleFilterClick("pending")}
				extraStyles="bg-yellow-500 hover:!bg-yellow-400 border-none text-white"
				fullWidth
			>
				Pending
			</Button>
		</div>
	);
};

export default TodoFilters;
