import { MVAll } from "./types";

export const filter = (arr = []) =>
  arr.map(({ id, playCount, cover, name, artists, briefDesc }) => ({
    type: 0,
    id,
    cover,
    briefDesc,
    playCount,
    title: name,
    creator: artists.map(({ id: userId, name: userName }) => ({
      userId,
      userName,
    })),
  }));
import { baseApi } from "../base";

export const api = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getMVAll: build.query<
      MVAll,
      {
        area?: string;
        type?: string;
        order?: string;
        limit?: number;
        offset?: number;
      }
    >({
      query: (body) => ({
        url: `mv/all`,
        method: "POST",
        body,
      }),
    }),
    getMVExclusiveRcmd: build.query<MVAll, { limit: number }>({
      query: (body) => ({
        url: `mv/exclusive/rcmd`,
        method: "POST",
        body,
      }),
    }),
    getMVFirst: build.query<MVAll, { area: string; limit: number }>({
      query: (body) => ({
        url: `mv/first`,
        method: "POST",
        body,
      }),
    }),
    getTopMV: build.query<MVAll, { area: string; limit: number }>({
      query: (body) => ({
        url: `top/mv`,
        method: "POST",
        body,
      }),
    }),
  }),
});

export const {
  useGetMVAllQuery,
  useLazyGetMVAllQuery,
  useGetMVExclusiveRcmdQuery,
  useGetMVFirstQuery,
  useGetTopMVQuery,
} = api;
