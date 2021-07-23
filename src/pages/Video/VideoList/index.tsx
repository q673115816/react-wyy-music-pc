import React, {
  memo,
  useEffect, useState,
  useRef,
  useMemo,
} from 'react';
import classNames from 'classnames';
import useInfinite from '@/hooks/useInfinite';
import DomGridVideo from '@/components/GridVideo';
import {
  handleAddList,
  handlePrevInit,
  setVideoListId,
  Category
} from '@/reducers/videolist/slice';
import './style.scss';
import { useAppSelector, useAppDispatch } from '@/reducers/hooks';
import DomLoading from '@/components/Loading';

export default memo(() => {
  const dispatch = useAppDispatch()
  const {
    id,
    initStatus,
    groupList,
    categoryList,
  } = useAppSelector(({ videolist }) => videolist);
  const [videoList, setVideoList] = useState([]);
  const [groupListVisibility, setGroupListVisibility] = useState(false);
  const currentNav = useMemo(() => groupList.find((group) => group.id === Number(id))?.name, [id]);

  const domScroll = useRef<HTMLDivElement>(null);
  const domObserver = useRef<HTMLDivElement>(null);

  useInfinite(handleAddList, domScroll, domObserver);

  useEffect(() => {
    handlePrevInit();
  }, []);

  useEffect(() => {
    setVideoList([]);
  }, [id]);

  const DomSelect = () => (
    <div className="group_select_box absolute top-100 p-5 bg-white overflow-auto shadow">
      <div className="border-b pb-2">
        <button
          type="button"
          className={classNames('group_select_check text-center rounded-full h-8 flex-center hover:ui_themeColor', id === 0 ? 'text-red-500 bg-red-50' : '')}
          onClick={() => dispatch(setVideoListId({ id: 0 }))}
        >
          全部视频
        </button>
      </div>
      <div className="group_select_list grid grid-cols-6 gap-y-5 p-4">
        {groupList.map((item) => (
          <button
            type="button"
            className={classNames('group_select_check text-center rounded-full h-8 flex-center hover:ui_themeColor', item.id === id ? 'text-red-500 bg-red-50' : '')}
            key={item.id}
            onClick={() => dispatch(setVideoListId({ id: item.id }))}
          >
            {item.name}
          </button>
        ))}
      </div>
    </div>
  );

  return (
    <div className="domVideoList_content px-8 overflow-auto flex-auto" ref={domScroll}>
      <div className="video_sort_filter_bar flex items-center justify-between">
        <div className="group_select_wrap relative z-10">
          <button
            type="button"
            className="group_select_button border rounded-full hover:bg-gray-100 text-sm"
            onClick={() => setGroupListVisibility(!groupListVisibility)}
          >
            {currentNav || '全部视频'}
            &gt;
          </button>
          {groupListVisibility
            && <DomSelect />}
        </div>
        <div className="recommend_nav divide-x flex">
          {categoryList.map((item: Category) => (
            <div key={item.id}>
              <button
                type="button"
                className={classNames('recommend_nav_link rounded-full px-2 mx-1', id === item.id ? 'bg-red-50 text-red-500' : 'ui_text_black_hover')}
                onClick={() => dispatch(setVideoListId({ id: item.id }))}
              >
                {item.name}
              </button>
            </div>
          ))}
        </div>
      </div>
      <div className="my-4">
        <DomGridVideo
          list={videoList}
        />
        <div ref={domObserver} className="flex-center">
          <DomLoading />
        </div>
      </div>
    </div>
  );
});
