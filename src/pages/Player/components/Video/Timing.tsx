import React, { useState, useContext, useEffect } from 'react';
import dayjs from 'dayjs';
import { setDragInit } from '@/reducers/drag/actions';
import { useDispatch } from 'react-redux';
import { VideoContext } from './index';
import { actionSetJumpTime } from './reducer/actions';

export default () => {
  const dispatch = useDispatch();
  const [timeTips, setTimeTips] = useState(false);
  const [dragger, setDragger] = useState(false);
  const [mousePosition, setMousePosition] = useState(0);
  const [playerLengthRatio, setPlayerLengthRatio] = useState(0);
  const {
    duration,
    currentTime,
    buffered,
    videoDispatch,
  } = useContext(VideoContext);

  const handleDropMove = () => {

  };

  const handleDropUp = () => {
    setDragger(false);
  };

  const handleDropDown = () => {
    setDragger(true);
    dispatch(setDragInit({
      onMouseMove: handleDropMove,
      onMouseUp: handleDropUp,
    }));
  };

  const handleProgressEnter = (e) => {
    setTimeTips(true);
  };

  const handleProgressMove = ({ clientX, target }) => {
    // console.log(e);
    const { left, width } = target.getBoundingClientRect();
    // console.log((clientX - left) / width);
    setMousePosition((clientX - left) / width);
    if (dragger) {
      setPlayerLengthRatio((clientX - left) / width);
    }
  };

  const handleProgressLeave = (e) => {
    setTimeTips(false);
  };

  const handleProgressDropUp = () => {
    setDragger(false);
  };

  const handleClick = ({ clientX, target }) => {
    // console.log('click');
    const { left, width } = target.getBoundingClientRect();
    const ratio = (clientX - left) / width;
    setPlayerLengthRatio(ratio);
    videoDispatch(actionSetJumpTime(ratio * duration));
  };

  useEffect(() => {
    if (!dragger) {
      setPlayerLengthRatio((currentTime / duration));
    }
  }, [currentTime]);

  return (
    <div className="h-1 relative bg-black cursor-pointer">
      {timeTips
        && (
          <div className="absolute bottom-0 text-white px-2 py-1 border border-gray-600 bg-black bg-opacity-80 transform -translate-y-4 -translate-x-1/2" style={{ left: `${mousePosition * 100}%` }}>
            {dayjs(mousePosition * duration * 1000).format('mm:ss')}
          </div>
        )}
      <div
        className="absolute inset-0"
        alt="缓存"
      >
        {
          buffered.map(([start, end]) => (
            <div
              key={`${start}-${end}`}
              className="absolute inset-y-0 bg-gray-400"
              style={{ left: `${(start / duration) * 100}%`, right: `${(1 - (end / duration)) * 100}%` }}
            />
          ))
        }
      </div>
      <div
        className="h-full relative w-0 ui_theme_bg_color"
        alt="播放进度"
        style={{ width: `${playerLengthRatio * 100}%` }}
      >
        <button
          onMouseDown={handleDropDown}
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
        onMouseUp={handleProgressDropUp}
        onClick={handleClick}
        max={duration}
        value={currentTime}
        className="absolute bottom-0 left-0 opacity-0 w-full"
      />
    </div>
  );
};
