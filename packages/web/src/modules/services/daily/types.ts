import { ResWithCode, PlayList } from "../types";

export interface Daily extends ResWithCode {
  data: {
    dailySongs: PlayList[];
    orderSongs: [];
    recommendReasons: [];
  };
}
