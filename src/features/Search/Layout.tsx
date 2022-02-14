import { NavLink, Outlet, useParams } from "react-router-dom";
import React, { memo, useEffect } from "react";
import { useLocalStorage } from "react-use";
import classNames from "classnames";
import config from "./config";
import { useAppSelector } from "@/modules/hooks";
import { searchSelector } from "@/modules/reducers/search/slice";

const Layout = () => {
  const { keywords = "", type = "" } = useParams();
  const [searchHistory, setSearchHistory, removeSearchHistory] =
    useLocalStorage("searchHistory", []);
  const { count = 0 } = useAppSelector(searchSelector);
  useEffect(() => {
    const otherSearchHistory =
      searchHistory?.filter((otherKeywords) => otherKeywords !== keywords) ||
      [];
    setSearchHistory([keywords, ...otherSearchHistory]);
  }, [keywords]);

  const { unit } = config[type];

  return (
    <div className="domSearch overflow-auto max-h-full flex-auto">
      <div className="p-8 pb-2.5 border-b">
        <div className="font-bold text-base">
          找到
          {count}
          {unit}
        </div>
        <div className="mt-5 space-x-4">
          {Object.keys(config).map((name) => (
            <NavLink
              key={name}
              to={name}
              className={({ isActive }) =>
                classNames("text-sm", isActive && "font-bold")
              }
            >
              {name}
            </NavLink>
          ))}
        </div>
        {}
      </div>
      <Outlet />
    </div>
  );
};

export default memo(Layout);
