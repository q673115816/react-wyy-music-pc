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

export interface Artists extends ResWithCode {
  artists: Artist[]
}

interface Artist {
  accountId: number;
  id: number;
  name: string;
  picUrl: string;
}
