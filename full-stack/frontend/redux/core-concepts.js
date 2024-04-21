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