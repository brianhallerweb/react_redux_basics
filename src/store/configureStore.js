import { createStore, combineReducers } from "redux";
import countReducer from "../Reducers/countReducer";
import todoReducer from "../Reducers/todoReducer";

const store = createStore(
  combineReducers({
    todos: todoReducer,
    count: countReducer
  })
);

export default store;
