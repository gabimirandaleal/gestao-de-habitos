import  { LIST_GROUPS }  from "./actionType";

const groupReducer = (state = [], action) => {
  switch (action.type) {
      case LIST_GROUPS:
        const {group} = action
        return group
        
    default:
      return state;
  }
};

export default groupReducer;