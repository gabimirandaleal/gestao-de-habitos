import { ADD_HABITS, ATT_HABITS, DEL_HABITS } from "./actionType";

export const addHabit= (token) => ({
  type: ADD_HABITS,
  token,
});

export const attHabit = () => ({
  type: ATT_HABITS,
});

export const delHabit = () => ({
  type: DEL_HABITS,
});
