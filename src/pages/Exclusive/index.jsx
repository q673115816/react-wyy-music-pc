import React, {
  useEffect, useLayoutEffect, useRef, useState,
} from 'react';
import { Link, useHistory } from 'react-router-dom';
import LazyLoad from 'react-lazyload';
import { IconPlayerPlay } from '@tabler/icons';
import { apiPersonalizedPrivatecontentList } from '@/api';
import {
  setExclusiveResultAdd,
  setExclusiveResultEmpty,
  setExclusiveScrollTop,
} from '@/reducers/exclusive/actions';
import useInfinite from '@/custom/useInfinite';
import './style.scss';
import { useDispatch, useSelector } from 'react-redux';
import classNames from 'classnames';
import DomReisze from '@/components/ObserverContain';

export default () => {
  const { action } = useHistory();
  const dispatch = useDispatch();
  const { result, scrollTop } = useSelector(({ exclusive }) => exclusive);
  const limit = 60;
  const offset = useRef(0);
  const handleInit = async () => {
    try {
      const { result } = await apiPersonalizedPrivatecontentList({
        limit,
        offset: offset.current,
      });
      offset.current += limit;
      dispatch(setExclusiveResultAdd({
        result,
      }));
    } catch (error) {
      console.log(error);
    }
  };
  const DomScroll = useRef();
  const DomObserver = useRef();
  useInfinite(handleInit, DomScroll, DomObserver);
  useEffect(() => {
    if (action === 'PUSH') {
      dispatch(setExclusiveResultEmpty());
    } else {
      DomScroll.current.scrollTop = scrollTop;
    }
  }, []);
  useLayoutEffect(() => () => {
    dispatch(setExclusiveScrollTop({
      scrollTop: DomScroll.current.scrollTop,
    }));
  }, []);
  return (
    <div className="overflow-auto p-8 h-full" ref={DomScroll}>
      <DomReisze>
        <div className="h1 pb-4">独家放送</div>
        <div className={classNames('grid gap-5 grid-cols-2')}>
          {
              result.map((item) => (
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
        </div>
        <div ref={DomObserver} />
      </DomReisze>
    </div>
  );
};
