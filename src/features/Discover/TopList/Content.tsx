import classNames from "classnames";
import { Link } from "react-router-dom";
import React, { FC, memo } from "react";

interface iProps {}

const Content: FC<iProps> = ({ tracks = [] }) => (
  <div className="official_rank_list flex-1 flex flex-col h-full">
    {tracks.map((track, index) => (
      <div
        tabIndex={2}
        className={classNames(
          "item flex flex-1 px-2.5 items-center hover:bg-gray-100 focus:bg-gray-200 focus:outline-none",
          { "bg-gray-50": index % 2 === 0 }
        )}
        key={track.name}
      >
        <span
          className={classNames(
            "index text-sm w-4",
            index < 3 ? "ui_themeColor" : "text-gray-300"
          )}
        >
          {index + 1}
        </span>
        <span className="status w-4 flex-center">&nbsp;口&nbsp;</span>
        <span
          className="truncate flex-auto w-0"
          title={track.name + track.alia}
        >
          {track.name}
          {track.alia.length > 0 && (
            <span className="text-gray-400">
              ({track.alia.map((alia) => alia)})
            </span>
          )}
        </span>
        <span
          className="ml-auto text-gray-500"
          title={track.ar.map((artist) => artist.name).join("/")}
        >
          {track.ar.map((artist, index) => (
            <span key={artist.id}>
              {index > 0 && " / "}
              <Link
                to={`/artist/${artist.id}`}
                className="artist text-gray-400 hover:text-gray-500"
              >
                {artist.name}
              </Link>
            </span>
          ))}
        </span>
      </div>
    ))}
  </div>
);

export default memo(Content);
