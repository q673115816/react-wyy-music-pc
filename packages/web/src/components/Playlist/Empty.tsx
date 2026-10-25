import React, { memo } from "react";
import { Link } from "react-router";
import { useMaskStore } from "@/stores";

const Empty = () => {
  return (
    <div className="empty w-min m-auto pt-20 whitespace-nowrap">
      <div className="text-gray-400 text-sm text">您还没添加任何歌曲！</div>
      <div className="text-gray-400 mt-6">
        去首页
        <Link
          to="/"
          className="ui_text_black_hover underline"
          onClick={() => useMaskStore.getState().setPopupPlaylistToggle()}
        >
          发现音乐
        </Link>
      </div>
    </div>
  );
};

export default memo(Empty);
