import React, { FC, memo } from "react";
import { Link } from "react-router-dom";
import { IconPlayerPlay } from "@tabler/icons";
import { transPlayCount } from "@/common/utils";
import { SymbolToday } from "@/components/Symbol";
import PlaylistAsyncReplace from "@/components/GroupPlay/PlaylistAsyncReplace";
import { useAppSelector } from "@/modules/hooks";
import { Resource } from "@/modules/services/discover";
import { accountSelector } from "@/modules/reducers/account/slice";

interface iProps {
  playlist: Resource[];
}

const playlist: FC<iProps> = ({ playlist = [] }) => {
  const { isLogin } = useAppSelector(accountSelector);
  if (!isLogin) return <div>需要登录</div>;
  return (
    <div className="grid gap-5 grid-cols-5 mt-4">
      <div className="item">
        <div className="cover border relative group rounded-lg overflow-hidden">
          <Link to="/daily-song" className="aspect-square">
            <div className="inner" style={{ color: "var(--theme-color)" }}>
              <SymbolToday />
            </div>
          </Link>
          <button
            type="button"
            className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 absolute m-2 right-0 bottom-0 rounded-full flex-center w-7 h-7 bg-white bg-opacity-90 ui_themeColor"
          >
            <IconPlayerPlay size={16} className="fill-current" />
          </button>
        </div>
        <div className="footer break-all text-sm mt-2">
          <Link to="/daily-song">每日歌曲推荐</Link>
        </div>
      </div>
      {playlist.slice(0, 9).map((item) => (
        <div key={item.id} className="item">
          <div className="cover relative group rounded-lg overflow-hidden border">
            <Link to={`/playlist/music/${item.id}`} className="">
              <img
                loading={`lazy`}
                className="ui_containimg aspect-square"
                src={`${item.picUrl}?param=200y200`}
                alt=""
              />
              <div className="absolute top-0 right-0 my-0.5 mx-2">
                <span className="text-white flex-center">
                  <IconPlayerPlay size={12} />
                  {transPlayCount(item.playcount)}
                </span>
              </div>
            </Link>
            <PlaylistAsyncReplace
              id={item.id}
              className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 absolute m-2 right-0 bottom-0 rounded-full flex-center w-7 h-7 bg-white bg-opacity-90 ui_themeColor"
            >
              <IconPlayerPlay size={16} className="fill-current" />
            </PlaylistAsyncReplace>
          </div>
          <div className="footer break-all text-sm mt-2">
            <Link to={`/playlist/music/${item.id}`} className="name ui_ellipse">
              {item.name}
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default memo(playlist);
