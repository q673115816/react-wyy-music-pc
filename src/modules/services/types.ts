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
  imgurl: string;
}
