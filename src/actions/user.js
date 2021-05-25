export const CONNECT_USER = 'CONNECT_USER';

export const connectUser = (email) => ({
  type: CONNECT_USER,
  email: email,
});
