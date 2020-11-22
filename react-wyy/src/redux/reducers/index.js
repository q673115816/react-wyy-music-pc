import { combineReducers } from "redux";
import common from "./common";
import play from "./play";
import home from './home'

export default combineReducers({ common, play, home });
