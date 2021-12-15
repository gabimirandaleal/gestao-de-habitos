import { SIGN_IN, LOG_OUT, EDIT_USER } from "./actionType";

export const signIn = (token) => ({
  type: SIGN_IN,
  token,
});

export const logOut = () => ({
  type: LOG_OUT,
});

export const editUser = (data) => ({
  type: EDIT_USER,
  data,
});
