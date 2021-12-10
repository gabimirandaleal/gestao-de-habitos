import {
  ADD_HABITS,
  ATT_HABITS,
  DEL_HABITS,
  UPDATE_HABITS,
} from "./actionType";

const defaultState = [];

const habitsReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ADD_HABITS:
      const { data } = action;
      return [...state, data];
    case ATT_HABITS:
      return state;
    case DEL_HABITS:
      return state;
    case UPDATE_HABITS:
      const { newData } = action;
      console.log(newData);
      return newData;
    default:
      return state;
  }
};

export default habitsReducer;
