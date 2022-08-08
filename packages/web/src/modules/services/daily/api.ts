import { Daily } from "./types";
import { createApi } from "@reduxjs/toolkit/query/react";
import baseQuery, { base } from "../base";

export const reducerPath = "daily/api";

export const api = createApi({
  reducerPath,
  baseQuery,
  endpoints: (build) => ({
    getRecommendSongs: build.query<Daily, void>({
      query: (body) => ({
        url: `recommend/songs`,
        method: "POST",
        body,
      }),
    }),
  }),
});

export const { useGetRecommendSongsQuery } = api;
