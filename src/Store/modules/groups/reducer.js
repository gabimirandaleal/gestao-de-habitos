import  { 
  LIST_GROUPS, 
  ADD_GROUPS, 
  ADD_GOALS, 
  ADD_ACTIVITY, 
  EDIT_GROUPS, 
  EDIT_ACTIVITY, 
  EDIT_GOAL, 
  SUBSCRIBE_GROUP,
  UNSUBSCRIBE_GROUP
}  from "./actionType";

const groupReducer = (state = [], action) => {
  const {data} = action
  const {group} = action
  switch (action.type) {
    case LIST_GROUPS:
      console.log(state, action)
      return group
    case ADD_GROUPS:
      return data
    case ADD_GOALS:
      return data
    case ADD_ACTIVITY:
      return data
    case EDIT_GROUPS:
      return data
    case EDIT_ACTIVITY:
        return data
    case EDIT_GOAL:
      console.log(data)
      return data
    case SUBSCRIBE_GROUP:
      return group
    case UNSUBSCRIBE_GROUP:
      return group
    default:
      return state;
  }
};

export default groupReducer;