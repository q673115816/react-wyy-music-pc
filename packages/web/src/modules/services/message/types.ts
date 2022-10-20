import { ResWithCode } from "../types";

export interface Forwards extends ResWithCode {}
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
export interface Comments extends ResWithCode {}
export interface Notices extends ResWithCode {}
