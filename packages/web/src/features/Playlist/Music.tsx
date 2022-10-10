import React, { useEffect, useState, memo, createElement, FC } from "react";

import classNames from "classnames";
import Loading from "@/components/Loading";

import Header from "./components/Header";
import Playlist from "./components/Playlist";
import Comments from "./components/Comments";
import Subscribers from "./components/Subscribers";
import { useParams } from "react-router-dom";
import {
  useLazyGetPlaylistDetailQuery,
  useLazyGetSongDetailQuery,
} from "@/modules/services/playlist";
import GroupPlay from "@/components/GroupPlay";

type Paths = "Playlist" | "Comments" | "Subscribers";

const navs: [string, Paths][] = [
  ["歌曲列表", "Playlist"],
  ["评论", "Comments"],
  ["收藏者", "Subscribers"],
];

const Contents: Record<Paths, FC<any>> = {
  Playlist,
  Comments,
  Subscribers,
};

const Music = () => {
  const { id = "" } = useParams();
  const [status, setStatus] = useState(navs[0][1]);
  const [playlistDetailGet, { data: playlistData }] =
    useLazyGetPlaylistDetailQuery();
  const [songDetailGet, { data: songsData, isSuccess }] =
    useLazyGetSongDetailQuery();

  useEffect(() => {
    (async () => {
      const { data } = await playlistDetailGet({ id });
      await songDetailGet({
        ids: data.playlist.trackIds.map(({ id }) => id).join(","),
      });
    })();
  }, [id]);

  if (!isSuccess)
    return (
      <div className="w-full h-full flex-center">
        <Loading />
      </div>
    );
  return (
    <div className="overflow-auto h-full">
      <Header data={playlistData}>
        <GroupPlay playlist={songsData.songs} />
      </Header>
      <div className="mt-4">
        <div className="space-x-4 flex items-baseline px-8">
          {navs.map(([nav, code]) => (
            <button
              type="button"
              className={classNames(
                "text-sm",
                status === code && "font-bold text-lg ui_underline"
              )}
              key={nav}
              onClick={() => setStatus(code)}
            >
              {nav}
              {nav === "评论" && `(${playlistData.playlist.commentCount})`}
            </button>
          ))}
        </div>
        <div>{createElement(Contents[status], { songs: songsData.songs })}</div>
      </div>
    </div>
  );
};

export default memo(Music);
