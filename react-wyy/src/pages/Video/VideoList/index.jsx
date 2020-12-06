import React, { useEffect, useState } from 'react';
import {
  useParams, NavLink, Link, useRouteMatch,
} from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import dayjs from 'dayjs';
import { transPlayCount } from '@/common/utils';
import { apiVideoTimelineRecommend, apiVideoGroupList, apiVideoCategoryList } from '@/api';
import { setVideoGroupList } from '@/redux/actions';
import './style.scss';

export default () => {
  const { id } = useParams();
  const { url } = useRouteMatch();
  console.log(url);
  const [group_list_show, setGroup_list_show] = useState(false);
  const {
    VideoGroupList, curr_check, VideoCategoryList, VideoTimelineRecommend,
  } = useSelector(({ play }) => play);
  const dispatch = useDispatch();

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
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    handleInit();
  }, []);

  return (
    <>
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
                to="/play/videolist/all"
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
        {VideoTimelineRecommend.map(({ data }) => (
          <div className="item" key={data.id}>
            <div className="cover">
              <Link to="/">
                <img className="coverimg" src={data.coverUrl} alt="" />
                <div className="playTime">{transPlayCount(data.playTime)}</div>
                <div className="durationms">{dayjs(data.durationms).format('mm:ss')}</div>
              </Link>
            </div>
            <div className="title">
              <Link to="/" className="text-overflow">{data.title}</Link>
            </div>
            <div className="creator gray">
              <Link to="/">
                {data.creator.nickname}
              </Link>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
