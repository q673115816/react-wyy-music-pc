import {
  Banner,
  DJProgram,
  MV,
  ResWithCode,
  Newsong,
  Privatecontent,
  Song,
} from "../types";

export interface Resources extends ResWithCode {
  featureFirst: boolean;
  haveRcmdSongs: boolean;
  recommend: Resource[];
}

export interface Resource {
  id: number;
  copywriter: string;
  creator: {
    mutual: boolean;
  };
  picUrl: string;
  name: string;
  playcount: number;
  trackCount: number;
  type: number;
  userId: number;
}

export interface Banners extends ResWithCode {
  banners: Banner[];
}

export interface Privatecontents extends ResWithCode {
  name: string;
  result: Privatecontent[];
}

export interface Newsongs extends ResWithCode {
  category: number;
  result: Newsong[];
}

export interface MVs extends ResWithCode {
  category: number;
  result: MV[];
}

export interface DJPrograms extends ResWithCode {
  category: number;
  result: DJProgram[];
}

export interface Tags extends ResWithCode {
  tags: Tag[];
}

export interface Tag {
  category: number;
  hot: boolean;
  id: number;
  name: string;
  type: number;
}

export interface Highqualitys extends ResWithCode {
  lasttime: number;
  more: boolean;
  playlists: Highquality[];
  total: number;
}

export interface Highquality {
  id: number;
  userId: number;
  name: string;
  copywriter: string;
  coverImgUrl: string;
  playCount: number;
  tag: string;
  tags: string[];
  creator: {
    nickname: string;
    avatarDetail: {
      identityIconUrl: string;
    };
  };
}

export interface Playlists extends ResWithCode {
  cat: string;
  more: boolean;
  playlists: Playlist[];
  total: number;
}

export interface Playlist {
  id: number;
  userId: number;
  playCount: number;
  name: string;
  coverImgUrl: string;
  creator: {};
  privacy: number;
}

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
