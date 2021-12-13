import {
  ADD_HABITS,
  ATT_HABITS,
  DEL_HABITS,
  UPDATE_HABITS,
  PLUS_PROGRESS_HABITS,
  SUB_PROGRESS_HABITS,
  EDIT_HABITS
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

export const plusProgressHabits = (progress) => ({
  type: PLUS_PROGRESS_HABITS,
  progress,
});

export const subProgressHabits = (progress) => ({
  type: SUB_PROGRESS_HABITS,
  progress
});

export const editHabits = (data) => ({
  type: EDIT_HABITS,
  data
});
