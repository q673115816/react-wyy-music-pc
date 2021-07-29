import React, {
  RefObject,
  useEffect, useLayoutEffect, useRef, useState,
} from 'react';
import { Link, useHistory } from 'react-router-dom';
import LazyLoad from 'react-lazyload';
import { IconPlayerPlay } from '@tabler/icons';
import { apiPersonalizedPrivatecontentList } from '@/api';
// import {
//   setExclusiveResultAdd,
//   setExclusiveResultEmpty,
//   setExclusiveScrollTop,
// } from '@/reducers/exclusive/slice';
import useInfinite from '@/hooks/useInfinite';
// import { useDispatch, useSelector } from 'react-redux';
import {useAppDispatch, useAppSelector} from '@/reducers/hooks'
import {
  ResultProps,
  setExclusiveResultAdd,
  setExclusiveResultEmpty,
  setExclusiveScrollTop,
  handleGetData,
} from '@/reducers/exclusive/slice'
import Resize from '@/components/ResizeObserver';

export default () => {
  const { action } = useHistory();
  const dispatch = useAppDispatch();
  const { result, scrollTop } = useAppSelector(({ exclusive }) => exclusive);
  const limit = 60;
  const offset = useRef(0);
  const handleInit = () => {
    handleGetData({limit, offset})
    offset.current += limit
  };
  const DomScroll= useRef<HTMLDivElement>(null);
  const DomObserver = useRef<HTMLDivElement>(null);
  useInfinite(handleInit, DomScroll, DomObserver);
  useEffect(() => {
    if (action === 'PUSH') {
      dispatch(setExclusiveResultEmpty());
    } else if(DomScroll.current) {
      DomScroll.current.scrollTop = scrollTop;
    }
  }, []);
  useLayoutEffect(() => () => {
    dispatch(setExclusiveScrollTop({
      scrollTop: DomScroll.current?.scrollTop || 0,
    }));
  }, []);
  return (
    <div className="overflow-auto p-8 h-full" ref={DomScroll}>
      <div className="ui_w1100">
        <div className="h1 pb-4">独家放送</div>
        <Resize className="grid gap-5" small="grid-cols-2" big="grid-cols-3">
          {
              result.map((item: ResultProps) => (
                <div key={item.picUrl}>
                  <Link
                    to={item.videoId ? `/player/video/${item.videoId}` : `/player/mv/${item.id}`}
                    className="flex relative rounded border overflow-hidden ui_aspect-ratio-24/9"
                  >
                    <LazyLoad overflow>
                      <img src={item.picUrl} className="w-full h-full object-cover" alt="" />
                    </LazyLoad>
                    <span className="ico absolute top-2 left-2 rounded-full text-white w-6 h-6 bg-black bg-opacity-40 flex-center border border-gray-200">
                      <IconPlayerPlay size={14} className="fill-current" />
                    </span>
                  </Link>
                  <div className="mt-2">
                    <Link to={`/player/mv/${item.id}`} className="text-sm ui_text_black_hover">
                      {item.name}
                    </Link>
                  </div>
                </div>
              ))
            }
        </Resize>
        <div ref={DomObserver} />
      </div>
    </div>
  );
};
