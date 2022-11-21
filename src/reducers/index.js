import { combineReducers } from 'redux';

import authReducer from './authReducer';
import errorModalReducer from './errorModalReducer';

export default combineReducers({
  auth: authReducer,
  errorModal: errorModalReducer
});
