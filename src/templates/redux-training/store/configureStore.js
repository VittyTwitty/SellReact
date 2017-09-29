import rootReducer from '../reducers'
import {applyMiddleware, createStore} from "redux";
import thunk from "redux-thunk";

export default function configureStore(initialState) {
  const store = createStore(
    rootReducer,
    initialState,
    applyMiddleware(thunk)
  );
  return store;
}