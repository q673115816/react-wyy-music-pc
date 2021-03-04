import React, {
  useEffect, useRef, useState,
} from 'react';
import dayjs from 'dayjs';
import { transTextEmoji } from '@/common/faces';
import { apiSendText, apiMsgPrivateHistory } from '@/api';
import { setMsgPrivateHistory } from '@/reducers/letter/actions';
import { wordLength } from '@/common/utils';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  IconChevronLeft, IconPhoto, IconMoodSmile, IconPlayerPlay,
} from '@tabler/icons';
import EmojiFaces from '../EmojiFaces';
import Write from '../Write';

const DomSong = ({ msg = {} }) => (
  <button type="button" className="share flex w-56 rounded p-2 bg-gray-50 mt-2">
    <div className="avatar flex-none w-10 h-10 rounded relative overflow-hidden">
      <img src={`${msg.song.album.picUrl}?param=100y100`} alt="" />
      <i className="absolute inset-0 m-auto w-6 h-6 bg-white bg-opacity-90 flex-center rounded-full ui_themeColor">
        <IconPlayerPlay size={14} className="fill-current" />
      </i>
    </div>
    <div className="content flex-auto w-0 pl-2.5 text-left">
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
        {msg.song.artists.map((artist, index) => (
          <span key={artist.name}>
            {index > 0 && ' / '}
            {artist.name}
          </span>
        ))}
      </div>
    </div>
  </button>
);
const DomAlbum = ({ msg = {} }) => (
  <Link
    to={`/playlist/album/${msg.album.id}`}
    className="share flex w-56 rounded p-2 bg-gray-50 mt-2"
  >
    <button
      type="button"
      className="avatar flex-none w-10 h-10 rounded relative overflow-hidden group"
    >
      <img src={`${msg.album.picUrl}?param=100y100`} alt="" />
      <i className="absolute opacity-0 group-hover:opacity-100 inset-0 m-auto w-6 h-6 bg-white bg-opacity-90 flex-center rounded-full ui_themeColor">
        <IconPlayerPlay
          size={14}
          className="fill-current"
        />
      </i>
    </button>
    <div className="content flex-auto w-0 pl-2.5 text-left">
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
        {msg.album.artist.name}
      </div>
    </div>
  </Link>
);

const DomCircle = ({ msg = {} }) => (
  <div>云圈</div>
);

const DomPromotion = ({ msg = {} }) => (
  <a href={msg.promotion.url} className="embed">
    <div className="cover">
      <img className="" src={msg.promotion.coverUrl} alt="" />
    </div>
    <div className="promotion text-gray-400">
      {msg.promotion.title}
    </div>
  </a>
);

const DomImage = ({ msg = {} }) => (
  <div className="img">
    <img src={msg.picInfo.picUrl} className="" alt="" />
  </div>
);

const DomMsg = ({ msg = {} }) => transTextEmoji(msg.msg);

const DomContent = ({ msg = {} }) => {
  const { type } = msg;
  return (
    <>
      {type === 1 && <DomSong msg={msg} />}
      {type === 2 && <DomAlbum msg={msg} />}
      {type === 6 && <DomMsg msg={msg} />}
      {type === 16 && <DomImage msg={msg} />}
    </>
  );
};

const DomMsgLeft = ({ msg = {} }) => (
  <div className="flex">
    <div className="w-60">
      <div className="rounded-lg rounded-tl-none bg-blue-50 p-2">
        <DomContent msg={msg} />
      </div>
    </div>
  </div>
);

const DomMsgRight = ({ msg = {} }) => (
  <div className="flex justify-end">
    <div className="w-60">
      <div className="rounded-lg rounded-rb-none bg-blue-50 p-2">
        <DomContent msg={msg} />
      </div>
    </div>
  </div>
);

export default () => {
  const dispatch = useDispatch();
  const history = useRef();

  const {
    uid, hint, nickname, privatMsgs,
  } = useSelector(({ letter }) => letter);

  const { profile } = useSelector(({ account }) => account);

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
          className="back flex-center ui_text_gray_hover"
          onClick={() => dispatch(setMsgPrivateHistory({ showMsgPrivateHistory: false }))}
        >
          <IconChevronLeft size={22} />
        </button>
        <span>{nickname}</span>
      </div>
      <div className="history overflow-auto max-h-full flex-auto px-5" ref={history}>
        {
          privatMsgs
            .map((item) => (
              <div className="item mt-5" key={item.id}>
                <div className="time text-gray-400">
                  {dayjs(item.time).format('YYYY年MM月DD日 HH:mm')}
                </div>
                {item.toUser.userId === profile.userId
                  ? (
                    <div className="msg flex justify-start">
                      <div className="avatar flex-none mr-4 rounded-full overflow-hidden w-8 h-8">
                        <img
                          className=""
                          src={item.fromUser.avatarUrl}
                          alt=""
                        />
                      </div>
                      <DomMsgLeft msg={JSON.parse(item.msg)} />
                    </div>
                  )
                  : <DomMsgRight msg={JSON.parse(item.msg)} />}
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
