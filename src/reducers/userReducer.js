import {
  // todo
} from 'src/actions/user';

const initialState = {
  id: null,
  nickname: '',
  pseudo: '',
  email: '',
  password: '',
};

function userReducer(state = initialState, action) {
  switch (action.type) {

    default:
      return state;
  }
}

export default userReducer;
