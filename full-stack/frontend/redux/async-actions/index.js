import { createStore, applyMiddleware } from "redux";

const messageReducer = (state = "", action) => {
  if (action.type === "NEW_MESSAGE") {
    return action.payload;
  } else {
    return state;
  }
};

// Paste the logger function here.

const store = createStore(messageReducer, "");
