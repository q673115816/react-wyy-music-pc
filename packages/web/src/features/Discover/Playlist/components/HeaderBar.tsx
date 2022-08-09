import React, { memo, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import classNames from "classnames";
import { IconChevronRight } from "@tabler/icons";
import {
  useGetPlaylistHotQuery,
  useGetPlaylistCatListQuery,
} from "@/modules/services/discover";
import SubList from "./SubList";

const HeaderBar = () => {
  const { cat = "" } = useParams();
  const [popup, setPopup] = useState(false);
  const { data: resHot, isLoading: isLoading1 } = useGetPlaylistHotQuery();
  const { data: catlist = {}, isLoading: isLoading2 } =
    useGetPlaylistCatListQuery();
  if (isLoading1 && isLoading2) return null;
  const tags = resHot?.tags || [];
  const categories =
    (catlist?.categories && Object.entries(catlist.categories)) || [];
  const sub = catlist?.sub || [];
  return (
    <div className="domHome_playlist_nav pt-4 pb-4 flex items-center">
      <div className="relative">
        <button
          type="button"
          className="border flex items-center justify-center h-8 w-24 rounded-full hover:bg-gray-100 focus:outline-none text-sm"
          onClick={() => setPopup(!popup)}
        >
          {decodeURIComponent(cat)}
          <IconChevronRight size={20} stroke={1} />
        </button>
        <div
          className="domHome_playlist_popup_nav absolute z-20 bg-white shadow text-sm divide-y top-full mt-1 pb-20"
          style={{ display: popup ? null : "none" }}
        >
          <div className="pl-8 py-4">
            <NavLink
              onClick={() => setPopup(false)}
              className={({ isActive }) =>
                classNames(
                  "text-gray-600 hover:ui_themeColor",
                  isActive && "on ui_themeColor"
                )
              }
              to="../全部歌单"
            >
              <span
                className={classNames(
                  "inline-flex inner px-4 py-1 rounded-full overflow-hidden",
                  { ui_bg_opacity: cat === "全部歌单" }
                )}
              >
                全部歌单
              </span>
            </NavLink>
          </div>
          <div className="p-5 space-y-4">
            {categories.map(([category, value]) => (
              <div key={category} className="flex">
                <div className="category text-gray-300">{value}</div>
                <SubList sub={sub} category={category} cat={cat} />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="ml-auto flex">
        {tags?.map((item) => (
          <NavLink
            className={({ isActive }) =>
              classNames(
                "text-gray-500 hover:text-gray-700 px-2 rounded-full text-center",
                isActive && "ui_themeColor ui_bg_opacity"
              )
            }
            to={`../${encodeURIComponent(item.name)}`}
            key={item.name}
          >
            {item.name}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default memo(HeaderBar);
