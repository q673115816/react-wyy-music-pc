import { ResCommentVideo, ResCommentMV, Events } from "./types";
import { createApi } from "@reduxjs/toolkit/query/react";
import baseQuery from "../base";

export const reducerPath = "comment/api";

export const api = createApi({
  reducerPath,
  baseQuery,
  endpoints: (build) => ({
    getCommentVideo: build.query<ResCommentVideo, { id: string }>({
      query: (body) => ({
        url: `comment/video`,
        method: "POST",
        body,
      }),
    }),
    getCommentMusic: build.query<
      ResCommentVideo,
      { id: number; limit: number; offset: number }
    >({
      query: (body) => ({
        url: `comment/music`,
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
  useGetCommentMusicQuery,
  useGetCommentMVQuery,
  useGetCommentEventQuery,
} = api;
