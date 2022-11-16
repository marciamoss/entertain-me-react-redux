import { AUTH_CHANGE } from '../actions/types';

const INTIAL_STATE = {
  userId: null,
  userName: null
};

const authReducer = (state = INTIAL_STATE, action) => {
  switch (action.type) {
    case AUTH_CHANGE:
      return { ...state, userId: action.payload.userId, userName: action.payload.userName};
    default:
      return state;
  }
};
export default authReducer;