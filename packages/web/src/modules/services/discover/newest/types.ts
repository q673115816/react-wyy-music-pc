import { ResWithCode, Song } from "@/modules/services/types";

export interface Songs extends ResWithCode {
  data: TopSong[];
}

interface TopSong extends Song {
  name: string;
  mvid: number;
  duration: number;
  album: {
    id: number;
    name: string;
    blurPicUrl: string;
  };
  artists: {
    id: number;
    name: string;
  }[];
}
