import React, { memo } from 'react';
import {
  IconArrowsMinimize,
  IconMinus,
  IconSquare,
  IconX,
} from '@tabler/icons';
import { useDispatch } from 'react-redux';
import { setScreenFull } from '@/redux/actions';

export default memo(() => {
  const dispatch = useDispatch();
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
      <button
        type="button"
        className="relative text-white text-opacity-90 hover:text-opacity-100 z-10"
        title="最大化"
        onClick={() => dispatch(setScreenFull())}
      >
        <IconSquare size={24} />
      </button>
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
