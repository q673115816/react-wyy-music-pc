import { Link } from "react-router-dom";
import RainbowCat from "@/features/User/Detail/components/RainbowCat";
import { IconPlayerPlay } from "@tabler/icons";
import React, { memo } from "react";

const Rank = () => (
  <div className="item">
    <Link to={`record`}>
      <div className="cover relative border aspect-square">
        <div className="absolute inset-0">
          <RainbowCat />
        </div>
        <button
          type="button"
          className="playArrow opacity-0 group-hover:opacity-100 transition-opacity duration-500 ui_themeColor absolute right-0 bottom-0 m-2 bg-white bg-opacity-90 rounded-full p-2"
        >
          <IconPlayerPlay size={22} className="fill-current" />
        </button>
      </div>
    </Link>
    <div className="footer mt-2 text-sm">
      <Link to={`record`}>
        {/* {user.profile.nickname} */}
        听歌排行
      </Link>
    </div>
  </div>
);

export default memo(Rank);
