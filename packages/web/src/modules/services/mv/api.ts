import { MVAll } from "./types";
import { createApi } from "@reduxjs/toolkit/query/react";
import baseQuery from "../base";

export const reducerPath = "mv/api";

export const filter = (arr = []) =>
  arr.map(({ id, playCount, cover, name, artists, briefDesc }) => ({
    type: 0,
    id,
    cover,
    briefDesc,
    playCount,
    title: name,
    creator: artists.map(({ id: userId, name: userName }) => ({
      userId,
      userName,
    })),
  }));

export const api = createApi({
  reducerPath,
  baseQuery,
  endpoints: (build) => ({
    getMVAll: build.query<MVAll, { order: string; limit: number }>({
      query: (body) => ({
        url: `mv/all`,
        method: "POST",
        body,
      }),
    }),
    getMVExclusiveRcmd: build.query<MVAll, { limit: number }>({
      query: (body) => ({
        url: `mv/exclusive/rcmd`,
        method: "POST",
        body,
      }),
    }),
    getMVFirst: build.query<MVAll, { area: string; limit: number }>({
      query: (body) => ({
        url: `mv/first`,
        method: "POST",
        body,
      }),
    }),
    getTopMV: build.query<MVAll, { area: string; limit: number }>({
      query: (body) => ({
        url: `top/mv`,
        method: "POST",
        body,
      }),
    }),
  }),
});

export const {
  useGetMVAllQuery,
  useGetMVExclusiveRcmdQuery,
  useGetMVFirstQuery,
  useGetTopMVQuery,
} = api;
