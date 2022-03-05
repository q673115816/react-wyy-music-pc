import React, {FC, memo} from "react";
import {NavLink} from "react-router-dom";
import classNames from "classnames";
import SmallHot from "./SmallHot";

interface iProps {
  sub: [];
  category: any;
  cat: string;
}

const SubList: FC<iProps> = ({ sub = [], category = null, cat = "" }) => (
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
          to={`../${encodeURIComponent(item.name)}`}
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
              {item.hot && <SmallHot />}
            </span>
          </span>
        </NavLink>
      ))}
  </div>
);

export default memo(SubList)
