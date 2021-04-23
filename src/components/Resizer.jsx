import React, { memo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IconChevronDownRight } from '@tabler/icons';
import { setGlobalRect } from '@/reducers/inset/actions';
import DomHelpMask from '@/components/HelpMask';

const MINWIDTH = 1022;
const MINHEIGHT = 670;

export default memo(() => {
  const dispatch = useDispatch();
  const {
    SCREEN,
    globalWidth,
    globalHeight,
  } = useSelector(({ inset }) => inset);
  const [resizer, setResizer] = useState(false);
  const [resizeStartInset, setResizeStartInset] = useState({ x: 0, y: 0 });
  const [resizeInitRect, setResizeInitRect] = useState({ width: globalWidth, height: globalHeight });
  const [resizeRect, setResizeRect] = useState(resizeInitRect);
  const resizedown = (e) => {
    setResizer(true);
    setResizeStartInset({
      x: e.clientX,
      y: e.clientY,
    });
  };
  const resizemove = (e) => {
    e.preventDefault();
    if (resizer) {
      const x = e.clientX - resizeStartInset.x + resizeInitRect.width;
      const y = e.clientY - resizeStartInset.y + resizeInitRect.height;

      const nextwidth = x > MINWIDTH ? x : MINWIDTH;
      const nextheight = y > MINHEIGHT ? y : MINHEIGHT;
      setResizeRect({
        width: nextwidth,
        height: nextheight,
      });
      dispatch(setGlobalRect({
        width: nextwidth,
        height: nextheight,
      }));
    }
  };
  const resizeup = () => {
    setResizeInitRect(resizeRect);
    setResizer(false);
  };
  if (SCREEN !== 'normal') return null;
  return (
    <div
      className="absolute right-0 bottom-0 text-gray-500"
      style={{ cursor: 'se-resize' }}
      onMouseDown={resizedown}
    >
      <IconChevronDownRight />
      <DomHelpMask {...{ dragger: resizer, onMouseMove: resizemove, onMouseUp: resizeup }} />
    </div>
  );
});
