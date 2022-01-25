import { Get } from "@/modules/utils";
import { Daily } from "./types";
import { base } from "../base";

export const api = base.injectEndpoints({
  endpoints: (build) => ({
    getRecommendSongs: build.query<Daily, void>({
      query: (body) => ({
        url: `recommend/songs`,
        method: "POST",
        body: {
          cookie: Get({ key: "cookie" }),
        },
      }),
    }),
  }),
});

export const { useGetRecommendSongsQuery } = api;
