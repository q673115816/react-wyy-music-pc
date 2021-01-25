import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useRouteMatch } from 'react-router-dom';
import dayjs from 'dayjs';
// import relativeTime from 'dayjs/plugin/relativeTime';
import 'dayjs/locale/zh-cn';
import { apiHotTopic, apiEvent, apiCommentEvent } from '@/api';
import {
  setFriendInit, setFriendEvent, setCommentEvent, setLoginVisibility,
} from '@/redux/actions';
import './style.scss';

import { DomMale, DomFamale } from '@/components/Gender';
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

export default () => {
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
    <div className="domFriend overflow-auto max-h-full flex-auto">
      <div className="domFriend_left">
        <div className="domFriend_header">
          <span className="h1">动态</span>
          <button type="button" className="ui_btn_small inline-flex items-center justify-center h-6 px-3 rounded-full">
            +
            写动态
          </button>
        </div>
        <div className="domFriend_content">
          {
            isLogin ? (
              <div className="domFriend_dynamic">
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
                <div className="empty inset-center center">
                  <span className="text-gray-400">
                    暂无动态
                  </span>
                </div>
              )
          }
        </div>
      </div>
      <div className="domFriend_split" />
      <div className="domFriend_right">
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
                      <Link to={`/user/${profile.userId}`} className="nickname">
                        {profile.nickname}
                      </Link>
                      &nbsp;
                      {profile.gender === 1 && <DomMale size={12} />}
                      {profile.gender === 2 && <DomFamale size={12} />}
                    </div>
                  </div>
                  <div className="bottom">
                    <Link to={`/user/${profile.userId}/dynamic`} className="info">
                      <div className="num">{profile.eventCount}</div>
                      <div className="string">动态</div>
                    </Link>
                    <span className="split" />
                    <Link to={`/user/${profile.userId}/follow`} className="info">
                      <div className="num">{profile.follows}</div>
                      <div className="string">关注</div>
                    </Link>
                    <span className="split" />
                    <Link to={`/user/${profile.userId}/fans`} className="info">
                      <div className="num">{profile.followeds}</div>
                      <div className="string">粉丝</div>
                    </Link>
                  </div>
                </div>
              )
              : (
                <div className="nologin">
                  <div style={{ height: 170 }} />
                  <div className="tips">
                    登录网易云音乐，可以享受无限收藏的乐趣，并且无限同步到手机
                  </div>
                  <button
                    type="button"
                    className="login"
                    onClick={() => dispatch(setLoginVisibility(true))}
                  >
                    立即登录
                  </button>
                </div>
              )
          }
        </div>
        <div className="domFriend_hotTopic">
          <div className="header">
            <span>热门话题</span>
            <Link className="text-gray-400" to={`${url}/hotTopic`}>更多 &gt;</Link>
          </div>
          <div className="list">
            {hot.map((item) => (
              <Link to={`/friend/${item.actId}`} key={item.actId} className="item">
                <div className="cover">
                  <img className="ui_containimg" src={`${item.sharePicUrl}?param=50y50`} alt="" />
                </div>
                <div className="content">
                  <div className="title">
                    #
                    {item.title}
                    #
                  </div>
                  <div className="participateCount">
                    <span className="text-gray-400">
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
};
