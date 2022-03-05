import classNames from "classnames";
import { IconArrowDown, IconArrowUp, IconMinus, IconPlayerPlay } from "@tabler/icons";
import { Link } from "react-router-dom";
import React, { memo } from "react";

const TransRank = memo(({ lastRank, rank }) => {
  switch (true) {
    case lastRank === -1:
      return <div className="text-green-500">new</div>;
    case lastRank - rank < 0:
      return (
        <div className="flex-center text-gray-500">
          <IconArrowDown size={10} className="text-blue-500" />
          {-lastRank + rank}
        </div>
      );
    case lastRank - rank === 0:
      return (
        <div className="flex-center text-gray-500">
          <IconMinus size={10} />0
        </div>
      );
    case lastRank - rank > 0:
      return (
        <div className="flex-center text-gray-500">
          <IconArrowUp size={10} className="text-red-500" />
          {lastRank - rank}
        </div>
      );
    default:
      return <div />;
  }
});

const Item = ({ item, index, maxScore }) => (
  <div
    tabIndex={2}
    className={classNames(
      "item h-20 flex items-center hover:bg-gray-100 focus:bg-gray-100 focus:outline-none",
      { "bg-gray-50": index % 2 === 0 }
    )}
    key={item.id}
  >
    <div className="index w-16 flex flex-col items-center justify-center">
      <div
        className={classNames("font-bold text-sm", {
          "text-red-500": index < 3,
          "text-gray-400": index > 2,
        })}
      >
        {index + 1}
      </div>
      <div>
        <TransRank lastRank={item.lastRank} rank={item.rank} />
      </div>
    </div>
    <button type="button" className="w-14 -14 relative">
      <img src={`${item.coverUrl}?param=60y60`} className={`rounded`} alt="" />
      <i className="ico ui_themeColor absolute inset-0 flex-center rounded-full w-6 h-6 m-auto bg-white bg-opacity-90">
        <IconPlayerPlay size={16} className="fill-current" />
      </i>
    </button>
    <div className="name flex-auto truncate px-2">{item.name}</div>
    <div className="radio flex-auto truncate px-2">
      <Link className="ui_text_gray_hover" to={`/playlist/dj/${item.userId}`}>
        {item.userName}
      </Link>
    </div>
    <div className="w-24 px-2">
      <Link to="/" className="ui_text_gray_hover border border-current">
        {item.category}
      </Link>
    </div>
    <div className="w-24 px-2">
      <div className="rounded bg-gray-300 overflow-hidden h-2">
        <div
          className="h-full bg-gray-500 w-0"
          style={{ width: `${(item.score / maxScore) * 100}%` }}
        />
      </div>
    </div>
  </div>
)

export default memo(Item);
