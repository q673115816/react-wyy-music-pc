import React, { FC, memo } from "react";
import { useGetSearchSuggestQuery } from "@/modules/services/search";
import { Link } from "react-router-dom";
import Loading from "@/components/Loading";

interface iProps {
  keywords: string;
}

const orders = {
  songs: "单曲",
  artists: "歌手",
  albums: "专辑",
  playlists: "歌单",
};

const Suggest: FC<iProps> = ({ keywords }) => {
  const { data, isLoading } = useGetSearchSuggestQuery({ keywords });
  const result = data.result || {};
  if (isLoading) return <Loading />;
  return (
    <div className={"overflow-auto h-full flex-auto px-5"}>
      {result?.order?.map((order) => (
        <div key={order}>
          <div className="text-sm text-gray-400">{orders[order]}</div>
          {result[order].map((item) => (
            <div key={item.id} className="py-1">
              <Link to={`/search/${item.name}/${orders[order]}`}>
                {item.name}
              </Link>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default memo(Suggest);
