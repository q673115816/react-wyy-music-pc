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
  newest
});
