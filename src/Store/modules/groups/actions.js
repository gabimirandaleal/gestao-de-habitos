import { LIST_GROUPS } from "./actionType";

export const GroupsList = (group) => ({
  type: LIST_GROUPS,
  group,
});