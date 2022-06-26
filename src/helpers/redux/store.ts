import { createStore, combineReducers } from "redux";
import { AppReducer } from "./reducer";

const reducers = combineReducers({
  QuizApp: AppReducer,
});

export const store = createStore(reducers);

export type AppState = ReturnType<typeof reducers>; //store.getState()
// export type AppDispatch = typeof store.dispatch
