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
import { useDispatch, useSelector } from 'react-redux';
import {
  setAudioRunning,
  setAudioPattern,
  setAudioPrev,
  setAudioNext,
} from '@/reducers/audio/actions';
import {
  setGlobalLrcToggle,
} from '@/reducers/mask/actions';
import { audioPattern } from '@/common/config';
import classNames from 'classnames';
import DomTiming from './Timing';

const audioPatternIcon = [
  IconPlaylist,
  IconRotate,
  IconRefreshAlert,
  IconArrowsSplit2,
];

export default () => {
  const dispatch = useDispatch();
  const {
    running, pattern,
  } = useSelector(({ audio }) => audio);
  const { globalLrcVisibility } = useSelector(({ mask }) => mask);
  const handleToggle = () => {
    dispatch(setAudioRunning({ running: !running }));
  };

  const handleChangePattern = () => {
    dispatch(setAudioPattern());
  };

  const handlePrev = () => {
    dispatch(setAudioPrev());
  };

  const handleNext = () => {
    dispatch(setAudioNext());
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
          onClick={handlePrev}
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
          onClick={handleNext}
          className="domfooter_center_next flex-center mx-2 hover:ui_themeColor"
        >
          <IconPlayerSkipForward size={20} className="fill-current" />
        </button>
        <button
          type="button"
          className={classNames('mx-2 hover:ui_themeColor', globalLrcVisibility && 'ui_themeColor')}
          title="打开歌词"
          onClick={() => dispatch(setGlobalLrcToggle())}
        >
          词
        </button>
      </div>
      <DomTiming />
    </div>
  );
};
