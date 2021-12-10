import { combineReducers } from "redux";
import user from "./user/reducer";
import habits from "./habits/reducer";

export default combineReducers({
  user,
  habits,
});
