import { combineReducers } from 'redux';

import authReducer from './authReducer';
import errorModalReducer from './errorModalReducer';
import getSongsReducers from './getSongsReducers';

export default combineReducers({
  auth: authReducer,
  errorModal: errorModalReducer,
  getSong: getSongsReducers
});
