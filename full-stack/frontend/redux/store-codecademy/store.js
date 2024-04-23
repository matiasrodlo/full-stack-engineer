// Import createStore and combineReducers here.
import {createStore, combineReducers } from "redux";

// Import the slice reducers here.
import {inventoryReducer} from "../features/inventory/inventorySlice.js"
import {carReducer} from "../features/cart/carSlices.js"
import { currencyFilterReducer } from "../features/currencyFilter/currencySlice.js"


// Create and export the store here.
const reducers = {
    inventory: inventoryReducer,
    cart: carReducer,
    currencyFilter: currencyFilterReducer
}

const rootReducer = combineReducers(reducers);
export const store = createStore(rootReducer)