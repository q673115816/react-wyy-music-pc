import { combineReducers } from "redux";
import common from "./common";
import play from "./play";
import home from './home'
import toplistartist from './toplistartist'

export default combineReducers({ common, play, home, toplistartist });
