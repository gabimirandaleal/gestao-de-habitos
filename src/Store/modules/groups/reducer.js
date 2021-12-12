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
  const {response} = action
  switch (action.type) {
    case LIST_GROUPS:
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
      return data
    case SUBSCRIBE_GROUP:
      console.log(group, state)
      return [...state.results];
    case UNSUBSCRIBE_GROUP:
      state.results[state.results.indexOf(state.results.find((item) => item.id === group.id))] = group
      return [...(state.results)];
    default:
      return state;
  }
};

export default groupReducer;