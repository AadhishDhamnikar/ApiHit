import React from "react";
import ReactDOM from "react-dom";
import App from "./App.container";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import "./styles.css";
const coustomMiddleWare = store => next => action => {
  console.group(action.type);
  console.log("%c Prev. state", "color: orange", store.getState());
  console.log("%c Action", "color: blue", action);
  next(action);
  console.log("%c Next state", "color: orange", store.getState());
  console.groupEnd();
};
const ApiReducer = (state = { data: [] }, action) => {
  if (action.type === "Data") {
    return { data: [...state.data, ...action.data] };
  }
  return state;
};
const ApiReducerCopy = (state = { dataCopy: [] }, action) => {
  if (action.type === "showDetails") {
    return { dataCopy: [...state.dataCopy, ...action.dataCopy] };
  }
  return state;
};
const demo = (state = 0, action) => {
  if (action.type === "increment") {
    return state + 1;
  }
  if (action.type === "decrement") {
    return state - 1;
  }
  return state;
};
const middle = [thunk, coustomMiddleWare];
const reducer = combineReducers({ ApiReducer, demo, ApiReducerCopy });
const store = createStore(reducer, applyMiddleware(...middle));
console.log("store", store.getState());
const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
