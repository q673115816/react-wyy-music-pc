import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit'
import {apiPersonalizedPrivatecontentList} from "@/api";

export interface ResultProps {
  picUrl: string
  videoId: number
  id: number
  name: string
}
export interface ExclusiveState {
  result: ResultProps[],
  scrollTop: number
}

type Action = PayloadAction<Partial<ExclusiveState>>

const initialState: ExclusiveState = {
  result: [],
  scrollTop: 0,
}

export const handleGetData = createAsyncThunk(
  'exclusive/init',
  async (params: any) =>  await apiPersonalizedPrivatecontentList(params)
  // .catch(() => initialState);
)

const slice = createSlice({
  name: 'exclusive',
  initialState,
  reducers: {
    setExclusiveResultAdd(state, {payload}: PayloadAction<{result: ResultProps[]}>) {
      state.result.push(...(payload.result))
    },
    setExclusiveResultEmpty(state) {
      state.result.length = 0
    },
    setExclusiveScrollTop(state, action: PayloadAction<{scrollTop: number}>) {
      state.scrollTop = action.payload?.scrollTop
    },
  },
  extraReducers: {
    [handleGetData.pending.type]: (state) => {},
    [handleGetData.fulfilled.type]: (state, {payload} : PayloadAction<{result: []}>) => {
      const {result} = payload
      state.result.push(...result)
    },
    [handleGetData.rejected.type]: (state) => {}
  }
})

export default slice.reducer

export const {
  setExclusiveResultAdd,
  setExclusiveResultEmpty,
  setExclusiveScrollTop,
} = slice.actions
