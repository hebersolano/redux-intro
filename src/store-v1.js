import { combineReducers, createStore } from "redux";

// ----ACCOUNT STATE-----
const initStateAccount = {
  balance: 0,
  loan: 0,
  loanPurpose: "",
};

function accountReducer(state = initStateAccount, action) {
  const { type, payload } = action;

  switch (type) {
    case "account/deposit":
      return { ...state, balance: state.balance + payload };
    case "account/withdraw":
      return { ...state, balance: state.balance - payload };
    case "account/requestLoan": {
      if (state.loan > 0) return state;
      return {
        ...state,
        loan: payload.amount,
        purpose: payload.purpose,
        balance: state.balance + payload.amount,
      }; // to complete later
    }

    case "account/payLoan":
      return { ...state, loan: 0, loanPurpose: "", balance: state.balance - state.loan };
    default:
      return state;
  }
}

// ----CUSTOMER STATE-----

const initStateCustomer = {
  fullName: "",
  nationalID: "",
  createdAt: "",
};

function customerReducer(state = initStateCustomer, action) {
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

const rootReducer = combineReducers({ account: accountReducer, customer: customerReducer });
const store = createStore(rootReducer);

// store.dispatch({ type: "account/deposit", payload: amount });
// console.log(store.getState());
// store.dispatch({ type: "account/requestLoan", payload: { amount: 1000, purpose: "buy a car" } });
// console.log(store.getState());
// store.dispatch({ type: "account/payLoan" });

// ACTION CREATORS ACCOUNT
function deposit(amount) {
  return { type: "account/deposit", payload: amount };
}
function withdraw(amount) {
  return { type: "account/deposit", payload: amount };
}
function requestLoan(amount, purpose) {
  return { type: "account/requestLoan", payload: { amount, purpose } };
}
function payLoan() {
  return { type: "account/payLoan" };
}

requestLoan(1000, "pay a dept");
console.log(store.getState());

// ACTION CREATORS CURTOMER
function createCustomer(fullName, nationalID) {
  return {
    type: "customer/createCustomer",
    payload: { fullName, nationalID, createdAt: new Date().toISOString() },
  };
}

function updateName(fullName) {
  return {
    type: "customer/createCustomer",
    payload: fullName,
  };
}
