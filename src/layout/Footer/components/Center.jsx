import React, { useMemo } from 'react';
import {
  IconArrowsSplit2,
  IconPlayerSkipBack,
  IconPlayerPause,
  IconPlayerPlay,
  IconPlayerSkipForward,
  IconPlaylist,
  IconRotate,
  IconRefreshAlert,
} from '@tabler/icons';
import dayjs from 'dayjs';
import { useDispatch, useSelector } from 'react-redux';
import { setAudioCurrentTime, setAudioRunningToggle, setAudioPattern } from '@/redux/actions';
import { audioPattern } from '@/common/config';

const audioPatternIcon = [
  IconPlaylist,
  IconRotate,
  IconRefreshAlert,
  IconArrowsSplit2,
];

export default () => {
  const dispatch = useDispatch();
  const {
    running, currentTime, currentSong, pattern,
  } = useSelector(({ audio }) => audio);
  // console.log(currentTime);
  const handleToggle = () => {
    dispatch(setAudioRunningToggle());
  };
  const handleProcess = (e) => {
    dispatch(setAudioCurrentTime(e.target.value));
    // console.log(e.target.value);
  };

  const handleChangePattern = () => {
    dispatch(setAudioPattern());
  };

  const AudioPatternIcon = useMemo(() => audioPatternIcon[pattern], [pattern]);

  return (
    <div className="domfooter_center flex-center flex-col flex-1">
      <div className="domfooter_center_Top flex-center">
        <button
          type="button"
          className="mx-2 hover:ui_themeColor"
          title={audioPattern[pattern]}
          onClick={handleChangePattern}
        >
          <AudioPatternIcon size={22} />
        </button>
        <button
          type="button"
          className="domfooter_center_prev flex-center mx-2 hover:ui_themeColor"
          title="上一首（Ctrl + Left）"
        >
          <IconPlayerSkipBack size={20} className="fill-current" />
        </button>
        <button
          type="button"
          onClick={handleToggle}
          className="domfooter_center_play flex-center mx-2 bg-gray-200 hover:bg-gray-300 rounded-full w-9 h-9"
          title={running ? '暂停（Ctrl + P）' : '播放（Ctrl + P）'}
        >
          {running
            ? <IconPlayerPause size={24} className="fill-current" />
            : (
              <IconPlayerPlay size={24} className="fill-current" stroke="0" />
            )}
        </button>
        <button
          type="button"
          title="下一首（Ctrl + Right）"
          className="domfooter_center_next flex-center mx-2 hover:ui_themeColor"
        >
          <IconPlayerSkipForward size={20} className="fill-current" />
        </button>
        <button
          type="button"
          className="mx-2 hover:ui_themeColor"
          title="打开歌词"
        >
          词
        </button>
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
