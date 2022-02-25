import React, { memo } from "react";
import AlbumItem from "@/features/Discover/Newest/Album/Item";
import { useGetTopAlbumQuery } from "@/modules/services/discover";
import { limit } from "@/common/config";

const Content = ({ area, type }) => {
  const { data, isLoading } = useGetTopAlbumQuery({
    area,
    type,
    limit,
    offset: 0,
  });

  const weekData = data?.weekData || [];
  const monthData = data?.monthData || [];
  return (
    <div className="px-8">
      {area === "全部" && type !== "推荐" && weekData.length > 0 && (
        <div className="domHome_newest_album_sublist relative pl-12 mb-12">
          <div className="sign w-10 h-10 absolute top-0 left-0 text-lg">
            本周
            <br />
            新碟
          </div>
          <div className="list grid grid-cols-4 gap-5">
            {weekData.map((item) => (
              <AlbumItem item={item} key={item.id} />
            ))}
          </div>
        </div>
      )}
      {monthData.length > 0 && (
        <div className="domHome_newest_album_sublist relative pl-12 mb-12">
          <div className="sign w-10 h-10 absolute top-0 left-0 text-lg">
            本月
            <br />
            新碟
          </div>
          <div className="list grid grid-cols-4 gap-5">
            {monthData.map((item) => (
              <AlbumItem item={item} key={item.id} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default memo(Content);
