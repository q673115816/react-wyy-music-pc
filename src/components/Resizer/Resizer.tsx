import React, { memo, MouseEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IconChevronDownRight } from '@tabler/icons';
import {
  setGlobalRect,
  setGlobalStartRect,
  setGlobalResizer,
  setGlobalStartRectLock,
} from '@/reducers/inset/slice';
import { setDragInit } from '@/reducers/drag/slice';

export default memo(() => {
  const dispatch = useDispatch();
  const {
    SCREEN, GlobalRectLock,
  } = useSelector(({ inset }) => inset);

  const resizemove = (e) => {
    e.preventDefault();
    if (GlobalRectLock) return;
    dispatch(setGlobalStartRectLock());
    requestAnimationFrame(() => {
      // console.log('raf');
      dispatch(setGlobalRect({
        x: e.clientX,
        y: e.clientY,
      }));
    });
  };

  const resizeup = () => {
    // dispatch(setGlobalResizer(false));
  };

  const resizedown = (e: MouseEvent<HTMLDivElement>) => {
    // dispatch(setGlobalResizer(true));
    dispatch(setGlobalStartRect({
      x: e.clientX,
      y: e.clientY,
    }));
    dispatch(setDragInit({
      onMouseMove: resizemove,
      onMouseUp: resizeup,
    }));
  };

  if (SCREEN !== 'normal') return null;
  return (
    <div
      className="absolute right-0 bottom-0 text-gray-500"
      style={{ cursor: 'se-resize' }}
      onMouseDown={resizedown}
    >
      <IconChevronDownRight />
    </div>
  );
});
