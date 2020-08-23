import { combineReducers } from "redux";
import mirrorReducer from "./mirror";

const rootReducer = combineReducers({
  mirror: mirrorReducer,
});

export default rootReducer;
