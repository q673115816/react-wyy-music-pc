import React, {
  useState, useEffect, useRef, createContext, useReducer,
} from 'react';
import {
  IconPlayerPlay,
} from '@tabler/icons';
import DomControl from './Control';
import DomTiming from './Timing';

export const VideoContext = createContext();

const initialState = {
  play: false,
  full: false,
  buffered: 0,
  duration: 0,
  currentTime: 0,
};

const SET_PLAY = 'SET_PLAY';
const SET_BUFFERED = 'SET_BUFFERED';
const SET_DURATION = 'SET_DURATION';
const SET_CURRENTTIME = 'SET_CURRENTTIME';

const videoReducer = (state, action) => {
  switch (action.type) {
    case SET_PLAY:
      return {
        ...state,
        ...action.payload,
      };
    case SET_BUFFERED:
      return {
        ...state,
        ...action.payload,
      };
    case SET_DURATION:
      return {
        ...state,
        ...action.payload,
      };
    case SET_CURRENTTIME:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};

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
    videoDispatch({ type: SET_PLAY, payload: { play: !play } });
    // setPlay(!play);
  };

  const handleProgress = ({ target }) => {
    // console.log(e);
    videoDispatch({ type: SET_BUFFERED, payload: { buffered: target.buffered.end(0) } });
    // setBuffered(target.buffered.end(0));
    // console.log(ref.current.buffered.end(0));
  };

  const handleSetTime = ({ target }) => {
    // console.log(e);
    videoDispatch({ type: SET_CURRENTTIME, payload: { currentTime: target.currentTime } });
    // setCurrentTime(target.currentTime);// e.timeStamp
  };

  const handlePreSetTime = ({ target }) => {
    // console.log(e);
    videoDispatch({ type: SET_DURATION, payload: { currentTime: target.duration } });
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
