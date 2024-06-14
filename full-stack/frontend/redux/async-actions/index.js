import { createStore, applyMiddleware } from "redux";

const messageReducer = (state = "", action) => {
  if (action.type === "NEW_MESSAGE") {
    return action.payload;
  } else {
    return state;
  }
};

const logger = (storeAPI) => (next) => (action) => {
  console.log(storeAPI.getState());
  const nextState = next(action);
  console.log(nextState);
  return nextState; // pass the action on to the next middleware in the pipeline
};

const store = createStore(messageReducer, "", applyMiddleware(logger));

store.dispatch({
  type: "NEW_MESSAGE",
  payload: "I WROTE A MIDDLEWARE",
});
