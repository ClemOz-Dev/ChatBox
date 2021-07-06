import { combineReducers } from 'redux';

import authReducer from './authReducer';
import userReducer from './userReducer';
import chatReducer from './chatReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  user: userReducer,
  chat: chatReducer,
});

// Export Reducer.
export default rootReducer;
