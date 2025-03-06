import ReactDOM from "react-dom/client";
import App from "./app/App";
import "./index.css";
import { Provider, useDispatch } from "react-redux";
import store from "./app/store.js"

ReactDOM.createRoot(document.getElementById("root")).render(
   
<Provider store={store}>
    <App />
</Provider>

);
