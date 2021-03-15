import React, { useState, useContext } from 'react';
import dayjs from 'dayjs';
import { VideoContext } from './index';

export default () => {
  const [timeTips, setTimeTips] = useState(false);
  const [mousePosition, setMousePosition] = useState(0);
  const {
    duration,
    currentTime,
    buffered,
  } = useContext(VideoContext);
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

  return (
    <div className="h-1 relative bg-black cursor-pointer">
      {timeTips
      && (
        <div className="absolute bottom-0 text-white px-2 py-1 border border-gray-600 bg-black bg-opacity-80 transform -translate-y-4 -translate-x-1/2" style={{ left: `${mousePosition * 100}%` }}>
          {dayjs(mousePosition * duration * 1000).format('mm:ss')}
        </div>
      )}
      <div
        className="absolute inset-0 w-0 bg-gray-400"
        alt="缓存"
        style={{ width: `${(buffered / duration) * 100}%` }}
      />
      <div
        className="h-full relative w-0 ui_theme_bg_color"
        alt="播放进度"
        style={{ width: `${(currentTime / duration) * 100}%` }}
      >
        <button
          type="button"
          className="absolute shadow right-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full h-3 w-3 flex-center"
        >
          <i className="rounded-full ui_theme_bg_color w-1 h-1" />
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
  );
};
