import React, { FC, memo } from "react";
import { useGetTopSongQuery } from "@/modules/services/discover/newest";
import { songCode, SongConfigType } from "@/features/Discover/Newest/config";
import Loading from "@/components/Loading";
import classNames from "classnames";
import { IconPlayerPlay } from "@tabler/icons";
import Tags from "@/components/Tags";
import { Link, useParams } from "react-router-dom";
import dayjs from "dayjs";
import Artists from "@/components/Table/Artists";

const Song: FC = () => {
  const { type = "" } = useParams();
  const { data, isLoading, isFetching } = useGetTopSongQuery({
    type: songCode[type],
  });
  if (isLoading) return <Loading />;

  return (
    <div className="">
      {data?.data?.map((item, index) => (
        <div
          key={item.id}
          className={classNames("h-20 py-2.5 flex items-center px-8 text-sm", {
            "bg-gray-50": index % 2 === 0,
          })}
        >
          <span className="text-gray-300 w-8">
            {String(index + 1).padStart(2, "0")}
          </span>
          <button
            type="button"
            className="w-16 relative rounded overflow-hidden border"
          >
            <img
              loading={`lazy`}
              className="aspect-square w-full h-full"
              src={`${item.album.blurPicUrl}?param=100y100`}
              alt=""
            />
            <i className="absolute w-6 h-6 m-auto flex-center inset-0 ui_themeColor bg-white bg-opacity-90 rounded-full">
              <IconPlayerPlay size={14} className="fill-current" />
            </i>
          </button>
          <span className="px-2.5 w-0 flex items-center flex-auto">
            <div className="truncate">{item.name}</div>
            <Tags item={item} mv={item.mvid} />
          </span>
          <span className="truncate w-1/5 px-1">
            <Artists artists={item.artists} />
          </span>
          <span className="truncate w-1/5 px-1">
            <Link to={`${item.album.id}`} className="ui_text_gray_hover">
              {item.album.name}
            </Link>
          </span>
          <span className="text-gray-400 text-right">
            {dayjs(item.duration).format("mm:ss")}
          </span>
        </div>
      ))}
    </div>
  );
};

export default memo(Song);
