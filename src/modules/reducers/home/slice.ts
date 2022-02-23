import { combineReducers } from "redux";
import dj from "./dj";
import newest from "./newest";

export default combineReducers({
  dj,
  newest,
});

export * from "./dj";
export * from "./newest";
