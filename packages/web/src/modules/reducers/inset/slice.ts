import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../store";

interface InsetState {
  POSITION: boolean;
  globalVisibility: boolean;
  globalDragger: boolean;
  globalResizer: boolean;
  globalStartX: number;
  globalStartY: number;
  globalBeforeX: number;
  globalBeforeY: number;
  globalX: number;
  globalY: number;

  GlobalRectLock: boolean;
  globalStartRectX: number;
  globalStartRectY: number;
  globalBeforeWidth: number;
  globalBeforeHeight: number;
  globalWidth: number;
  globalHeight: number;

  globalStartLrcX: number;
  globalStartLrcY: number;
  globalBeforeLrcX: number;
  globalBeforeLrcY: number;
  globalLrcX: number;
  globalLrcY: number;
  globalLrcWidth: number;
  globalLrcHeight: number;
}

const globalX = 0;
const globalY = 0;
const globalWidth = 1022;
const globalHeight = 670;
const globalLrcWidth = 550;
const globalLrcHeight = 100;
const globalLrcX = globalX + (globalWidth - globalLrcWidth) / 2;
const globalLrcY = globalY + globalHeight;

const initialState: InsetState = {
  POSITION: true,
  globalVisibility: false,
  globalDragger: false,
  globalResizer: false,
  globalStartX: 0,
  globalStartY: 0,
  globalBeforeX: globalX,
  globalBeforeY: globalY,
  globalX,
  globalY,

  GlobalRectLock: false,
  globalStartRectX: 0,
  globalStartRectY: 0,
  globalBeforeWidth: globalWidth,
  globalBeforeHeight: globalHeight,
  globalWidth,
  globalHeight,

  globalStartLrcX: globalLrcX,
  globalStartLrcY: globalLrcY,
  globalBeforeLrcX: globalLrcX,
  globalBeforeLrcY: globalLrcY,
  globalLrcX,
  globalLrcY,
  globalLrcWidth,
  globalLrcHeight,
};

const MIN_WIDTH = 1022;
const MIN_HEIGHT = 670;

const slice = createSlice({
  name: "inset",
  initialState,
  reducers: {
    setGlobalInset(state, action) {
      const x = action.payload.x - state.globalStartX + state.globalBeforeX;
      const y = action.payload.y - state.globalStartY + state.globalBeforeY;
      state.globalX = x;
      state.globalY = y;
    },
    setGlobalStartInset(state, action) {
      state.globalStartX = action.payload.x;
      state.globalStartY = action.payload.y;
      state.globalBeforeX = state.globalX;
      state.globalBeforeY = state.globalY;
    },
    setGlobalDragger(state, action) {
      state.globalDragger = action.payload;
    },
    setGlobalResizer(state, action) {
      state.globalResizer = action.payload;
    },
    setGlobalStartRectLock(state, action) {
      state.GlobalRectLock = true;
    },
    setGlobalStartRect(state, action) {
      state.globalStartRectX = action.payload.x;
      state.globalStartRectY = action.payload.y;
      state.globalBeforeWidth = state.globalWidth;
      state.globalBeforeHeight = state.globalHeight;
    },
    setGlobalRect(state, action) {
      const width =
        action.payload.x - state.globalStartRectX + state.globalBeforeWidth;
      const height =
        action.payload.y - state.globalStartRectY + state.globalBeforeHeight;

      const nextwidth = width > MIN_WIDTH ? width : MIN_WIDTH;
      const nextheight = height > MIN_HEIGHT ? height : MIN_HEIGHT;
      state.globalWidth = nextwidth;
      state.globalHeight = nextheight;
      state.GlobalRectLock = false;
    },
    togglePosition(state) {
      state.POSITION = !state.POSITION;
    },
    setPositionTrue(state) {
      state.POSITION = true;
    },
    setPositionFalse(state) {
      state.POSITION = false;
    },
    setGlobalLrcInset(state, action) {
      const lrcX =
        action.payload.x - state.globalStartLrcX + state.globalBeforeLrcX;
      const lrcY =
        action.payload.y - state.globalStartLrcY + state.globalBeforeLrcY;
      state.globalLrcX = lrcX;
      state.globalLrcY = lrcY;
    },
    setGlobalLrcStartInset(state, action) {
      state.globalStartLrcX = action.payload.x;
      state.globalStartLrcY = action.payload.y;
      state.globalBeforeLrcX = state.globalLrcX;
      state.globalBeforeLrcY = state.globalLrcY;
    },
  },
});

export default slice.reducer;

export const insetSelector = (store: RootState) => store.inset;

export const {
  setGlobalDragger,
  setGlobalInset,
  setGlobalLrcInset,
  setGlobalLrcStartInset,
  setGlobalRect,
  setGlobalResizer,
  setGlobalStartInset,
  setGlobalStartRect,
  setGlobalStartRectLock,
  setPositionFalse,
  setPositionTrue,
} = slice.actions;
