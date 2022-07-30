import React, { FC, memo } from "react";
import { NavLink, useParams } from "react-router-dom";
import classNames from "classnames";
import type { Tag } from "@/modules/services/discover";

interface iProps {
  tags: Tag[];
  handleHidden: () => void;
}

const Popup: FC<iProps> = ({ tags, handleHidden }) => {
  const { cat } = useParams();
  return (
    <div
      className="absolute divide-y bg-white top-8 right-0 z-10 shadow rounded-lg"
      style={{ width: 510 }}
    >
      <div className="py-4 px-6">
        <NavLink
          className={({ isActive }) =>
            classNames(
              "item hover:ui_themeColor text-sm",
              isActive && "ui_themeColor"
            )
          }
          onClick={handleHidden}
          to="全部歌单"
        >
          <span
            className={classNames(
              "inline-flex inner px-3 py-1 rounded-full overflow-hidden",
              { ui_bg_opacity: cat === "全部歌单" }
            )}
          >
            全部歌单
          </span>
        </NavLink>
      </div>
      <div className="p-6 grid grid-cols-5 gap-y-4">
        {tags.map((item) => (
          <NavLink
            onClick={handleHidden}
            to={encodeURIComponent(item.name)}
            className={({ isActive }) =>
              classNames(
                "item hover:ui_themeColor text-sm whitespace-nowrap",
                isActive && "ui_themeColor"
              )
            }
            key={item.id}
          >
            <span
              className={classNames(
                "inline-flex inner px-3 py-1 rounded-full overflow-hidden",
                { ui_bg_opacity: item.name === cat }
              )}
            >
              {item.name}
            </span>
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default memo(Popup);
