import React, { FC, memo } from "react";
import { useGetPlaylistDetailQuery } from "@/modules/services/playlist";
import { Link } from "react-router-dom";
import dayjs from "dayjs";
import { IconPlayerPlay } from "@tabler/icons";
import Content from "./Content";
import Loading from "@/components/Loading";

interface iProps {
  id: number;
}

const Detail: FC<iProps> = ({ id }) => {
  const { data, isLoading } = useGetPlaylistDetailQuery({ id });
  const playlist = data?.playlist || {};
  if (isLoading) return <Loading />;
  return (
    <div className="official_rank flex">
      <Link
        to={`/playlist/music/${playlist.id}`}
        className="official_rank_cover mr-9 w-44 h-44 flex-none rounded-lg overflow-hidden relative group"
      >
        <img
          className="ui_containimg"
          src={`${playlist.coverImgUrl}?param=176y176`}
          alt=""
        />
        <div className="absolute inset-0 m-auto flex-center text-white">
          <span className="pt-16">
            {dayjs(playlist.updateTime).format("MM月DD日")}
            更新
          </span>
        </div>
        <button
          type="button"
          className="opacity-0 group-hover:opacity-100 absolute inset-0 m-auto flex-center rounded-full w-10 h-10 text-red-500 bg-white bg-opacity-50"
        >
          <IconPlayerPlay size={22} className="fill-current" />
        </button>
      </Link>
      <div className="official_rank_content flex-auto relative">
        <Content tracks={playlist.tracks.slice(0, 5)} />
        <Link
          to={`/playlist/music/${playlist.id}`}
          className="text-gray-400 hover:text-gray-500 absolute mt-2"
        >
          查看全部 &gt;
        </Link>
      </div>
    </div>
  );
};
export default memo(Detail);
