import { Groups } from "@mui/icons-material";
import  { 
  LIST_GROUPS, 
  ADD_GROUPS, 
  ADD_GOALS, 
  ADD_ACTIVITY, 
  EDIT_GROUPS, 
  EDIT_ACTIVITY, 
  EDIT_GOAL, 
  SUBSCRIBE_GROUP,
  UNSUBSCRIBE_GROUP,
  SHOW_MORE,
  LIST_MY_GROUP
}  from "./actionType";

const defaultState = [];

const groupReducer = (state = defaultState, action) => {
  const {data} = action
  const {group} = action
  const {groupId} = action
  const {userID} = action
  const {response} = action
  const {groups} = action
  switch (action.type) {
    case LIST_GROUPS:
      return [...group]
    case ADD_GROUPS:
      return [data, ...state]
    case ADD_GOALS:
      state[state.indexOf(state.find((item)=> item.id === data.group))].goals = [...state[state.indexOf(state.find((item)=> item.id === data.group))].goals, data]
      return [...state]
    case ADD_ACTIVITY:
      state[state.indexOf(state.find((item)=> item.id === data.group))].activities = [...state[state.indexOf(state.find((item)=> item.id === data.group))].activities, data]
      return [...state]
    case EDIT_GROUPS:
      state[state.indexOf(state.find((item)=> item.id === data.id))] = data
      return [...state]
    case EDIT_ACTIVITY:
      state[state.indexOf(state.find((item)=> item.id === data.group))].activities = [data, ...state[state.indexOf(state.find((item)=> item.id === data.group))].activities.filter((item)=> item.id !== data.id)];
      return [...state]
    case EDIT_GOAL:
      state[state.indexOf(state.find((item)=> item.id === data.group))].goals = [data, ...state[state.indexOf(state.find((item)=> item.id === data.group))].goals.filter((item)=> item.id !== data.id)];
      return [...state]
    case SUBSCRIBE_GROUP:
      state[state.indexOf(state.find((item)=> item.id === groupId))].users_on_group = [...state[state.indexOf(state.find((item)=> item.id === groupId))].users_on_group, response.user]
      return [...state];
    case UNSUBSCRIBE_GROUP:
      state[state.indexOf(state.find((item)=> item.id === groupId))].users_on_group = [...state[state.indexOf(state.find((item)=> item.id === groupId))].users_on_group.filter((item) => item.id !== userID)]
      return [...state];
    case SHOW_MORE:
        return [...groups.concat(group)]
    case LIST_MY_GROUP:
      return [...group]
    default:
      return state;
  }
};

export default groupReducer;