import React, {
  useEffect, useRef, useState, useLayoutEffect,
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

export default () => {
  const { id } = useParams();
  const [videoList, setVideoList] = useState([]);
  const [groupList, setGroupList] = useState([]);
  const [categoryList, setCategoryList] = useState([]);
  const [groupListVisibility, setGroupListVisibility] = useState(false);
  const [currentNav, setCurrentNav] = useState(() => groupList.find((group) => group.id === Number(id))?.name || '全部视频');
  const {
    isLogin,
  } = useSelector(({ common }) => common);

  const handleInit = async () => {
    try {
      const [
        { data: groupList },
        { data: categoryList },
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
      const { datas: videoList } = await (id
        ? apiVideoGroup({
          id,
        })
        : apiVideoTimelineRecommend());
      setVideoList(videoList);
    } catch (error) {
      console.log(error);
    }
  };

  const handleAddList = async () => {
    try {
      const { datas: videoList } = await (id
        ? apiVideoGroup({
          id,
        })
        : apiVideoTimelineRecommend());
      setVideoList((prevList) => [...prevList, ...videoList]);
    } catch (error) {
      console.log(error);
    }
  };

  const {
    setScrolldom,
    setObserverdom,
  } = useInfinite(handleAddList);

  useEffect(() => {
    handleInit();
  }, []);

  useEffect(() => {
    handleInitList();
    setCurrentNav(
      groupList.find((group) => group.id === Number(id))?.name || '全部视频',
    );
    setGroupListVisibility(false);
  }, [id]);

  return (
    <div className="domplay_content overflow-auto" ref={setScrolldom}>
      <div className="video_sort_filter_bar">
        <div className="group_select_wrap">
          <button
            type="button"
            className="group_select_button"
            onClick={() => setGroupListVisibility(!groupListVisibility)}
          >
            {currentNav}
            {' '}
            &gt;
          </button>
          <div
            className="group_select_box"
            style={{ display: groupListVisibility ? null : 'none' }}
          >
            <div>
              <NavLink
                className="group_select_check"
                activeClassName="on"
                exact
                to="/video/videolist"
              >
                全部视频
              </NavLink>
            </div>
            <hr style={{ marginTop: '10px' }} />
            <div className="group_select_list">
              {groupList.map(({ id, name }) => (
                <NavLink
                  activeClassName="on"
                  className="group_select_check"
                  key={id}
                  to={`/video/videolist/${id}`}
                >
                  {name}
                </NavLink>
              ))}
            </div>
          </div>
        </div>
        <div className="ui_recommend_nav">
          {categoryList.map(({ name, id }) => (
            <div className="ui_recommend_nav_item" key={id}>
              <NavLink
                className="ui_recommend_nav_link"
                activeClassName="on"
                to={`/video/videolist/${id}`}
              >
                {name}
              </NavLink>
            </div>
          ))}
        </div>
      </div>
      <div className="domplay_list ui_grid rectangle_width col_3">
        {
          isLogin ? (
            <>
              {videoList.map(({ data }) => (
                <div className="item" key={data.id}>
                  <div className="cover">
                    <div className="inner">
                      <Link to={`/player/video/${data.vid}`}>
                        <img className="ui_coverimg" src={data.coverUrl} alt="" />
                        <div className="rt whitetext">{transPlayCount(data.playTime)}</div>
                        <div className="rb whitetext">{dayjs(data.durationms).format('mm:ss')}</div>
                      </Link>
                    </div>
                  </div>
                  <div className="footer text-overflow">
                    <Link to={`/player/video/${data.vid}`} className="">{data.title}</Link>
                  </div>
                  <div className="text creator gray">
                    <Link to={`/user/${data.creator.userId}`}>
                      {data.creator.nickname}
                    </Link>
                  </div>
                </div>
              ))}
              <div ref={setObserverdom} className="item infiniteWatch" />
            </>
          )
            : <div>未登录</div>
        }
      </div>
    </div>
  );
};
