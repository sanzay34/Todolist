import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { TodoContextProvider } from "./context/TodoContext.jsx";
import { Provider } from "react-redux";
import { store } from "./store.js";
createRoot(document.getElementById("root")).render(
	<StrictMode>
		<TodoContextProvider>
			<Provider store={store}>
				<App />
			</Provider>
		</TodoContextProvider>
	</StrictMode>
);
