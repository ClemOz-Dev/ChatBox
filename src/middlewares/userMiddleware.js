import axios from 'axios';

import {
  /* SUBMIT_LOGIN, */
  connectUser,
}
  from 'src/actions/user';

const userMiddleware = (store) => (next) => (action) => {
 /*  const state = store.getState(); */  
  switch (action.type) {
     
    default:
      next(action);
  }
};

// Export Middleware.
export default userMiddleware;
