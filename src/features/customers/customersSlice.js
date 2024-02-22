import { createSlice } from "@reduxjs/toolkit";

// ----CUSTOMER STATE-----
const initialState = {
  fullName: "",
  nationalID: "",
  createdAt: "",
};

const customersSlice = createSlice({
  name: "customer",
  initialState,
  reducers: {
    createCustomer: {
      prepare(fullName, nationalID) {
        return { payload: { fullName, nationalID, createdAt: new Date().toISOString() } };
      },
      reducer(state, action) {
        state.fullName = action.payload.fullName;
        state.nationalID = action.payload.nationalID;
        state.createdAt = action.payload.createdAt;
      },
    },
    updateName(state, action) {
      state.fullName = action.payload;
    },
  },
});

export const { createCustomer, updateName } = customersSlice.actions;
export default customersSlice.reducer;

/*
export default function customerReducer(state = initStateCustomer, action) {
  const { type, payload } = action;

  switch (type) {
    case "customer/createCustomer":
      return { ...state, ...payload };
    case "customer/updateName":
      return { ...state, fullName: payLoan };
    default:
      return state;
  }
}

// ACTION CREATORS CURTOMER
export function createCustomer(fullName, nationalID) {
  console.log("create customer");
  return {
    type: "customer/createCustomer",
    payload: { fullName, nationalID, createdAt: new Date().toISOString() },
  };
}

export function updateName(fullName) {
  return {
    type: "customer/createCustomer",
    payload: fullName,
  };
}
*/
