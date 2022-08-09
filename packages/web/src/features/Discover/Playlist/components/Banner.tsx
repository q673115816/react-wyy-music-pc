import React, { FC, memo } from "react";
import { Link, useParams } from "react-router-dom";
import { IconCrown } from "@tabler/icons";
import { Highquality } from "@/modules/services/discover";

interface iBanner {
  item: Highquality;
}

const Banner: FC<iBanner> = ({ item }) => {
  const { cat = "" } = useParams();
  if (!item) return null;
  return (
    <Link
      to={`/HighQuality/${cat}`}
      className="domHome_playlist_banner flex items-center relative rounded-lg overflow-hidden z-10"
    >
      <div
        className="absolute inset-0 bg-center"
        style={{
          backgroundImage: `url(${item.coverImgUrl})`,
          filter: "blur(20px) grayscale(80%)",
          zIndex: "-1",
        }}
      />
      <div className="cover w-36 h-36 rounded-lg overflow-hidden">
        <img src={item.coverImgUrl} alt="" />
      </div>
      <div className="contennt ml-2.5">
        <div className="tag border border-current flex-center text-sm rounded-full">
          <IconCrown size={16} />
          &nbsp; 精品歌单
        </div>
        <div className="text-white text-base mt-4">{item.name}</div>
        <div className="text-gray-300 mt-2">{item.copywriter}</div>
      </div>
    </Link>
  );
};

export default memo(Banner);
