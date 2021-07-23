import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit'
import {apiVideoCategoryList, apiVideoGroup, apiVideoGroupList, apiVideoTimelineRecommend} from "@/api";

interface ItemProps {
  id: number,
  name: string
}

export interface Category extends ItemProps {
}

export interface Group extends ItemProps {

}

export interface VideoListState {
  id: number,
  initStatus: boolean,
  categoryList: Category[],
  groupList: Group[],
}

const initialState: VideoListState = {
  id: 0,
  initStatus: false,
  categoryList: [],
  groupList: [],
}


export const handlePrevInit = createAsyncThunk(
  'videolist/init',
  async () => {
  try {
    const [
      { data: groupList },
      { data: categoryList = [] },
    ] = await Promise.all([
      apiVideoGroupList(),
      apiVideoCategoryList(),
    ]);
    return {
      groupList,
      categoryList,
    }
  } catch (e) {
    console.log(e);
  }
});

export const handleAddList = createAsyncThunk(
  'videolist/add',
  async (id?: number) => {
  try {
    const { datas = [] } = await (id
      ? apiVideoGroup({
        id,
      })
      : apiVideoTimelineRecommend());
    return {
      groupList: datas.map(({
                              data: {
                                vid,
                                coverUrl,
                                durationms,
                                title,
                                playTime,
                                creator: {
                                  nickname: userName,
                                  userId,
                                },
                              },
                            }) => ({
        id: vid,
        cover: coverUrl,
        duration: durationms,
        playCount: playTime,
        title,
        creator: [{ userName, userId }],
      }))
    }
  } catch (error) {
    console.log(error);
  }
});

const slice = createSlice({
  name: 'videolist',
  initialState,
  reducers: {
    setVideoListInit(state, action) {

    },
    setVideoListId(state, action) {
      state.id = action.payload.id
    },
  },
  extraReducers: {
    [handlePrevInit.fulfilled.type]: (state, action) => {
      state.groupList = action.payload.groupList
      state.categoryList = action.payload.categoryList
    },
    [handleAddList.fulfilled.type]: (state, action) => {
      state.groupList.push(...action.payload.groupList)
    }
  }
})

export default slice.reducer

export const {setVideoListId} = slice.actions
