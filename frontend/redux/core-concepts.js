// state

const state = [ 'Take Five', 'Clair de Lune', 'Respect' ];

// actions

const state = [ 'Take Five', 'Claire de Lune', 'Respect' ];

const addNewSong = {
  type: 'songs/addSong',
  payload: 'Halo'
}

const removeSong = {
  type: 'songs/removeSong',
  payload: 'Take Five'
}

const removeAll = {
  type: 'songs/removeAll'
}

// reducers

// Define reducer here
const reducer = (state = initialState, action) => {
    switch (action.type) {
      case 'songs/addSong': {
        return [...state, action.payload]
      }
      case 'songs/removeSong': {
        return state.filter(song => song !== action.payload);
      }
      default: {
        return state;
      }
    }
  }
  
  
  const initialState = [ 'Take Five', 'Claire de Lune', 'Respect' ];
  
  const addNewSong = {
    type: 'songs/addSong',
    payload: 'Halo'
  };
  
  const removeSong = {
    type: 'songs/removeSong',
    payload: 'Take Five'
  };
  
  const removeAll = {
    type: 'songs/removeAll'
  }

  // rules of reducers 1

  // Reducer violates rule 1: 
// They should only calculate the new state value based on the state and action arguments.
 
const globalSong = 'We are the World';

export const playlistReducer = (state = [], action) => {
 switch (action.type) {
   case 'songs/addGlobalSong': {
     return [...state, action.payload];
   }
   default:
     return state;
 }
}
 
// Example call to reducer
const state = [ 'Take Five', 'Claire de Lune', 'Respect' ];
const addAction = { type: 'songs/addGlobalSong', payload: 'We are the World' };
const newState = playlistReducer(state, addAction);

// rules of reducers 2

// Reducer violates rule 2: 
// They are not allowed to modify the existing state. 
// Instead, they must copy the existing state and make changes to the copied values.

export const todoReducer = (state = [], action) => {
    switch (action.type) {
      case 'todos/addTodo': {
        return [...state, action.payload];
      }
      case 'todos/removeAll': {
        return [];
      }
      default: {
        return state;
      }
    }
   }
   
   // Example call to reducer
   const state = [ 'Print trail map', 'Pack snacks', 'Summit the mountain' ];
   const addTodoAction = { type: 'todos/addTodo', payload: 'Descend' };
   const newState = todoReducer(state, addTodoAction);

   // rules of reducers 3

    // Reducer violates rule 3:
 // They must not do any asynchronous logic or have other “side effects”.

const initialState = [0, 1, 2];

export const reducer = (state = initialState, action) => {
 switch (action.type) {
   case 'numbers/addRandom': {
     return [...state, action.payload];
   }
   default: {
     return state;
   }
 }
}
 
// Example call to reducer
const randomAction = { type: 'numbers/addRandom', payload: Math.random() };
const newState = reducer(undefined, randomAction);

// inmutable updates

import React from 'react';

//Modify mutable function
export const removeItemAtIndex = (list, index) => {
  return [
    ...list.slice(0, index),
    ...list.slice(index + 1, list.length)
  ];
};

//Modify impure function
export const generateUniqueId = (timestamp, random) => {
  return timestamp + random;
};

const App = () => {
  //Make your function calls here
  const result = removeItemAtIndex(['a', 'b', 'c', 'd'], 1);

  const timestamp = Date.now();
  const random = Math.floor(Math.random() * 1000);
  const uniqueId = generateUniqueId(timestamp, random);
  
  //Don't touch the content below this!
  return (
    <div>
      <h1>Remove Item at Index</h1>
      <p>Output: {result.join(', ')}</p>
      <h1>Unique ID:</h1>
      <p>Output: {uniqueId}</p>
    </div>
  );
};

export default App;