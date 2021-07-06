import axios from 'axios';

import {
  LOAD_MEMBERS,
  saveMembers,
  SUBMIT_FILTER,
}
  from 'src/actions/user';

import { setErrorMessage } from 'src/actions/auth';

const userMiddleware = (store) => (next) => (action) => {
  const state = store.getState();
  switch (action.type) {
    case LOAD_MEMBERS: {
      axios.get('http://localhost:3000/users')
        .then((response) => {
          // console.log("membres :", response.data);
          store.dispatch(saveMembers(response.data));
        })
        .catch((error) => {
          console.log(error.response);
          store.dispatch(setErrorMessage(error.response.data.message));
        });
      next(action);
      break;
    }
    case SUBMIT_FILTER: {
      axios.post('http://localhost:3000/users', {
        keyword: state.user.inputValue,
      })
        .then((response) => {
          console.log('membres :', response.data);
          store.dispatch(saveMembers(response.data));
        })
        .catch((error) => {
          console.log(error.response);
          store.dispatch(setErrorMessage(error.response.data.message));
        });
      next(action);
      break;
    }

    default:
      next(action);
  }
};

// Export Middleware.
export default userMiddleware;
