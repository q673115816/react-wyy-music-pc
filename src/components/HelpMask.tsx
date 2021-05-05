import React, { memo, useCallback } from 'react';
import { createPortal } from 'react-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setDragUnload } from '@/reducers/drag/actions';

export default memo(() => {
  const {
    dragger,
    onMouseMove,
    onMouseUp,
  } = useSelector(({ drag }) => drag);
  console.log('helpMask');
  const dispatch = useDispatch();
  const handleMouseUp = useCallback((e) => {
    onMouseUp(e);
    dispatch(setDragUnload());
  }, [onMouseUp]);
  if (!dragger) return null;
  return createPortal(<div
    className="absolute inset-0 z-50"
    // {...props}
    onMouseMove={onMouseMove}
    onMouseUp={handleMouseUp}
  />, document.querySelector('#help-root'));
});
