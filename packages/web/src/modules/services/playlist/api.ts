import { Details, Comments } from "./types";
import { createApi } from "@reduxjs/toolkit/query/react";
import baseQuery, { base } from "../base";

export const reducerPath = "playlist";

export const api = createApi({
  reducerPath,
  baseQuery,
  endpoints: (build) => ({
    getPlaylistDetail: build.query<Details, { id: number; limit?: number }>({
      query: (body) => ({
        url: `playlist/detail`,
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
    }),
  }),
});

export const { useGetPlaylistDetailQuery, useGetCommentPlaylistQuery } = api;
