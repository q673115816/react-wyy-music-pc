import { ResWithCode } from "../types";

export interface Detail extends ResWithCode {
  data: {
    artist: {
      cover: string;
      name: string;
      musicSize: number;
      mvSize: number;
    };
    alias?: string[];
    user: {
      userId: number;
    };
  };
}
