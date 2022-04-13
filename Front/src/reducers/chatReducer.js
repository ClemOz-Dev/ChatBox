import {
  UPDATE_INPUT_MESSAGE,
  ADD_MESSAGE,
  TOGGLE_SETTINGS_OPEN,
  UPDATE_SETTINGS_FIELD,
  CONNECT_USER,
} from 'src/actions/chat';

const initialState = {  
  messages: [],  
  inputMessage: '',  
  nickname: null,
  settingsOpen: true,
  email: '',
  password: '',
};

function chatReducer(state = initialState, action) {
  switch (action.type) {
    case UPDATE_INPUT_MESSAGE:      
      return {        
        ...state,        
        inputMessage: action.value,
      };

    
    
    case ADD_MESSAGE: {
      const updatedMessages = [...state.messages, action.newMessage];
      return {
        ...state,
        messages: updatedMessages,  
        inputMessage: '',
      };
    }

    case TOGGLE_SETTINGS_OPEN:
      return {
        ...state,        
        settingsOpen: !state.settingsOpen,
      };

    case UPDATE_SETTINGS_FIELD:
      if (action.identifier === 'email') {
        return {
          ...state,
          email: action.value,
        };
      }
      return {
        ...state,
        password: action.value,
      };

    case CONNECT_USER:
      return {
        ...state,
        nickname: action.nickname,
        settingsOpen: false,
      };

    default:
      return state;
  }
}

export default chatReducer;
