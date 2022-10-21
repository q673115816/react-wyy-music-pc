import { ResWithCode } from "../types";

export interface Forwards extends ResWithCode {
  forwards: [];
  lasttime: number;
  more: boolean;
  newCount: number;
}
export interface Private extends ResWithCode {
  more: boolean;
  msgs: {
    fromUser: any;
    lastMsg: string;
    lastMsgId: number;
    lastMsgTime: number;
    lastMsgUserId: null | number;
    msgSenderType: number;
    newMsgCount: number;
    noticeAccount: null;
    noticeAccountFlag: boolean;
    toUser: any;
    user: any;
  }[];
  newMsgCount: number;
}
export interface Comments extends ResWithCode {
  comments: [];
  more: boolean;
  total: number;
}
export interface Notices extends ResWithCode {
  more: boolean;
  notices: [];
}
export interface Recentcontact extends ResWithCode {
  data: {
    follow: {
      authStatus: number;
      avatarUrl: string;
      expertTags: null;
      experts: null;
      gender: number;
      mutual: boolean;
      nickname: string;
      py: string;
      remarkName: null;
      userId: number;
      userType: number;
      vipType: number;
    }[];
  };
}
