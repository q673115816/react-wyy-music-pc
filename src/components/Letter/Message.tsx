import React, {
  useEffect, useRef, useState,
} from 'react';
import dayjs from 'dayjs';
import { transTextEmoji } from '@/common/faces';
import { apiSendText, apiMsgPrivateHistory } from '@/api';
import { setMsgPrivateHistory } from '@/reducers/letter/slice';
import { wordLength } from '@/common/utils';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  IconChevronLeft, IconPhoto, IconMoodSmile, IconPlayerPlay,
} from '@tabler/icons';
import EmojiFaces from '@/components/EmojiFaces';
import Write from '@/components/Write';

const DomSong = ({ msg = {} }) => (
  <button type="button" className="share w-56 flex rounded p-2 bg-gray-50 mt-2">
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
              {`（${msg.song.alias.join(',')}）`}
            </span>
          )}
      </div>
      <div className="text-gray-400 artist truncate">
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
    className="share flex rounded p-2 bg-gray-50 mt-2 w-56"
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
              {`（${msg.album.alias.join(',')}）`}
            </span>
          )}
      </div>
      <div className="text-gray-400 artist truncate">
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
  if (type === 16) return <DomImage msg={msg} />;
  return (
    <>
      {transTextEmoji(msg.msg)}
      {type === 1 && <DomSong msg={msg} />}
      {type === 2 && <DomAlbum msg={msg} />}
    </>
  );
};

const DomMsgLeft = ({ msg = {} }) => (
  <div className="flex">
    <div className="w-60 flex">
      <div className="rounded-lg rounded-tl-none bg-blue-50 p-3 select-text">
        <DomContent msg={msg} />
      </div>
    </div>
  </div>
);

const DomMsgRight = ({ msg = {} }) => (
  <div className="flex">
    <div className="ml-auto w-60 flex">
      <div className="ml-auto rounded-lg rounded-br-none bg-blue-50 p-3 select-text">
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
        msg: value,
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
    <>
      <div className="topbar relative text-center text-sm flex-center" style={{ height: 50 }}>
        <button
          type="button"
          className="back absolute inset-y-0 left-0 p-2.5 flex-center ui_text_gray_hover"
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
      <div className="feedback p-3">
        <Write {...{
          value, setValue, length: 200, placeholder: `回复 ${nickname}`,
        }}
        />
        <div className="actions flex mt-2.5">
          <div className="left relative">
            {
              visibility
              && (
                <div className="-translate-x-3 -translate-y-1/2 absolute faces right-full top-1/2 transform">
                  <EmojiFaces {...{ handleHide: () => setVisibility(false), clickface }} />
                </div>
              )
            }
            <button type="button" className="action" onClick={() => setVisibility(!visibility)}>
              <IconMoodSmile size={24} stroke={1.4} />
            </button>
            <button type="button" className="action">
              <IconPhoto size={24} stroke={1.4} />
            </button>
          </div>
          <button type="button" className="ml-auto border px-4 h-8 rounded-full" onClick={handleSubmit}>
            发送
          </button>
        </div>
      </div>
    </>
  );
};
