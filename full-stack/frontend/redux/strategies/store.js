import { createStore } from "redux";
import allRecipesData from "./data.js";

export const initialState = {
  allRecipes: [],
  favoriteRecipes: [],
  searchTerm: "",
};

export const setSearchTerm = (term) => {
  return {
    type: "searchTerm/setSearchTerm",
    payload: term,
  };
};

export const clearSearchTerm = () => {
  return {
    type: "searchTerm/clearSearchTerm",
  };
};

export const loadData = () => {
  return {
    type: "allRecipes/loadData",
    payload: allRecipesData,
  };
};

export const addRecipe = (recipe) => {
  return {
    type: "favoriteRecipes/addRecipe",
    payload: recipe,
  };
};

export const removeRecipe = (recipe) => {
  return {
    type: "favoriteRecipes/removeRecipe",
    payload: recipe,
  };
};

/* Complete this reducer */
const recipesReducer = (state = initialState, action) => {
  switch (action.type) {
    case "allRecipes/loadData":
      return {
        ...state,
        allRecipes: action.payload,
      };
    case "searchTerm/clearSearchTerm":
      return {
        ...state,
        searchTerm: "",
      };

    case "searchTerm/setSearchTerm":
      return state; // fix me!

    case "favoriteRecipes/addRecipe":
      return state; // fix me!

    case "favoriteRecipes/removeRecipe":
      return state; // fix me!

    default:
      return state;
  }
};

export const store = createStore(recipesReducer);
