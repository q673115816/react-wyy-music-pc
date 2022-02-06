import classNames from "classnames";
import React, { FC, memo } from "react";
import { Link } from "react-router-dom";

interface iProps {
  artists: {
    name: string;
    id: number;
  }[];
  className?: string;
}

const Artists: FC<iProps> = ({ artists = [], className = "" }) =>
  artists?.length > 0 ? (
    <div
      className={classNames("truncate text-gray-500", className)}
      title={artists.map((artist) => artist.name).join(" / ")}
    >
      {artists.map((artist, index) => (
        <span key={artist.id + artist.name}>
          {index > 0 && " / "}
          {artist.id === 0 ?
            <span className={``}>{artist.name}</span> :
            (
              <Link to={`/artist/${artist.id}`} className="ui_text_gray_hover">
            {artist.name}
            </Link>
            )
          }
        </span>
      ))}
    </div>
  ) : (
    <span className="text-gray-400">未知歌手</span>
  );

export default memo(Artists);
