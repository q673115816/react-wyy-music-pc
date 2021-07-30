import React, {
  useEffect, memo,
  useCallback,
  MouseEvent
} from 'react';
import { Link } from 'react-router-dom';
import {useAppDispatch} from "@/reducers/hooks";

import {
  setContriesCodeList,
  setMsgPrivate,
} from '@/reducers/common/slice';
import { setLoginInfo } from '@/reducers/account/slice';
import {
  apiCountriesCodeList,
  apiUserAccount,
  apiMsgPrivate,
  apiUserPlaylist,
  apiUserDetail,
  apiLikelist,
  apiArtistSublist,
  apiMVSublist,
  apiTopicSublist,
  apiAlbumSublist,
  apiPlaylistMylike,
} from '@/api';
import { setGlobalInset, setGlobalDragger, setGlobalStartInset } from '@/reducers/inset/slice';
import { setDragInit, setDragUnload } from '@/reducers/drag/slice';
import HelpMask from "@/components/HelpMask";
import {
  IconMicrophone,
} from '@tabler/icons';

import DomVisitStack from './components/VisitStack';
import DomSearch from './components/Search';
import DomAccount from './components/Account';
import DomControl from './components/Control';
import DomFunction from './components/Function';
import './style.scss';

export default memo(() => {
  const dispatch = useAppDispatch();

  const dragMove = (e: MouseEvent<HTMLDivElement>) => {
    dispatch(setGlobalInset({
      x: e.clientX,
      y: e.clientY,
    }));
  };

  const dragUp = () => {
    dispatch(setGlobalDragger(false));
    dispatch(setDragUnload())
  };

  const dragDown = (e: MouseEvent<HTMLDivElement>) => {
    dispatch(setGlobalDragger(true));
    dispatch(setGlobalStartInset({
      x: e.clientX,
      y: e.clientY,
    }));
    dispatch(setDragInit());
  };

  const handleGetCountriesCodeList = async () => {
    try {
      const { data } = await apiCountriesCodeList();
      dispatch(setContriesCodeList({ countriesCodeList: data }));
    } catch (error) {
      console.log(error);
    }
  };

  const handleCookieInit = async () => {
    try {
      const { profile } = await apiUserAccount();
      if (profile) {
        const { profile: accountDetail, bindings } = await apiUserDetail({
          uid: profile.userId,
        });
        const { playlist } = await apiUserPlaylist({ uid: profile.userId });
        const { } = await apiPlaylistMylike();
        const { ids: likelist } = await apiLikelist({ uid: profile.userId });
        const { data: artistSublist } = await apiArtistSublist();
        const { data: mvSublist } = await apiMVSublist();
        const { data: topicSublist } = await apiTopicSublist();
        const { data: albumSublist } = await apiAlbumSublist();
        dispatch(setLoginInfo({
          profile: { ...profile, ...accountDetail },
          playlist,
          bindings,
          likelist,
          artistSublist,
          mvSublist,
          topicSublist,
          albumSublist,
        }));
        // dispatch(setIsLogin());
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handlePrivateLetterInit = async () => {
    try {
      const { msgs, newMsgCount } = await apiMsgPrivate();
      dispatch(setMsgPrivate({ msgs, newMsgCount }));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    handleGetCountriesCodeList();
    handleCookieInit();
    handlePrivateLetterInit();
  }, []);

  return (
    <div className="domHeader relative flex items-center">
      <HelpMask onMouseMove={dragMove} onMouseUp={dragUp}>
        <div
          className="absolute inset-0 z-0 w-full"
          onMouseDown={dragDown}
          title="长按拖拽"
        />
      </HelpMask>
      <Link
        to="/"
        className="domHeader_logo tracking-widest text-white text-lg z-10"
        style={{ width: 210 }}
      >
        网易云音乐
      </Link>
      <div className="flex items-center space-x-2">
        <DomVisitStack />
        <DomSearch />
        <Link to="/ai" className="bg-black bg-opacity-5 w-8 h-8 rounded-full text-white flex-center z-10">
          <IconMicrophone size={18} />
        </Link>
      </div>
      <DomAccount />
      <DomFunction />
      <span className="domHeader_spilt mx-3 w-px h-4" />
      <DomControl />
    </div>
  );
});
