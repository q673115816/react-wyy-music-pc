import classNames from "classnames";
import React, { memo } from "react";
import {Navigate, NavLink, Outlet, useParams} from "react-router-dom";

const navs = [
  '专辑',
  '歌手',
  '视频',
  '专栏',
]

const Layout = () => {
  const {path = ''} = useParams()
  console.log(path)
  if(!navs.includes(path) ) {
    return <Navigate to={navs[0]} replace={true} />
  }
  return (
    <div className="overflow-auto max-h-full flex-auto">
      <div className="px-8 py-5 space-x-4 text-base">
        {navs.map((name) => (
          <NavLink
            key={name}
            to={encodeURIComponent(name)}
            className={({ isActive }) =>
              classNames(isActive && "text-xl font-black ui_underline")
            }
          >
            {name}
          </NavLink>
        ))}
      </div>
      <Outlet />
    </div>
  );
};

export default memo(Layout);
