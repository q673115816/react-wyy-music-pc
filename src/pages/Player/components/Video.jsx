import React, {
  forwardRef, useState, useEffect, useRef,
} from 'react';
import classNames from 'classnames';
import {
  IconPlayerPlay, IconPlayerPause, IconArrowsMaximize, IconArrowsMinimize,
  IconDeviceDesktop,
} from '@tabler/icons';
import dayjs from 'dayjs';

const sizes = [
  '标清',
  '高清',
  '超清',
  '1080P',
];

export default ({ url, detail, brs = [] }) => {
  const [play, setPlay] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [buffered, setBuffered] = useState(0);
  const [mousePosition, setMousePosition] = useState(0);
  const [timeTips, setTimeTips] = useState(false);
  const [full, setFull] = useState(true);
  const ref = useRef();
  const handleChangePlay = () => {
    if (play) {
      ref.current.pause();
    } else {
      ref.current.play();
    }
    setPlay(!play);
  };

  const handleProgress = ({ target }) => {
    // console.log(e);
    setBuffered(target.buffered.end(0));
    // console.log(ref.current.buffered.end(0));
  };

  const handleProgressEnter = (e) => {
    setTimeTips(true);
  };

  const handleProgressMove = ({ clientX, target }) => {
    // console.log(e);
    const { left, width } = target.getBoundingClientRect();
    // console.log((clientX - left) / width);
    setMousePosition((clientX - left) / width);
  };

  const handleProgressLeave = (e) => {
    setTimeTips(false);
  };

  const handleSetTime = ({ target }) => {
    // console.log(e);
    setCurrentTime(target.currentTime);// e.timeStamp
  };

  const handlePreSetTime = ({ target }) => {
    // console.log(e);
    setDuration(target.duration);// e.timeStamp
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
      <div className="h-1 relative bg-black cursor-pointer">
        {/* {timeTips
        && (
        )} */}
        <div className="absolute bottom-0 text-white px-2 py-1 border border-gray-600 bg-black bg-opacity-80 transform -translate-y-4 -translate-x-1/2" style={{ left: `${mousePosition * 100}%` }}>
          {dayjs(mousePosition * duration * 1000).format('mm:ss')}
        </div>
        <div
          className="absolute inset-0 w-0 bg-gray-400"
          alt="缓存"
          style={{ width: `${(buffered / duration) * 100}%` }}
        />
        <div
          className="h-full relative w-0 bg-red-500"
          alt="播放进度"
          style={{ width: `${(currentTime / duration) * 100}%` }}
        >
          <button type="button" className="absolute shadow right-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full h-3 w-3 flex-center">
            <i className="rounded-full bg-red-500 w-1 h-1" />
          </button>
        </div>
        <progress
          onMouseEnter={handleProgressEnter}
          onMouseMove={handleProgressMove}
          onMouseLeave={handleProgressLeave}
          max={duration}
          value={currentTime}
          className="absolute bottom-0 left-0 opacity-0 w-full"
        />
      </div>
      <div className="h-10 flex-none bg-black flex items-center pl-2">
        <button
          type="button"
          className="border rounded-full text-white border-current w-6 h-6 flex-center"
          onClick={handleChangePlay}
        >
          {
                play
                  ? <IconPlayerPause className="fill-current" size={12} />
                  : <IconPlayerPlay className="fill-current" size={12} />
              }
        </button>
        <span className="text-gray-400 ml-2">
          {dayjs(currentTime * 1000).format('mm:ss')}
          &nbsp;
          /
          &nbsp;
          {dayjs(duration * 1000).format('mm:ss')}
        </span>
        <div className="ml-auto flex divide-x">
          <div className="flex">
            <button type="button">{}</button>
            <div>{}</div>
          </div>
          <div className="relative w-20">
            <button type="button" className="flex items-center justify-end text-gray-400 hover:text-white">
              <IconDeviceDesktop size={20} />
              超清
            </button>
            <div className="absolute left-0 right-0 bottom-full border text-white divide-y transform -translate-y-4 flex flex-col bg-black bg-opacity-80">
              {
                sizes.map((size) => (
                  <button type="button" className="text-right py-2 px-4">{size}</button>
                ))
              }
            </div>
          </div>
          <button type="button" className="flex-center w-10 text-gray-400 hover:text-white">
            {
              full
                ? <IconArrowsMaximize size={20} stroke={1} />
                : <IconArrowsMinimize size={20} stroke={1} />
            }
          </button>
        </div>
      </div>
    </div>
  );
};
