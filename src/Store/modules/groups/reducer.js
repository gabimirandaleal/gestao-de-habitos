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
      return [...group, data]
    case ADD_GOALS:
      return data
    case ADD_ACTIVITY:
      return data
    case EDIT_GROUPS:
      return data
    case EDIT_ACTIVITY:
        return data
    case EDIT_GOAL:
      return data
    case SUBSCRIBE_GROUP:
      group[group.indexOf(group.find((item)=> item.id === groupId))].users_on_group = [...group[group.indexOf(group.find((item)=> item.id === groupId))].users_on_group, response.user]
      return [...group];
    case UNSUBSCRIBE_GROUP:
      group[group.indexOf(group.find((item)=> item.id === groupId))].users_on_group = [...group[group.indexOf(group.find((item)=> item.id === groupId))].users_on_group.filter((item) => item.id !== userID)]
      return [...group];
    case SHOW_MORE:
        return [...groups.concat(group)]
    case LIST_MY_GROUP:
      return [...group]
    default:
      return state;
  }
};

export default groupReducer;