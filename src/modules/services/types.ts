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
