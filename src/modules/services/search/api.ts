import { Searchs } from "./types";
import { base } from "../base";

interface ReqSearch {
  keywords: string;
  limit: number;
  type: number;
  offset: number;
}

export const api = base.injectEndpoints({
  endpoints: (build) => ({
    getCloudSearch: build.query<Searchs, ReqSearch>({
      query: (body) => ({
        url: `cloudSearch`,
        method: "POST",
        body,
      }),
    }),
    getSearchMultimatch: build.query<Searchs, { keywords: string }>({
      query: (body) => ({
        url: `search/multimatch`,
        method: "POST",
        body,
      }),
    }),
  }),
});

export const { useGetCloudSearchQuery, useGetSearchMultimatchQuery } = api;
