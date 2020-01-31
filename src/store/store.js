import { createStore } from "redux";
import allReducers from "./reducers/combined";

export const store = createStore(allReducers);

export default store;