import { FETCH_NEWS, AUTH_CHANGE, CLOSE_ERROR_MODAL, BACK_TO_LANDING, NEWS_LANDING } from '../actions/types';

const INTIAL_STATE = {
  newsList: [],
  section: ''
};

const getNewsReducers = (state = INTIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_NEWS:
      return { ...state, newsList: action.payload.newsList, section: action.payload.section};
    case CLOSE_ERROR_MODAL:
      return INTIAL_STATE;
    case AUTH_CHANGE:
      return INTIAL_STATE;
    case BACK_TO_LANDING:
      return INTIAL_STATE;
    case NEWS_LANDING:
      return INTIAL_STATE;
    default:
      return state;
  }
};

export default getNewsReducers;