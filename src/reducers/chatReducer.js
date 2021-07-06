import {
  SAVE_CONVERSATIONS,
  SAVE_MESSAGES,
  SET_MESSAGE_INPUT_VALUE,
  SET_CONV,
  MESSAGE_SENT,
  CLEAR_CONV,
} from 'src/actions/chat';

const initialState = {
  conversations: [],
  messages: [],
  currentConv: null,
  currentInterlocutor: null,
  messageInputValue: '',
};

function chatReducer(state = initialState, action) {
  switch (action.type) {
    case SAVE_CONVERSATIONS:
      return {
        ...state,
        conversations: [...action.conversations]
      };
    case SAVE_MESSAGES:
      return {
        ...state,
        messages: [...action.messages]
      };
    case SET_MESSAGE_INPUT_VALUE:
      return {
        ...state,
        messageInputValue: action.value,
      };
    case SET_CONV:
      return {
        ...state,
        currentInterlocutor: action.interlocutorId,
        currentConv: action.convId,
      };
    case MESSAGE_SENT:
      const updatedMessages = [...state.messages, action.newMessage];
      return {
        ...state,
        messageInputValue: '',
        messages: updatedMessages,
      };
    case CLEAR_CONV:
      return {
        ...state,
        messages: [],
        currentInterlocutor: null,
        currentConv: null,
        messageInputValue: '',
      };
    default:
      return state;
  }
}

export default chatReducer;
