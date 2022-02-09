import React, { createElement, memo, useState } from "react";

import classNames from "classnames";

import "./style.scss";

import Album from "./components/Album";
import MV from "./components/MV";
import Detail from "./components/Detail";
import Similarity from "./components/Similarity";
import Header from "./components/Header";
import {useParams} from "react-router-dom";

type Nav = "Album" | "MV" | "Detail" | "Similarity";

const navs: [string, Nav][] = [
  ["专辑", "Album"],
  ["MV", "MV"],
  ["歌手详情", "Detail"],
  ["相似歌手", "Similarity"],
];

const Contents = {
  Album,
  MV,
  Detail,
  Similarity,
};

export default memo(function Artist() {
  const [active, setActive] = useState<Nav>(navs[0][1]);
  return (
    <div className="domArtist overflow-auto max-h-full flex-auto">
      <Header />
      <div className="domArtist_main">
        <div className="domArtist_nav flex mx-8">
          <div className="flex space-x-4 text-sm">
            {navs.map(([name, key]) => (
              <button
                key={key}
                onClick={() => setActive(key)}
                type="button"
                className={classNames(
                  "domArtist_nav_link",
                  active === key && "font-bold ui_underline"
                )}
              >
                {name}
              </button>
            ))}
          </div>
          <div className="domArtist_album_layout relative ml-auto" />
        </div>
        {createElement(Contents[active])}
      </div>
    </div>
  );
});
