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

// introduction to thunks

const remindMeTo = (task) => {
  return `Remember to ${task}!!!`;
};

const remindMeLater = (task) => {
  return () => {
    // call remindMeTo
    return remindMeTo(task);
  };
};

console.log(remindMeTo("call mom"));

const reminder = remindMeLater("get groceries");
console.log(reminder());

// createAsyncThunk

import { fetchRecipes } from "../../app/api";
import { createSlice } from "@reduxjs/toolkit";

const loadRecipes = "replace me";

export const allRecipesSlice = createSlice({
  name: "allRecipes",
  initialState: {
    recipes: [],
    isLoading: false,
    hasError: false,
  },
  reducers: {
    addRecipes(state, action) {
      state.recipes = action.payload;
    },
  },
});

export default allRecipesSlice.reducer;

// createAsyncThunk

import { fetchRecipes } from '../../app/api'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';


const loadRecipes = createAsyncThunk('allRecipes/loadRecipes', const data = await fetchRecipes()  // fetch data
const json = await data.json()  // transform to JSON
return json  // return data as JSON);

export const allRecipesSlice = createSlice({
  name: 'allRecipes',
  initialState: {
    recipes: [],
    isLoading: false,
    hasError: false,
  },
  reducers: {
    addRecipes(state, action) {
      state.recipes = action.payload
    }
  },  
});

export default allRecipesSlice.reducer;
