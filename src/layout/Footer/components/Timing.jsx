import React, { useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import dayjs from 'dayjs';
import { useDispatch, useSelector } from 'react-redux';
import {
  setJumpToAudioCurrentTime,
  setAudioCurrentTime,
  setAudioDropping,
  setAudioRunning,
  setAudioPattern,
} from '@/reducers/audio/actions';
import { computedPositionPercentage } from '@/common/utils';

export default () => {
  const dispatch = useDispatch();
  const [isDrop, setIsDrop] = useState(false);
  const {
    currentTime, currentSong, buffered, song,
  } = useSelector(({ audio }) => audio);

  // const memoPlayArea = useMemo(() => {
  //   song?.[0]?.freeTrialInfo ? {

  //   } : {
  //     start: '0%',
  //     end: '100%',
  //   };
  // }, [song]);
  const RefProgress = useRef();
  const computedPosition = (e) => {
    const percentage = computedPositionPercentage(e, RefProgress.current);
    const jump = percentage * (currentSong.dt / 1000);
    return jump;
  };

  const handleProcessStart = () => {
    dispatch(setAudioDropping({ dropping: true }));
    setIsDrop(true);
  };

  const handleProcess = (e) => {
    dispatch(setAudioCurrentTime(computedPosition(e)));
  };

  const handleProcessEnd = (e) => {
    dispatch(setAudioDropping({ dropping: false }));
    dispatch(setJumpToAudioCurrentTime(computedPosition(e)));
    setIsDrop(false);
  };

  const handleClick = (e) => {
    dispatch(setAudioCurrentTime(computedPosition(e)));
    dispatch(setJumpToAudioCurrentTime(computedPosition(e)));
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
        <div
          className="buffered absolute h-full"
          style={{
            left: 0,
            right: currentSong.dt ? `${buffered / currentSong.dt * 1000 * 100}%` : 0,
          }}
        />
        <div
          className="played relative h-full ui_theme_bg_color"
          style={{
            width: `${currentSong.dt ? currentTime / (currentSong.dt / 1000) * 100 : 0}%`,
          }}
        >
          <button
            type="button"
            className="absolute opacity-0 group-hover:opacity-100 inset-y-0 -right-1 m-auto ui_theme_bg_color rounded-full w-2 h-2 overflow-hidden shadow"
            onMouseDown={handleProcessStart}
          >
            { }
          </button>
        </div>
        {isDrop
          && createPortal(
            <div
              className="absolute inset-0"
              onMouseMove={handleProcess}
              onMouseUp={handleProcessEnd}
            />, document.querySelector('#help-root'),
          )}

      </div>
      <span className="text-gray-400">
        {currentSong.dt
          ? dayjs(currentSong.dt).format('mm:ss')
          : '00:00'}
      </span>
    </div>
  );
};
