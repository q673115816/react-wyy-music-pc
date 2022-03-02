import { ResCommentVideo, ResCommentMV, Events } from "./types";
import { base } from "../base";

export const api = base.injectEndpoints({
  endpoints: (build) => ({
    getCommentVideo: build.query<ResCommentVideo, { id: string }>({
      query: (body) => ({
        url: `comment/video`,
        method: "POST",
        body,
      }),
    }),
    getCommentMV: build.query<ResCommentMV, { id: string }>({
      query: (body) => ({
        url: `comment/mv`,
        method: "POST",
        body,
      }),
    }),
    getCommentEvent: build.query<Events, { threadId: number }>({
      query: (body) => ({
        url: `comment/event`,
        method: "POST",
        body,
      }),
    }),
  }),
});

export const {
  useGetCommentVideoQuery,
  useGetCommentMVQuery,
  useGetCommentEventQuery,
} = api;
