import { combineReducers } from "redux";
import recommend from "./recommend";
import dj from "./dj";
import artist from "./artist";
import toplist from "./toplist";
import playlist from "./playlist";
import newest from "./newest";

export default combineReducers({
  recommend,
  dj,
  artist,
  toplist,
  playlist,
  newest,
});

export * from "./recommend";
export * from "./dj";
export * from "./artist";
export * from "./toplist";
export * from "./playlist";
export * from "./newest";
