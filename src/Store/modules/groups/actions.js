import { LIST_GROUPS, ADD_GROUP, RM_GROUP, UPDATE_GROUP, SEARCH_GROUP } from "./actionType";

export const GroupsList = (group) => ({
  type: LIST_GROUPS,
  group,
});

export const GroupsAdd = (newGroup) => ({
  type: ADD_GROUP,
  newGroup,
});

export const GroupsRm = (group) => ({
  type: RM_GROUP,
  group,
});

export const GroupsUpdate = (group) => ({
  type: UPDATE_GROUP,
  group,
});

export const GroupsSearch = (group) => ({
  type: SEARCH_GROUP,
  group,
})