import React, { useEffect, useRef, memo } from "react";
import style from "./artist.module.scss";
import classNames from "classnames";
import useInfinite from "@/hooks/useInfinite";
import Resize from "@/components/ResizeObserver";
import Loading from "@/components/Loading";
import Item from "./Item";
import config from "./config";
import { useGetArtistListMutation } from "@/modules/services/discover";
import { useImmer } from "use-immer";

const initialOptions = {
  type: -1,
  area: -1,
  initial: -1,
};

const limit = 30;

export default memo(function Artist() {
  const [option, setOption] = useImmer(() => initialOptions);
  const RefOption = useRef(option);
  const offset = useRef(0);
  const DomScroll = useRef(null);
  const DomObserver = useRef(null);
  const [artists, setArtists] = useImmer([]);
  const [artistListGet, {}] = useGetArtistListMutation();
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
      const data = await artistListGet({
        type,
        area,
        initial,
        limit,
        offset: offset.current,
      });
      offset.current += limit;
      setArtists((draft) => {
        draft.push(...data.data.artists);
      });
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
          {config.map(({ type, code, sub }) => (
            <div className="flex items-baseline whitespace-nowrap" key={type}>
              <div className="w-10 flex-none">{type}</div>
              <div className="flex flex-wrap">
                {sub.map(([key, value]) => (
                  <div
                    className={classNames(
                      style.item,
                      "item flex-center relative w-20 my-0.5"
                    )}
                    key={key}
                  >
                    <button
                      type="button"
                      onClick={() => handleChangeOption({ [code]: key })}
                      className={classNames(
                        "px-2 rounded-full",
                        key === option[code] && "ui_themeColor ui_bg_opacity"
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
        <Resize
          className="mt-2.5 grid gap-4"
          small="grid-cols-5"
          big="grid-cols-6"
        >
          {/*{option.type === -1 && option.initial === -1 && artists.length > 0 && (
            <div className="item">
              <div className="cover boarder relative rounded overflow-hidden border">
                <Link
                  to={`/toplist-artist/${
                    config[0].sub.find((item) => item[0] === option.area)[2]
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
                    config[0].sub.find((item) => item[0] === option.area)[2]
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
        </Resize>
      </div>
      <div className="flex-center" ref={DomObserver}>
        <Loading />
      </div>
    </div>
  );
});
