import axios from 'axios';

import {
  SUBMIT_LOGIN,
  connectUser,
}
  from 'src/actions/auth';

const authMiddleware = (store) => (next) => (action) => {
  const state = store.getState();
  
  switch (action.type) {
    case SUBMIT_LOGIN: {
      axios.post('http://localhost:3000/login', {
        email: state.auth.email,
        password: state.auth.password,
      })
        .then((response) => {
          // console.log(response.data.id);
          window.localStorage.setItem("token", response.data.token);
          store.dispatch(connectUser(response.data.id, response.data.nickname));
        })
        .catch((error) => {         
          console.log(error.response);
        });
      next(action);
      break;
    }

    default:
      next(action);
  }
};

export default authMiddleware;
