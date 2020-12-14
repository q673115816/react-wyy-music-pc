import React from 'react';
import dayjs from 'dayjs';
import { Link } from 'react-router-dom';

const handleTransLastMsg = (msg) => {
  function build(key, msg, text) {
    const dom = {
      song: () => `单曲： [${msg}]`,
      album: () => `专辑： [${msg}]`,
      topic: () => `专栏文章： [${msg}]`,
      promotionUrl: () => `${text}： [${msg}]`,
      picInfo: () => '[图片]',
    };
    return dom[key]();
  }
  const json = JSON.parse(msg);
  if (json.hasOwnProperty('song')) return build('song', json.song.name);
  if (json.hasOwnProperty('album')) return build('album', json.album.name);
  if (json.hasOwnProperty('topic')) return build('promotionUrl', json.topic.title);
  if (json.hasOwnProperty('promotionUrl')) return build('promotionUrl', json.msg, json.promotionUrl.text);
  if (json.hasOwnProperty('picInfo')) return build('picInfo');
  return json.msg;
};

export default ({ handleSeeMsgPrivateHistory, newMsgCount, msgs = [] }) => (
  <>
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
      {msgs.map((item) => (
        <div className="item" key={item.lastMsg}>
          <div className="avatar">
            <Link to={`/user/${item.fromUser.userId}`}>
              <img className="containimg" src={item.fromUser.avatarUrl} alt="" />
              <i className="ico">
                <img className="containimg" src={item.fromUser?.avatarDetail?.identityIconUrl} alt="" />
              </i>
            </Link>
          </div>
          <button type="button" className="content" onClick={() => handleSeeMsgPrivateHistory(item.fromUser.userId, item.fromUser.nickname)}>
            <div className="top">
              <span className="ui_link">
                {item.fromUser.nickname}
              </span>
              <span className="time gray">
                {dayjs(item.lastMsgTime).format('YYYY年MM月DD日')}
              </span>
            </div>
            <div className="bottom text-overflow">
              {handleTransLastMsg(item.lastMsg)}
            </div>
          </button>
        </div>
      ))}
    </div>
  </>
);
