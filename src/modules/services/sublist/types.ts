import { Artist, MV, ResWithCode } from "../types";

interface Sublist<T> extends ResWithCode {
  count: number;
  hasMore: boolean;
  data: T[];
}

export interface MVs extends Sublist<MV> {}

export interface Albums extends Sublist<Artist> {
  paidCount: number;
}

export interface Artists extends Sublist<Artist> {}

export interface Topics extends Sublist<any> {}

export interface DJs extends ResWithCode {
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
