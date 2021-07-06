import {
  SAVE_MEMBERS,
  SET_INPUT_VALUE,
} from 'src/actions/user';

const initialState = {
  members: [],
  inputValue: '',
  filteredMembers: [],
  messageInputValue: '',
};

function userReducer(state = initialState, action) {
  switch (action.type) {
    case SAVE_MEMBERS:
      return {
        ...state,
        members: [...action.members],
      };
    case SET_INPUT_VALUE:
      return {
        ...state,
        inputValue: action.value,
      };
    default:
      return state;
  }
}

export default userReducer;
