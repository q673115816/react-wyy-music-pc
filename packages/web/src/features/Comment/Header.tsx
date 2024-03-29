import { IconPlayerPlay } from "@tabler/icons";
import { Link, useParams } from "react-router-dom";
import React, { FC, memo, useEffect } from "react";
import { useGetSongDetailQuery } from "@/modules/services/song";
import Loading from "@/components/Loading";
import {
  useGetMVDetailQuery,
  useGetVideoDetailQuery,
} from "@/modules/services/player";

const apis = {
  song: useGetSongDetailQuery,
  video: useGetMVDetailQuery,
  mv: useGetVideoDetailQuery,
};

const Header: FC = () => {
  const { id, type } = useParams();
  const { data, isFetching, isSuccess } = apis[type]({ ids: id });
  if (isFetching) return <Loading />;
  const detail = data.songs[0];
  if (isSuccess)
    return (
      <div className="flex">
        <div className="cover h-20 rounded overflow-hidden relative">
          <img
            loading={"lazy"}
            className="h-full"
            src={detail.al.picUrl}
            alt=""
          />
          <div className="ico absolute inset-0 m-auto flex-center w-8 h-8 ui_themeColor rounded-full bg-white bg-opacity-90">
            <IconPlayerPlay size={16} className="fill-current" />
          </div>
        </div>
        <div className="content px-6 py-2">
          <div className="title text-lg">
            {detail.name}
            <span className={"text-gray-500"}>
              {detail.alia.length > 0 && `(${detail.alia})`}
            </span>
          </div>
          <div className="info text-gray-500 mt-2 space-x-5">
            <span>
              专辑：
              <Link
                className="ui_text_gray_hover"
                to={`/playlist/album/${detail.al.id}`}
              >
                {detail.al?.name}
              </Link>
            </span>
            <span>
              歌手：
              {detail.ar.map((item, index) => (
                <span key={item.id}>
                  {index > 0 && " / "}
                  <Link
                    className="ui_text_gray_hover"
                    to={`/artist/${item.id}`}
                  >
                    {item.name}
                  </Link>
                </span>
              ))}
            </span>
          </div>
        </div>
      </div>
    );
};

export default memo(Header);
