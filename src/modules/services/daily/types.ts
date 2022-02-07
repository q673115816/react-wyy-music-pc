import { ResWithCode, PlayList } from "../types";

export interface Daily extends ResWithCode {
  data: {
    dailySongs: DailySong[];
    orderSongs: [];
    recommendReasons: [];
  };
}

export interface DailySong extends PlayList {}
