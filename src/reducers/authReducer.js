import {
  CONNECT_USER,
  UPDATE_FIELD,
  SET_ERROR_MESSAGE,
} from 'src/actions/auth';

const initialState = {
  id: '',
  nickname: '',
  email: '',
  password: '',
  errorMessage: '',
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

    case SET_ERROR_MESSAGE:
      // console.log('action', action);
      return {
        ...state,
        errorMessage: action.message
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
      if (action.identifier === 'nickname') {
        return {
          ...state,
          nickname: action.newValue,
        };
      }

    default:
      return state;
  }
}

export default authReducer;
