import React, {
  memo,
  useEffect, useState,
  useRef,
  useMemo,
} from 'react';
import classNames from 'classnames';
import {
  apiVideoTimelineRecommend,
  apiVideoGroupList,
  apiVideoCategoryList,
  apiVideoGroup,
} from '@/api';
import useInfinite from '@/custom/useInfinite';
import DomGridVideo from '@/components/GridVideo';
import { setVideoListInit, setVideoListId } from '@/reducers/videolist/actions';
import './style.scss';
import { useDispatch, useSelector } from 'react-redux';
import DomLoading from '@/components/Loading';

export default memo(() => {
  console.log('videolist');
  const dispatch = useDispatch();
  const {
    id,
    initStatus,
    groupList,
    categoryList,
  } = useSelector(({ videolist }) => videolist);
  const [videoList, setVideoList] = useState([]);
  const [groupListVisibility, setGroupListVisibility] = useState(false);
  const currentNav = useMemo(() => groupList.find((group) => group.id === Number(id))?.name, [id]);

  const domScroll = useRef();
  const domObserver = useRef();

  const handlePrevInit = async () => {
    if (initStatus) return false;
    try {
      const [
        { data: groupList },
        { data: categoryList = [] },
      ] = await Promise.all([
        apiVideoGroupList(),
        apiVideoCategoryList(),
      ]);
      dispatch(setVideoListInit({
        groupList,
        categoryList,
      }));
    } catch (e) {
      console.log(e);
    }
  };

  const handleAddList = async () => {
    try {
      const { datas = [] } = await (id
        ? apiVideoGroup({
          id,
        })
        : apiVideoTimelineRecommend());
      setVideoList((prevList) => [...prevList, ...datas.map(({
        data: {
          vid,
          coverUrl,
          durationms,
          title,
          playTime,
          creator: {
            nickname: userName, userId,
          },
        },
      }) => ({
        id: vid,
        cover: coverUrl,
        duration: durationms,
        playCount: playTime,
        title,
        creator: [{ userName, userId }],
      }))]);
    } catch (error) {
      console.log(error);
    }
  };

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
          className={classNames('group_select_check text-center rounded-full h-8 flex-center hover:ui_themeColor', id === null ? 'text-red-500 bg-red-50' : '')}
          onClick={() => dispatch(setVideoListId({ id: null }))}
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
    <div className="domVideoList_content overflow-auto flex-auto" ref={domScroll}>
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
          {categoryList.map((item) => (
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
