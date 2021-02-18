import React from 'react';
import {
  IconArrowsSplit2,
  IconPlayerSkipBack,
  IconPlayerPause,
  IconPlayerPlay,
  IconPlayerSkipForward,
} from '@tabler/icons';
import dayjs from 'dayjs';
import { useDispatch, useSelector } from 'react-redux';
import { setAudioCurrentTime, setAudioRunningToggle } from '@/redux/actions';

export default () => {
  const dispatch = useDispatch();
  const { running, currentTime, currentSong } = useSelector(({ audio }) => audio);
  // console.log(currentTime);
  const handleToggle = () => {
    dispatch(setAudioRunningToggle());
  };
  const handleProcess = (e) => {
    dispatch(setAudioCurrentTime(e.target.value));
    // console.log(e.target.value);
  };

  return (
    <div className="domfooter_center flex-center flex-col flex-1">
      <div className="domfooter_center_Top flex-center">
        <button type="button" className="mx-2 hover:ui_themeColor">
          <IconArrowsSplit2 size={22} />
        </button>
        <button type="button" className="domfooter_center_prev flex-center mx-2 hover:ui_themeColor">
          <IconPlayerSkipBack size={20} className="fill-current" />
        </button>
        <button
          type="button"
          onClick={handleToggle}
          className="domfooter_center_play flex-center mx-2 bg-gray-200 hover:bg-gray-300 rounded-full w-9 h-9"
        >
          {running
            ? <IconPlayerPause size={24} className="fill-current" />
            : (
              <IconPlayerPlay size={24} className="fill-current" stroke="0" />
            )}
        </button>
        <button type="button" className="domfooter_center_next flex-center mx-2 hover:ui_themeColor">
          <IconPlayerSkipForward size={20} className="fill-current" />
        </button>
        <button type="button" className="mx-2 hover:ui_themeColor">词</button>
      </div>
      <div className="domfooter_center_bottom flex-center">
        <span className="text-gray-400">
          {currentTime ? dayjs(currentTime * 1000).format('mm:ss') : '00:00'}
        </span>
        <input
          onChange={handleProcess}
          type="range"
          max={currentSong.dt ? currentSong.dt / 1000 : 100}
          value={currentTime}
          style={{ '--process': currentTime / (currentSong.dt / 1000) * 100 }}
          className="domfooter_center_process"
        />
        <span className="text-gray-400">
          {currentSong.dt
            ? dayjs(currentSong.dt).format('mm:ss')
            : '00:00'}
        </span>
      </div>
    </div>
  );
};
