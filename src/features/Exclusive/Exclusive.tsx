import React, { memo, useRef } from "react";
import { Link } from "react-router-dom";
import { IconPlayerPlay } from "@tabler/icons";
import useInfinite from "@/hooks/useInfinite";
import { useAppDispatch, useAppSelector } from "@/modules/hooks";
import {
  ResultProps,
  setExclusiveResultAdd,
  setExclusiveResultEmpty,
  setExclusiveScrollTop,
  handleGetData,
} from "@/modules/reducers/exclusive/slice";
import ResizeObserver from "@/components/ResizeObserver";

const limit = 60;

export default memo(function Exclusive() {
  const dispatch = useAppDispatch();
  const { result, scrollTop } = useAppSelector(({ exclusive }) => exclusive);
  const offset = useRef(0);
  const handleInit = () => {
    dispatch(handleGetData({ limit, offset: offset.current }));
    offset.current += limit;
  };
  const DomScroll = useRef<HTMLDivElement>(null);
  const DomObserver = useRef<HTMLDivElement>(null);
  useInfinite(handleInit, DomScroll, DomObserver);

  return (
    <div className="overflow-auto p-8 h-full" ref={DomScroll}>
      <div className="ui_w1100">
        <div className="h1 pb-4">独家放送</div>
        <ResizeObserver
          className="grid gap-5"
          small="grid-cols-2"
          big="grid-cols-3"
        >
          {result.map((item: ResultProps) => (
            <div key={item.picUrl}>
              <Link
                to={
                  item.videoId
                    ? `/player/video/${item.videoId}`
                    : `/player/mv/${item.id}`
                }
                className="flex relative rounded border overflow-hidden"
              >
                <img
                  loading={"lazy"}
                  src={item.picUrl}
                  className="w-full h-full object-cover ui_aspect-ratio-24/9"
                  alt=""
                />
                <span className="ico absolute top-2 left-2 rounded-full text-white w-6 h-6 bg-black bg-opacity-40 flex-center border border-gray-200">
                  <IconPlayerPlay size={14} className="fill-current" />
                </span>
              </Link>
              <div className="mt-2">
                <Link
                  to={`/player/mv/${item.id}`}
                  className="text-sm ui_text_black_hover"
                >
                  {item.name}
                </Link>
              </div>
            </div>
          ))}
          <div ref={DomObserver} />
        </ResizeObserver>
      </div>
    </div>
  );
});
