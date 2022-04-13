import axios from 'axios';
import { SUBMIT_LOGIN, connectUser } from 'src/actions/chat';

const authMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case SUBMIT_LOGIN: {  
      const state = store.getState();

      axios.post('http://localhost:3001/login', {
        email: state.email,
        password: state.password,
      })
        .then((response) => {         
          const actionConnect = connectUser(response.data.pseudo);
          store.dispatch(actionConnect);
        })
        .catch((error) => {     
          console.log(error);
        });
      next(action);
      break;
    }

    default:
      next(action);
  }
};

export default authMiddleware;
