Redux Introduction Project

React project from the [Ultimate React Course](https://github.com/jonasschmedtmann/ultimate-react-course) by Jonas Schmedtmann.

## Implementing:

- Classic redux:
  - redux: create reducers and combine them for a store,`createStore` (deprecated), `combineReducers` and `applyMiddleware`.
  - react-redux: `useSelector`, `useDispatch`, `connect` and the mapStateToProps function to pass state as props
  - `redux thunk` middleware for asynchronous code with `applyMiddleware`
  - @redux-devtools/extension: combine with the web browser extension is a tool to monitor the redux state.
- Modern Redux: @reduxjs
  - `configureStore`: short way to create redux stores.
  - `createSlice`: new way to create state slices for redux state.
  - new reducer structure: mutable state, "prepare" and "reducer" subfunctions.
