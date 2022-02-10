import React, { FC, memo } from "react";
import dayjs from "dayjs";
import { Link } from "react-router-dom";
import classNames from "classnames";
import { iProps } from "./types";

const List: FC<iProps> = ({ hotAlbums = [] }) => (
  <div className="list pt-4">
    {hotAlbums.map((item, index) => (
      <div
        className={classNames(
          "list_item pl-5 flex items-center h-20 hover:bg-gray-100",
          {
            "bg-gray-50": index % 2 === 0,
          }
        )}
        key={item.id}
      >
        <Link
          className="cover border rounded flex-none w-14 h-14"
          to={`/playlist/album/${item.id}`}
        >
          <img
            className="ui_containimg"
            src={`${item.picUrl}?param=100y100`}
            alt=""
          />
        </Link>
        <Link
          className="name truncate px-2.5"
          to={`/playlist/album/${item.id}`}
        >
          {item.name}
          &nbsp;
          {item.alias?.length > 0 && (
            <span className="text-gray-400">
              ({item.alias.map((alia) => alia)})
            </span>
          )}
        </Link>
        <span className="size text-gray-400">{item.size}首</span>
        <span className="publishTime text-gray-400">
          发行时间：
          {dayjs(item.publishTime).format("YYYY-MM-DD")}
        </span>
      </div>
    ))}
  </div>
);

export default memo(List);
