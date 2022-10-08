import { Searchs, SearchHotDetails, Suggests, Multimatchs } from "./types";

interface ReqSearch {
  keywords: string;
  limit: number;
  type: number;
  offset: number;
}

import { baseApi } from "../base";

export const api = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getSearch: build.query<Searchs, ReqSearch>({
      query: (body) => ({
        url: `search`,
        method: "POST",
        body,
      }),
    }),
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
  useGetSearchQuery,
  useGetCloudSearchMutation,
  useGetSearchMultimatchQuery,
  useGetSearchSuggestQuery,
  useGetSearchHotDetailQuery,
} = api;
