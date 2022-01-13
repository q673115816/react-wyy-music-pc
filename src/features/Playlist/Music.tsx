import React, {
  useEffect,
  useState,
  memo,
  useCallback,
  useMemo,
  ReactNode,
  createElement,
} from "react";

import { apiPlaylistDetail, apiPlaylistSubscribe, apiSongDetail } from "@/api";

import { setToast } from "@/reducers/mask/slice";
import classNames from "classnames";
import Loading from "@/components/Loading";

import Header from "./components/Header";
import Playlist from "./components/Playlist";
import Comments from "./components/Comments";
import Subscribers from "./components/Subscribers";
import { useAppDispatch } from "@/reducers/hooks";
import { useParams } from "react-router-dom";
import { useImmer } from "use-immer";

type Paths = "Playlist" | "Comments" | "Subscribers";

const navs: [string, Paths][] = [
  ["歌曲列表", "Playlist"],
  ["评论", "Comments"],
  ["收藏者", "Subscribers"],
];

const Contents: { [key in Paths]: ReactNode } = {
  Playlist,
  Comments,
  Subscribers,
};

export default memo(function Playlist() {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const [loading, setLoading] = useState(true);
  const [songs, setSongs] = useState([]);
  const [data, setData] = useImmer({});
  // const [privileges, setPrivileges] = useState([]);
  const [status, setStatus] = useState(navs[0][1]);
  const handleInit = async () => {
    try {
      const data = await apiPlaylistDetail({
        id,
      });
      setData(data);
      if (data.playlist.trackCount > 0) {
        const { songs } = await apiSongDetail({
          ids: data.playlist.trackIds.map(({ id }) => id).join(","),
        });
        setSongs(songs);
      }
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  // TODO
  const handleSub = useCallback(
    async (isSub) => {
      try {
        const { code } = await apiPlaylistSubscribe({
          t: isSub ? 2 : 1,
          id,
        });
        if (code === 200) {
          dispatch(setToast(isSub ? "取消收藏成功！" : "收藏成功！"));
          setData((draft) => {
            draft.playlist.subscribed = !isSub;
          });
        }
      } catch (error) {
        console.log(error);
      }
    },
    [id]
  );

  useEffect(() => {
    handleInit();
  }, [id]);

  if (loading)
    return (
      <div className="w-full h-full flex-center">
        <Loading />
      </div>
    );
  return (
    <div className="overflow-auto h-full">
      <Header data={data} handleSub={handleSub} songs={songs} />
      <div className="mt-4">
        <div className="space-x-4 flex items-baseline px-8">
          {navs.map(([nav, code]) => (
            <button
              type="button"
              className={classNames(
                "text-sm",
                status === code && "font-bold ui_underline"
              )}
              key={nav}
              onClick={() => setStatus(code)}
            >
              {nav}
              {nav === "评论" && `(${data.playlist.commentCount})`}
            </button>
          ))}
        </div>
        <div>{createElement(Contents[status], { songs })}</div>
      </div>
    </div>
  );
});
