import { Artist, MV, ResWithCode, Song } from "../types";
export interface Req {
  id: string;
}
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
  artists: Artist[];
}

export interface Albums extends ResWithCode {
  more: boolean;
  hotAlbums: HotAlbums;
}

export type HotAlbums = HotAlbum[];

interface HotAlbum {
  id: number;
  alias: string[];
  picUrl: string;
  name: string;
  publishTime: number;
  size: number;
}

export interface TopSongs extends ResWithCode {
  more: boolean;
  songs: Song[];
}

export interface Desc extends ResWithCode {
  briefDesc: string;
  count: number;
  introduction: { ti: string; txt: string }[];
  topicData: [];
}

export interface ArtistMV extends ResWithCode {
  hasMore: boolean;
  time: number;
  mvs: MVs;
}

type MVs = MV[];
