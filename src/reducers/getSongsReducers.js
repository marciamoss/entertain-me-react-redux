import { AUTH_CHANGE, FETCH_SONGS, SET_SONG, CLOSE_ERROR_MODAL, BACK_TO_LANDING } from '../actions/types';

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
    case CLOSE_ERROR_MODAL:
      return { ...state, songsList: []};
    case AUTH_CHANGE:
      return INTIAL_STATE;
    case BACK_TO_LANDING:
      return INTIAL_STATE;
    default:
      return state;
  }
};

export default getSongsReducers;