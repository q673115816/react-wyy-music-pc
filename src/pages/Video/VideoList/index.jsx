import React, {
  useEffect, useRef, useState, useMemo,
} from 'react';
import {
  useParams, NavLink, Link, useRouteMatch,
} from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import dayjs from 'dayjs';
import { transPlayCount } from '@/common/utils';
import {
  apiVideoTimelineRecommend, apiVideoGroupList, apiVideoCategoryList, apiVideoGroup,
} from '@/api';
import { setVideoInit, addVideoGroupList } from '@/redux/actions';
import './style.scss';

export default () => {
  const { id } = useParams();
  console.log(id);
  const [group_list_show, setGroup_list_show] = useState(false);
  const [currentNav, setCurrentNav] = useState('全部视频');
  const {
    VideoGroupList, VideoCategoryList, VideoList, isLogin,
  } = useSelector(({ video, common }) => ({ ...video, ...common }));
  const dispatch = useDispatch();
  const scrolldom = useRef();
  const handleInit = async () => {
    try {
      const [
        { data: VideoGroupList },
        { data: VideoCategoryList },
      ] = await Promise.all([
        apiVideoGroupList(),
        apiVideoCategoryList(),
      ]);
      dispatch(setVideoInit({
        VideoGroupList,
        VideoCategoryList,
      }));

      setCurrentNav(
        VideoGroupList.find((group) => group.id === Number(id))?.name || '全部视频',
      );
      scrollBybottom(scrolldom.current);
    } catch (e) {
      console.log(e);
    }
  };

  const handleInitList = async () => {
    try {
      const { datas: VideoList } = await (id
        ? apiVideoGroup({
          id,
        })
        : apiVideoTimelineRecommend());
      dispatch(setVideoInit({
        VideoList,
      }));
    } catch (error) {
      console.log(error);
    }
  };

  const handleAddVideoTimelineRecommend = async () => {
    try {
      const { datas } = await apiVideoTimelineRecommend();
      dispatch(addVideoGroupList(datas));
    } catch (error) {
      console.log(error);
    }
  };

  const handleScroll = ({ target }) => {
    scrollBybottom(target);
  };

  const scrollBybottom = (dom) => {
    if (dom.scrollTop + dom.clientHeight + 300 > dom.scrollHeight) {
      handleAddVideoTimelineRecommend();
      console.log('add next page');
    }
  };

  useEffect(() => {
    handleInit();
  }, []);

  useEffect(() => {
    handleInitList();
  }, [id]);

  return (
    <div className="domplay_content overflow-auto" ref={scrolldom} onScroll={handleScroll}>
      <div className="video_sort_filter_bar">
        <div className="group_select_wrap">
          <button
            className="group_select_button"
            onClick={() => setGroup_list_show(!group_list_show)}
          >
            {currentNav}
            {' '}
            &gt;
          </button>
          <div
            className="group_select_box"
            style={{ display: group_list_show ? null : 'none' }}
          >
            <div>
              <NavLink
                className="group_select_check"
                activeClassName="on"
                exact
                to="./"
              >
                全部视频
              </NavLink>
            </div>
            <hr style={{ marginTop: '10px' }} />
            <div className="group_select_list">
              {VideoGroupList.map(({ id, name }) => (
                <NavLink
                  activeClassName="on"
                  className="group_select_check"
                  key={id}
                  to={`./${id}`}
                >
                  {name}
                </NavLink>
              ))}
            </div>
          </div>
        </div>
        <div className="recommend_group_list">
          {VideoCategoryList.map(({ name, id }) => (
            <NavLink
              className="recommend_group_list_check"
              activeClassName="on"
              key={id}
              to={`/play/videolist/${id}`}
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
              {VideoList?.map(({ data }) => (
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
            </>
          )
            : <div>未登录</div>
        }
      </div>
    </div>
  );
};
