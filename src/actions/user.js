export const LOAD_MEMBERS = 'LOAD_MEMBERS';
export const SAVE_MEMBERS = 'SAVE_MEMBERS';
export const SET_INPUT_VALUE = 'SET_INPUT_VALUE';
export const SUBMIT_FILTER = 'SUBMIT_FILTER';

export const loadMembers = () => ({
  type: LOAD_MEMBERS,
});

export const saveMembers = (members) => ({
  type: SAVE_MEMBERS,
  members: members,
});

export const setInputValue = (value) => ({
  type: SET_INPUT_VALUE,
  value: value,
});

export const submitFilter = () => ({
  type: SUBMIT_FILTER,
});
