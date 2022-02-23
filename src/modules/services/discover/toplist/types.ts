import { ResWithCode } from "@/modules/services/types";

export interface Artists extends ResWithCode {
  more: boolean;
  result: Artist[];
}

export interface Artist {
  id: number;
  albumSize: number;
  alias: string[];
  img1v1Url: string;
  name: string;
  musicSize: number;
  fansCount: number;
  followed: boolean;
  accountId?: number;
}

export interface Details extends ResWithCode {
  artistToplist: [];
  list: Detail[];
  rewardToplist: [];
}

export interface Detail {
  id: number;
  name: string;
  coverImgUrl: string;
}
