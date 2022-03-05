import { Details, Comments } from "./types";
import { base } from "../base";

export const api = base.injectEndpoints({
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
