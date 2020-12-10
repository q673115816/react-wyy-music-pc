import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import dayjs from 'dayjs';
import { Link } from 'react-router-dom';

export default () => {
  const { newMsgCount, playlist } = useSelector(({ common }) => common);
  const [MsgPrivateHistory, setMsgPrivateHistory] = useState('');

  const handleSeeMsgPrivateHistory = (id) => {
    setMsgPrivateHistory('1305093793');
  };

  useEffect(() => {

  }, [MsgPrivateHistory]);

  return (
    <div id="privateLetter">
      <div className="header">
        <span className="title">消息</span>
        <button type="button" className="clear ui_link">一键已读</button>
      </div>
      <div className="nav">
        <button type="button" className="nav_link on">
          私信
          <span className="lt_ico">{newMsgCount}</span>
        </button>
        <button type="button" className="nav_link">评论</button>
        <button type="button" className="nav_link">@我</button>
        <button type="button" className="nav_link">通知</button>
      </div>
      <div className="list overflow-auto">
        {playlist.map((item) => (
          <div className="item" key={item.lastMsg}>
            <div className="avatar">
              <Link to={`/user/${item.fromUser.userId}`}>
                <img className="containimg" src={item.fromUser.avatarUrl} alt="" />
                <i className="ico">
                  <img className="containimg" src={item.fromUser?.avatarDetail?.identityIconUrl} alt="" />
                </i>
              </Link>
            </div>
            <button type="button" className="content" onClick={() => handleSeeMsgPrivateHistory(item.fromUser.userId)}>
              <div className="top">
                <span className="ui_link">{item.fromUser.nickname}</span>
                <span className="time gray">{dayjs(item.lastMsgTime).format('YYYY年MM月DD日')}</span>
              </div>
              <div className="bottom text-overflow">
                {JSON.parse(item.lastMsg).msg}
              </div>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};
