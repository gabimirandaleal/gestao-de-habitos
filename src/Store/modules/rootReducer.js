import { combineReducers } from "redux";

import user from "./user/reducer";
import habits from "./habits/reducer";
import group from "./groups/reducer";

export default combineReducers({
  user,
  habits,
  group,
});
