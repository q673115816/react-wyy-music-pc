import Songs from "./Songs";
import Artists from "./Artists";
import Albums from "./Albums";
import Videos from "./Videos";
import Playlists from "./Playlists";
import Lyrics from "./Lyrics";
import DJRadios from "./DJRadios";
import UserProfiles from "./UserProfiles";
import { FC, ReactNode } from "react";

export type Types =
  | "单曲"
  | "歌手"
  | "专辑"
  | "视频"
  | "歌单"
  | "歌词"
  | "主播电台"
  | "用户";

type Config = {
  [key in Types]: {
    code: number;
    unit: string;
    limit: number;
    Node: FC<any>;
    countName: string;
  };
};

const config: Config = {
  单曲: {
    code: 1,
    unit: "首",
    limit: 100,
    Node: Songs,
    countName: "songCount",
  },
  歌手: {
    code: 100,
    unit: "位",
    limit: 20,
    Node: Artists,
    countName: "artistCount",
  },
  专辑: {
    code: 10,
    unit: "张",
    limit: 20,
    Node: Albums,
    countName: "albumCount",
  },
  视频: {
    code: 1014,
    unit: "个",
    limit: 24,
    Node: Videos,
    countName: "videoCount",
  },
  歌单: {
    code: 1000,
    unit: "个",
    limit: 20,
    Node: Playlists,
    countName: "playlistCount",
  },
  歌词: {
    code: 1006,
    unit: "首",
    limit: 20,
    Node: Lyrics,
    countName: "songCount",
  },
  主播电台: {
    code: 1009,
    unit: "个",
    limit: 100,
    Node: DJRadios,
    countName: "djRadiosCount",
  },
  用户: {
    code: 1002,
    unit: "位",
    limit: 20,
    Node: UserProfiles,
    countName: "userprofileCount",
  },
};

export default config;
