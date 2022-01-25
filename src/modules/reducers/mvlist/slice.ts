import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { apiMVAll, apiMVExclusiveRcmd, apiMVFirst, apiTopMV } from "@/api";
import { Draft } from "immer";

export interface MVListState {
  firstArea: string;
  topArea: string;
  first: [];
  hot: [];
  wy: [];
  top: [];
  timestamp: number;
}

const initialState: MVListState = {
  firstArea: "内地",
  topArea: "内地",
  first: [],
  hot: [],
  wy: [],
  top: [],
  timestamp: 0,
};

const listFilter = (arr = []) =>
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

interface iInit {
  firstArea: string;
  topArea: string;
}

export const handleInit = createAsyncThunk(
  "mvlist/init/all",
  async ({ firstArea, topArea }: iInit) => {
    try {
      const [{ data: hot }, { data: wy }, { data: first }, { data: top }] =
        await Promise.all([
          apiMVAll({
            order: "最热",
            limit: 6,
          }),
          apiMVExclusiveRcmd({
            limit: 6,
          }),
          apiMVFirst({
            area: firstArea,
            limit: 6,
          }),
          apiTopMV({
            area: topArea,
            limit: 10,
          }),
        ]);
      return {
        first: listFilter(first),
        hot: listFilter(hot),
        wy: listFilter(wy),
        top,
        timestamp: Date.now(),
      };
    } catch (error) {
      console.log(error);
    }
  }
);

export const handleChangeFirstArea = createAsyncThunk(
  "mvlist/init/first",
  async (firstArea: string) => {
    try {
      const { data: first } = await apiMVFirst({
        area: firstArea,
        limit: 6,
      });
      return {
        firstArea,
        first: listFilter(first),
      };
    } catch (error) {
      console.log(error);
    }
  }
);

export const handleChangeTopArea = createAsyncThunk(
  "mvlist/init/top",
  async (topArea: string) => {
    try {
      const { data: top } = await apiTopMV({
        area: topArea,
        limit: 10,
      });
      return {
        topArea,
        top,
      };
    } catch (error) {
      console.log(error);
    }
  }
);

const slice = createSlice({
  name: "mvlist",
  initialState,
  reducers: {},
  extraReducers: {
    [handleInit.fulfilled.type]: (state, action) => {
      const { timestamp, first, hot, wy, top } = action.payload;
      state.timestamp = timestamp;
      state.first = first;
      state.hot = hot;
      state.wy = wy;
      state.top = top;
    },
    [handleChangeFirstArea.fulfilled.type]: (state, action) => {
      const { topArea, top } = action.payload;
      state.topArea = topArea;
      state.top = top;
    },
    [handleChangeFirstArea.fulfilled.type]: (state, action) => {
      const { firstArea, first } = action.payload;
      state.firstArea = firstArea;
      state.first = first;
    },
  },
});

export const MVListSelector = <T = Draft<MVListState>>({
  mvlist,
}: {
  mvlist: T;
}): T => mvlist;

export default slice.reducer;
