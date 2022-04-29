import { combineReducers } from "redux";
import { reducer as movieLibReducer } from "./";

const rootReducer = combineReducers({
  movieLib: movieLibReducer,
});

export default rootReducer;
