import { ResWithCode } from "../types";

export interface reqComment {
  t: 1 | 2;
  type: 0 | 1 | 2 | 3 | 4 | 5 | 6;
  id: number | string;
  content: string;
  commentId?: number;
  threadId?: number;
}

export interface resComment extends ResWithCode {
  comment: {
    beRepliedUser: null;
    commentId: number;
    commentLocationType: number;
    content: string;
    expressionUrl: null;
    needDisplayTime: boolean;
    richContent: null;
    time: number;
    user: {
      anonym: number;
      authStatus: number;
      avatarDetail: null;
      avatarUrl: string;
      expertTags: null;
      experts: null;
      liveInfo: null;
      locationInfo: null;
      nickname: string;
      remarkName: null;
      userId: number;
      userType: number;
      vipRights: null;
      vipType: number;
    };
  };
}

export interface Comments extends ResWithCode {
  hotComments: [];
  comments: [];
  total: number;
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
