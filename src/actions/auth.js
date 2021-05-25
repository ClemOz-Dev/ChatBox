export const CONNECT_USER = 'CONNECT_USER';
export const SUBMIT_LOGIN = 'SUBMIT_LOGIN';
export const SUBMIT_REGISTRATION = 'SUBMIT_REGISTRATION';
export const UPDATE_FIELD = 'UPDATE_FIELD';
export const SET_ERROR_MESSAGE = 'SET_ERROR_MESSAGE';

export const connectUser = (id, nickname) => ({
  type: CONNECT_USER,
  id: id,
  nickname: nickname,
});

export const setErrorMessage = (message) => ({
  type: SET_ERROR_MESSAGE,
  message: message,
});

export const submitLogin = () => ({
  type: SUBMIT_LOGIN,
});

export const submitRegistration = () => ({
  type: SUBMIT_REGISTRATION,
});

export const updateField = (identifier, newValue) => ({
  type: UPDATE_FIELD,
  identifier: identifier,
  newValue: newValue,
});
