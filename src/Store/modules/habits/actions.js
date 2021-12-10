import {
  ADD_HABITS,
  ATT_HABITS,
  DEL_HABITS,
  UPDATE_HABITS,
} from "./actionType";

export const addHabit = (data) => ({
  type: ADD_HABITS,
  data,
});

export const attHabit = (data) => ({
  type: ATT_HABITS,
  data,
});

export const delHabit = (data) => ({
  type: DEL_HABITS,
  data,
});

export const updateHabits = (newData) => ({
  type: UPDATE_HABITS,
  newData,
});
