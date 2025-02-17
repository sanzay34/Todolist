import TodoContainer from "./components/TodoContainer/Index";

// const App = () => {
//   return (
//     <div className="w-screen h-screen">
//       <ParentComponent />
//     </div>
//   );
// };

const App = () => {
	return (
		<div className=" w-screen h-screen p-10 bg-green-200 ">
			<div className="font-bold flex items-center justify-center text-3xl mb-7">
				Create Your Todos
			</div>
			<TodoContainer />
		</div>
	);
};

export default App;
