import { ResRelated } from "./types";
import { base } from "../base";

export const api = base.injectEndpoints({
  endpoints: (build) => ({
    getRelatedAllVideo: build.query<ResRelated, { id: string }>({
      query: (body) => ({
        url: `related/allvideo`,
        method: "POST",
        body,
      }),
    }),
  }),
});

export const { useGetRelatedAllVideoQuery } = api;
