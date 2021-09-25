import { createSlice } from "@reduxjs/toolkit";
import { LOCALSTORAGE } from "@/common/utils";

interface InsetState {
  POSITION: boolean;
  SCREEN: string;
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

const globalX = LOCALSTORAGE("x", 0);
const globalY = LOCALSTORAGE("y", 0);
const globalWidth = LOCALSTORAGE("width", 1022);
const globalHeight = LOCALSTORAGE("height", 670);
const globalLrcWidth = LOCALSTORAGE("lrcWidth", 550);
const globalLrcHeight = LOCALSTORAGE("lrcHeight", 100);
const globalLrcX = LOCALSTORAGE(
  "lrcX",
  globalX + (globalWidth - globalLrcWidth) / 2
);
const globalLrcY = LOCALSTORAGE("lrcY", globalY + globalHeight);
const initialState: InsetState = {
  POSITION: true,
  SCREEN: "normal",
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

const MINWIDTH = 1022;
const MINHEIGHT = 670;

const slice = createSlice({
  name: "inset",
  initialState,
  reducers: {
    setGlobalInset(state, action) {
      const x = action.payload.x - state.globalStartX + state.globalBeforeX;
      const y = action.payload.y - state.globalStartY + state.globalBeforeY;
      window.localStorage.setItem("x", x);
      window.localStorage.setItem("y", y);
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

      const nextwidth = width > MINWIDTH ? width : MINWIDTH;
      const nextheight = height > MINHEIGHT ? height : MINHEIGHT;
      window.localStorage.setItem("width", nextwidth);
      window.localStorage.setItem("height", nextheight);
      state.globalWidth = nextwidth;
      state.globalHeight = nextheight;
      state.GlobalRectLock = false;
    },
    setScreenFull(state, action) {
      state.SCREEN = "full";
    },
    setScreenNormal(state, action) {
      state.SCREEN = "normal";
    },
    setPositionTrue(state, action) {
      state.POSITION = true;
    },
    setPositionFalse(state, action) {
      state.POSITION = false;
    },
    setGlobalLrcInset(state, action) {
      const lrcX =
        action.payload.x - state.globalStartLrcX + state.globalBeforeLrcX;
      const lrcY =
        action.payload.y - state.globalStartLrcY + state.globalBeforeLrcY;
      window.localStorage.setItem("lrcX", lrcX);
      window.localStorage.setItem("lrcY", lrcY);
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
  setScreenFull,
  setScreenNormal,
} = slice.actions;
