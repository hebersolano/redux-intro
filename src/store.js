import { applyMiddleware, combineReducers, createStore } from "redux";
import accountReducer from "./features/accounts/accountsSlice";
import customerReducer from "./features/customers/customersSlice";
import { thunk } from "redux-thunk";

const rootReducer = combineReducers({ account: accountReducer, customer: customerReducer });
const store = createStore(rootReducer, applyMiddleware(thunk));

console.log(store.getState());
export default store;
