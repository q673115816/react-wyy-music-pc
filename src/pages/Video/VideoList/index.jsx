import React, {
  memo,
  useEffect, useState,
  useRef,
} from 'react';
import {
  useParams, NavLink, Link,
} from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import dayjs from 'dayjs';
import { transPlayCount } from '@/common/utils';
import {
  apiVideoTimelineRecommend,
  apiVideoGroupList,
  apiVideoCategoryList,
  apiVideoGroup,
} from '@/api';
import useInfinite from '@/components/useInfinite';
import './style.scss';

export default memo(() => {
  console.log('videolist');
  const { id } = useParams();
  const [videoList, setVideoList] = useState([]);
  const [groupList, setGroupList] = useState([]);
  const [categoryList, setCategoryList] = useState([]);
  const [groupListVisibility, setGroupListVisibility] = useState(false);
  const [currentNav, setCurrentNav] = useState(() => groupList.find((group) => group.id === Number(id))?.name || '全部视频');
  const {
    isLogin,
  } = useSelector(({ common }) => common);

  const domScroll = useRef();
  const domObserver = useRef();

  const handleInit = async () => {
    try {
      const [
        { data: groupList },
        { data: categoryList = [] },
      ] = await Promise.all([
        apiVideoGroupList(),
        apiVideoCategoryList(),
      ]);
      setGroupList(groupList);
      setCategoryList(categoryList);
      setCurrentNav(
        groupList.find((group) => group.id === Number(id))?.name || '全部视频',
      );
    } catch (e) {
      console.log(e);
    }
  };

  const handleInitList = async () => {
    try {
      const { datas = [] } = await (id
        ? apiVideoGroup({
          id,
        })
        : apiVideoTimelineRecommend());
      setVideoList(datas);
    } catch (error) {
      console.log(error);
    }
  };

  const handleAddList = async () => {
    try {
      const { datas = [] } = await (id
        ? apiVideoGroup({
          id,
        })
        : apiVideoTimelineRecommend());
      setVideoList((prevList) => [...prevList, ...datas]);
    } catch (error) {
      console.log(error);
    }
  };

  const {
    handleIo,
    handleUnIo,
  } = useInfinite(handleAddList, domScroll, domObserver);

  useEffect(() => {
    handleInit();
    handleIo();
    return () => {
      handleUnIo();
    };
  }, []);

  useEffect(() => {
    // handleInitList();
    setVideoList([]);
    setCurrentNav(
      groupList.find((group) => group.id === Number(id))?.name || '全部视频',
    );
    // setGroupListVisibility(false);
  }, [id]);

  const DomSelect = () => (
    <div className="group_select_box absolute top-100 p-5 bg-white overflow-auto shadow">
      <div className="border-b pb-2">
        <NavLink
          className="group_select_check text-center rounded-full w-20 h-8 flex-center hover:ui_themeColor"
          activeClassName="text-red-500 bg-red-50"
          exact
          to="/video/videolist"
        >
          全部视频
        </NavLink>
      </div>
      <div className="group_select_list grid grid-cols-6 gap-y-5 p-4">
        {groupList.map((item) => (
          <NavLink
            activeClassName="text-red-500 bg-red-50"
            className="group_select_check text-center rounded-full h-8 flex-center hover:ui_themeColor"
            key={item.id}
            to={`/video/videolist/${item.id}`}
          >
            {item.name}
          </NavLink>
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
            {currentNav}
            {' '}
            &gt;
          </button>
          {groupListVisibility
          && <DomSelect />}
        </div>
        <div className="ui_recommend_nav">
          {categoryList.map((item) => (
            <div className="ui_recommend_nav_item" key={item.id}>
              <NavLink
                className="ui_recommend_nav_link"
                activeClassName="on"
                to={`/video/videolist/${item.id}`}
              >
                {item.name}
              </NavLink>
            </div>
          ))}
        </div>
      </div>
      <div className="domVideoList_list mt-5 grid gap-4 grid-cols-3">
        {videoList.map(({ data }) => (
          <div className="item" key={data.vid}>
            <div className="cover ui_aspect-ratio-16/9 rounded relative overflow-hidden">
              <Link to={`/player/video/${data.vid}`}>
                <img className="" src={data.coverUrl} alt="" />
                <div className="absolute top-0 right-0 text-white p-2">
                  {transPlayCount(data.playTime)}
                </div>
                <div className="absolute bottom-0 right-0 text-white p-2">
                  {dayjs(data.durationms).format('mm:ss')}
                </div>
              </Link>
            </div>
            <div className="mt-2 truncate">
              <Link to={`/player/video/${data.vid}`} className="">
                {data.title}
              </Link>
            </div>
            <div className="creator mt-2 text-gray-300">
              by&nbsp;
              <Link to={`/user/${data.creator.userId}`} className="hover:text-gray-500">
                {data.creator.nickname}
              </Link>
            </div>
          </div>
        ))}
      </div>
      <div ref={domObserver} />
    </div>
  );
});
