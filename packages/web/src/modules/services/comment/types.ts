import { ResWithCode } from "../types";

export interface req {
  t: 1 | 2;
  type: 0 | 1 | 2 | 3 | 4 | 5 | 6;
  id: number;
  content: string;
  commentId: number;
  threadId: number;
}

export interface ResComment extends ResWithCode {}

export interface ResCommentVideo extends ResComment {}

export interface ResCommentMV extends ResComment {}

export interface Events extends ResWithCode {
  cnum: number;
  commentBanner: null;
  comments: [];
  hotComments: [];
  isMusician: boolean;
  more: boolean;
  moreHot: boolean;
  topComments: [];
  total: number;
  userId: number;
}
