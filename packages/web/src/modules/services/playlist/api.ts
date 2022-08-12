import { Details } from "./types";
import { createApi } from "@reduxjs/toolkit/query/react";
import baseQuery from "../base";

export const reducerPath = "playlist/api";

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
  }),
});

export const { useGetPlaylistDetailQuery } = api;
