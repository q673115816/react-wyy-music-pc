import React, { useState, useEffect, useRef, memo } from "react";
import "./style.scss";
import classNames from "classnames";
import { apiArtistList } from "@/api";
import {
  addHomeTopArtists,
  initHomeTopArtists,
} from "@/modules/reducers/home/slice";
import useInfinite from "@/hooks/useInfinite";
import DomResize from "@/components/ResizeObserver";
import Loading from "@/components/Loading";
import Item from "./Item";
const navs = [
  {
    type: "语种",
    code: "area",
    sub: [
      [-1, "全部", 1],
      [7, "华语", 1],
      [96, "欧美", 2],
      [8, "日本", 4],
      [16, "韩国", 3],
      [0, "其他", 1],
    ],
  },
  {
    type: "分类",
    code: "type",
    sub: [
      [-1, "全部"],
      [1, "男歌手"],
      [2, "女歌手"],
      [3, "乐队"],
    ],
  },
  {
    type: "筛选",
    code: "initial",
    sub: [
      [-1, "热门"],
      ["A", "A"],
      ["B", "B"],
      ["C", "C"],
      ["D", "D"],
      ["E", "E"],
      ["F", "F"],
      ["G", "G"],
      ["H", "H"],
      ["I", "I"],
      ["J", "J"],
      ["K", "K"],
      ["L", "L"],
      ["M", "M"],
      ["N", "N"],
      ["O", "O"],
      ["P", "P"],
      ["Q", "Q"],
      ["R", "R"],
      ["S", "S"],
      ["T", "T"],
      ["U", "U"],
      ["V", "V"],
      ["W", "W"],
      ["X", "X"],
      ["Y", "Y"],
      ["Z", "Z"],
      ["#", "#"],
    ],
  },
];

const initialOptions = {
  type: -1,
  area: -1,
  initial: -1,
};

export default memo(function Artist() {
  const [option, setOption] = useState(() => initialOptions);
  const RefOption = useRef(option);
  const limit = 30;
  const offset = useRef(0);
  const DomScroll = useRef(null);
  const DomObserver = useRef(null);
  const [artists, setArtists] = useState([]);
  const handleChangeOption = (newoption) => {
    setOption((prev) => ({
      ...prev,
      ...newoption,
    }));
    offset.current = 0;
    setArtists([]);
  };

  const handleInit = async () => {
    try {
      const { type, area, initial } = RefOption.current;
      const { artists } = await apiArtistList({
        type,
        area,
        initial,
        limit,
        offset: offset.current,
      });
      offset.current += limit;
      setArtists((prev) => [...prev, ...artists]);
      // dispatch(addHomeTopArtists(artists));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    RefOption.current = option;
  }, [option]);

  useInfinite(handleInit, DomScroll, DomObserver);

  return (
    <div className="px-8 pb-8 overflow-auto h-full flex-auto" ref={DomScroll}>
      <div className="ui_w1100">
        <div className="space-y-1">
          {navs.map(({ type, code, sub }) => (
            <div
              className="domHome_artist_filter flex items-baseline"
              key={type}
            >
              <div className="w-10 flex-none">{type}</div>
              <div className="flex flex-wrap list">
                {sub.map(([key, value]) => (
                  <div className="item flex-center" key={key}>
                    <button
                      type="button"
                      onClick={() => handleChangeOption({ [code]: key })}
                      className={classNames(
                        "px-2 rounded-full",
                        key === option[code] && [
                          "ui_themeColor",
                          "ui_bg_opacity",
                        ]
                      )}
                    >
                      {value}
                    </button>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        <DomResize
          className="mt-2.5 grid gap-4"
          small="grid-cols-5"
          big="grid-cols-6"
        >
          {/*{option.type === -1 && option.initial === -1 && artists.length > 0 && (
            <div className="item">
              <div className="cover boarder relative rounded overflow-hidden border">
                <Link
                  to={`/toplist-artist/${
                    navs[0].sub.find((item) => item[0] === option.area)[2]
                  }`}
                >
                  <img
                    className="ui_containimg"
                    src="http://p3.music.126.net/1tSJODTpcbZvNTCdsn4RYA==/109951165034950656.jpg?param=200y200"
                    alt=""
                    style={{ filter: "blur(2px)" }}
                  />
                  <div className="rankmask absolute inset-0 flex-center text-white text-3xl bg-purple-500 bg-opacity-90">
                    歌手榜
                  </div>
                </Link>
              </div>
              <div className="info mt-2 text-sm text-gray-600 hover:text-black">
                <Link
                  to={`/toplist-artist/${
                    navs[0].sub.find((item) => item[0] === option.area)[2]
                  }`}
                >
                  歌手排行榜 &gt;
                </Link>
              </div>
            </div>
          )}*/}
          {artists.map((item) => (
            <Item item={item} key={item.id} />
          ))}
        </DomResize>
      </div>
      <div className="flex-center" ref={DomObserver}>
        <Loading />
      </div>
    </div>
  );
});
