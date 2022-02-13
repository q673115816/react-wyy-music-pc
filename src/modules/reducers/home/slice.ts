import { combineReducers } from "redux";
import dj from "./dj";
import artist from "./artist";
import toplist from "./toplist";
import newest from "./newest";

export default combineReducers({
  dj,
  artist,
  toplist,
  newest,
});

export * from "./dj";
export * from "./artist";
export * from "./toplist";
export * from "./newest";
