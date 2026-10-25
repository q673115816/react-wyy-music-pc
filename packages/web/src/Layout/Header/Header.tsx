import React, {
  useEffect,
  memo,
  useCallback,
  MouseEvent,
  MouseEventHandler,
} from "react";
import { Link } from "react-router";

import {
  apiUserAccount,
  apiMsgPrivate,
  apiUserPlaylist,
  apiUserDetail,
  apiLikelist,
  apiArtistSublist,
  apiMVSublist,
  apiTopicSublist,
  apiAlbumSublist,
  apiPlaylistMylike,
} from "@/api";

import Drag from "@/components/Drag";
import { IconMicrophone } from "@tabler/icons-react";

import VisitStack from "./components/VisitStack";
import Search from "./components/Search";
import Account from "./components/Account";
import Control from "./components/Control";
import Function from "./components/Function";
import "./style.scss";
import { useAccountStore, useInsetStore } from "@/stores";

const useInit = () => {

  const handleCookieInit = async () => {
    try {
      const { profile } = await apiUserAccount();
      if (profile) {
        const { profile: accountDetail, bindings } = await apiUserDetail({
          uid: profile.userId,
        });
        const { playlist } = await apiUserPlaylist({ uid: profile.userId });
        const {} = await apiPlaylistMylike();
        const { ids: likelist } = await apiLikelist({ uid: profile.userId });
        const { data: artistSublist } = await apiArtistSublist();
        const { data: mvSublist } = await apiMVSublist();
        const { data: topicSublist } = await apiTopicSublist();
        const { data: albumSublist } = await apiAlbumSublist();
        useAccountStore.getState().setLoginInfo({
            profile: { ...profile, ...accountDetail },
            playlist,
            bindings,
            likelist,
            artistSublist,
            mvSublist,
            topicSublist,
            albumSublist,
          })
        ;
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    void (async () => {
      await handleCookieInit();
    })();
  }, []);
};

const CustomDrag = memo(() => {
  const onMouseMove: MouseEventHandler = useCallback(
    ({ clientX: x, clientY: y }: MouseEvent) => {
      useInsetStore.getState().setGlobalInset({
          x,
          y,
        })
      ;
    },
    []
  );

  const onMouseUp: MouseEventHandler = useCallback(() => {
    // useInsetStore.getState().setGlobalDragger(false);
  }, []);

  const onMouseDown: MouseEventHandler = useCallback((e: MouseEvent) => {
    // useInsetStore.getState().setGlobalDragger(true);
    useInsetStore.getState().setGlobalStartInset({
        x: e.clientX,
        y: e.clientY,
      })
    ;
  }, []);
  return (
    <Drag
      className="absolute inset-0 z-0 w-full"
      title="长按拖拽"
      onMouseDown={onMouseDown}
      onMouseMove={onMouseMove}
      onMouseUp={onMouseUp}
    />
  );
});

const Header = () => {
  useInit();
  return (
    <div className="domHeader ui_theme_bg_color relative flex flex-none items-center text-white">
      <CustomDrag />
      <Link to="/" className="tracking-widest text-lg z-10 mx-5 w-56">
        网易云音乐
      </Link>
      <div className="flex items-center gap-2">
        <VisitStack />
        <Search />
        <Link
          to="/ai"
          className="bg-black/5 w-8 h-8 rounded-full text-white flex-center z-10"
        >
          <IconMicrophone size={18} />
        </Link>
      </div>
      <Account />
      <Function />
      <span className="mx-3 w-px h-4">|</span>
      <Control />
    </div>
  );
};

export default memo(Header);
