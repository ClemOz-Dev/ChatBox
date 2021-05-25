
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import authMiddleware from 'src/middlewares/authMiddleware';
import userMiddleware from 'src/middlewares/userMiddleware';
import chatMiddleware from 'src/middlewares/chatMiddleware';


import reducer from 'src/reducers';

const enhancers = composeWithDevTools(
  applyMiddleware(
    userMiddleware,
    authMiddleware,
    chatMiddleware,
  ),
);

const store = createStore(
  reducer,
  enhancers,
);

export default store;
