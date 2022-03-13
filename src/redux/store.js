// import { createStore } from "redux";

// import reducers from "./reducers/index";

// const store = createStore(
//   reducers,
//   {},
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// );

// export default store;

import { createStore } from "redux";
// import rootReducer from "./reducer";
import reducers from "./reducers/index";

import { composeWithDevTools } from "redux-devtools-extension";

const composedEnhancers = composeWithDevTools();

const store = createStore(reducers, composedEnhancers);
// const store = createStore(rootReducer);

export default store;
