// ----ACCOUNT STATE-----
const initStateAccount = {
  balance: 0,
  loan: 0,
  loanPurpose: "",
  isLoading: false,
};

export default function accountReducer(state = initStateAccount, action) {
  const { type, payload } = action;

  switch (type) {
    case "loading":
      return { ...state, isLoading: true };
    case "account/deposit":
      return { ...state, balance: state.balance + payload, isLoading: false };
    case "account/withdraw":
      return { ...state, balance: state.balance - payload };
    case "account/requestLoan": {
      if (state.loan > 0) return state;
      return {
        ...state,
        loan: payload.amount,
        purpose: payload.purpose,
        balance: state.balance + payload.amount,
      };
    }

    case "account/payLoan":
      return { ...state, loan: 0, loanPurpose: "", balance: state.balance - state.loan };
    default:
      return state;
  }
}

// ACTION CREATORS ACCOUNT
export function deposit(amount, currency) {
  if (currency === "USD") return { type: "account/deposit", payload: amount };

  return async function (dispatch) {
    dispatch({ type: "loading" });
    // API call
    const resp = await fetch(
      `https://api.frankfurter.app/latest?amount=${amount}&from=${currency}&to=USD`
    );
    const data = await resp.json();
    const toUSDAmount = data.rates.USD;
    // return action
    dispatch({ type: "account/deposit", payload: toUSDAmount });
  };
}
export function withdraw(amount) {
  return { type: "account/withdraw", payload: amount };
}
export function requestLoan(amount, purpose) {
  return { type: "account/requestLoan", payload: { amount, purpose } };
}
export function payLoan() {
  return { type: "account/payLoan" };
}
