import { create } from "zustand";
import { persist } from "zustand/middleware";

export interface Profile {
  userId?: number;
  nickname?: string;
  avatarUrl?: string;
  [key: string]: any;
}

export interface PlaylistState {
  id: number;
  privacy: number;
  name: string;
  subscribed: boolean;
  [key: string]: any;
}

export interface AccountState {
  uid: number | null;
  isLogin: boolean;
  profile: Profile;
  playlist: PlaylistState[];
  bindings: any[];
  likelist: number[];
  artistSublist: any[];
  topicSublist: any[];
  albumSublist: any[];
  mvSublist: any[];
  reset: () => void;
  setLoginInfo: (payload: Partial<AccountState>) => void;
  setLoginInfoUpdate: (payload: { profile: Profile }) => void;
  setLikelist: (payload: { likelist: number[] }) => void;
  setPlaylist: (payload: { playlist: PlaylistState[] }) => void;
  setLikelistAdd: (payload: { id: number }) => void;
  setLikelistDel: (payload: { id: number }) => void;
  setArtistSublist: (payload: { artistSublist: any[] }) => void;
  setArtistSublistAdd: (payload?: unknown) => void;
  setTopicSublist: (payload: { topicSublist: any[] }) => void;
  setAlbumSublist: (payload: { albumSublist: any[] }) => void;
  setMVSublist: (payload: { mvSublist: any[] }) => void;
}

const initialState = {
  uid: null,
  isLogin: false,
  profile: {},
  playlist: [],
  bindings: [],
  likelist: [],
  artistSublist: [],
  topicSublist: [],
  albumSublist: [],
  mvSublist: [],
};

export const useAccountStore = create<AccountState>()(
  persist(
    (set) => ({
      ...initialState,
      reset: () => set({ ...initialState }),
      setLoginInfo: (payload) =>
        set((state) => ({
          ...state,
          ...payload,
          isLogin: true,
          uid: payload.profile?.userId ?? state.uid,
        })),
      setLoginInfoUpdate: ({ profile }) =>
        set({ profile, uid: profile.userId ?? null }),
      setLikelist: ({ likelist }) => set({ likelist }),
      setPlaylist: ({ playlist }) => set({ playlist }),
      setLikelistAdd: ({ id }) =>
        set((state) =>
          state.likelist.includes(id)
            ? state
            : { likelist: [...state.likelist, id] }
        ),
      setLikelistDel: ({ id }) =>
        set((state) => ({
          likelist: state.likelist.filter((item) => item !== id),
        })),
      setArtistSublist: ({ artistSublist }) => set({ artistSublist }),
      setArtistSublistAdd: () => {},
      setTopicSublist: ({ topicSublist }) => set({ topicSublist }),
      setAlbumSublist: ({ albumSublist }) => set({ albumSublist }),
      setMVSublist: ({ mvSublist }) => set({ mvSublist }),
    }),
    {
      name: "wyy-account",
      version: 1,
      partialize: (state) => ({
        uid: state.uid,
        isLogin: state.isLogin,
        profile: state.profile,
        playlist: state.playlist,
        bindings: state.bindings,
        likelist: state.likelist,
        artistSublist: state.artistSublist,
        topicSublist: state.topicSublist,
        albumSublist: state.albumSublist,
        mvSublist: state.mvSublist,
      }),
    }
  )
);
