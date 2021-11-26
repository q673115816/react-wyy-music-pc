import React, { memo, useEffect, useMemo, useState } from "react";
import { unstable_batchedUpdates } from "react-dom";
import dayjs from "dayjs";
import {
  IconPlayerPlay,
  IconArrowUp,
  IconArrowDown,
  IconMinus,
} from "@tabler/icons";
import classNames from "classnames";
import { Link, NavLink } from "react-router-dom";
import { apiDjProgramToplist, apiDjToplist } from "@/api";
import "./style.scss";

const navs = [
  ["节目榜", "/home/dj/toplist"],
  ["新晋电台榜", "/home/dj/toplist/now"],
  ["热门电台榜", "/home/dj/toplist/hot"],
];

const switchs = {
  default: {
    map({
      lastRank,
      rank,
      score,
      program: {
        id,
        name,
        coverUrl,
        radio: { name: userName, id: userId, category },
      },
    }) {
      return {
        id,
        name,
        lastRank,
        rank,
        coverUrl,
        score,
        userName,
        userId,
        category,
      };
    },
  },
  other: {
    map({
      id,
      name,
      lastRank,
      rank,
      picUrl: coverUrl,
      score,
      dj: { nickname: userName, userId },
      category,
    }) {
      return {
        id,
        name,
        lastRank,
        rank,
        coverUrl,
        score,
        userName,
        userId,
        category,
      };
    },
  },
};

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

const DomHeader = memo(({ updateTime }) => (
  <div className="domHome_dj_toplist_header relative py-7">
    <div
      className="domHome_dj_toplist_nav m-auto w-min flex rounded-full border"
      style={{ borderColor: "#bbb" }}
    >
      {navs.map(([name, path]) => (
        <NavLink
          key={name}
          to={path}
          exact
          className={({ isActive }) =>
            classNames(
              "flex-center w-28 h-8 rounded-full text-center hover:bg-gray-100",
              isActive && "text-white"
            )
          }
        >
          {name}
        </NavLink>
      ))}
    </div>
    <div className="absolute flex-center top-1/2 transform -translate-y-1/2 right-8 text-gray-400">
      最近更新：
      {updateTime && dayjs(updateTime).format("MM月DD日")}
      <div className="relative ui_group">
        <span className="block flex-center  border rounded-full w-4 h-4 flex-none">
          ?
        </span>
        <div className="absolute text-gray-500 top-6 right-0 shadow rounded p-4 w-48 border hidden ui_group-hover:block bg-white">
          选取云音乐中7天内发布的热度最高的节目，热度由节目播放、赞、分享数量总和计算
        </div>
      </div>
    </div>
  </div>
));

const DomItem = memo(({ item, index, maxScore }) => (
  <div
    tabIndex="2"
    className={classNames(
      "item h-20 flex items-center hover:bg-gray-100 focus:bg-gray-100 focus:outline-none",
      { "bg-gray-50": index % 2 === 0 }
    )}
    key={item.id}
  >
    <div className="index flex flex-col items-center justify-center">
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
    <button type="button" className="cover relative">
      <img src={`${item.coverUrl}?param=60y60`} alt="" />
      <i className="ico ui_themeColor absolute inset-0 flex-center rounded-full w-6 h-6 m-auto bg-white bg-opacity-90">
        <IconPlayerPlay size={16} className="fill-current" />
      </i>
    </button>
    <div className="name flex-auto truncate">{item.name}</div>
    <div className="radio flex-auto truncate">
      <Link className="ui_text_gray_hover" to={`/playlist/dj/${item.userId}`}>
        {item.userName}
      </Link>
    </div>
    <div className="category">
      <Link to="/" className="ui_text_gray_hover border border-current">
        {item.category}
      </Link>
    </div>
    <div className="score">
      <div className="rounded bg-gray-300 overflow-hidden h-2">
        <div
          className="h-full bg-gray-500 w-0"
          style={{ width: `${(item.score / maxScore) * 100}%` }}
        />
      </div>
    </div>
  </div>
));

export default memo(({ type }) => {
  const [data, setData] = useState([]);
  const [updateTime, setUpdateTime] = useState();
  const memoType = useMemo(() => (type ? "other" : "default"), [type]);
  // const obj = {
  //   lastRank,
  //   rank,
  //   name,
  //   id,
  //   coverUrl,
  //   score,
  //   category,
  //   radio: {
  //     userName,
  //     userId,
  //   }
  // };
  const handleInit = async () => {
    try {
      const { toplist, updateTime } = type
        ? await apiDjToplist({ type })
        : await apiDjProgramToplist();
      unstable_batchedUpdates(() => {
        setData(toplist.map(switchs[memoType].map));
        setUpdateTime(updateTime);
      });
    } catch (error) {
      console.log(error);
    }
  };

  const maxScore = useMemo(() => data[0]?.score ?? 0, [data]);

  useEffect(() => {
    handleInit();
  }, [type]);
  return (
    <div className="domHome_dj_toplist h-full overflow-auto">
      <DomHeader updateTime={updateTime} />
      <div className="domHome_dj_toplist_main">
        <div className="list">
          {data.map((item, index) => (
            <DomItem
              item={item}
              index={index}
              key={item.id}
              maxScore={maxScore}
            />
          ))}
        </div>
      </div>
    </div>
  );
});
