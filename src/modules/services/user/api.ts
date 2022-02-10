import { Clouds } from "./types";
import { base } from "../base";

export const api = base.injectEndpoints({
  endpoints: (build) => ({
    getUserCloud: build.query<Clouds, { limit: number }>({
      query: (body) => ({
        url: `user/cloud`,
        method: "POST",
        body,
      }),
    }),
  }),
});

export const { useGetUserCloudQuery } = api;
