import { FETCH_SONGS, SET_SONG } from '../actions/types';

const INTIAL_STATE = {
  songsList: [],
  song: ''
};

const getSongsReducers = (state = INTIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_SONGS:
      return { ...state, songsList: action.payload.songsList, song: action.payload.song};
    case SET_SONG:
      return { ...state, songsList: action.payload.songsList, song: action.payload.song};
    default:
      return state;
  }
};

export default getSongsReducers;