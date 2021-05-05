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
        msg.song.alias.length > 0
        && (
          <span className="text-gray-400">
            {`（${msg.song.alias.join(',')}）`}
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
    <>
      <div className="header flex items-baseline p-6 pb-b">
        <span className="title text-lg">消息</span>
        {
          isLogin
            ? <button type="button" className="clear text-sm font-bold ml-auto ui_link">一键已读</button>
            : <span className="clear text-sm font-bold ml-auto ui_disabled">一键已读</span>
        }
      </div>
      <div className="nav flex-none flex m-auto w-min rounded-full border">
        {
          navs.map((nav) => (
            <button
              onClick={() => handleChangeNav(nav)}
              type="button"
              key={nav}
              className={classNames('nav_link relative w-20 h-8 rounded-full', active === nav ? 'bg-gray-400 text-white' : 'hover:bg-gray-200')}
            >
              {nav}
              {
                nav === '私信' && <span className="lt_ico border border-white rounded-full leading-tight px-1 absolute top-0 right-0 bg-red-500 transform translate-x-1/2 -translate-y-1/2 z-10">{newMsgCount}</span>
              }
            </button>
          ))
        }
      </div>
      <div className="list mt-3 overflow-auto max-h-full flex-auto">
        {data.length > 0 ? data.map((item) => (
          <div className="item flex pr-4 pt-4 hover:bg-gray-100" key={item.fromUser.userId}>
            <div className="w-4 flex-center h-8">
              {item.newMsgCount > 0
                && <i className="rounded-full w-1.5 h-1.5 bg-red-500" />}
            </div>
            <Link to={`/user/${item.fromUser.userId}`} className="avatar w-8 h-8 relative flex-none">
              <img className="rounded-full" src={item.fromUser.avatarUrl} alt="" />
              <i className="ico absolute right-0 bottom-0 w-3.5 h-3.5">
                <img
                  className="ui_containimg"
                  src={item.fromUser.avatarDetail?.identityIconUrl}
                  alt=""
                />
              </i>
            </Link>
            <button
              type="button"
              className="content border-b pb-3 flex-auto text-left ml-2.5 w-0"
              onClick={() => handleSeeMsgPrivateHistory(
                item.fromUser.userId,
                item.fromUser.nickname,
              )}
            >
              <div className="top flex">
                <span className="ui_link">
                  {item.fromUser.nickname}
                </span>
                <span className="time ml-auto text-gray-400">
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
    </>
  );
};
