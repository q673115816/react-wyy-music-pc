import { Searchs, SearchHotDetails, Suggests } from "./types";
import { base } from "../base";

interface ReqSearch {
  keywords: string;
  limit: number;
  type: number;
  offset: number;
}

export const api = base.injectEndpoints({
  endpoints: (build) => ({
    getCloudSearch: build.mutation<Searchs, ReqSearch>({
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
