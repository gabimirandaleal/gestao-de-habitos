import { 
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
} from "./actionType";

export const GroupsList = (group) => ({
  type: LIST_GROUPS,
  group,
});

export const addGroupsList = (data) => ({
  type: ADD_GROUPS,
  data,
});


export const addGoalList = (data) => ({
  type: ADD_GOALS,
  data,
});
export const addActivityList = (data) => ({
  type: ADD_ACTIVITY,
  data,
});

export const editGroupsList = (data) => ({
  type: EDIT_GROUPS,
  data,
});

export const editActivityList = (data) => ({
  type: EDIT_ACTIVITY,
  data,
});

export const editGoalList = (data) => ({
  type: EDIT_GOAL,
  data,
});

export const subscribeGroup = (group, groupId, userID, response) => ({
  type: SUBSCRIBE_GROUP,
  group, 
  groupId,
  userID,
  response
});

export const unsubscribeGroup = (group, groupId, userID) => ({
  type: UNSUBSCRIBE_GROUP,
  group,
  groupId,
  userID
});

export const showMore = (group, groups) => ({
  type: SHOW_MORE,
  group,
  groups
});

export const listGroup = (group, groups) => ({
  type: LIST_MY_GROUP,
  group,
});