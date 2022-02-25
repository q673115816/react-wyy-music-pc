import { NavLink, Outlet, useParams } from "react-router-dom";
import React, { memo, useEffect } from "react";
import classNames from "classnames";
import config, { navs } from "./config";
import { useAppDispatch, useAppSelector } from "@/modules/hooks";
import { searchSelector, setHistory } from "@/modules/reducers/search/slice";
import Multimatch from "./Multimatch";

const Layout = () => {
  const { keywords = "", type = "" } = useParams();
  const dispatch = useAppDispatch();

  const { count = 0 } = useAppSelector(searchSelector);
  useEffect(() => {
    dispatch(setHistory({ keywords }));
  }, [keywords]);

  const unit = config[type]?.unit || "";

  return (
    <div className="domSearch overflow-auto max-h-full flex-auto">
      <div className="px-8 py-5">
        <div className="h1">搜索 {keywords}</div>
        <Multimatch keywords={keywords} />
        <div className={`mt-5 flex items-center`}>
          <div className="flex gap-4">
            {navs.map((name) => (
              <NavLink
                key={name}
                to={encodeURIComponent(name)}
                className={({ isActive }) =>
                  classNames("text-sm", isActive && "font-bold ui_underline")
                }
              >
                {name}
              </NavLink>
            ))}
          </div>
          <div className={`ml-auto text-gray-400`}>
            找到 {count}
            {unit} {type}
          </div>
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default memo(Layout);
