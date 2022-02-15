import { Link, useParams } from "react-router-dom";
import React, { memo } from "react";
import classNames from "classnames";
import { IconPlayerPlay } from "@tabler/icons";
import Tags from "@/components/Tags";
import dayjs from "dayjs";
import { songConfig, SongConfigType } from "./config";
import { useGetTopSongQuery } from "@/modules/services/discover";
import Loading from "@/components/Loading";

const Song = () => {
  const { type = "" } = useParams();
  const { data, isLoading } = useGetTopSongQuery({
    type: songConfig[type as SongConfigType],
  });
  if (isLoading) {
    return (
      <div className={`flex-center`}>
        <Loading />
      </div>
    );
  }
  return (
    <div className="domHome_newest_song_list">
      {data?.data?.map((item, index) => (
        <div
          key={item.id}
          className={classNames(
            "item h-20 py-2.5 flex items-center px-8 text-sm",
            {
              "bg-gray-50": index % 2 === 0,
            }
          )}
        >
          <span className="ranking text-gray-300 w-8">
            {String(index + 1).padStart(2, "0")}
          </span>
          <button
            type="button"
            className="cover w-16 relative rounded overflow-hidden border"
          >
            <img
              loading={`lazy`}
              className="aspect-square"
              src={`${item.album.blurPicUrl}?param=100y100`}
              alt=""
            />
            <i className="ico absolute w-6 h-6 m-auto flex-center inset-0 ui_themeColor bg-white bg-opacity-90 rounded-full">
              <IconPlayerPlay size={14} className="fill-current" />
            </i>
          </button>
          <span className="name px-2.5 w-0 flex items-center flex-auto">
            <div className="truncate">{item.name}</div>
            <Tags item={item} mv={item.mvid} />
          </span>
          <span className="artists truncate w-1/5 px-1">
            {item.artists.map((artist, index) => (
              <span key={artist.id}>
                {index > 0 && " / "}
                <Link
                  to={`/artist/${artist.id}`}
                  className="ui_text_gray_hover"
                >
                  {artist.name}
                </Link>
              </span>
            ))}
          </span>
          <span className="album truncate w-1/5 px-1">
            <Link
              to={`/playlist/album/${item.album.id}`}
              className="ui_text_gray_hover"
            >
              {item.album.name}
            </Link>
          </span>
          <span className="duration text-gray-400 text-right">
            {dayjs(item.duration).format("mm:ss")}
          </span>
        </div>
      ))}
    </div>
  );
};

export default memo(Song);
