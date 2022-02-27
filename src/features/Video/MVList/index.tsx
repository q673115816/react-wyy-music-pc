import React, { useEffect, memo, useMemo } from "react";
import { useAppSelector, useAppDispatch } from "@/modules/hooks";
import { Link } from "react-router-dom";
import classNames from "classnames";
import { IconChevronRight } from "@tabler/icons";
import GridVideo from "@/components/GridVideo";
import GridMVToplist from "@/components/GridMVToplist";
import Loading from "@/components/Loading";
import {
  handleInit,
  handleChangeFirstArea,
  handleChangeTopArea,
  MVListSelector,
} from "@/modules/reducers/mvlist/slice";

const category = ["内地", "港台", "欧美", "日本", "韩国"];

export default memo(function MVList() {
  const dispatch = useAppDispatch();
  const { firstArea, topArea, first, hot, wy, top, timestamp } =
    useAppSelector(MVListSelector);
  const memoLoading = useMemo(
    () => Date.now() - timestamp > 3600000,
    [timestamp]
  );

  useEffect(() => {
    if (memoLoading) {
      dispatch(
        handleInit({
          firstArea,
          topArea,
        })
      );
    }
  }, [memoLoading]);

  if (memoLoading)
    return (
      <div className="w-full h-full flex-center">
        <Loading />
      </div>
    );
  return (
    <div className="domVideoList_content px-8 overflow-auto max-h-full flex-auto">
      <div className="domMVList_sublist">
        <div className="domMVList_header mb-5 flex justify-between items-center">
          <Link
            to={`/mv-all?order=最新&area=${firstArea}`}
            className="domMVList_subLink font-bold text-base flex items-center"
          >
            最新MV
            <IconChevronRight size={20} />
          </Link>
          <div className="recommend_nav flex divide-x space-x-1">
            {category.map((item) => (
              <div className="item" key={item}>
                <button
                  onClick={() => dispatch(handleChangeFirstArea(item))}
                  type="button"
                  className={classNames(
                    "link rounded-full px-2.5",
                    firstArea === item
                      ? "text-red-500 bg-red-50"
                      : "ui_text_black_hover"
                  )}
                >
                  {item}
                </button>
              </div>
            ))}
          </div>
        </div>
        <GridVideo list={first} />
      </div>
      <div className="domMVList_sublist">
        <div className="domMVList_header mt-8 mb-5 flex justify-between items-center">
          <Link
            to="/mv-all?order=最热"
            className="domMVList_subLink font-bold text-base flex items-center"
          >
            热播MV
            <IconChevronRight size={20} />
          </Link>
        </div>
        <GridVideo list={hot} />
      </div>
      <div className="domMVList_sublist">
        <div className="domMVList_header mt-8 mb-5 flex justify-between items-center">
          <Link
            to="/mv-all?type=网易出品&order=最新"
            className="domMVList_subLink font-bold text-base flex items-center"
          >
            网易出品
            <IconChevronRight size={20} />
          </Link>
        </div>
        <GridVideo list={wy} />
      </div>
      <div className="domMVList_header mt-8 mb-5 flex justify-between items-center">
        <Link
          to="/toplist-mv/"
          className="domMVList_subLink font-bold text-base flex items-center"
        >
          MV排行榜
          <IconChevronRight size={20} />
        </Link>
        <div className="recommend_nav flex divide-x space-x-1">
          {category.map((item) => (
            <div className="item" key={item}>
              <button
                onClick={() => dispatch(handleChangeTopArea(item))}
                type="button"
                className={classNames(
                  "link rounded-full px-2.5",
                  topArea === item
                    ? "text-red-500 bg-red-50"
                    : "ui_text_black_hover"
                )}
              >
                {item}
              </button>
            </div>
          ))}
        </div>
      </div>
      <GridMVToplist
        list={top}
        schema={[
          ["评论", "播放"],
          ["收藏", "分享", "下载MV", "复制链接"],
        ]}
      />
    </div>
  );
});
