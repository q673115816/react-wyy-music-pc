import { Detail } from "./types";
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
  }),
});

export const { useGetArtistDetailQuery, usePostArtistSubMutation } = api;
