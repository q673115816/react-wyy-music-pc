import React, { useState, memo, useCallback } from "react";
import classNames from "classnames";

const nav = ["已下载单曲", "已下载电台节目", "已下载MV", "正在下载"];

const srcList = [
  {
    width: 600,
    height: 600,
    originUrl: "https://cdn.jsdelivr.net/gh/q673115816/cdn/image/奥特之父.jpg",
  },
  {
    width: 600,
    height: 600,
    originUrl: "https://cdn.jsdelivr.net/gh/q673115816/cdn/image/佐菲.jpg",
  },
  {
    width: 600,
    height: 600,
    originUrl: "https://cdn.jsdelivr.net/gh/q673115816/cdn/image/奥特之母.jpg",
  },
  {
    width: 600,
    height: 600,
    originUrl: "https://cdn.jsdelivr.net/gh/q673115816/cdn/image/奥特曼.jpg",
  },
  {
    width: 640,
    height: 640,
    originUrl:
      "https://cdn.jsdelivr.net/gh/q673115816/cdn/image/巴尔坦星人.jpg",
  },
  {
    width: 600,
    height: 600,
    originUrl:
      "https://cdn.jsdelivr.net/gh/q673115816/cdn/image/杰克奥特曼.jpg",
  },
  {
    width: 600,
    height: 600,
    originUrl:
      "https://cdn.jsdelivr.net/gh/q673115816/cdn/image/艾斯奥特曼.jpg",
  },
  {
    width: 600,
    height: 600,
    originUrl:
      "https://cdn.jsdelivr.net/gh/q673115816/cdn/image/泰罗奥特曼.jpg",
  },
  {
    width: 600,
    height: 600,
    originUrl:
      "https://cdn.jsdelivr.net/gh/q673115816/cdn/image/雷欧奥特曼.jpg",
  },
];

export default memo(function Download() {
  console.log("download");
  const [current, setCurrent] = useState("已下载单曲");
  return (
    <div className="domManage flex-1 h-0">
      <div className="text-sm flex gap-4 px-8">
        {nav.map((item) => (
          <button
            onClick={() => setCurrent(item)}
            key={item}
            className={classNames(item === current && "ui_underline font-bold")}
            type="button"
          >
            {item}
          </button>
        ))}
      </div>
      <div className="flex-1 px-8 overflow-auto"></div>
    </div>
  );
});
