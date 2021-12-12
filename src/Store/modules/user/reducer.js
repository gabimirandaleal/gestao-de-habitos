import { SIGN_IN, LOG_OUT, EDIT_USER } from "./actionType";

const token = localStorage.getItem("@GestaoHabitos:token") || "";

const defaultState = {
  token,
};

const userReducer = (state = defaultState, action) => {
  switch (action.type) {
    case SIGN_IN:
      const { token } = action;
      return { ...state, token };
    case LOG_OUT:
      return { ...state, token: "" };
    case EDIT_USER:
      const {data} = action
      return { ...state, data };
    default:
      return state;
  }
};

export default userReducer;


