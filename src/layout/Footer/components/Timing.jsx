import React, { useRef, useState } from 'react';
import dayjs from 'dayjs';
import { useDispatch, useSelector } from 'react-redux';
import { setAudioCurrentTime, setAudioRunning, setAudioPattern } from '@/reducers/audio/actions';
import { computedPositionPercentage } from '@/common/utils';

export default () => {
  const dispatch = useDispatch();
  const [isDrop, setIsDrop] = useState(false);
  const {
    currentTime, currentSong, buffered,
  } = useSelector(({ audio }) => audio);

  const RefProgress = useRef();
  const computedPosition = (e) => {
    const percentage = computedPositionPercentage(e, RefProgress.current);
    const jump = percentage * (currentSong.dt / 1000);
    return jump;
  };

  const handleProcess = (e) => {
    // dispatch(setAudioCurrentTime(e.target.value));
    dispatch(setAudioCurrentTime(computedPosition(e)));
    // console.log(e.target.value);
  };

  const handleProcessStart = (e) => {
    setIsDrop(true);
  };

  const handleProcessEnd = (e) => {
    setIsDrop(false);
  };

  const handleClick = (e) => {
    dispatch(setAudioCurrentTime(computedPosition(e)));
  };

  return (
    <div className="domfooter_center_bottom flex-center">
      <span className="text-gray-400">
        {currentTime ? dayjs(currentTime * 1000).format('mm:ss') : '00:00'}
      </span>
      <div
        className="playTimerShaft group relative"
        max={currentSong.dt ? currentSong.dt / 1000 : 0}
        // value={currentTime}
        onClick={handleClick}
        ref={RefProgress}
      >
        <div className="buffered absolute h-full l-0" style={{ width: currentSong.dt ? `${buffered / currentSong.dt * 1000 * 100}%` : 0 }} />
        <div className="played relative h-full ui_theme_bg_color" style={{ width: `${currentSong.dt ? currentTime / (currentSong.dt / 1000) * 100 : 0}%` }}>
          <button
            type="button"
            className="absolute opacity-0 group-hover:opacity-100 inset-y-0 -right-1 m-auto ui_theme_bg_color rounded-full w-2 h-2 overflow-hidden shadow"
            onMouseDown={handleProcessStart}
          >
            { }
          </button>
        </div>
        {isDrop
        && <div className="absolute inset-0" onMouseMove={handleProcess} onMouseUp={handleProcessEnd} />}
      </div>
      <span className="text-gray-400">
        {currentSong.dt
          ? dayjs(currentSong.dt).format('mm:ss')
          : '00:00'}
      </span>
    </div>
  );
};
