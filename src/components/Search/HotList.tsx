import React, { memo } from "react";
import { Link } from "react-router-dom";
import classNames from "classnames";

export default memo(({ list = [], handleSearch }) => {
  return (
    <div className="list">
      {list.map((item, index) => (
        <Link
          to={`/search/${item.searchWord}`}
          onClick={() => handleSearch(item.searchWord)}
          className="item flex items-center w-full hover:bg-gray-100"
          key={item.content}
        >
          <span
            className={classNames(
              "index flex-center text-base flex-none",
              index < 3 ? "text-red-500" : "text-gray-300"
            )}
          >
            {index + 1}
          </span>
          <div className="aside flex-auto w-0 px-1">
            <div className="name flex items-center gap-1">
              <span
                className={classNames(
                  "searchWord",
                  index < 3 ? "font-bold" : ""
                )}
              >
                {item.searchWord}
              </span>
              {item.iconUrl && (
                <img className="h-2.5" src={item.iconUrl} alt="hot" />
              )}
              <span className="text-gray-400">{item.score}</span>
            </div>
            <div className="content mt-2 text-gray-400 truncate">
              {item.content}
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
});
