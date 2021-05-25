export const CONNECT_USER = 'CONNECT_USER';
export const SUBMIT_LOGIN = 'SUBMIT_LOGIN';
export const UPDATE_FIELD = 'UPDATE_FIELD';

export const connectUser = (id, nickname) => ({
  type: CONNECT_USER,
  id: id,
  nickname: nickname,
});

export const submitLogin = () => ({
  type: SUBMIT_LOGIN,
});

export const updateField = (identifier, newValue) => ({
  type: UPDATE_FIELD,
  identifier: identifier,
  newValue: newValue,
});
