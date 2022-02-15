import { ResWithCode } from "../types";

export interface Sublists extends ResWithCode {
  count: number;
  hasMore: boolean;
  time: number;
  djRadios: djRadio[];
}

export interface djRadio {
  id: number;
  picUrl: string;
  name: string;
  programCount: number;
  dj: {
    userId: number;
    nickname: string;
  };
}
