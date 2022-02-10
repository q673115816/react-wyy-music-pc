import { ResWithCode } from "../types";

export interface Clouds extends ResWithCode {
  count: number;
  hasMore: boolean;
  maxSize: string;
  size: string;
  upgradeSign: number;
  data: Cloud[];
}

interface Cloud {
  addTime: number;
  album: string;
  simpleSong: {
    ar: {
      id: number;
    }[];
    al: {
      id: number;
    };
    tns: [];
  };
  songId: number;
  songName: string;
  fileName: string;
}
