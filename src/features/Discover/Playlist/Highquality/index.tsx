import React, { useEffect, useRef, useState, memo } from "react";
import { Link, NavLink, useParams } from "react-router-dom";
import { IconFilter, IconPlayerPlay, IconCrown } from "@tabler/icons";
import classNames from "classnames";
import { apiTopPlaylistHighquality, apiPlaylistHighqualityTags } from "@/api";
import { transPlayCount } from "@/common/utils";
import useInfinite from "@/hooks/useInfinite";
import DomPlaylistAsyncReplace from "@/components/GroupPlay/PlaylistAsyncReplace";
import DomTagsBox from "@/components/Tags/Box";

export default memo(function Highquality() {
  console.log("home_playlist_high");
  const { cat } = useParams();
  const [data, setData] = useState([]);
  const [tags, setTags] = useState([]);
  const before = useRef(0);
  const [showPopup, setShowPopup] = useState(false);
  const domObserver = useRef(null);
  const domScroll = useRef(null);
  const handleBeforeInit = async () => {
    try {
      const { tags = [] } = await apiPlaylistHighqualityTags();
      setTags(tags);
    } catch (error) {
      console.log(error);
    }
  };
  const handleInit = async () => {
    try {
      const { playlists = [], lasttime } = await apiTopPlaylistHighquality({
        cat,
        limit: 20,
        before: before.current,
      });
      before.current = lasttime;
      setData((data) => [...data, ...playlists]);
    } catch (error) {
      console.log(error);
    }
  };

  useInfinite(handleInit, domScroll, domObserver);

  useEffect(() => {
    handleBeforeInit();
  }, []);

  useEffect(() => {
    setData([]);
  }, [cat]);

  return (
    <div
      className="domHome_playlist_highquality px-8 overflow-auto flex-auto"
      ref={domScroll}
    >
      <div className="py-3 flex items-center justify-between">
        <div className="flex items-center">
          <span className="font-bold text-xl">精品歌单</span>
          &nbsp;
          <a
            href="https://music.163.com/#/topic?id=202001"
            className="flex-center w-4 h-4 border rounded-full text-gray-400 hover:text-gray-500 border-current"
          >
            ?
          </a>
        </div>
        <div className="relative">
          <button
            onClick={() => setShowPopup(!showPopup)}
            type="button"
            className="flex items-center border hover:bg-gray-100 rounded-full px-2 py-1"
          >
            <IconFilter size={16} stroke={1} />
            {cat}
          </button>
          <div
            className="absolute divide-y bg-white top-8 right-0 z-10 shadow rounded-lg"
            style={{ width: 510, display: showPopup ? null : "none" }}
          >
            <div className="py-4 px-6">
              <NavLink
                className={({ isActive }) =>
                  classNames(
                    "item hover:ui_themeColor text-sm",
                    isActive && "ui_themeColor"
                  )
                }
                onClick={() => setShowPopup(false)}
                to="./全部歌单"
              >
                <span
                  className={classNames(
                    "inline-flex inner px-3 py-1 rounded-full overflow-hidden",
                    { ui_bg_opacity: cat === "全部歌单" }
                  )}
                >
                  全部歌单
                </span>
              </NavLink>
            </div>
            <div className="p-6 grid grid-cols-5 gap-y-4">
              {tags.map((item) => (
                <NavLink
                  onClick={() => setShowPopup(false)}
                  to={item.name}
                  className={({ isActive }) =>
                    classNames(
                      "item hover:ui_themeColor text-sm whitespace-nowrap",
                      isActive && "ui_themeColor"
                    )
                  }
                  key={item.id}
                >
                  <span
                    className={classNames(
                      "inline-flex inner px-3 py-1 rounded-full overflow-hidden",
                      { ui_bg_opacity: item.name === cat }
                    )}
                  >
                    {item.name}
                  </span>
                </NavLink>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="domHome_playlist_highquality_list grid gap-6 grid-cols-2">
        {data.map((item) => (
          <div className="item flex" key={item.id}>
            <div className="cover w-32 h-32 rounded-lg group overflow-hidden flex-none relative">
              <Link to={`/playlist/music/${item.id}`} className="">
                <span className="absolute top-0 left-0 p-0.5 w-8 h-8 bg-yellow-500 text-white ui_angle_top_left">
                  <IconCrown size={14} className="transform -rotate-45" />
                </span>
                <img
                  loading={`lazy`}
                  src={`${item.coverImgUrl}?param=200y200`}
                  className={`ui_aspect-ratio-1/1`}
                  alt=""
                />
                <div className="absolute text-white top-0 right-0 py-1 px-2 flex-center">
                  <IconPlayerPlay size={12} />
                  {transPlayCount(item.playCount)}
                </div>
              </Link>
              <DomPlaylistAsyncReplace
                id={item.id}
                className="playArrow opacity-0 group-hover:opacity-100 ui_themeColor absolute right-0 bottom-0 m-2 p-2 bg-white bg-opacity-90 rounded-full"
              >
                <IconPlayerPlay size={16} className="fill-current" />
              </DomPlaylistAsyncReplace>
            </div>
            <div className="ml-2 flex-auto w-0 pt-5">
              <div className="text-sm truncate ui_text_black_hover">
                <Link to={`/playlist/music/${item.id}`} className="">
                  {item.name}
                </Link>
              </div>
              <div className="mt-3 flex items-center ui_text_gray_hover">
                by&nbsp;
                <Link to={`/user/${item.userId}`} className="">
                  {item.creator.nickname}
                </Link>
                &nbsp;
                {item?.creator?.avatarDetail?.identityIconUrl && (
                  <img
                    className="w-3 h-3"
                    src={item.creator.avatarDetail.identityIconUrl}
                    alt=""
                  />
                )}
              </div>
              <div className="mt-4 text-gray-300 flex items-center">
                <DomTagsBox text={item.tag} className="flex-none mr-1" />
                <span className="flex-auto truncate">{item.copywriter}</span>
              </div>
            </div>
          </div>
        ))}
        <div ref={domObserver} />
      </div>
    </div>
  );
});
