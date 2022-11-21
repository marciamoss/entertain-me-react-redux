import { CLOSE_ERROR_MODAL } from '../actions/types';

const INTIAL_STATE = {
  close: false
};

const errorModalReducer = (state = INTIAL_STATE, action) => {
  switch (action.type) {
    case CLOSE_ERROR_MODAL:
      return { ...state, close: action.payload.close};
    default:
      return state;
  }
};
export default errorModalReducer;