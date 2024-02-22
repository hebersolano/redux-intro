import { applyMiddleware, combineReducers, createStore } from "redux";
import accountReducer from "./features/accounts/accountsSlice";
import customerReducer from "./features/customers/customersSlice";
import { thunk } from "redux-thunk";
import { composeWithDevTools } from "@redux-devtools/extension";

const rootReducer = combineReducers({ account: accountReducer, customer: customerReducer });
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

console.log(store.getState());
export default store;
