import React, { memo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IconChevronDownRight } from '@tabler/icons';
import { setGlobalRect, setGlobalStartRect, setGlobalResizer } from '@/reducers/inset/actions';
import { setDragInit } from '@/reducers/drag/actions';

export default memo(() => {
  const dispatch = useDispatch();
  const {
    SCREEN,
  } = useSelector(({ inset }) => inset);

  const resizemove = (e) => {
    e.preventDefault();
    dispatch(setGlobalRect({
      x: e.clientX,
      y: e.clientY,
    }));
  };

  const resizeup = () => {
    // dispatch(setGlobalResizer(false));
  };

  const resizedown = (e) => {
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
