import React, { useEffect, useState } from 'react';
import dayjs from 'dayjs';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import classNames from 'classnames';
import {
  apiMsgPrivate,
  apiMsgComments,
  apiMsgForwards,
  apiMsgNotices,
} from '@/api';
import { setMsgPrivateHistory } from '@/reducers/letter/actions';
import { setMsgPrivate } from '@/reducers/common/actions';

const BuildList = {
  song: (msg) => (
    <span>
      单曲：「
      {msg.song.name}
      {
        msg.song.alias
        && (
          <span className="text-gray-400">
            (
            {msg.song.alias.join(',')}
            )
          </span>
        )
      }
      」
    </span>
  ),
  album: (msg) => (
    <span>
      专辑：「
      {msg.album.name}
      」
    </span>
  ),
  topic: (msg) => (
    <span>
      专栏文章：「
      {msg.topic.title}
      」
    </span>
  ),
  promotionUrl: (msg) => (
    <span>
      {msg.promotionUrl.text}
      ：「
      {msg.msg}
      」
    </span>
  ),
  picInfo: () => '[图片]',
};

const BuildTransLastMsg = (msg = {}) => {
  const keys = ['song', 'album', 'topic', 'promotionUrl', 'picInfo'];
  for (const key of keys) {
    if (msg[key]) return BuildList[key](msg);
  }
  return msg.msg;
};

const navs = [
  '私信',
  '评论',
  '@我',
  '通知',
];

export default () => {
  const dispatch = useDispatch();
  const {
    isLogin, newMsgCount, msgs = [], comments = [], forwards = [], notices = [],
  } = useSelector(({ common }) => common);
  const [data, setData] = useState([]);
  const [active, setActive] = useState('私信');

  // 刷新数据
  const handlePrivateInit = async (fn) => {
    try {
      const {
        // newMsgCount,
        msgs,
        comments,
        forwards,
        notices,
      } = await fn();
      dispatch(setMsgPrivate({
        msgs,
        // newMsgCount,
        comments,
        forwards,
        notices,
      }));
    } catch (error) {
      console.log(error);
    }
  };

  const handleChangeNav = (active) => {
    setActive(active);
    if (active === '私信') {
      handlePrivateInit(apiMsgPrivate);
      setData(msgs);
    } else if (active === '评论') {
      handlePrivateInit(apiMsgComments);
      setData(comments);
    } else if (active === '@我') {
      handlePrivateInit(apiMsgForwards);
      setData(forwards);
    } else if (active === '通知') {
      handlePrivateInit(apiMsgNotices);
      setData(notices);
    }
  };

  useEffect(() => {
    // handlePrivateInit(apiMsgPrivate);
    handleChangeNav(active);
  }, []);
  const handleSeeMsgPrivateHistory = async (uid, nickname) => {
    dispatch(setMsgPrivateHistory({
      uid,
      nickname,
      showMsgPrivateHistory: true,
    }));
  };

  return (
    <div className="inner">
      <div className="header">
        <span className="title">消息</span>
        {
          isLogin
            ? <button type="button" className="clear ui_link">一键已读</button>
            : <span className="clear ui_disabled">一键已读</span>
        }
      </div>
      <div className="nav">
        {
          navs.map((nav) => (
            <button
              onClick={() => handleChangeNav(nav)}
              type="button"
              key={nav}
              className={classNames('nav_link', { on: active === nav })}
            >
              {nav}
              {
                nav === '私信' && isLogin
                && <span className="lt_ico">{newMsgCount}</span>
              }
            </button>
          ))
        }
      </div>
      <div className="list overflow-auto max-h-full flex-auto">
        {data.length > 0 ? data.map((item) => (
          <div className="item" key={item.fromUser.userId}>
            <div className="avatar">
              <Link to={`/user/${item.fromUser.userId}`}>
                <img className="ui_containimg" src={item.fromUser.avatarUrl} alt="" />
                <i className="ico">
                  <img
                    className="ui_containimg"
                    src={item.fromUser.avatarDetail?.identityIconUrl}
                    alt=""
                  />
                </i>
              </Link>
            </div>
            <button
              type="button"
              className="content"
              onClick={() => handleSeeMsgPrivateHistory(
                item.fromUser.userId,
                item.fromUser.nickname,
              )}
            >
              <div className="top">
                <span className="ui_link">
                  {item.fromUser.nickname}
                </span>
                <span className="time text-gray-400">
                  {dayjs(item.lastMsgTime).format('YYYY年MM月DD日')}
                </span>
              </div>
              <div className="bottom truncate">
                {BuildTransLastMsg(JSON.parse(item.lastMsg))}
              </div>
            </button>
          </div>
        ))
          : (
            <div className="empty">
              暂无
              {active}
              内容
            </div>
          )}
      </div>
    </div>
  );
};
