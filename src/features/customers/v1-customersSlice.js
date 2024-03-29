// ----CUSTOMER STATE-----
const initStateCustomer = {
  fullName: "",
  nationalID: "",
  createdAt: "",
};

export default function customerReducer(state = initStateCustomer, action) {
  const { type, payload } = action;

  switch (type) {
    case "customer/createCustomer":
      return { ...state, ...payload };
    case "customer/updateName":
      return { ...state, fullName: payload };
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
