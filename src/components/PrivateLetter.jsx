import React, { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import dayjs from 'dayjs';
import { Link } from 'react-router-dom';
import { apiMsgPrivateHistory } from '@/api';

const handleBuildContent = (msg) => {
  const json = JSON.parse(msg);
  const emptyVideo = json.hasOwnProperty('video') && json.video === null;
  const hasVideo = json.hasOwnProperty('video') && json.video;
  const promotion = json.hasOwnProperty('promotionUrl') && json.promotionUrl;
  return (
    <div className="content">
      {json.msg}
      {emptyVideo && (
        <div className="embed center">
          <span className="null gray">
            该视频已删除
          </span>
        </div>
      )}
      {promotion && (
        <a href={promotion.url} _block className="embed">
          <div className="cover">
            <img className="containimg" src={promotion.coverUrl} alt="" />
          </div>
          <div className="promotion gray">
            {promotion.title}
          </div>
        </a>
      )}
    </div>
  );
};

const handleBuildMyContent = (msg) => {
  const json = JSON.parse(msg);
  if (json.hasOwnProperty('picInfo')) {
    return <div className="img"><img src={json.picInfo.picUrl} className="coverimg" alt="" /></div>;
  }
  return <div className="text">{json.msg}</div>;
};

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

export default () => {
  const { newMsgCount, msgs } = useSelector(({ common }) => common);
  const [MsgPrivateHistory, setMsgPrivateHistory] = useState('');
  const [nickname, setNickname] = useState('nickname');
  const [privatMsgs, setPrivateMsgs] = useState([]);
  const [hint, setHint] = useState('');
  const [showMsgPrivateHistory, setShowMsgPrivateHistory] = useState(false);
  const history = useRef();
  const handleSeeMsgPrivateHistory = async (uid, nickname) => {
    setMsgPrivateHistory(uid);
    setNickname(nickname);
    await handleGetMsgPrivateHistory(uid);
    setShowMsgPrivateHistory(true);
  };

  const handleGetMsgPrivateHistory = async (MsgPrivateHistory) => {
    try {
      const { hint, msgs } = await apiMsgPrivateHistory({ uid: MsgPrivateHistory });
      setPrivateMsgs(msgs);
      setHint(hint);
      console.log(history.current, history.current.scrollHeight);
      history.current.scrollTo(0, history.current.scrollHeight);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div id="privateLetter">
      <div className="inner" style={{ display: showMsgPrivateHistory ? 'none' : null }}>
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
      </div>
      <div className="inner" style={{ display: showMsgPrivateHistory ? null : 'none' }}>
        <div className="topbar">
          <button
            type="button"
            className="back"
            onClick={() => setShowMsgPrivateHistory(false)}
          >
            <i className="material-icons">navigate_before</i>
          </button>
          <span>{nickname}</span>
        </div>
        <div className="history overflow-auto" ref={history}>
          {
            privatMsgs
              .reverse()
              .map((item) => (
                <div className="item" key={item.id}>
                  <div className="time gray">
                    {dayjs(item.time).format('YYYY年MM月DD日 HH:mm')}
                  </div>
                  {item.batchId === 0
                    ? (
                      <div className="mymsg">
                        <div className="content">
                          {handleBuildMyContent(item.msg)}
                        </div>
                      </div>
                    )
                    : (
                      <div className="msg">
                        <div className="avatar">
                          <img className="containimg" src={item.fromUser.avatarUrl} alt="" />
                        </div>
                        {handleBuildContent(item.msg)}
                      </div>
                    )}
                </div>
              ))
          }
          {hint && <div className="hint">{hint}</div>}
        </div>
        <div className="feedback">
          <div className="write">
            <textarea className="textarea" maxLength="200" placeholder={`回复 ${nickname}`} />
            <span className="length">{ }</span>
          </div>
          <div className="actions">
            <div className="left">
              <button type="button">
                <i className="material-icons">sentiment_satisfied_alt</i>
              </button>
              <button type="button">
                <i className="material-icons">insert_photo_outlined</i>
              </button>
            </div>
            <div className="right">
              <button type="button" className="ui_btn">发送</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
