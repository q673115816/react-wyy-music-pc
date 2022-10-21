import React, { memo, useCallback, useEffect } from "react";
import { Link } from "react-router-dom";
import classNames from "classnames";
import { useImmer } from "use-immer";
import { defaultSearch, filters, Keys } from "./config";
import { useSearchParam } from "react-use";
import List from "./List";

const MVAll = () => {
  const area = useSearchParam("area");
  const type = useSearchParam("type");
  const order = useSearchParam("order");
  const search: Record<Keys, string | null> = { area, type, order };
  search["area"] ??= defaultSearch.area;
  search["type"] ??= defaultSearch.type;
  search["order"] ??= defaultSearch.order;
  const [data, setData] = useImmer<number[]>([]);
  const setHasMore = useCallback(() => {
    setData((prev) => {
      prev.push(0);
      return prev;
    });
  }, [area, type, order]);
  return (
    <div className="overflow-auto h-full">
      <div className="ui_header">
        <span className="h1 cursor-pointer">全部MV</span>
      </div>
      <div className="px-8 flex-auto">
        {filters.map((filter) => (
          <div className="flex my-2.5" key={filter[1]}>
            <div className="flex-none">{filter[1]}:</div>
            <div className="flex divide-x">
              {filter[2].map((item) => (
                <div className="w-20 flex-center" key={item}>
                  <Link
                    to={`/mv-all?${new URLSearchParams(search)}`}
                    className={classNames(
                      "rounded-full leading-5 px-3 whitespace-nowrap",
                      item === search[filter[0]]
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
        <div className="py-1">
          {data.map((item, index) => (
            <List
              index={index}
              key={index}
              order={order}
              area={area}
              type={type}
              setHasMore={setHasMore}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default memo(MVAll);
