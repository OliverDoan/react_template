import { combineReducers } from "redux";
import userReducer from "./users/userReducer";
import workDateReducer from "./workDate/workDateReducer";
const rootReducer = combineReducers({
  users: userReducer,
  workDate: workDateReducer,
});

export default rootReducer;
