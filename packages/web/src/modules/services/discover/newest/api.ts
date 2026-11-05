import { Songs } from "./types";
import { apiPost } from "@/shared/api/client";
import { useQuery } from "@tanstack/react-query";
import { discoverKeys } from "@/shared/query/keys";

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
  useQuery({
    queryKey: discoverKeys.topSong(arg),
    queryFn: () => apiPost<Songs>("top/song", arg as any),
  });

export const useGetTopAlbumQuery = (arg: ResAlbums) =>
  useQuery({
    queryKey: discoverKeys.topAlbum(arg),
    queryFn: () => apiPost<Songs>("top/album", arg as any),
  });

export const useGetAlbumNewQuery = (arg: ResAlbums) =>
  useQuery({
    queryKey: discoverKeys.albumNew(arg),
    queryFn: () => apiPost<Songs>("album/new", arg as any),
  });
