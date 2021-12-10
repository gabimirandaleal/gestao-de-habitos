import { ADD_HABITS, ATT_HABITS, DEL_HABITS } from "./actionType";

import api from "../../../Services/api";

const token = localStorage.getItem("@GestaoHabitos:token") || "";

const habits = api
  .get(`habits/personal/`, { headers: { Authorization: `Bearer ${token}` } })
  .then((response) => response.data);

const defaultState = habits;

const habitsReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ADD_HABITS:
      const { token } = action;
      return { ...state, token };
    case ATT_HABITS:
      return { ...state, token: "" };
    case DEL_HABITS:
      return { ...state, token: "" };
    default:
      return state;
  }
};

export default habitsReducer;
