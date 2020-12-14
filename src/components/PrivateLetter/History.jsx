import React, { useEffect, useRef, useState } from 'react';
import dayjs from 'dayjs';
import { transTextEmoji } from '@/common/faces';
import { apiSendText } from '@/api';
import EmojiFaces from '../EmojiFaces';

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
    return (
      <div className="img">
        <img src={json.picInfo.picUrl} className="coverimg" alt="" />
      </div>
    );
  }
  return <div className="text">{transTextEmoji(json.msg)}</div>;
};

export default ({
  setShowMsgPrivateHistory,
  nickname,
  privatMsgs = [],
  hint,
  uid,
  setPrivateMsgs,
}) => {
  const [visibility, setVisibility] = useState(false);
  const [msg, setMsg] = useState('');
  const [length, setLenght] = useState(0);
  // 全角半角判断
  useEffect(() => {
    let length = 0;
    for (const char of msg) {
      if (char.codePointAt() < 0x080) {
        length += 0.5;
      } else {
        length += 1;
      }
    }
    setLenght(length >> 0);
  }, [msg]);
  const clickface = (face) => {
    setMsg(msg + face);
  };
  const handleSend = async () => {
    try {
      const { newMsgs = [] } = await apiSendText({
        user_ids: uid,
        msg,
      });
      setPrivateMsgs(newMsgs.reverse());
    } catch (error) {
      console.log(error);
    }
  };
  const handleSubmit = async () => {
    if (msg.length > 200) {
      return false;
    }
    await handleSend();
    setMsg('');
  };
  const history = useRef();
  useEffect(() => {
    history.current.scrollTo(0, history.current.scrollHeight);
  }, []);
  return (
    <>
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
                        <img
                          className="containimg"
                          src={item.fromUser.avatarUrl}
                          alt=""
                        />
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
          <textarea
            onChange={({ target }) => setMsg(target.value)}
            value={msg}
            className="textarea"
            placeholder={`回复 ${nickname}`}
          />
          <span className="length gray">{200 - length }</span>
        </div>
        <div className="actions">
          <div className="left">
            <div className="faces">
              <EmojiFaces {...{ visibility, setVisibility, clickface }} />
            </div>
            <button type="button" className="action" onClick={() => setVisibility(true)}>
              <i className="material-icons">sentiment_satisfied_alt</i>
            </button>
            <button type="button" className="action">
              <i className="material-icons">photo_size_select_actual</i>
            </button>
          </div>
          <div className="right">
            <button type="button" className="ui_btn" onClick={handleSubmit}>发送</button>
          </div>
        </div>
      </div>
    </>
  );
};
