// Import createStore here
import { createStore } from 'redux'

const initialState = 0;
const countReducer = (state = initialState, action) => {
  switch (action.type) {
    case "increment":
      return state + 1;
    default:
      return state;
  }
};

export const store = createStore(countReducer);

// Dispatch Actions to the Store

import { createStore } from "redux";

const initialState = 0;
const countReducer = (state = initialState, action) => {
  switch (action.type) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    default:
      return state;
  }
};

export const store = createStore(countReducer);

// Dispatch your actions here.
store.dispatch({ type: "increment" });
store.dispatch({ type: "increment" });
console.log(store.getState());
store.dispatch({ type: "decrement" });
store.dispatch({ type: "decrement" });
store.dispatch({ type: "decrement" });
console.log(store.getState());

// actions creators

import { createStore } from 'redux';

// Create your action creators here.
export const increment = () => {
  return {
    type: "increment"
  }
}

export const decrement = () => {
  return {
    type: "decrement"
  }
}

const initialState = 0;
const countReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'increment':
      return state + 1;
    case 'decrement':
      return state - 1;
    default:
      return state;
  }
}

const store = createStore(countReducer);

// Modify the dispatches below.
store.dispatch(increment());
store.dispatch(increment());
console.log(store.getState());

store.dispatch(decrement());
store.dispatch(decrement());
store.dispatch(decrement());
console.log(store.getState());