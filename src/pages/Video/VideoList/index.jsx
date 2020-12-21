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
  const scrolldom = useRef();
  const observerdom = useRef();
  const io = useRef(
    new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        console.log(entry);
        if (entry.isIntersecting) {
          handleAddList();
        }
      });
    }, {
      root: scrolldom.current,
      rootMargin: '0px 0px 20px 0px', // 懵懵懂懂
      threshold: [0, 1],
    }),
  );
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

  useLayoutEffect(() => {
    observerdom.current && io.current.observe(observerdom.current);
  }, [observerdom.current]);

  return (
    <div className="domplay_content overflow-auto" ref={scrolldom}>
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
        <div className="recommend_group_list">
          {categoryList.map(({ name, id }) => (
            <NavLink
              className="recommend_group_list_check"
              activeClassName="on"
              key={id}
              to={`/video/videolist/${id}`}
            >
              {name}
            </NavLink>
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
                      <Link to={`/videodetail/${data.vid}`}>
                        <img className="ui_coverimg" src={data.coverUrl} alt="" />
                        <div className="rt whitetext">{transPlayCount(data.playTime)}</div>
                        <div className="rb whitetext">{dayjs(data.durationms).format('mm:ss')}</div>
                      </Link>
                    </div>
                  </div>
                  <div className="footer text-overflow">
                    <Link to={`/videodetail/${data.vid}`} className="">{data.title}</Link>
                  </div>
                  <div className="text creator gray">
                    <Link to={`/user/${data.creator.userId}`}>
                      {data.creator.nickname}
                    </Link>
                  </div>
                </div>
              ))}
              <div ref={observerdom} className="item infiniteWatch" />
            </>
          )
            : <div>未登录</div>
        }
      </div>
    </div>
  );
};
