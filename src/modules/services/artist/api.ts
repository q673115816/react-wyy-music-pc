import {Artists, Detail} from "./types";
import { base } from "../base";

export const api = base.injectEndpoints({
  endpoints: (build) => ({
    getArtistDetail: build.query<Detail, { id: string }>({
      query: (body) => ({
        url: `artist/detail`,
        method: "POST",
        body,
      }),
    }),
    postArtistSub: build.mutation<Detail, { id: string; t: number }>({
      query: (body) => ({
        url: `artist/sub`,
        method: "POST",
        body,
      }),
    }),
    getSimiArtist: build.query<Artists, { id: string; }>({
      query: (body) => ({
        url: `simi/artist`,
        method: "POST",
        body,
      }),
    }),
  }),
});

export const {
  useGetArtistDetailQuery,
  useGetSimiArtistQuery,
  usePostArtistSubMutation,
} = api;
