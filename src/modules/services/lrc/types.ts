import { ResWithCode } from "../types";

export interface SimiSongs extends ResWithCode {
  songs: {
    id: number;
    album: {
      picUrl: string;
    };
    artists: {
      name: string;
    }[];
    starred: boolean;
    name: string;
    alias: string[];
  }[];
}
