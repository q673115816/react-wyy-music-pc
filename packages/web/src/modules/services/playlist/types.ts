import { ResWithCode } from "../types";

export interface Details extends ResWithCode {
  playlist: {
    id: number;
    updateTime: number;
    coverImgUrl: string;
    tracks: Track[];
  };
  privileges: [];
}

export interface Comments extends ResWithCode {
  hotComments: [];
  comments: [];
  total: number;
}

export interface Track {
  id: number;
  name: string;
  alia: [];
  ar: { id: number; name: string; alias: []; tns: [] }[];
}
