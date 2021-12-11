import  { LIST_GROUPS, ADD_GROUPS, ADD_GOALS, ADD_ACTIVITY }  from "./actionType";

const groupReducer = (state = [], action) => {
  const {data} = action
  switch (action.type) {
    case LIST_GROUPS:
      const {group} = action
      return group
    case ADD_GROUPS:
      return data
    case ADD_GOALS:
      return data
    case ADD_ACTIVITY:
      console.log(data)
      return data
    default:
      return state;
  }
};

export default groupReducer;