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

export interface Bindings extends ResWithCode {
  bindings: Binding[];
}

export interface Binding {
  bindingTime: number;
  expired: boolean;
  expiresIn: number;
  id: number;
  refreshTime: number;
  tokenJsonStr: string;
  type: number;
  url: string;
  userId: number;
}

export interface Followeds extends ResWithCode {}

export interface Details extends ResWithCode {
  adValid: boolean;
  bindings: [];
  createDays: number;
  createTime: number;
  level: number;
  listenSongs: number;
  mobileSign: boolean;
  pcSign: boolean;
  peopleCanSeeMyPlayRecord: boolean;
  profile: {};
  profileVillageInfo: {};
  userPoint: {};
}

export interface ReqUpdate {
  gender: number;
  birthday: number;
  nickname: string;
  province: number;
  city: number;
  signature: string;
}
