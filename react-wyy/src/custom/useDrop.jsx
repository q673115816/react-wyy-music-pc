import React, { useState } from 'react';

export default () => {
  const [dragger, setDragger] = useState(false);
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [dx, setDx] = useState(0);
  const [dy, setDy] = useState(0);
  const mousedown = (e) => {
    setDx(x - e.clientX);
    setDy(y - e.clientY);
    setDragger(true);
  };
  const mouseup = (e) => {
    setDragger(false);
  };
  const mousemove = (e) => {
    setX(e.clientX + dx);
    setY(e.clientY + dy);
  };
  const Drag = (
    <div className="mask" onMouseUp={mouseup} onMouseMove={mousemove} />
  );
  return {
    mousedown, x, y, Drag, dragger,
  };
};
