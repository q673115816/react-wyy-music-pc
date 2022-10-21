import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  apiVideoCategoryList,
  apiVideoGroup,
  apiVideoGroupList,
  apiVideoTimelineRecommend,
} from "@/api";
import { RootState } from "@/modules/store";

interface ItemProps {
  id: number;
  name: string;
}

export type Category = ItemProps;

export type Group = ItemProps;

export interface VideoListState {
  id: number;
  initStatus: boolean;
  categoryList: Category[];
  groupList: Group[];
  videoList: [];
}

const initialState: VideoListState = {
  id: 0,
  initStatus: false,
  categoryList: [],
  groupList: [],
  videoList: [],
};

export const handlePrevInit = createAsyncThunk("videolist/init", async () => {
  try {
    const [{ data: groupList }, { data: categoryList = [] }] =
      await Promise.all([apiVideoGroupList(), apiVideoCategoryList()]);
    return {
      groupList,
      categoryList,
    };
  } catch (e) {
    console.log(e);
  }
});

export const handleAddList = createAsyncThunk(
  "videolist/add",
  async (id?: number) => {
    try {
      const { datas = [] } = await (id
        ? apiVideoGroup({
            id,
          })
        : apiVideoTimelineRecommend());
      const videoList = datas.map(
        ({
          data: {
            vid,
            coverUrl,
            durationms,
            title,
            playTime,
            creator: { nickname: userName, userId },
          },
        }) => ({
          id: vid,
          cover: coverUrl,
          duration: durationms,
          playCount: playTime,
          title,
          creator: [{ userName, userId }],
        })
      );
      return {
        videoList,
      };
    } catch (error) {
      console.log(error);
    }
  }
);

const slice = createSlice({
  name: "videolist",
  initialState,
  reducers: {
    setVideoListInit(state) {
      state.videoList.length = 0;
    },
    setVideoListId(state, action) {
      state.id = action.payload.id;
    },
  },
  extraReducers: {
    [handlePrevInit.fulfilled.type]: (state, { payload }) => {
      state.groupList = payload.groupList;
      state.categoryList = payload.categoryList;
    },
    [handleAddList.fulfilled.type]: (state, { payload }) => {
      state.videoList.push(...payload.videoList);
    },
  },
});

export const VideoListSelector = (state: RootState) => state.videolist;

export default slice.reducer;

export const { setVideoListId, setVideoListInit } = slice.actions;
