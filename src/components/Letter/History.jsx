import React, {
  useEffect, useRef, useState,
} from 'react';
import dayjs from 'dayjs';
import { transTextEmoji } from '@/common/faces';
import { apiSendText, apiMsgPrivateHistory } from '@/api';
import { setMsgPrivateHistory } from '@/reducers/letter/actions';
import { wordLength } from '@/common/utils';
import { useDispatch, useSelector } from 'react-redux';
import {
  IconChevronLeft, IconPhoto, IconMoodSmile, IconPlayerPlay,
} from '@tabler/icons';
import EmojiFaces from '../EmojiFaces';
import Write from '../Write';

const BuildSong = ({ msg = {} }) => (
  <button type="button" className="share">
    <div className="avatar">
      <img src={`${msg.song.album.picUrl}?param=100y100`} alt="" />
      <i className="ico">
        <IconPlayerPlay size={14} className="fill-current" />
      </i>
    </div>
    <div className="content">
      <div className="name truncate">
        {msg.song.name}
        {msg.song.alias.length > 0
          && (
            <span className="text-gray-400">
              （
              {msg.song.alias.join(',')}
              ）
            </span>
          )}
      </div>
      <div className="text-gray-400 artist">
        {msg.song.artists.map((artist) => artist.name)}
      </div>
    </div>
  </button>
);
const BuildAlbum = ({ msg = {} }) => (
  <button type="button" className="share">
    <div className="avatar">
      <img src={`${msg.album.picUrl}?param=100y100`} alt="" />
      <i className="ico">
        <IconPlayerPlay size={14} className="fill-current" />
      </i>
    </div>
    <div className="content">
      <div className="name truncate">
        {msg.album.name}
        {msg.album.alias.length > 0
          && (
            <span className="text-gray-400">
              （
              {msg.album.alias.join(',')}
              ）
            </span>
          )}
      </div>
      <div className="text-gray-400 artist">
        {msg.album.artists.map((artist) => artist.name)}
      </div>
    </div>
  </button>
);

const BuildContent = (msg) => {
  const emptyVideo = msg.hasOwnProperty('video') && msg.video === null;
  const hasVideo = msg.hasOwnProperty('video') && msg.video;
  const promotion = msg.hasOwnProperty('promotionUrl') && msg.promotionUrl;
  return (
    <div className="content">
      {msg.msg}
      {emptyVideo && (
        <div className="embed center">
          <span className="null text-gray-400">
            该视频已删除
          </span>
        </div>
      )}
      {promotion && (
        <a href={promotion.url} className="embed">
          <div className="cover">
            <img className="ui_containimg" src={promotion.coverUrl} alt="" />
          </div>
          <div className="promotion text-gray-400">
            {promotion.title}
          </div>
        </a>
      )}
      {
        msg.type === 1
        && <BuildSong msg={msg} />
      }
      {
        msg.type === 2
        && <BuildAlbum msg={msg} />
      }
    </div>
  );
};

const BuildMyContent = (msg) => {
  if (msg.hasOwnProperty('picInfo')) {
    return (
      <div className="img">
        <img src={msg.picInfo.picUrl} className="ui_coverimg" alt="" />
      </div>
    );
  }
  return (
    <div className="text select-text">
      {msg.title
        && (
          <>
            {msg.title}
            ：
          </>
        )}
      {transTextEmoji(msg.msg)}
      {
        msg.type === 1
        && <BuildSong msg={msg} />
      }
      {
        msg.type === 2
        && <BuildAlbum msg={msg} />
      }
    </div>
  );
};

export default () => {
  const dispatch = useDispatch();
  const history = useRef();

  const {
    uid, hint, nickname, privatMsgs,
  } = useSelector(({ privateletter }) => privateletter);

  const [visibility, setVisibility] = useState(false);
  const [value, setValue] = useState('');
  // const [privatMsgs, setPrivateMsgs] = useState([]);

  const clickface = (face) => {
    setValue(value + face);
  };

  const handleGetMsgPrivateHistory = async () => {
    try {
      const { hint, msgs = [] } = await apiMsgPrivateHistory({ uid });
      // setPrivateMsgs(msgs.reverse());
      dispatch(setMsgPrivateHistory({
        hint,
        privatMsgs: msgs.reverse(),
      }));
      history.current.scrollTo(0, history.current.scrollHeight);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSend = async () => {
    try {
      const { newMsgs = [] } = await apiSendText({
        user_ids: uid,
        value,
      });
      dispatch(setMsgPrivateHistory({
        privatMsgs: newMsgs.reverse(),
      }));
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

  useEffect(() => {
    handleGetMsgPrivateHistory();
  }, [uid]);

  return (
    <div className="inner">
      <div className="topbar">
        <button
          type="button"
          className="back flex-center text-gray-600 hover:text-black"
          onClick={() => dispatch(setMsgPrivateHistory({ showMsgPrivateHistory: false }))}
        >
          <IconChevronLeft size={22} stroke={1.5} />
        </button>
        <span>{nickname}</span>
      </div>
      <div className="history overflow-auto max-h-full flex-auto" ref={history}>
        {
          privatMsgs
            .map((item) => (
              <div className="item" key={item.id}>
                <div className="time text-gray-400">
                  {dayjs(item.time).format('YYYY年MM月DD日 HH:mm')}
                </div>
                {item.batchId === 0
                  ? (
                    <div className="msg right">
                      <div className="content">
                        {BuildMyContent(JSON.parse(item.msg))}
                      </div>
                    </div>
                  )
                  : (
                    <div className="msg left">
                      <div className="avatar">
                        <img
                          className="ui_containimg"
                          src={item.fromUser.avatarUrl}
                          alt=""
                        />
                      </div>
                      {BuildContent(JSON.parse(item.msg))}
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
              <IconMoodSmile size={24} stroke={1.4} />
            </button>
            <button type="button" className="action">
              <IconPhoto size={24} stroke={1.4} />
            </button>
          </div>
          <div className="right">
            <button type="button" className="ui_btn" onClick={handleSubmit}>发送</button>
          </div>
        </div>
      </div>
    </div>
  );
};
