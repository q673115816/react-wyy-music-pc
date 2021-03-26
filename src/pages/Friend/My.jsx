import React, { memo, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useRouteMatch } from 'react-router-dom';
import dayjs from 'dayjs';
// import relativeTime from 'dayjs/plugin/relativeTime';
import 'dayjs/locale/zh-cn';
import { apiHotTopic, apiEvent, apiCommentEvent } from '@/api';
import {
  setFriendInit, setFriendEvent, setCommentEvent,
} from '@/reducers/friend/actions';

import { IconPlus } from '@tabler/icons';

import { setLoginVisibilty } from '@/reducers/common/actions';
import './style.scss';

import DomGender from '@/components/Gender';
import ActItem from './components/ActItem';

// dayjs.extend(relativeTime);

const getArticleFromJson = (json) => {
  const obj = JSON.parse(json);
  return (
    <>
      <div className="song">
        <div className="cover">
          <img src={obj.img80x80} alt="" />
        </div>
        <div className="">
          {obj.song.name}
        </div>
      </div>
    </>
  );
};

export default memo(() => {
  console.log('friend');
  const {
    isLogin,
  } = useSelector(({ common }) => common);
  const { profile } = useSelector(({ account }) => account);
  const {
    hot = [],
    event = [],
  } = useSelector(({ friend }) => friend);
  const { url } = useRouteMatch();
  const dispatch = useDispatch();

  const [actThreadId, setActThreadId] = useState('');
  const handleInit = async () => {
    try {
      const { hot } = await apiHotTopic({
        limit: 5,
      });
      const { event } = await apiEvent();
      dispatch(setFriendEvent({ event }));
      dispatch(setFriendInit({
        hot,
      }));
    } catch (error) {
      console.log(error);
    }
  };

  const handleGetComment = async (threadId) => {
    if (actThreadId === threadId) {
      setActThreadId('');
      return;
    }
    try {
      const { comments } = await apiCommentEvent({
        threadId,
      });
      setActThreadId(threadId);
      dispatch(setCommentEvent({ comments }));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    handleInit();
  }, []);
  return (
    <div className="domFriend flex overflow-auto h-full divide-x">
      <div className="domFriend_left relative flex-auto">
        <div className="domFriend_header px-8 flex items-center sticky top-0 z-10 bg-white">
          <span className="h1">动态</span>
          <button type="button" className="flex ml-auto items-center ui_theme_bg_color text-white h-6 px-3 rounded-full">
            <IconPlus size={12} stroke={5} />
            写动态
          </button>
        </div>
        <div className="domFriend_content flex flex-col flex-auto h-0">
          {
            isLogin ? (
              <div className="domFriend_dynamic px-8 divide-y">
                {event.map((item) => (
                  <ActItem
                    actThreadId={actThreadId}
                    key={item.id}
                    item={item}
                    handleGetComment={handleGetComment}
                  />
                ))}
              </div>
            )
              : (
                <div className="empty text-center text-gray-400 pt-48">
                  暂无动态
                </div>
              )
          }
        </div>
      </div>
      <div className="domFriend_right flex-none" style={{ width: 250 }}>
        <div className="domFriend_user">
          {
            isLogin
              ? (
                <div className="logined">
                  <div className="top">
                    <Link to={`/user/${profile.userId}`} className="avatar">
                      <img
                        className="containimg"
                        src={`${profile.avatarUrl}?param=100y100`}
                        alt=""
                      />
                    </Link>
                    <div className="flex-center">
                      <Link to={`/user/${profile.userId}`} className="nickname ml-2.5">
                        {profile.nickname}
                      </Link>
                      &nbsp;
                      <DomGender gender={profile.gender} size={14} />
                    </div>
                  </div>
                  <div className="infos flex divide-x text-center">
                    <Link to={`/user/${profile.userId}/dynamic`} className="info flex-1 ui_text_black_hover">
                      <div className="num text-xl">{profile.eventCount}</div>
                      <div className="string">动态</div>
                    </Link>
                    <Link to={`/user/${profile.userId}/follow`} className="info flex-1 ui_text_black_hover">
                      <div className="num text-xl">{profile.follows}</div>
                      <div className="string">关注</div>
                    </Link>
                    <Link to={`/user/${profile.userId}/fans`} className="info flex-1 ui_text_black_hover">
                      <div className="num text-xl">{profile.followeds}</div>
                      <div className="string">粉丝</div>
                    </Link>
                  </div>
                </div>
              )
              : (
                <div className="nologin px-5">
                  <div style={{ height: 170 }} />
                  <div className="tips text-center text-gray-500">
                    登录网易云音乐，可以享受无限收藏的乐趣，并且无限同步到手机
                  </div>
                  <button
                    type="button"
                    className="login ui_theme_bg_color text-white w-full h-10 mt-4"
                    onClick={() => dispatch(setLoginVisibilty(true))}
                  >
                    立即登录
                  </button>
                </div>
              )
          }
        </div>
        <div className="domFriend_hotTopic mt-5">
          <div className="header flex px-5 mb-2.5">
            <span className="font-bold">热门话题</span>
            <Link className="text-gray-400 ml-auto" to={`${url}/hotTopic`}>更多 &gt;</Link>
          </div>
          <div className="list">
            {hot.map((item) => (
              <Link to={`/friend/${item.actId}`} key={item.actId} className="item py-1 pl-5 flex hover:bg-gray-100">
                <div className="cover w-10 h-10">
                  <img className="rounded" src={`${item.sharePicUrl}?param=50y50`} alt="" />
                </div>
                <div className="content px-2">
                  <div className="title">
                    #
                    {item.title}
                    #
                  </div>
                  <div className="participateCount">
                    <span className="text-gray-300">
                      {item.participateCount}
                      人参与
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
});
