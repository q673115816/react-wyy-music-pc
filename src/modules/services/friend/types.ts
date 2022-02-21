import { ResWithCode } from "../types";

export interface Tops extends ResWithCode {}

export interface Topics extends ResWithCode {}
export interface TopicDetails extends ResWithCode {
  needBeginNotify: boolean;
  act: {
    actId: number;
    participateCount: number;
    title: string;
    coverPCUrl: string;
    text: string[];
  };
}
