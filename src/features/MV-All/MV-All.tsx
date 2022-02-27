import React, { useEffect, useRef, memo } from "react";
import { Link, useLocation } from "react-router-dom";
import classNames from "classnames";
import GridVideo from "@/components/GridVideo";
import useInfinite from "@/hooks/useInfinite";
import { apiMVAll } from "@/api";
import { useImmer } from "use-immer";
import { defaultSearch, filters } from "./config";

const MVAll = () => {
  const { search } = useLocation();

  const limit = 30;
  const offset = useRef(0);

  const queryString = new URLSearchParams(search);
  const domScroll = useRef(null);
  const domObserver = useRef(null);
  for (const [k, v] of queryString) {
    defaultSearch[k] = v;
  }

  const [data, setData] = useImmer([]);

  const handleInit = async () => {
    try {
      const { data, code } = await apiMVAll({
        ...defaultSearch,
        limit,
        offset: offset.current,
      });
      offset.current += limit;
      if (code !== 200) return;
      setData((draft) => {
        draft.push(
          ...data?.map(({ id, name, cover, playCount, duration, artists }) => ({
            type: 0,
            playCount,
            id,
            cover,
            duration,
            title: name,
            creator: artists.map(({ id: userId, name: userName }) => ({
              userId,
              userName,
            })),
          }))
        );
      });
    } catch (error) {
      console.log(error);
    }
  };
  useInfinite(handleInit, domScroll, domObserver, [search]);

  useEffect(() => {
    setData([]);
    offset.current = 0;
  }, [search]);

  return (
    <div className="domAllMV overflow-auto h-full" ref={domScroll}>
      <div className="domAllMV_header ui_header">
        <Link to="./" className="h1 title">
          全部MV
        </Link>
      </div>
      <div className="domAllMV_main px-8 flex-auto">
        <div className="ui_filter">
          {filters.map((filter) => (
            <div className="row flex my-2.5" key={filter[1]}>
              <div className="name flex-none">{filter[1]}:</div>
              <div className="list divide-x">
                {filter[2].map((item) => (
                  <div className="item flex-center" key={item}>
                    <Link
                      to={`/mv-all?${new URLSearchParams({
                        ...defaultSearch,
                        ...{ [filter[0]]: item },
                      })}`}
                      className={classNames(
                        "btn rounded-full leading-5 px-3 whitespace-nowrap",
                        item === defaultSearch[filter[0]]
                          ? "bg-red-50 text-red-500"
                          : "ui_text_gray_hover"
                      )}
                    >
                      {item}
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="py-1">
          <GridVideo list={data} />
        </div>
        <div ref={domObserver} />
      </div>
    </div>
  );
};

export default memo(MVAll);
