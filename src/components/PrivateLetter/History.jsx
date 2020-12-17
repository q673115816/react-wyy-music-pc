import React, { useEffect, useRef, useState } from 'react';
import dayjs from 'dayjs';
import { transTextEmoji } from '@/common/faces';
import { apiSendText } from '@/api';
import { wordLength } from '@/common/utils';
import EmojiFaces from '../EmojiFaces';
import Write from '../Write';

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
            <img className="ui_containimg" src={promotion.coverUrl} alt="" />
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
        <img src={json.picInfo.picUrl} className="ui_coverimg" alt="" />
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
  const [value, setValue] = useState('');
  const clickface = (face) => {
    setValue(value + face);
  };
  const handleSend = async () => {
    try {
      const { newMsgs = [] } = await apiSendText({
        user_ids: uid,
        value,
      });
      setPrivateMsgs(newMsgs.reverse());
    } catch (error) {
      console.log(error);
    }
  };
  const handleSubmit = () => {
    const length = wordLength(value);
    if (length <= 200) {
      handleSend();
      setValue('');
    } else {
      console.log('to long');
    }
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
          <i className="bi-chevron-left" />
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
                          className="ui_containimg"
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
        <Write {...{
          value, setValue, length: 200, placeholder: `回复 ${nickname}`,
        }}
        />
        <div className="actions">
          <div className="left">
            <div className="faces">
              <EmojiFaces {...{ visibility, setVisibility, clickface }} />
            </div>
            <button type="button" className="action" onClick={() => setVisibility(true)}>
              <i className="bi-emoji-smile" />
            </button>
            <button type="button" className="action">
              <i className="bi-image" />
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
