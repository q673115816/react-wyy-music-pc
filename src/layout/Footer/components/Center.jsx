import React from 'react';
import {
  IconArrowsSplit2,
  IconPlayerSkipBack,
  IconPlayerPause,
  IconPlayerPlay,
  IconPlayerSkipForward,
} from '@tabler/icons';
import { useDispatch, useSelector } from 'react-redux';

export default () => {
  const dispatch = useDispatch();
  const { running } = useSelector(({ audio }) => audio);
  const handleToggle = () => {
  };
  const handleProcess = () => {
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
        <span className="text-gray-400">00:00</span>
        <input
          onChange={() => handleProcess()}
          type="range"
          value="0"
          className="domfooter_center_process"
        />
        <span className="text-gray-400">00:00</span>
      </div>
    </div>
  );
};
