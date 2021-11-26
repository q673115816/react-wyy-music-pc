import React, { memo, useState } from "react";
import { NavLink } from "react-router-dom";
import classNames from "classnames";
import { IconChevronRight } from "@tabler/icons";
import { useSelector } from "react-redux";

const DomSmallHot = () => (
  <svg
    className="absolute left-full top-1/4 fill-current"
    viewBox="0 0 12 12"
    width="12"
    height="6"
  >
    <text
      dominantBaseline="middle"
      textAnchor="middle"
      x="0.5em"
      y="0.5em"
      className="fill-current ui_themeColor font-bold"
    >
      hot
    </text>
  </svg>
);

const DomSubList = memo(({ sub = [], category = null, cat = "" }) => (
  <div className="flex-auto grid grid-cols-6 gap-y-4">
    {sub
      .filter((item) => item.category === Number(category))
      .map((item) => (
        <NavLink
          className={({ isActive }) =>
            classNames(
              "text-gray-600 hover:ui_themeColor",
              isActive && "on ui_themeColor"
            )
          }
          to={`/home/playlist/${encodeURIComponent(item.name)}`}
          key={item.name}
        >
          <span
            className={classNames(
              "inline-flex inner px-4 py-1 rounded-full overflow-hidden",
              { ui_bg_opacity: item.name === cat }
            )}
          >
            <span className="relative">
              {item.name}
              {item.hot && <DomSmallHot />}
            </span>
          </span>
        </NavLink>
      ))}
  </div>
));
export default memo(({ cat }) => {
  const [popup, setPopup] = useState(false);
  const { hot, catlist } = useSelector(({ home }) => home.playlist);
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
              exact
              className={({ isActive }) =>
                classNames(
                  "text-gray-600 hover:ui_themeColor",
                  isActive && "on ui_themeColor"
                )
              }
              to="/home/playlist/全部歌单"
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
            {Object.entries(catlist.categories).map(([category, value]) => (
              <div key={category} className="flex">
                <div className="category text-gray-300">{value}</div>
                <DomSubList sub={catlist.sub} category={category} cat={cat} />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="ml-auto flex">
        {hot.tags?.map((item) => (
          <NavLink
            className={({ isActive }) =>
              classNames(
                "text-gray-500 hover:text-gray-700 px-2 rounded-full text-center",
                isActive && "ui_themeColor ui_bg_opacity"
              )
            }
            to={`/home/playlist/${encodeURIComponent(item.name)}`}
            key={item.name}
          >
            {item.name}
          </NavLink>
        ))}
      </div>
    </div>
  );
});
