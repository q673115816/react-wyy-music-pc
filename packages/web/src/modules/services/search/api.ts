import { Searchs, SearchHotDetails, Suggests, Multimatchs } from "./types";

interface ReqSearch {
  keywords: string;
  limit: number;
  type: number;
  offset: number;
}

import { createApi } from "@reduxjs/toolkit/query/react";
import baseQuery, { base } from "../base";

export const reducerPath = "search";

export const api = createApi({
  reducerPath,
  baseQuery,
  endpoints: (build) => ({
    getCloudSearch: build.mutation<Searchs, ReqSearch>({
      query: (body) => ({
        url: `cloudSearch`,
        method: "POST",
        body,
      }),
    }),
    getSearchMultimatch: build.query<Multimatchs, { keywords: string }>({
      query: (body) => ({
        url: `search/multimatch`,
        method: "POST",
        body,
      }),
    }),
    getSearchSuggest: build.query<Suggests, { keywords: string }>({
      query: (body) => ({
        url: `search/suggest`,
        method: "POST",
        body,
      }),
    }),
    getSearchHotDetail: build.query<SearchHotDetails, void>({
      query: (body) => `search/hot/detail`,
    }),
  }),
});

export const {
  useGetCloudSearchMutation,
  useGetSearchMultimatchQuery,
  useGetSearchSuggestQuery,
  useGetSearchHotDetailQuery,
} = api;
