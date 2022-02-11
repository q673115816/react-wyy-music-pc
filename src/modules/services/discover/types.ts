import {
  Banner,
  DJProgram,
  MV,
  ResWithCode,
  Newsong,
  Privatecontent,
} from "../types";

export interface Resources extends ResWithCode {
  featureFirst: boolean;
  haveRcmdSongs: boolean;
  recommend: Resource[];
}

export interface Resource {
  id: number;
  copywriter: string;
  creator: {
    mutual: boolean;
  };
  picUrl: string;
  name: string;
  playcount: number;
  trackCount: number;
  type: number;
  userId: number;
}

export interface Banners extends ResWithCode {
  banners: Banner[];
}

export interface Privatecontents extends ResWithCode {
  name: string;
  result: Privatecontent[];
}

export interface Newsongs extends ResWithCode {
  category: number;
  result: Newsong[];
}

export interface MVs extends ResWithCode {
  category: number;
  result: MV[];
}

export interface DJPrograms extends ResWithCode {
  category: number;
  result: DJProgram[];
}
