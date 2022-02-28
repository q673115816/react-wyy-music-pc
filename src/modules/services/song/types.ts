import { ResWithCode } from "../types";

export interface Songs extends ResWithCode {
  data: {
    br: number;
    canExtend: boolean;
    code: number;
    encodeType: string;
    expi: number;
    fee: number;
    flag: number;
    freeTimeTrialPrivilege: {};
    freeTrialInfo: null | any;
    freeTrialPrivilege: {};
    gain: number;
    id: number;
    level: string;
    md5: string;
    payed: number;
    size: number;
    type: string;
    uf: null | any;
    url: string;
    urlSource: number;
  }[];
}
export interface Lyrics extends ResWithCode {
  klyric: { lyric: string; version: number };
  lrc: {
    lyric: string;
    version: number;
  };
  qfy: boolean;
  sfy: boolean;
  sgc: boolean;
  tlyric: { lyric: string; version: number };
}
