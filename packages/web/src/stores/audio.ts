import { create } from "zustand";
import { persist } from "zustand/middleware";
import { audioPattern } from "@/common/config";

type Song = { id?: number; [key: string]: any };

export interface AudioState {
  src: string;
  errorCount: number;
  running: boolean;
  dropping: boolean;
  currentSong: Song;
  playlist: Song[];
  history: Song[];
  currentTime: number;
  jumpTime: number | null;
  buffered: any[];
  lyric: any;
  lrcList: any[];
  pattern: number;
  setAudioSrc: (payload: { src: string }) => void;
  setAudioImmediate: (payload: { currentSong: Song }) => void;
  setAudioImmediateNext: (payload: { currentSong: Song }) => void;
  setAudioPlaylist: (payload: { playlist: Song[] }) => void;
  setAudioPlaylistAdd: (payload: { playlist: Song[] }) => void;
  setAudioPrev: () => void;
  setAudioNext: () => void;
  setAudioCurrent: (payload?: unknown) => void;
  setAudioRunning: (payload: { running: boolean }) => void;
  setAudioRunningPlay: () => void;
  setAudioRunningPause: () => void;
  setAudioRunningToggle: () => void;
  setAudioDropping: (payload: { dropping: boolean }) => void;
  setAudioCurrentTime: (payload: { currentTime: number }) => void;
  setJumpToAudioCurrentTime: (jumpTime: number) => void;
  setAudioBuffered: (buffered: any[]) => void;
  setAudioPlaylistClear: () => void;
  setAudioHistoryClear: () => void;
  setAudioPattern: () => void;
  setRunErrorAdd: () => void;
  setRunErrorDesc: () => void;
}

const resetProgress = (state: AudioState) => ({
  jumpTime: null,
  currentTime: 0,
  buffered: [],
  running: true,
});

const withNextSong = (state: AudioState, song: Song): Song[] => {
  if (!song || state.playlist.some((item) => item.id === song.id)) {
    return state.playlist;
  }
  const index = state.playlist.findIndex(
    (item) => item.id === state.currentSong.id
  );
  const playlist = [...state.playlist];
  playlist.splice(index + 1, 0, song);
  return playlist;
};

const withHistory = (state: AudioState, song: Song): Song[] => {
  if (!song) return state.history;
  const history = state.history.filter((item) => item.id !== song.id);
  return [{ ...song, lastTime: Date.now() }, ...history];
};

export const useAudioStore = create<AudioState>()(
  persist(
    (set) => ({
      src: "",
      errorCount: 0,
      running: false,
      dropping: false,
      currentSong: {},
      playlist: [],
      history: [],
      currentTime: 0,
      jumpTime: null,
      buffered: [],
      lyric: {},
      lrcList: [],
      pattern: 0,
      setAudioSrc: ({ src }) => set({ src }),
      setAudioImmediate: ({ currentSong }) =>
        set((state) => ({
          ...resetProgress(state),
          playlist: withNextSong(state, currentSong),
          history: withHistory(state, currentSong),
          currentSong,
        })),
      setAudioImmediateNext: ({ currentSong }) =>
        set((state) => ({ playlist: withNextSong(state, currentSong) })),
      setAudioPlaylist: ({ playlist }) =>
        set((state) => {
          const currentSong = playlist[0] ?? {};
          return {
            ...resetProgress(state),
            playlist,
            currentSong,
            history: withHistory(state, currentSong),
          };
        }),
      setAudioPlaylistAdd: ({ playlist = [] }) =>
        set((state) => ({
          playlist: playlist.reduce<Song[]>(
            (result, song) =>
              result.some((item) => item.id === song.id)
                ? result
                : [...result, song],
            state.playlist
          ),
        })),
      setAudioPrev: () =>
        set((state) => {
          if (state.playlist.length === 0) return state;
          const len = state.playlist.length;
          const currentIndex = state.playlist.findIndex(
            (item) => item.id === state.currentSong.id
          );
          const currentSong =
            state.playlist[(currentIndex + len - 1) % len] ?? {};
          return {
            ...resetProgress(state),
            currentSong,
            history: withHistory(state, currentSong),
          };
        }),
      setAudioNext: () =>
        set((state) => {
          if (state.playlist.length === 0) return state;
          const len = state.playlist.length;
          const currentIndex = state.playlist.findIndex(
            (item) => item.id === state.currentSong.id
          );
          const currentSong = state.playlist[(currentIndex + 1) % len] ?? {};
          return {
            ...resetProgress(state),
            currentSong,
            history: withHistory(state, currentSong),
          };
        }),
      setAudioCurrent: () => {},
      setAudioRunning: ({ running }) =>
        set((state) => {
          if (state.currentSong?.id) return { running };
          if (state.playlist.length > 0) {
            const currentSong = state.playlist[0];
            return {
              ...resetProgress(state),
              playlist: withNextSong(state, currentSong),
              history: withHistory(state, currentSong),
              currentSong,
            };
          }
          return { running: false };
        }),
      setAudioRunningPlay: () => set({ running: true }),
      setAudioRunningPause: () => set({ running: false }),
      setAudioRunningToggle: () => set((state) => ({ running: !state.running })),
      setAudioDropping: ({ dropping }) => set({ dropping }),
      setAudioCurrentTime: ({ currentTime }) => set({ currentTime }),
      setJumpToAudioCurrentTime: (jumpTime) => set({ jumpTime }),
      setAudioBuffered: (buffered) => set({ buffered }),
      setAudioPlaylistClear: () =>
        set({
          running: false,
          currentTime: 0,
          currentSong: {},
          playlist: [],
        }),
      setAudioHistoryClear: () => set({ history: [] }),
      setAudioPattern: () =>
        set((state) => ({
          pattern: (state.pattern + 1) % audioPattern.length,
        })),
      setRunErrorAdd: () =>
        set((state) => ({ errorCount: state.errorCount + 1 })),
      setRunErrorDesc: () =>
        set((state) => ({ errorCount: state.errorCount - 1 })),
    }),
    {
      name: "wyy-audio",
      version: 1,
      partialize: (state) => ({
        playlist: state.playlist,
        currentSong: state.currentSong,
        history: state.history,
        pattern: state.pattern,
      }),
    }
  )
);
