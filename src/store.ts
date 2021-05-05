import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";
import UserReducer from "./redux/reducer";


const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  combineReducers({
    users: UserReducer,
  }),
  composeEnhancer(applyMiddleware(thunk))
);

export default store;
