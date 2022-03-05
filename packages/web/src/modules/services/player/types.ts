import { ResWithCode } from "../types";

export interface ResRelated extends ResWithCode {
  data: RelatedList;
}

export type RelatedList = Related[];

export interface Related {
  alg: "fresh";
  coverUrl: string;
  creator: [{ userId: number; userName: string }];
  durationms: number;
  playTime: number;
  title: string;
  type: number;
  vid: string;
}
