import React, { useState, memo, useCallback } from "react";
import { useParams, Outlet } from "react-router-dom";
import { IconFilter } from "@tabler/icons";
import { useGetPlaylistHighqualityTagsQuery } from "@/modules/services/discover";
import Popup from "./Popup";

const Layout = () => {
  const { cat } = useParams();
  const [showPopup, setShowPopup] = useState(false);
  const { data: resTags } = useGetPlaylistHighqualityTagsQuery();
  const tags = resTags?.tags || [];
  const handleHidden = useCallback(() => setShowPopup(false), []);
  return (
    <div className="px-8 max-h-full overflow-auto flex-auto">
      <div className="py-3 flex items-center justify-between">
        <div className="flex items-center">
          <span className="font-bold text-xl">精品歌单</span>
          &nbsp;
          <a
            href="https://music.163.com/#/topic?id=202001"
            className="flex-center w-4 h-4 border rounded-full text-gray-400 hover:text-gray-500 border-current"
          >
            ?
          </a>
        </div>
        <div className="relative">
          <button
            onClick={() => setShowPopup(!showPopup)}
            type="button"
            className="flex items-center border hover:bg-gray-100 rounded-full px-2 py-1"
          >
            <IconFilter size={16} stroke={1} />
            {cat}
          </button>
          {showPopup && <Popup tags={tags} handleHidden={handleHidden} />}
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default memo(Layout);
