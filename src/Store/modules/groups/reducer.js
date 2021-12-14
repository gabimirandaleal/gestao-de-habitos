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
  LIST_MY_GROUP,
  DELETE_ACTIVITY,
  DELETE_GOAL
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
      state[state.indexOf(state.find((item)=> item.id === data.group))].activities.filter((item) => item.id === data.id)[0].title = data.title
      const activities = state[state.indexOf(state.find((item)=> item.id === data.group))].activities
      state[state.indexOf(state.find((item)=> item.id === data.group))].activities = [...activities]
      return [...state]
    case EDIT_GOAL:
      state[state.indexOf(state.find((item)=> item.id === data.group))].goals.filter((item) => item.id === data.id)[0].title = data.title
      state[state.indexOf(state.find((item)=> item.id === data.group))].goals.filter((item) => item.id === data.id)[0].difficulty = data.difficulty
      state[state.indexOf(state.find((item)=> item.id === data.group))].goals.filter((item) => item.id === data.id)[0].achieved = data.achieved
      state[state.indexOf(state.find((item)=> item.id === data.group))].goals.filter((item) => item.id === data.id)[0].how_much_achieved = data.how_much_achieved
      const goals = state[state.indexOf(state.find((item)=> item.id === data.group))].goals 
      state[state.indexOf(state.find((item)=> item.id === data.group))].goals = [...goals]
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
    case DELETE_ACTIVITY:
      const activitiesFilters = (state[state.indexOf(state.find((item)=> item.id === data.group))].activities).filter((item) => item.id !== data.id)
      state[state.indexOf(state.find((item)=> item.id === data.group))].activities = [...activitiesFilters]
      return [...state]
    case DELETE_GOAL:
        const goalsFilters = (state[state.indexOf(state.find((item)=> item.id === data.group))].goals).filter((item) => item.id !== data.id)
        state[state.indexOf(state.find((item)=> item.id === data.group))].goals = [...goalsFilters]
        return [...state]
    default:
      return state;
  }
};

export default groupReducer;