import React, { createElement, FC, memo } from "react";
import { Link } from "react-router-dom";
import { useGetSearchMultimatchQuery } from "@/modules/services/search";
import Loading from "@/components/Loading";
import { transSubscribeCount } from "@/common/utils";

const Nodes = {
  artist: ({ item }) => (
    <Link
      to={`/artist/${item.id}`}
      className="h-16 w-1/3 flex items-center bg-gray-100 rounded overflow-hidden px-2"
    >
      <img
        className="h-10 object-fit rounded-full"
        src={`${item.picUrl}?param=60y60`}
        alt=""
      />
      <div className="px-2 flex-1 w-0">
        <div className={`truncate text-sm`}>
          歌手：
          {item.name}
          {item.alias?.length > 0 && (
            <span className="text-gray-400">{`(${item.alias})`}</span>
          )}
        </div>
        <div className={`text-gray-400`}>
          粉丝数:{transSubscribeCount(item.fansSize)},歌曲:{item.musicSize}
        </div>
      </div>
    </Link>
  ),
  album: ({ item }) => (
    <Link
      to={`/playlist/album/${item.id}`}
      className="h-16 w-1/3 flex items-center bg-gray-100 rounded overflow-hidden px-2"
    >
      <img className="h-10" src={`${item.blurPicUrl}?param=60y60`} alt="" />
      <div className="px-2 flex-1 w-0">
        <div className="text-sm truncate">
          专辑：
          {item.name}
          {item.alias?.length > 0 && (
            <span className="text-gray-400">{`(${item.alias})`}</span>
          )}
        </div>
        <div className="text-gray-400">{item.artist.name}</div>
      </div>
    </Link>
  ),
  new_mlog: ({ item }) => (
    <Link
      to={`/player/mv/${item.resourceId}`}
      className="h-16 w-1/3 flex items-center bg-gray-100 rounded overflow-hidden px-2"
    >
      <img
        className="h-10 rounded"
        src={`${item.baseInfo.resource.mlogBaseData.coverUrl}?param=160y90`}
        alt=""
      />
      <div className="px-2 flex-1 w-0">
        <div className="text-sm truncate">
          {item.resourceName}：{item.baseInfo.resource.mlogBaseData.text}
        </div>
      </div>
    </Link>
  ),
  playlist: ({ item }) => (
    <Link
      to={`/playlist/music/${item.id}`}
      className="h-16 w-1/3 flex items-center bg-gray-100 rounded overflow-hidden px-2"
      title={item.name}
    >
      <img className="h-10" src={`${item.coverImgUrl}?param=60y60`} alt="" />
      <div className="px-2 flex-1 w-0">
        <div className="text-sm truncate">
          歌单：
          {item.name}
        </div>
        <div className="text-gray-400">{item.creator.name}</div>
      </div>
    </Link>
  ),
};

interface iProps {
  keywords: string;
}

const Multimatch: FC<iProps> = ({ keywords }) => {
  const { data, isLoading } = useGetSearchMultimatchQuery({ keywords });
  const result = data?.result || {};
  if (result?.orders?.length === 0) return null;
  if (isLoading) return <Loading />;
  return (
    <div className="py-4">
      <div className="text-gray-500">你可能感兴趣</div>
      <div className="mt-2 flex gap-3">
        {result.orders.map((order) =>
          createElement(Nodes[order], { item: result[order][0], key: order })
        )}
      </div>
    </div>
  );
};

export default memo(Multimatch);
