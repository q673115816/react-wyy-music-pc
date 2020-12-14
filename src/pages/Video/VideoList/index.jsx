import React, {
  useEffect, useRef, useState, useMemo,
} from 'react';
import {
  useParams, NavLink, Link, useRouteMatch,
} from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import dayjs from 'dayjs';
import { transPlayCount } from '@/common/utils';
import { apiVideoTimelineRecommend, apiVideoGroupList, apiVideoCategoryList } from '@/api';
import { setVideoGroupList, addVideoGroupList } from '@/redux/actions';
import './style.scss';

export default () => {
  const { id } = useParams();
  console.log(id);
  const [group_list_show, setGroup_list_show] = useState(false);
  const {
    VideoGroupList, curr_check, VideoCategoryList, VideoTimelineRecommend, isLogin,
  } = useSelector(({ video, common }) => ({ ...video, ...common }));
  const dispatch = useDispatch();
  const scrolldom = useRef();
  const handleInit = async () => {
    try {
      const [
        VideoTimelineRecommend,
        VideoGroupList,
        VideoCategoryList,
      ] = await Promise.all([
        apiVideoTimelineRecommend(),
        apiVideoGroupList(),
        apiVideoCategoryList(),
      ]);
      dispatch(setVideoGroupList({
        VideoTimelineRecommend: VideoTimelineRecommend.datas,
        VideoGroupList: VideoGroupList.data,
        VideoCategoryList: VideoCategoryList.data,
      }));
      scrollBybottom(scrolldom.current);
    } catch (e) {
      console.log(e);
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

  return (
    <div className="inner overflow-auto" ref={scrolldom} onScroll={handleScroll}>
      <div className="video_sort_filter_bar">
        <div className="group_select_wrap">
          <button
            className="group_select_button"
            onClick={() => setGroup_list_show(!group_list_show)}
          >
            {curr_check}
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
                to="/play/videolist"
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
                  to={`/play/videolist/${id}`}
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
      <div className="domplay_list">
        {
          isLogin ? <div>未登录</div>
            : (
              <>
                {VideoTimelineRecommend.map(({ data }) => (
                  <div className="item" key={data.id}>
                    <div className="cover">
                      <Link to={`/video/${data.vid}`}>
                        <img className="coverimg" src={data.coverUrl} alt="" />
                        <div className="playTime">{transPlayCount(data.playTime)}</div>
                        <div className="durationms">{dayjs(data.durationms).format('mm:ss')}</div>
                      </Link>
                    </div>
                    <div className="title">
                      <Link to={`/video/${data.vid}`} className="text-overflow">{data.title}</Link>
                    </div>
                    <div className="creator gray">
                      <Link to={`/user/${data.creator.userId}`}>
                        {data.creator.nickname}
                      </Link>
                    </div>
                  </div>
                ))}
              </>
            )
        }
      </div>
    </div>
  );
};
