import { create } from "zustand";
import { persist } from "zustand/middleware";

const globalX = 0;
const globalY = 0;
const globalWidth = 1022;
const globalHeight = 670;
const globalLrcWidth = 550;
const globalLrcHeight = 100;
const globalLrcX = globalX + (globalWidth - globalLrcWidth) / 2;
const globalLrcY = globalY + globalHeight;

const MIN_WIDTH = 1022;
const MIN_HEIGHT = 670;

export interface InsetState {
  POSITION: boolean;
  globalVisibility: boolean;
  globalDragger: boolean;
  globalStartX: number;
  globalStartY: number;
  globalBeforeX: number;
  globalBeforeY: number;
  globalX: number;
  globalY: number;
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
  setGlobalInset: (payload: { x: number; y: number }) => void;
  setGlobalStartInset: (payload: { x: number; y: number }) => void;
  setGlobalDragger: (dragger: boolean) => void;
  setGlobalStartRect: (payload: { x: number; y: number }) => void;
  setGlobalRect: (payload: { x: number; y: number }) => void;
  togglePosition: () => void;
  setPositionTrue: () => void;
  setPositionFalse: () => void;
  setGlobalLrcInset: (payload: { x: number; y: number }) => void;
  setGlobalLrcStartInset: (payload: { x: number; y: number }) => void;
}

export const useInsetStore = create<InsetState>()(
  persist(
    (set) => ({
      POSITION: true,
      globalVisibility: false,
      globalDragger: false,
      globalStartX: 0,
      globalStartY: 0,
      globalBeforeX: globalX,
      globalBeforeY: globalY,
      globalX,
      globalY,
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
      setGlobalInset: ({ x, y }) =>
        set((state) => ({
          globalX: x - state.globalStartX + state.globalBeforeX,
          globalY: y - state.globalStartY + state.globalBeforeY,
        })),
      setGlobalStartInset: ({ x, y }) =>
        set((state) => ({
          globalStartX: x,
          globalStartY: y,
          globalBeforeX: state.globalX,
          globalBeforeY: state.globalY,
        })),
      setGlobalDragger: (globalDragger) => set({ globalDragger }),
      setGlobalStartRect: ({ x, y }) =>
        set((state) => ({
          globalStartRectX: x,
          globalStartRectY: y,
          globalBeforeWidth: state.globalWidth,
          globalBeforeHeight: state.globalHeight,
        })),
      setGlobalRect: ({ x, y }) =>
        set((state) => ({
          globalWidth: Math.max(
            x - state.globalStartRectX + state.globalBeforeWidth,
            MIN_WIDTH
          ),
          globalHeight: Math.max(
            y - state.globalStartRectY + state.globalBeforeHeight,
            MIN_HEIGHT
          ),
        })),
      togglePosition: () =>
        set((state) => ({ POSITION: !state.POSITION })),
      setPositionTrue: () => set({ POSITION: true }),
      setPositionFalse: () => set({ POSITION: false }),
      setGlobalLrcInset: ({ x, y }) =>
        set((state) => ({
          globalLrcX: x - state.globalStartLrcX + state.globalBeforeLrcX,
          globalLrcY: y - state.globalStartLrcY + state.globalBeforeLrcY,
        })),
      setGlobalLrcStartInset: ({ x, y }) =>
        set((state) => ({
          globalStartLrcX: x,
          globalStartLrcY: y,
          globalBeforeLrcX: state.globalLrcX,
          globalBeforeLrcY: state.globalLrcY,
        })),
    }),
    {
      name: "wyy-inset",
      version: 1,
      partialize: (state) => ({
        POSITION: state.POSITION,
        globalVisibility: state.globalVisibility,
        globalX: state.globalX,
        globalY: state.globalY,
        globalWidth: state.globalWidth,
        globalHeight: state.globalHeight,
        globalLrcX: state.globalLrcX,
        globalLrcY: state.globalLrcY,
        globalLrcWidth: state.globalLrcWidth,
        globalLrcHeight: state.globalLrcHeight,
      }),
    }
  )
);
