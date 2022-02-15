import { Sublists } from "./types";
import { base } from "../base";

export const api = base.injectEndpoints({
  endpoints: (build) => ({
    getDJSublist: build.query<Sublists, void>({
      query: (body) => ({
        url: `dj/sublist`,
        method: "POST",
        body,
      }),
    }),
  }),
});

export const { useGetDJSublistQuery } = api;
