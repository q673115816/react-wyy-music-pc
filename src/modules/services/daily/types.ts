import { resWithCode } from "../types";

export interface Daily extends resWithCode {
  data: {
    dailySongs: DailySong[];
    orderSongs: [];
    recommendReasons: [];
  };
}

export interface DailySong {
  name: string;
  alia: string[];
  id: number;
  dt: number;
  al: {
    id: number;
    name: string;
    pic: number;
    picUrl: string;
  };
  ar: { id: number; name: string }[];
}
