import axios from 'axios';

import {
  SUBMIT_LOGIN,
  connectUser,
  SUBMIT_REGISTRATION,
  setErrorMessage,
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
          if (response.status === 200) {
            window.localStorage.setItem("token", response.data.token);
            store.dispatch(connectUser(response.data.id, response.data.nickname));
            window.location = "/inscription"
          }
        })
        .catch((error) => {
          console.log(error.response);
        });
      next(action);
      break;
    }
    case SUBMIT_REGISTRATION: {
      axios.post('http://localhost:3000/inscription', {
        email: state.auth.email,
        password: state.auth.password,
        nickname: state.auth.nickname
      })
        .then((response) => {
          console.log(response);

        })
        .catch((error) => {
          console.log(error.response.data.message);
          store.dispatch(setErrorMessage(error.response.data.message));
        });
      next(action);
      break;
    }

    default:
      next(action);
  }
};

export default authMiddleware;
