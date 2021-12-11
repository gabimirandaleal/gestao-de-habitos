import  { LIST_GROUPS, ADD_GROUP, RM_GROUP, SEARCH_GROUP}  from "./actionType";

const groupReducer = (state = [], action) => {
  switch (action.type) {
      case LIST_GROUPS:
        const {group} = action
        return group;
      case SEARCH_GROUP:
        return group.action
      case ADD_GROUP:
        const {newGroup} = action
        return [...state, newGroup]
      case RM_GROUP:
        return state
    default:
      return state;
  }
};

export default groupReducer;