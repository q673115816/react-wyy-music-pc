import { create } from "zustand";
import formatLrc from "@/common/formatLrc";

export interface LrcLine {
  time: number;
  word: string;
}

export interface Lyric {
  lrc?: { lyric?: string };
  tlyric?: { lyric?: string };
}

interface LrcState {
  lyricVisibility: boolean;
  lyric: Lyric;
  lrcList: LrcLine[];
  setLyricText: (lyric: Lyric) => void;
  setLyricShow: () => void;
  setLyricHide: () => void;
  setLyricToggle: () => void;
}

const TIME_TAG_REG = /\[(\d*):(\d*\.?\d*)\]/;

const parseLyric = (lyric: Lyric): LrcLine[] => {
  const temp = new Map<string, string>();

  formatLrc(lyric?.lrc?.lyric, (onetime, word) => {
    temp.set(onetime, word);
  });

  formatLrc(lyric?.tlyric?.lyric, (onetime, word) => {
    const current = temp.get(onetime);
    if (current !== undefined) temp.set(onetime, `${current}\n${word}`);
  });

  return [...temp.entries()]
    .map(([tag, word]) => {
      const matched = tag.match(TIME_TAG_REG);
      if (!matched) return null;
      return {
        time: Number(matched[1]) * 60 + Number(matched[2]),
        word,
      };
    })
    .filter((line): line is LrcLine => line !== null && Number.isFinite(line.time))
    .sort((a, b) => a.time - b.time);
};

export const useLrcStore = create<LrcState>()((set) => ({
  lyricVisibility: false,
  lyric: {},
  lrcList: [],
  setLyricText: (lyric) => set({ lyric, lrcList: parseLyric(lyric) }),
  setLyricShow: () => set({ lyricVisibility: true }),
  setLyricHide: () => set({ lyricVisibility: false }),
  setLyricToggle: () =>
    set((state) => ({ lyricVisibility: !state.lyricVisibility })),
}));
