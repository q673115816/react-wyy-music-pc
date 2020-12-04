import React, { useEffect, useState } from 'react';
import { useParams, NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { apiVideoGroupList } from '../../api';
import { setVideoGroupList } from '../../redux/actions';
import './style.scss';

const recommendGroupList = [
  {
    name: '现场',
    id: 58100,
  },
  {
    name: '舞蹈',
    id: 1101,
  },
  {
    name: 'mv',
    id: 1000,
  },
  {
    name: '生活',
    id: 2100,
  },
  {
    name: '游戏',
    id: 2103,
  },
  {
    name: 'ACG音乐',
    id: 57104,
  },
  {
    name: '最佳饭制',
    id: 1105,
  },
  {
    name: '翻唱',
    id: 60100,
  },
  {
    name: '听BGM',
    id: 58101,
  },
];

export default () => {
  const { id: groupid } = useParams();
  const [group_list_show, setGroup_list_show] = useState(false);
  const { group_list, curr_check } = useSelector(({ play }) => play);
  const dispatch = useDispatch();
  useEffect(() => {
    void (async function () {
      try {
        const { data } = await apiVideoGroupList();
        dispatch(setVideoGroupList(data));
      } catch (e) {
        console.log(e);
      }
    }());
  }, []);
  useEffect(() => {
    console.log(groupid);
  }, [groupid]);
  return (
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
            {group_list.map(({ id, name }) => (
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
        {recommendGroupList.map(({ name, id }) => (
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
  );
};
