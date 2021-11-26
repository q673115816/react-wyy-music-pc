import React, { memo } from "react";
import { Link } from "react-router-dom";
import { IconPlayerPlay } from "@tabler/icons";
import { transPlayCount } from "@/common/utils";
import { SymbolToday } from "@/components/Symbol";
import DomPlaylistAsyncReplace from "@/components/GroupPlay/PlaylistAsyncReplace";
import { useAppSelector } from "@/reducers/hooks";

export default memo(({ playlist = [] }) => {
  const { isLogin } = useAppSelector(({ common }) => common);
  if (!isLogin) return <div>需要登录</div>;
  return (
    <div className="domHome_recommend_playlist grid gap-5 grid-cols-5 mt-4">
      <div className="item">
        <div className="cover border relative group rounded-lg overflow-hidden">
          <Link to="/daily-song" className="ui_aspect-ratio-1/1">
            <div className="inner" style={{ color: "var(--themeColor)" }}>
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
                className="ui_containimg ui_aspect-ratio-1/1"
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
            <DomPlaylistAsyncReplace
              id={item.id}
              className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 absolute m-2 right-0 bottom-0 rounded-full flex-center w-7 h-7 bg-white bg-opacity-90 ui_themeColor"
            >
              <IconPlayerPlay size={16} className="fill-current" />
            </DomPlaylistAsyncReplace>
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
});
