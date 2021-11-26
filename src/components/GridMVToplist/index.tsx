import React from "react";
import {
  IconFlame,
  IconArrowDown,
  IconArrowUp,
  IconMinus,
} from "@tabler/icons";
import { Link } from "react-router-dom";
import "./style.scss";

const BuildLastRank = (lastRank, currentRank) => {
  if (lastRank < currentRank) {
    return <IconArrowDown className="text-blue-800" size={10} />;
  }
  if (lastRank > currentRank) {
    return <IconArrowUp className="text-red-800" size={10} />;
  }
  return <IconMinus size={10} />;
};

export default ({ list = [] }) => (
  <div className="domVideoTop grid grid-cols-2">
    {list.map((item, index) => (
      <div className="item" key={item.id}>
        <div className="rank flex-center flex-none flex-col">
          <div className="num text-gray-400">
            {String(index + 1).padStart(2, 0)}
          </div>
          <div className="arrow">{BuildLastRank(item.lastRank, index + 1)}</div>
        </div>
        <div className="cover">
          <Link to={`/player/mv/${item.id}`}>
            <img
              className="w-full h-ull object-cover block"
              src={item.cover}
              alt=""
            />
            <div className="score absolute right-0 top-0 p-1 text-white flex-center">
              <IconFlame size={16} />
              {item.score}
            </div>
          </Link>
        </div>
        <div className="aside flex-auto w-px px-2">
          <div className="name truncate">
            <Link
              to={`/player/mv/${item.id}`}
              className="text-sm ui_text_black_hover"
            >
              {item.name}
            </Link>
          </div>
          <div className="artists mt-4 truncate text-gray-300">
            {item.artists.map((artist, index) => (
              <span key={artist.id}>
                {index > 0 && " / "}
                <Link
                  to={`/artist/${artist.id}`}
                  className="ui_text_gray_hover"
                >
                  {artist.name}
                </Link>
              </span>
            ))}
          </div>
        </div>
      </div>
    ))}
  </div>
);
