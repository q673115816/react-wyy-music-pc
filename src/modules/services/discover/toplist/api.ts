import { base } from "../../base";
import { Artists, Details } from "./types";

interface ReqArtists {
  type: number;
  area: number;
  initial: number;
  limit: number;
  offset: number;
}

const api = base.injectEndpoints({
  endpoints: (build) => ({
    getArtistList: build.mutation<Artists, ReqArtists>({
      query: (body) => ({
        url: `artist/list`,
        method: "POST",
        body,
      }),
    }),
    getTopListDetail: build.query<Details, void>({
      query: () => `topList/detail`,
    }),
    getTopListArtist: build.query<Artists, { type: number }>({
      query: (body) => ({
        url: `topList/artist`,
        method: "POST",
        body,
      }),
    }),
  }),
});

export const { useGetArtistListMutation, useGetTopListDetailQuery } = api;
