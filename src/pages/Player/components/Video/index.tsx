import React, {
  useState, useEffect, useRef, createContext, useReducer, memo,
} from 'react';
import {
  IconPlayerPlay,
  IconRefresh
} from '@tabler/icons';
import classNames from 'classnames';
import { setPositionFalse, setPositionTrue } from '@/reducers/inset/slice';
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
} from './reducer/slice';

export const VideoContext = createContext();

export default memo(({
  url, detail, brs = [], fixed, next = {}
}) => {
  const [{
    play,
    duration,
    currentTime,
    jumpTime,
    buffered,
    full,
  }, videoDispatch] = useReducer(videoReducer, initialState);
  const ref = useRef();
  const dispatch = useDispatch();
  const [isEnd, setIsEnd] = useState(false);
  const [isAuto, setIsAuto] = useState(true)
  const handleChangePlay = () => {
    if (play) {
      ref.current.pause();
    } else {
      ref.current.play();
    }
    videoDispatch(actionSetPlay(!play));
    // setPlay(!play);
  };

  const handleEnd = () => {
    setIsEnd(true);
  };

  const handlechangeFull = async () => {
    if (full) {
      // 退出全屏
      // ref.current.webkitExitFullscreen();
      await document.webkitExitFullscreen();
      dispatch(setPositionTrue());
    } else {
      // 进入全屏
      // ref.current.webkitEnterFullScreen();
      await document.documentElement.webkitRequestFullScreen();
      dispatch(setPositionFalse());
    }
    videoDispatch(actionSetFull(!full));
  };

  const handleProgress = ({ target }) => {
    // console.log(target.buffered.length);
    const buffered = [];
    for (let i = 0; i < target.buffered.length; i += 1) {
      const onebuffered = [target.buffered.start(i), target.buffered.end(i)];
      buffered.push(onebuffered);
      // console.log(onebuffered);
    }
    videoDispatch(actionSetBuffered(buffered));
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
    // videoDispatch(actionSetCurrentTime(jumptime));
    ref.current.currentTime = jumpTime;
  }, [jumpTime]);

  return (
    <div className={classNames('ui_aspect-ratio-16/9', fixed ? ' absolute bottom-16 right-8 z-10 w-80' : 'relative')}>
      <div className={classNames('flex flex-col inset-0', full ? 'fixed z-50' : 'absolute')}>
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
            onEnded={handleEnd}
            playsInline
            autoPlay={play}
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
          {/*<div className="absolute text-gray-300 inset-0 flex-center flex-col bg-black bg-opacity-60">
            <div className="text-sm">
              即将自动为您播放：{next.title}
            </div>
            <div className="flex">
              <div className="flex-center flex-col">
                <div className="border rounded-full flex-center">
                  <IconRefresh size={36}/>
                </div>
                <div>重新播放</div>
              </div>
              <div className="flex-center flex-col">
                <div className="border rounded-full flex-center">
                  <IconPlayerPlay size={36}/>
                </div>
                <button type="button" className="">取消自动播放</button>
                <div>自动播放已暂停</div>
              </div>
            </div>
          </div>*/}
        </div>
        <VideoContext.Provider value={{
          handleChangePlay,
          play,
          duration,
          currentTime,
          buffered,
          handlechangeFull,
          full,
          videoDispatch,
        }}
        >
          <DomTiming />
          <DomControl />
        </VideoContext.Provider>
      </div>
    </div>
  );
});
