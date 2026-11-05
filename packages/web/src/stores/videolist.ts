import { create } from "zustand";
import { apiGet, apiPost } from "@/shared/api/client";

export interface VideoItem {
  id: number;
  name: string;
}

export interface VideoListState {
  id: number;
  initStatus: boolean;
  categoryList: VideoItem[];
  groupList: VideoItem[];
  videoList: any[];
  setVideoListInit: () => void;
  setVideoListId: (payload: { id: number }) => void;
  init: () => Promise<void>;
  addList: (id?: number) => Promise<void>;
}

const mapVideo = ({ data }: any) => ({
  id: data.vid,
  cover: data.coverUrl,
  duration: data.durationms,
  playCount: data.playTime,
  title: data.title,
  creator: [{ userName: data.creator.nickname, userId: data.creator.userId }],
});

export const useVideoListStore = create<VideoListState>()((set) => ({
  id: 0,
  initStatus: false,
  categoryList: [],
  groupList: [],
  videoList: [],
  setVideoListInit: () => set({ videoList: [] }),
  setVideoListId: ({ id }) => set({ id }),
  init: async () => {
    const [{ data: groupList }, { data: categoryList = [] }] = await Promise.all([apiGet("/video/group/list"), apiPost("/video/category/list")]);
    set({ groupList, categoryList, initStatus: true });
  },
  addList: async (id) => {
    const { datas = [] } = await (id ? apiPost("/video/group", { id }) : apiPost("/video/timeline/recommend"));
    set((state) => ({
      videoList: [...state.videoList, ...datas.map(mapVideo)],
    }));
  },
}));
