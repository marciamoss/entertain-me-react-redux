import { AUTH_CHANGE } from '../actions/types';

const INTIAL_STATE = {
  userId: null,
  userName: null,
  showError: false
};

const authReducer = (state = INTIAL_STATE, action) => {
  switch (action.type) {
    case AUTH_CHANGE:
      return { ...state, userId: action.payload.userId, userName: action.payload.userName, showError: action.payload.showError};
    default:
      return state;
  }
};
export default authReducer;