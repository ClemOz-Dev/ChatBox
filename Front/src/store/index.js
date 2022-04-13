import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import logMiddleware from 'src/middlewares/logMiddleware';
import authMiddleware from 'src/middlewares/authMiddleware';
import socketMiddleware from 'src/middlewares/socketMiddleware';

import reducer from 'src/reducers/chatReducer';

const enhancer = composeWithDevTools(
  applyMiddleware(
    logMiddleware,
    authMiddleware,
    socketMiddleware,
  ),
);

const store = createStore(  
  reducer,  
  enhancer,
);

export default store;
