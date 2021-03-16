import React, {
  useState, useEffect, useRef, createContext, useReducer,
} from 'react';
import {
  IconPlayerPlay,
} from '@tabler/icons';
import DomControl from './Control';
import DomTiming from './Timing';

import videoReducer, { initialState } from './reducer';
import {
  actionSetPlay, actionSetBuffered, actionSetCurrentTime, actionSetDuration,
} from './reducer/actions';

export const VideoContext = createContext();

export default ({ url, detail, brs = [] }) => {
  const [{
    play,
    duration,
    currentTime,
    buffered,
    full,
  }, videoDispatch] = useReducer(videoReducer, initialState);
  const ref = useRef();
  const handleChangePlay = () => {
    if (play) {
      ref.current.pause();
    } else {
      ref.current.play();
    }
    videoDispatch(actionSetPlay(!play));
    // setPlay(!play);
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
    <div className="flex flex-col absolute inset-0">
      <div className="bg-black flex-auto h-0 relative">
        <video
          src={url}
          ref={ref}
          onClick={handleChangePlay}
          onProgress={handleProgress}
          onTimeUpdate={handleSetTime}
          onLoadedMetadata={handlePreSetTime}
          className="h-full m-auto cursor-pointer"
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
        play,
        duration,
        currentTime,
        buffered,
        full,
      }}
      >
        <DomTiming />
        <DomControl />
      </VideoContext.Provider>
    </div>
  );
};
