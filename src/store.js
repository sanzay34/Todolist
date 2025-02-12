import { configureStore } from "@reduxjs/toolkit";

import todoReducer from "./features/todos/todoSlice";

export const store = configureStore({
	reducer: {
		
		todos: todoReducer,
	},
});

//useSelector (it takes data )
//useDispatch (it dispatched actions )
