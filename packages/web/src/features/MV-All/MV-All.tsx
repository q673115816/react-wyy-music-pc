import React, { memo, useCallback, useEffect } from "react";
import { Link } from "react-router-dom";
import classNames from "classnames";
import { useImmer } from "use-immer";
import { defaultSearch, filters, Keys } from "./config";
import { useSearchParam } from "react-use";
import List from "./List";

const MVAll = () => {
  const area = useSearchParam("area") || defaultSearch.area;
  const type = useSearchParam("type") || defaultSearch.type;
  const order = useSearchParam("order") || defaultSearch.order;
  const search: Record<Keys, string | null> = { area, type, order };
  const [data, setData] = useImmer<string[]>([]);
  const setHasMore = useCallback(() => {
    setData((prev) => {
      prev.push(area + type + order);
      return prev;
    });
  }, [area, type, order]);
  useEffect(() => {
    console.log(area + type + order);
    setData([area + type + order]);
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
                    to={`/mv-all?${new URLSearchParams(
                      Object.assign({}, search, { [filter[0]]: item })
                    )}`}
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
              key={item + index}
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
