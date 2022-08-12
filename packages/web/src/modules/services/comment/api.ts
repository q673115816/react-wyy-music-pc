import {
  ResCommentVideo,
  ResCommentMV,
  Events,
  reqComment,
  resComment,
  Comments,
} from "./types";
import { createApi } from "@reduxjs/toolkit/query/react";
import baseQuery from "../base";

export const reducerPath = "comment/api";

export const api = createApi({
  reducerPath,
  baseQuery,
  tagTypes: ["comment/playlist"],
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
    getCommentPlaylist: build.query<Comments, { id: number }>({
      query: (body) => ({
        url: `comment/playlist`,
        method: "POST",
        body,
      }),
      providesTags: (result, error, { id }) => {
        return [{ type: "comment/playlist", id }];
      },
    }),
    postComment: build.mutation<resComment, reqComment>({
      query: (body) => ({
        url: `comment`,
        method: "POST",
        body,
      }),
      invalidatesTags: (result, error, { id }) => [
        { type: "comment/playlist", id },
      ],
    }),
  }),
});

export const {
  useGetCommentVideoQuery,
  useGetCommentMusicQuery,
  useGetCommentMVQuery,
  useGetCommentEventQuery,
  useGetCommentPlaylistQuery,
  usePostCommentMutation,
} = api;
