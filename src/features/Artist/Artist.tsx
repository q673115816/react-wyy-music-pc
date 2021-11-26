import React, { memo, useState } from "react";

import classNames from "classnames";

import "./style.scss";

import Album from "./components/Album";
import MV from "./components/MV";
import Detail from "./components/Detail";
import Similarity from "./components/Similarity";
import Header from "./components/Header";
import { useParams } from "react-router-dom";

const nav = {
  专辑: Album,
  MV: MV,
  歌手详情: Detail,
  相似歌手: Similarity,
};

export default memo(function Artist() {
  const { id } = useParams();
  // if (!/^\d*$/.test(id)) {
  //   return <Navigate to="/" />;
  // }
  const [tab, setTab] = useState("专辑");
  return (
    <div className="domArtist overflow-auto max-h-full flex-auto">
      <Header />
      <div className="domArtist_main">
        <div className="domArtist_nav flex mx-8">
          <div className="flex space-x-4 text-sm">
            {Object.keys(nav).map((item) => (
              <button
                key={item}
                onClick={() => setTab(item)}
                type="button"
                className={classNames(
                  "domArtist_nav_link",
                  tab === item && "font-bold ui_underline"
                )}
              >
                {item}
              </button>
            ))}
          </div>
          <div className="domArtist_album_layout ml-auto" />
        </div>
        {/* <DomSimilarity id={id} /> */}
        {((Dom, id) => (
          <Dom id={id} />
        ))(nav[tab], id)}
      </div>
    </div>
  );
});
