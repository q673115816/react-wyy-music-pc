import classNames from 'classnames';
import React, {
  useEffect, useRef, useState, useLayoutEffect,
} from 'react';

export default ({
  children, className = '', small = '', big = '',
}) => {
  const DomResize = useRef();
  const [width, setWidth] = useState(0);
  useEffect(() => {
    const RO = new ResizeObserver((entries) => {
      entries.forEach(({ contentRect: { width } }) => {
        setWidth(width);
      });
    });
    RO.observe(DomResize.current);
    return () => {
      RO.disconnect();
    };
  }, []);
  return (
    <div className={classNames(className, width >= 810 ? big : small)} ref={DomResize}>
      {
        children
      }
    </div>
  );
};
