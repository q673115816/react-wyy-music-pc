import React, { useState } from "react";

const options = {
  area: [
    ["-1", "全部"],
    ["7", "华语"],
    ["96", "欧美"],
    ["8", "日本"],
    ["16", "韩国"],
    ["0", "其他"]
  ],
  type: [
    ["-1", "全部"],
    ["1", "男歌手"],
    ["2", "女歌手"],
    ["3", "乐队"]
  ],
  initial: [
    ["-1", "热门"],
    ["a", "a"],
    ["b", "b"],
    ["c", "c"],
    ["d", "d"],
    ["e", "e"],
    ["f", "f"],
    ["g", "g"],
    ["h", "h"],
    ["i", "i"],
    ["j", "j"],
    ["k", "k"],
    ["l", "l"],
    ["m", "m"],
    ["n", "n"],
    ["o", "o"],
    ["p", "p"],
    ["q", "q"],
    ["r", "r"],
    ["s", "s"],
    ["t", "t"],
    ["u", "u"],
    ["v", "v"],
    ["w", "w"],
    ["x", "x"],
    ["y", "y"],
    ["z", "z"],
    ["#", "#"]
  ]
};

export default () => {
  const [type] = useState(-1);
  const [area] = useState(-1);
  const [initial] = useState(-1);
  return (
    <div className="domhome_artist">
      <div className="domhome_artist_control">
        <div className="domhome_artist_filter">
          <div className="title">语种</div>
          <ul className="list">
            {options.area.map((item, index) => (
              <li key={item[0]}>{item[1]}</li>
            ))}
          </ul>
        </div>
        <div className="domhome_artist_filter">
          <div className="title">分类</div>
          <ul className="list">
            {options.type.map((item, index) => (
              <li key={item[0]}>{item[1]}</li>
            ))}
          </ul>
        </div>
        <div className="domhome_artist_filter">
          <div className="title">筛选</div>
          <ul className="list">
            {options.initial.map((item, index) => (
              <li key={item[0]}>{item[1]}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
