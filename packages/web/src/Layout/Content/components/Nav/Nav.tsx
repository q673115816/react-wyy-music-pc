import React, { FC, memo, useMemo, useState } from "react";
import { NavLink } from "react-router-dom";
import {
  IconCloudDownload,
  IconCloud,
  IconBrandTiktok,
  IconStar,
  IconHistory,
  TablerIcon,
} from "@tabler/icons";
import classNames from "classnames";
import { useAppSelector } from "@/modules/hooks";
import style from "./style.module.scss";
import Playlist from "../Playlist";
import { AccountState } from "@/modules/reducers/account/slice";

interface CustomLinkProps {
  name: string;
  link: string;
  Ico?: TablerIcon;
  needLogin?: boolean;
  activeClassName?: string;
}

interface NavListProps {
  name: string;
  link: string;
  Ico?: TablerIcon;
  needLogin?: boolean;
}

const options1: NavListProps[] = [
  {
    name: "发现音乐",
    link: "/discover",
  },
  {
    name: "播客",
    link: "/",
  },
  {
    name: "视频",
    link: "/video",
  },
  {
    name: "关注",
    link: "/friend",
  },
  {
    name: "直播",
    link: "/",
  },
  {
    name: "私人FM",
    link: "/fm",
  },
];

const options2: NavListProps[] = [
  {
    name: "本地与下载",
    link: "/message",
    Ico: IconCloudDownload,
  },
  {
    name: "最近播放",
    link: "/history",
    Ico: IconHistory,
  },
  {
    name: "我的音乐云盘",
    link: "/cloud",
    Ico: IconCloud,
    needLogin: true,
  },
  {
    name: "我的播客",
    link: "/dj",
    Ico: IconBrandTiktok,
    needLogin: true,
  },
  {
    name: "我的收藏",
    link: "/sublist",
    Ico: IconStar,
    needLogin: true,
  },
];

const CustomLink: FC<CustomLinkProps> = ({
  name,
  link,
  Ico,
  activeClassName,
}) => (
  <NavLink
    className={({ isActive }) =>
      classNames(
        "flex text-sm p-2 items-center hover:bg-gray-100",
        isActive && ["bg-gray-100", activeClassName]
      )
    }
    to={link}
  >
    {Ico && <Ico size={20} stroke={1} className="mr-1" />}
    {name}
  </NavLink>
);

export default memo(function Nav() {
  const { playlist } = useAppSelector<AccountState>(({ account }) => account);
  const { isLogin } = useAppSelector(({ common }) => common);

  const ownPlaylist = useMemo(
    () => playlist.filter((item) => !item.subscribed),
    [playlist]
  );
  const subscribedPlaylist = useMemo(
    () => playlist.filter((item) => item.subscribed),
    [playlist]
  );
  return (
    <div
      className={classNames(
        style.nav,
        "overflow-auto max-h-full h-full flex-none p-2.5 pr-0.5"
      )}
    >
      <nav className="options1 space-y-0.5">
        {options1.map((item) => (
          <CustomLink
            {...item}
            key={item.name}
            activeClassName="font-bold text-base"
          />
        ))}
      </nav>
      <div className="text-sm text-gray-400 mx-3 my-2">我的音乐</div>
      <nav className="space-y-0.5">
        {options2.map(
          (item) =>
            (!item.needLogin || (item.needLogin && isLogin)) && (
              <CustomLink {...item} key={item.name} />
            )
        )}
      </nav>
      <Playlist name="创建的歌单" playlist={ownPlaylist} />
      {isLogin && <Playlist name="收藏的歌单" playlist={subscribedPlaylist} />}
    </div>
  );
});
