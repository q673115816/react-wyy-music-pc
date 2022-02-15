import { base } from "../base";
import { Artists } from "./types";

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
  }),
});

export const { useGetArtistListMutation } = api;
