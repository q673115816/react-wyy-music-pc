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

export const artistKeys = {
  all: ["artist"] as const,
  detail: (params: { id: string }) => ["artist", "detail", params] as const,
  recentAlbums: (params: { id: string }) =>
    ["artist", "recent-albums", params] as const,
  simiArtist: (params: { id: string }) =>
    ["artist", "simi-artist", params] as const,
  albums: (params: { id: string }) => ["artist", "albums", params] as const,
  topSongs: (params: { id: string }) =>
    ["artist", "top-songs", params] as const,
  desc: (params: { id: string }) => ["artist", "desc", params] as const,
  artistMV: ["artist", "mv"] as const,
  artistSub: ["artist", "sub"] as const,
};

export const dailyKeys = {
  all: ["daily"] as const,
  recommendSongs: ["daily", "recommend-songs"] as const,
};

export const djKeys = {
  all: ["dj"] as const,
  banner: ["dj", "banner"] as const,
  categoryRecommend: ["dj", "category-recommend"] as const,
  cateList: ["dj", "cate-list"] as const,
  personalizeRecommend: ["dj", "personalize-recommend"] as const,
  radioHot: (params: { cateId: number; limit: number; offset?: number }) =>
    ["dj", "radio-hot", params] as const,
};

export const lrcKeys = {
  all: ["lrc"] as const,
  simiSong: (id: number) => ["lrc", "simi-song", id] as const,
};

export const messageKeys = {
  all: ["message"] as const,
  forwards: ["message", "forwards"] as const,
  private: (limit?: number) => ["message", "private", limit] as const,
  recentContact: ["message", "recent-contact"] as const,
  comments: (uid: number) => ["message", "comments", uid] as const,
  notices: ["message", "notices"] as const,
};

export const playerKeys = {
  all: ["player"] as const,
  relatedAllVideo: (id: string) => ["player", "related-all-video", id] as const,
  videoUrl: (id: string) => ["player", "video-url", id] as const,
  videoDetail: (id: string) => ["player", "video-detail", id] as const,
  videoDetailInfo: (vid: string) =>
    ["player", "video-detail-info", vid] as const,
  mvDetail: (ids: string) => ["player", "mv-detail", ids] as const,
};

export const searchKeys = {
  all: ["search"] as const,
  search: (params: {
    keywords: string;
    limit: number;
    type: number;
    offset: number;
  }) => ["search", params] as const,
  cloudSearch: (params: {
    keywords: string;
    limit: number;
    type: number;
    offset: number;
  }) => ["search", "cloud", params] as const,
  multimatch: (keywords: string) => ["search", "multimatch", keywords] as const,
  suggest: (keywords: string) => ["search", "suggest", keywords] as const,
  hotDetail: ["search", "hot-detail"] as const,
};

export const mvKeys = {
  all: ["mv"] as const,
  allList: (params: {
    area?: string;
    type?: string;
    order?: string;
    limit?: number;
    offset?: number;
  }) => ["mv", "all", params] as const,
  exclusiveRcmd: (limit: number) => ["mv", "exclusive-rcmd", limit] as const,
  first: (area: string, limit: number) => ["mv", "first", area, limit] as const,
  topMV: (area: string, limit: number) => ["mv", "top", area, limit] as const,
};

export const friendKeys = {
  all: ["friend"] as const,
  hotTopic: (limit: number) => ["friend", "hot-topic", limit] as const,
  topicDetail: (actid: string) => ["friend", "topic-detail", actid] as const,
  event: (lasttime: number) => ["friend", "event", lasttime] as const,
  userEvent: (actid: number) => ["friend", "user-event", actid] as const,
};

export const commentKeys = {
  all: ["comment"] as const,
  video: (id: string) => ["comment", "video", id] as const,
  music: (params: { id: number; limit: number; offset: number }) =>
    ["comment", "music", params] as const,
  mv: (id: string) => ["comment", "mv", id] as const,
  event: (threadId: number) => ["comment", "event", threadId] as const,
  playlist: (id: number) => ["comment", "playlist", id] as const,
  hot: (params: { id: number; type: number; offset: number; limit: number }) =>
    ["comment", "hot", params] as const,
  commentList: ["comment", "comment-list"] as const,
};

export const songKeys = {
  all: ["song"] as const,
  songUrl: (id: number) => ["song", "url", id] as const,
  detail: (ids: string) => ["song", "detail", ids] as const,
  lyric: (id: number) => ["song", "lyric", id] as const,
  personalFM: ["song", "personal-fm"] as const,
};

export const playlistKeys = {
  all: ["playlist"] as const,
  detail: (params: { id: string; limit?: number }) =>
    ["playlist", "detail", params] as const,
  songs: (ids: string) => ["playlist", "songs", ids] as const,
  subscribers: (params: { id: string; limit: number; offset: number }) =>
    ["playlist", "subscribers", params] as const,
  subscribe: ["playlist", "subscribe"] as const,
};

export const accountKeys = {
  all: ["account"] as const,
  countries: ["account", "countries"] as const,
  loginStatus: ["account", "login-status"] as const,
  logout: ["account", "logout"] as const,
  loginQRKey: ["account", "login-qr-key"] as const,
  loginQRCheck: (key: number) => ["account", "login-qr-check", key] as const,
  avatar: ["account", "avatar"] as const,
  registerAnonymous: ["account", "register-anonymous"] as const,
};

export const userKeys = {
  all: ["user"] as const,
  cloud: (params: { limit: number }) => ["user", "cloud", params] as const,
  signInProgress: (params: { moduleId?: string }) =>
    ["user", "signin-progress", params] as const,
  module: ["user", "signin-module"] as const,
  userDetail: (uid: string) => ["user", "detail", uid] as const,
  userAccount: ["user", "account"] as const,
  updateUser: ["user", "update"] as const,
  userEvent: (uid: string, lasttime: number) =>
    ["user", "event", uid, lasttime] as const,
  subcount: ["user", "subcount"] as const,
  userPlaylist: (uid: string) => ["user", "playlist", uid] as const,
  binding: (uid: string) => ["user", "binding", uid] as const,
  record: (uid: number, type: number) => ["user", "record", uid, type] as const,
  followeds: (uid: string) => ["user", "followeds", uid] as const,
  follow: (id: number, t: number) => ["user", "follow", id, t] as const,
};

export const sublistKeys = {
  all: ["sublist"] as const,
  mv: ["sublist", "mv"] as const,
  topic: ["sublist", "topic"] as const,
  artist: ["sublist", "artist"] as const,
  album: ["sublist", "album"] as const,
  dj: ["sublist", "dj"] as const,
};
