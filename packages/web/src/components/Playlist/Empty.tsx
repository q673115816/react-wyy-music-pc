import React, { memo } from "react";
import { useAppDispatch } from "@/modules/hooks";
import { Link } from "react-router-dom";
import { setPopupPlaylistToggle } from "@/modules/reducers/mask/slice";

const Empty = () => {
  const dispatch = useAppDispatch();
  return (
    <div className="empty w-min m-auto pt-20 whitespace-nowrap">
      <div className="text-gray-400 text-sm text">您还没添加任何歌曲！</div>
      <div className="text-gray-400 mt-6">
        去首页
        <Link
          to="/"
          className="ui_text_black_hover underline"
          onClick={() => dispatch(setPopupPlaylistToggle())}
        >
          发现音乐
        </Link>
      </div>
    </div>
  );
};

export default memo(Empty);
