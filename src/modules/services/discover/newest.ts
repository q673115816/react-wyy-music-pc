import { base } from "../base";
import { Songs } from "./types";

interface ReqArtists {
  type: number;
}

const api = base.injectEndpoints({
  endpoints: (build) => ({
    getTopSong: build.query<Songs, ReqArtists>({
      query: (body) => ({
        url: `top/song`,
        method: "POST",
        body,
      }),
    }),
  }),
});

export const { useGetTopSongQuery } = api;
