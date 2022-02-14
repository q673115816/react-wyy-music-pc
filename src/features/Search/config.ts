import Songs from "./Songs";
import Artists from "./Artists";
import Albums from "./Albums";
import Videos from "./Videos";
import Playlists from "./Playlists";
import Lyrics from "./Lyrics";
import DJRadios from "./DJRadios";
import Userprofiles from "./UserProfiles";

export default {
  单曲: {
    code: 1,
    unit: "首",
    limit: 100,
    Dom: Songs,
    countName: "songCount",
  },
  歌手: {
    code: 100,
    unit: "位",
    limit: 20,
    Dom: Artists,
    countName: "artistCount",
  },
  专辑: {
    code: 10,
    unit: "张",
    limit: 20,
    Dom: Albums,
    countName: "albumCount",
  },
  视频: {
    code: 1014,
    unit: "个",
    limit: 24,
    Dom: Videos,
    countName: "videoCount",
  },
  歌单: {
    code: 1000,
    unit: "个",
    limit: 20,
    Dom: Playlists,
    countName: "playlistCount",
  },
  歌词: {
    code: 1006,
    unit: "首",
    limit: 20,
    Dom: Lyrics,
    countName: "songCount",
  },
  主播电台: {
    code: 1009,
    unit: "个",
    limit: 100,
    Dom: DJRadios,
    countName: "djRadiosCount",
  },
  用户: {
    code: 1002,
    unit: "位",
    limit: 20,
    Dom: Userprofiles,
    countName: "userprofileCount",
  },
};
