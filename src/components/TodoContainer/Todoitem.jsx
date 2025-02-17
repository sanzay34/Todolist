import Button from "./Button";
import Input from "./Input";
const TodoItem = ({
	item,
	deleteTodos,
	editTodos,
	changeTodoStatus,
	selected = false,
}) => {
	return (
		<div
			className={`flex justify-between  rounded-xl px-3 py-1 hover:bg-blue-100 cursor-pointer ${
				selected ? "border-2 border-green-500" : "border border-black"
			}`}
		>
			<div className="flex gap-x-3 items-center ">
				<div>
					<Input
						checked={item.completed}
						onChange={(e) => changeTodoStatus(item.id, e.target.checked)}
						inputStyles="w-[25px] h-[25px]"
						type="checkbox"
					/>
				</div>

				<div className={`${item.completed ? "line-through" : ""} `}>
					{item?.text}
				</div>
			</div>

			<div className="flex gap-2">
				<Button
					handleClick={() => editTodos(item.id)}
					extraStyles="text-white border-none bg-blue-500 font-semibold hover:!bg-blue-400"
				>
					Edit
				</Button>

				<Button
					handleClick={() => deleteTodos(item.id)}
					extraStyles="text-white border-none bg-red-500 font-semibold hover:!bg-red-400"
				>
					Delete
				</Button>
			</div>
		</div>
	);
};

export default TodoItem;
