import { ResWithCode } from "../types";

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
