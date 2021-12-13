import {
  ADD_HABITS,
  ATT_HABITS,
  DEL_HABITS,
  UPDATE_HABITS,
  PLUS_PROGRESS_HABITS,
  SUB_PROGRESS_HABITS,
  EDIT_HABITS
} from "./actionType";

const defaultState = [];

const habitsReducer = (state = defaultState, action) => {
  const {progress} = action
  const { data } = action;
  switch (action.type) {
    case ADD_HABITS:
      return [...state, data];
    case ATT_HABITS:
      return [...state];
    case DEL_HABITS:
      return state.filter((item) => item.id != action.data);
    case UPDATE_HABITS:
      const { newData } = action;
      return newData;
    case PLUS_PROGRESS_HABITS:
      state[state.indexOf(state.find((item) => item.id === progress.id))] = progress
      return [...state];
    case SUB_PROGRESS_HABITS:
      state[state.indexOf(state.find((item) => item.id === progress.id))] = progress
      return [...state];
    case EDIT_HABITS:
        console.log(state, action)
        state[state.indexOf(state.find((item) => item.id === data.id))] = {...data}
        return [...state];
    default:
      return [...state];
  }
};

export default habitsReducer;
