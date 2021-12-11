import { combineReducers } from "redux";

import user from "./user/reducer";
import habits from "./habits/reducer";
import groupReducer from "./groups/reducer"
export default combineReducers({
  user,
  habits,
   groupReducer
});

