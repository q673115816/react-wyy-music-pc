import { Songs } from "./types";
import { apiPost } from "@/shared/api/client";
import { useRtkQuery } from "@/shared/query/rtk-compat";

interface ReqArtists {
  type: number;
}

interface ResAlbums {
  area: number;
  type: string;
  limit: number;
  offset: number;
}

export const useGetTopSongQuery = (arg: ReqArtists) =>
  useRtkQuery<Songs, ReqArtists>(
    (body) => ["top/song", body],
    (body) => apiPost<Songs>("top/song", body as any),
    arg
  );

export const useGetTopAlbumQuery = (arg: ResAlbums) =>
  useRtkQuery<Songs, ResAlbums>(
    (body) => ["top/album", body],
    (body) => apiPost<Songs>("top/album", body as any),
    arg
  );

export const useGetAlbumNewQuery = (arg: ResAlbums) =>
  useRtkQuery<Songs, ResAlbums>(
    (body) => ["album/new", body],
    (body) => apiPost<Songs>("album/new", body as any),
    arg
  );
