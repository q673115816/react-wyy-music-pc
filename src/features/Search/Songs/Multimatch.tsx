import React, { createElement, FC, memo } from "react";
import { Link } from "react-router-dom";
import { IconChevronRight } from "@tabler/icons";
import { useGetSearchMultimatchQuery } from "@/modules/services/search";
import Loading from "@/components/Loading";

const Nodes = {
  artist: ({ item }) => (
    <Link
      to={`/artist/${item.id}`}
      className="group h-20 flex items-center bg-gray-100 rounded overflow-hidden flex-1"
    >
      <div className="">
        <img className="" src={`${item.picUrl}?param=80y80`} alt="" />
      </div>
      <div className="px-2">
        <div className="text-sm">
          歌手：
          {item.name}
          {item.alias?.length > 0 && (
            <span className="text-gray-400">{`（${item.alias}）`}</span>
          )}
        </div>
      </div>
      <div className="ico text-gray-600 group-hover:text-black ml-auto mr-4">
        <IconChevronRight size={24} stroke={1} />
      </div>
    </Link>
  ),
  album: ({ item }) => (
    <Link
      to={`/playlist/album/${item.id}`}
      className="h-20 flex items-center bg-gray-100 rounded overflow-hidden flex-1"
    >
      <div className="">
        <img className="" src={`${item.blurPicUrl}?param=80y80`} alt="" />
      </div>
      <div className="px-2">
        <div className="text-sm">{item.name}</div>
        <div className="">{item.artist.name}</div>
      </div>
      <div className="text-gray-600 group-hover:text-black ml-auto mr-4">
        <IconChevronRight size={24} stroke={1} />
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
    <div className="border-b px-8 py-5">
      <div className="font-bold">最佳匹配</div>
      <div className="mt-5 flex gap-6">
        {result.orders
          .slice(0, 2)
          .map((order) =>
            createElement(Nodes[order], { item: result[order][0], key: order })
          )}
      </div>
    </div>
  );
};

export default memo(Multimatch);
