import { createStore } from "redux";
import rootReducer from "./rootReducer";
import { composeWithDevTools } from "redux-devtools-extension";

const middleWare = [composeWithDevTools()];

const store = createStore(rootReducer, ...middleWare);

export default store;
