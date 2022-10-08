import { Daily } from "./types";
import { baseApi } from "../base";

export const api = baseApi.injectEndpoints({
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
