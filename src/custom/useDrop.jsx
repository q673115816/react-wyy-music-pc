import React, { useState } from 'react';
import { setGlobalInset } from '@/redux/actions';
import { useDispatch, useSelector } from 'react-redux';

export default () => {
  const {
    globalLastX,
    globalLastY,
  } = useSelector(({ mask }) => mask);
  const dispatch = useDispatch();
  const [dragger, setDragger] = useState(false);
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [startX, setStartX] = useState(0);
  const [startY, setStartY] = useState(0);
  // const [lastX, setLastX] = useState(0);
  // const [lastY, setLastY] = useState(0);

  const dragdown = (e, current) => {
    if (e.target === current) {
      setStartX(e.clientX);
      setStartY(e.clientY);
      setDragger(true);
    }
  };

  const dragmove = (e) => {
    if (dragger) {
      setX(e.clientX - startX + globalLastX);
      setY(e.clientY - startY + globalLastY);
    }
  };

  const dragup = (e) => {
    setDragger(false);
    // setLastX(x);
    // setLastY(y);
    dispatch(setGlobalInset({
      globalLastX: x,
      globalLastY: y,
    }));
  };

  return {
    dragdown,
    dragmove,
    dragup,
    x,
    y,
    dragger,
  };
};
