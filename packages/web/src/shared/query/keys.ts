export const discoverKeys = {
  all: ["discover"] as const,
  recommendResource: ["discover", "recommend-resource"] as const,
  banner: ["discover", "banner"] as const,
  privatecontent: ["discover", "privatecontent"] as const,
  newsong: (limit: number) => ["discover", "newsong", limit] as const,
  mv: ["discover", "mv"] as const,
  djprogram: ["discover", "djprogram"] as const,
  playlistHighqualityTags: [
    "discover",
    "playlist-highquality-tags",
  ] as const,
  playlistHot: ["discover", "playlist-hot"] as const,
  playlistCatList: ["discover", "playlist-cat-list"] as const,
  topPlaylist: (params: {
    order: string;
    cat: string;
    limit: number;
    offset: number;
  }) => ["discover", "top-playlist", params] as const,
  topListDetail: ["discover", "top-list-detail"] as const,
  topSong: (params: { type: number }) =>
    ["discover", "top-song", params] as const,
  topAlbum: (params: {
    area: number;
    type: string;
    limit: number;
    offset: number;
  }) => ["discover", "top-album", params] as const,
  albumNew: (params: {
    area: number;
    type: string;
    limit: number;
    offset: number;
  }) => ["discover", "album-new", params] as const,
  artistList: (params: {
    type: number;
    area: number;
    initial: number;
    limit: number;
    offset: number;
  }) => ["discover", "artist-list", params] as const,
};
