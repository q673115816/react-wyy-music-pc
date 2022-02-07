import { Related } from "./types";
import { base } from "../base";

export const api = base.injectEndpoints({
  endpoints: (build) => ({
    getRelatedAllVideo: build.query<Related, { id: string }>({
      query: ({ id }) => `related/allvideo?id=${id}`,
    }),
  }),
});

export const { useGetRelatedAllVideoQuery } = api;
