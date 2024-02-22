import { configureStore } from "@reduxjs/toolkit";

import accountReducer from "./features/accounts/accountsSlice";
import customerReducer from "./features/customers/customersSlice";

configureStore({
  reducer: {
    account: accountReducer,
    customer: customerReducer,
  },
});
export default store;
