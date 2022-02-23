import React, { memo } from "react";
import { Link } from "react-router-dom";
import { IconPlayerPlay } from "@tabler/icons";
import { transPlayCount } from "@/common/utils";
import Loading from "@/components/Loading";
import { useGetTopListDetailQuery } from "@/modules/services/discover";
import Detail from "./Detail";

const TopList = () => {
  const { data, isLoading } = useGetTopListDetailQuery();
  const list = data?.list || [];
  if (isLoading)
    return (
      <div className="flex-center w-full h-full">
        <Loading />
      </div>
    );
  return (
    <div className="px-8 overflow-auto max-h-full flex-auto">
      <div className="ui_w1100">
        <div className="h1 mb-4">官方榜</div>
        <div className="space-y-12">
          {list.slice(0, 4).map(({ id }) => (
            <Detail id={id} key={id} />
          ))}
        </div>
        <div className="h1 mt-7 mb-4">全球榜</div>
        <div className="grid grid-cols-5 gap-5">
          {list.slice(4).map((item) => (
            <div className="flex flex-col" key={item.id}>
              <Link
                to={`/playlist/music/${item.id}`}
                className="cover group rounded overflow-hidden relative"
              >
                <span className="playCount flex items-center absolute top-0 right-0 py-0.5 px-2 text-white">
                  <IconPlayerPlay size={12} />
                  {transPlayCount(item.playCount)}
                </span>
                <img
                  loading={`lazy`}
                  className="w-full h-full object-fit "
                  src={`${item.coverImgUrl}?param=200y200`}
                  alt=""
                />
                <button
                  type="button"
                  className="play opacity-0 group-hover:opacity-100 absolute inset-0 m-auto bg-white bg-op text-red-500 w-10 h-10 rounded-full flex-center bg-opacity-95"
                >
                  <IconPlayerPlay size={20} className="fill-current" />
                </button>
              </Link>
              <Link
                to={`/playlist/music/${item.id}`}
                className="mt-1 text-sm text-gray-600 hover:text-black"
              >
                {item.name}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default memo(TopList);
