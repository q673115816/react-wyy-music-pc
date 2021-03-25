import React, {
  useState, useEffect, useRef, createContext, useReducer,
} from 'react';
import {
  IconPlayerPlay,
} from '@tabler/icons';
import classNames from 'classnames';
import { setPositionFalse, setPositionTrue } from '@/reducers/mask/actions';
import { useDispatch } from 'react-redux';
import DomControl from './Control';
import DomTiming from './Timing';

import videoReducer, { initialState } from './reducer';
import {
  actionSetFull,
  actionSetPlay,
  actionSetBuffered,
  actionSetCurrentTime,
  actionSetDuration,
} from './reducer/actions';

export const VideoContext = createContext();

export default ({
  url, detail, brs = [], fixed,
}) => {
  const [{
    play,
    duration,
    currentTime,
    buffered,
    full,
  }, videoDispatch] = useReducer(videoReducer, initialState);
  const ref = useRef();
  const dispatch = useDispatch();
  const handleChangePlay = () => {
    if (play) {
      ref.current.pause();
    } else {
      ref.current.play();
    }
    videoDispatch(actionSetPlay(!play));
    // setPlay(!play);
  };

  const handlechangeFull = async () => {
    if (full) {
      // 退出全屏
      // ref.current.webkitExitFullscreen();
      await document.exitFullscreen();
      dispatch(setPositionTrue());
    } else {
      // 进入全屏
      // ref.current.webkitEnterFullScreen();
      await document.documentElement.requestFullscreen();
      dispatch(setPositionFalse());
    }
    videoDispatch(actionSetFull(!full));
  };

  const handleProgress = ({ target }) => {
    // console.log(e);
    videoDispatch(actionSetBuffered(target.buffered.end(0)));
    // setBuffered(target.buffered.end(0));
    // console.log(ref.current.buffered.end(0));
  };

  const handleSetTime = ({ target }) => {
    // console.log(e);
    videoDispatch(actionSetCurrentTime(target.currentTime));
    // setCurrentTime(target.currentTime);// e.timeStamp
  };

  const handlePreSetTime = ({ target }) => {
    // console.log(e);
    videoDispatch(actionSetDuration(target.duration));
    // setDuration(target.duration);// e.timeStamp
  };

  useEffect(() => {

  }, []);
  return (
    <div className={classNames('ui_aspect-ratio-16/9', fixed ? ' absolute bottom-16 right-8 z-10 w-80' : 'relative')}>
      <div className={classNames('flex flex-col inset-0 z-50', full ? 'fixed' : 'absolute')}>
        <div className="bg-black flex-auto h-0 relative">
          <video
            src={url}
            ref={ref}
            onClick={handleChangePlay}
            onProgress={handleProgress}
            onTimeUpdate={handleSetTime}
            onLoadedMetadata={handlePreSetTime}
            className="h-full m-auto cursor-pointer"
            onDoubleClick={handlechangeFull}
            playsInline
            loop
          />
          {
            !play
            && (
              <button
                onClick={handleChangePlay}
                type="button"
                className="ico text-white bg-black bg-opacity-10 border border-gray-300 cursor-pointer hover:border-white rounded-full absolute inset-0 m-auto w-16 h-16 flex-center"
              >
                <IconPlayerPlay size={24} className="fill-current" />
              </button>
            )
          }
        </div>
        <VideoContext.Provider value={{
          handleChangePlay,
          play,
          duration,
          currentTime,
          buffered,
          handlechangeFull,
          full,
        }}
        >
          <DomTiming />
          <DomControl />
        </VideoContext.Provider>
      </div>
    </div>
  );
};
