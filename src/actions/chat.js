export const LOAD_CONVERSATIONS = 'LOAD_CONVERSATIONS';
export const SAVE_CONVERSATIONS = 'SAVE_CONVERSATIONS';
export const LOAD_MESSAGES = 'LOAD_MESSAGES';
export const SAVE_MESSAGES = 'SAVE_MESSAGES';
export const SET_MESSAGE_INPUT_VALUE = 'SET_MESSAGE_INPUT_VALUE';
export const SEND_MESSAGE = 'SEND_MESSAGE';
export const CREATE_CONV = 'CREATE_CONV';
export const SET_CONV = 'SET_CONV';
export const MESSAGE_SENT = 'MESSAGE_SENT';
export const CLEAR_CONV = 'CLEAR_CONV';

export const createConv = (interlocutorId) => ({
  type: CREATE_CONV,
  interlocutorId: interlocutorId,
});

export const loadConversations = () => ({
  type: LOAD_CONVERSATIONS,
});

export const saveConversations = (conversations) => ({
  type: SAVE_CONVERSATIONS,
  conversations: conversations,
});

export const loadMessages = (id) => ({
  type: LOAD_MESSAGES,
  id: id,
});

export const saveMessages = (messages) => ({
  type: SAVE_MESSAGES,
  messages: messages,
});

export const setMessageInputValue = (value) => ({
  type: SET_MESSAGE_INPUT_VALUE,
  value: value,
});

export const sendMessage = () => ({
  type: SEND_MESSAGE,
});

export const setConv = (interlocutorId, convId) => ({
  type: SET_CONV,
  interlocutorId: interlocutorId,
  convId: convId,
});

export const messageSent = (newMessage) => ({
  type: MESSAGE_SENT,
  newMessage: newMessage,
});

export const clearConv = () => ({
  type: CLEAR_CONV,
});
