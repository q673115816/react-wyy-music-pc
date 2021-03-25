import React, { memo } from 'react';
import {
  IconArrowsMinimize,
  IconMinus,
  IconSquare,
  IconSquareOff,
  IconX,
} from '@tabler/icons';
import { useDispatch, useSelector } from 'react-redux';
import {
  setScreenFull, setScreenNormal, setPositionFalse, setPositionTrue,
} from '@/reducers/mask/actions';

export default memo(() => {
  const dispatch = useDispatch();
  const { SCREEN } = useSelector(({ mask }) => mask);
  const handleFullScreen = async () => {
    await document.documentElement.webkitRequestFullScreen();
    dispatch(setScreenFull());
    dispatch(setPositionFalse());
  };

  const handleExitFullScreen = async () => {
    await document.webkitExitFullscreen();
    dispatch(setScreenNormal());
    dispatch(setPositionTrue());
  };
  return (
    <div className="domHeader_control space-x-3">
      <button
        type="button"
        className="relative text-white text-opacity-90 hover:text-opacity-100 z-10"
        title="mini模式"
      >
        <IconArrowsMinimize size={24} />
      </button>
      <button
        type="button"
        className="relative text-white text-opacity-90 hover:text-opacity-100 z-10"
        title="最小化"
      >
        <IconMinus size={24} />
      </button>
      {
        SCREEN === 'normal'
          ? (
            <button
              type="button"
              className="relative text-white text-opacity-90 hover:text-opacity-100 z-10"
              title="最大化"
              onClick={handleFullScreen}
            >
              <IconSquare size={24} />
            </button>
          )
          : (
            <button
              type="button"
              className="relative text-white text-opacity-90 hover:text-opacity-100 z-10"
              title="向下还原"
              onClick={handleExitFullScreen}
            >
              <IconSquareOff size={24} />
            </button>
          )
      }
      <button
        type="button"
        className="relative text-white text-opacity-90 hover:text-opacity-100 z-10"
        title="关闭"
      >
        <IconX size={24} />
      </button>
    </div>
  );
});
