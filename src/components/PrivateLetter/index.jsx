import React, { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import dayjs from 'dayjs';
import { Link } from 'react-router-dom';
import { apiMsgPrivateHistory } from '@/api';
import Domlist from './List';
import Domhistory from './History';

export default () => {
  const { newMsgCount, msgs } = useSelector(({ common }) => common);
  // const [MsgPrivateHistory, setMsgPrivateHistory] = useState('');
  const [nickname, setNickname] = useState('nickname');
  const [privatMsgs, setPrivateMsgs] = useState([]);
  const [hint, setHint] = useState('');
  const [showMsgPrivateHistory, setShowMsgPrivateHistory] = useState(false);
  const [uid, setUid] = useState('');
  const handleSeeMsgPrivateHistory = async (uid, nickname) => {
    setUid(uid);
    // setMsgPrivateHistory(uid);
    setNickname(nickname);
    await handleGetMsgPrivateHistory(uid);
    setShowMsgPrivateHistory(true);
  };

  const handleGetMsgPrivateHistory = async (MsgPrivateHistory) => {
    try {
      const { hint, msgs = [] } = await apiMsgPrivateHistory({ uid: MsgPrivateHistory });
      setPrivateMsgs(msgs.reverse());
      setHint(hint);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div id="privateLetter">
      <div className="inner">
        {
        showMsgPrivateHistory
          ? (
            <Domhistory {...{
              setShowMsgPrivateHistory,
              nickname,
              privatMsgs,
              hint,
              uid,
              setPrivateMsgs,
            }}
            />
          )
          : (
            <Domlist {...{
              handleSeeMsgPrivateHistory, newMsgCount, msgs,
            }}
            />
          )
      }
      </div>
    </div>
  );
};
