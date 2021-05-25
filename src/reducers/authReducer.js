import {
  CONNECT_USER,
  UPDATE_FIELD,
} from 'src/actions/auth';

const initialState = {
  id: '',
  nickname: '',
  email: '',
  password: '',
};

function authReducer(state = initialState, action) {
  switch (action.type) {
    case CONNECT_USER:
      // console.log('action', action);
      return {
        ...state,
        password: '',
        nickname: action.nickname,
        id: action.id       
      };

    case UPDATE_FIELD:
      // console.log('action :', action);
      if (action.identifier === 'email') {
        return {
          ...state,
          email: action.newValue,
        };
      }
      if (action.identifier === 'password') {
        return {
          ...state,
          password: action.newValue,
        };
      }

    default:
      return state;
  }
}

export default authReducer;
