import { Privatecontents } from "@/modules/services/discover";

export interface ResWithCode {
  code: number;
}

export interface PlayList {
  name: string;
  alia: string[];
  id: number;
  dt: number;
  al: {
    id: number;
    name: string;
    pic: number;
    picUrl: string;
  };
  ar: { id: number; name: string }[];
}

export interface Song {
  name: string;
  id: number;
  alia: string[];
  dt: number;
}

export interface MV {
  id: number;
  name: string;
  duration: number;
  playCount: number;
  copywriter: string;
  artists: { id: number; name: string }[];
  imgurl?: string;
  picUrl?: string;
}

export interface Banner {
  url: string;
  titleColor: string;
  typeTitle: string;
  imageUrl: string;
}

export interface DJProgram {
  akg: string;
  canDislike: boolean;
  id: number;
  picUrl: string;
  type: number;
  name: string;
  program: {
    radio: {
      id: number;
      name: string;
      picUrl: string;
      rcmdText: string;
    };
  };
}

export interface Newsong {
  id: number;
  type: number;
  name: string;
  picUrl: string;
  song: {
    mvid: number;
    privilege: {
      maxbr: number;
    };
    artists: { id: number; name: string }[];
  };
}

export interface Privatecontent {
  id: number;
  url: string;
  name: string;
  sPicUrl: string;
}

export interface Artist {
  accountId: number;
  id: number;
  name: string;
  picUrl: string;
}

export interface Album {
  id: number;
  size: number;
  picUrl: string;
  picId: number;
  name: string;
  alias: string[];
  transNames: string[];
  artists: Artist[];
}
