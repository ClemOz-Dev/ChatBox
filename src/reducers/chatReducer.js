import {
  // todo
} from 'src/actions/chat';

const initialState = {
  id: null,
  nickname: '',
  pseudo: '',
  email: '',
  password: '',
};

function chatReducer(state = initialState, action) {
  switch (action.type) {

    default:
      return state;
  }
}

export default chatReducer;
