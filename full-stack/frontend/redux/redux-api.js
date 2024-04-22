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

store.dispatch(increment());
store.dispatch(increment());
console.log(store.getState());

store.dispatch(decrement());
store.dispatch(decrement());
store.dispatch(decrement());
console.log(store.getState());

// respond to state changes

import { store, increment, decrement } from "./store"

const printCountStatus = () => {
  console.log(`The count is ${store.getState()}`);
}
store.subscribe(printCountStatus);

store.dispatch(decrement()); // store.getState() === -1
store.dispatch(increment()); // store.getState() === 0
store.dispatch(increment()); // store.getState() === 1

// Connect the Redux Store to a UI
 
import React from "react";
import { increment, decrement } from "./store";

function App({ state, dispatch}) {
  // Dispatch increment action
  const incrementerClicked = () => {
    dispatch(increment());
  }
  // Dispatch decrement action
  const decrementerClicked = () => {
    dispatch(decrement());
  }

  return(
    <main>
      <p id='counter'>{state}</p>
      <button id='incrementer' onClick={incrementerClicked}>+</button>
      <button id='decrementer' onClick={decrementerClicked}>-</button>
    </main>
  )
}

export default App;

// slices

const initialState = {
  allRecipes: [],
  favoriteRecipes: [],
  searchTerm: ""
}