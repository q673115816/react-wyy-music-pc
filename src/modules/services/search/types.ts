import { ResWithCode } from "../types";

export interface Searchs extends ResWithCode {}

export interface SearchHotDetails extends ResWithCode {
  message: string;
  data: SearchHotDetail[];
}

export interface SearchHotDetail {
  alg: string;
  content: string;
  iconType: number;
  iconUrl: null | string;
  score: number;
  searchWord: string;
  source: number;
  url: string;
}

export interface Suggests extends ResWithCode {
  result: Suggest[];
}
export interface Suggest {
  order?: string[];
  albums?: [];
  artists?: [];
  playlists?: [];
  songs?: [];
}

export interface Multimatchs extends ResWithCode {
  result: Multimatch[];
}

export interface Multimatch {
  album?: [];
  artist?: [];
  new_mlog?: [];
  playlist?: [];
  orders?: string[];
}
