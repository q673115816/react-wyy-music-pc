import React, { useEffect, memo } from "react";
import { Link } from "react-router";
import { useDrag } from "@use-gesture/react";

import { apiPost } from "@/shared/api/client";

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
      const { profile } = await apiPost("/user/account");
      if (profile) {
        const { profile: accountDetail, bindings } = await apiPost("/user/detail", {
          uid: profile.userId,
        });
        const { playlist } = await apiPost("/user/playlist", { uid: profile.userId });
        const {} = await apiPost("/playlist/mylike");
        const { ids: likelist } = await apiPost("/likelist", { uid: profile.userId });
        const { data: artistSublist } = await apiPost("/artist/sublist");
        const { data: mvSublist } = await apiPost("/mv/sublist");
        const { data: topicSublist } = await apiPost("/topic/sublist");
        const { data: albumSublist } = await apiPost("/album/sublist");
        useAccountStore.getState().setLoginInfo({
          profile: { ...profile, ...accountDetail },
          playlist,
          bindings,
          likelist,
          artistSublist,
          mvSublist,
          topicSublist,
          albumSublist,
        });
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
  const bind = useDrag(({ first, xy: [x, y] }) => {
    if (first) useInsetStore.getState().setGlobalStartInset({ x, y });
    useInsetStore.getState().setGlobalInset({ x, y });
  });

  return <div {...bind()} title="长按拖拽" className="absolute inset-0 z-0 w-full" />;
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
        <Link to="/ai" className="bg-black/5 w-8 h-8 rounded-full text-white flex-center z-10">
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
