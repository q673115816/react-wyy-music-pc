import classNames from 'classnames';
import React, {
  useEffect, useRef, useState, useLayoutEffect,
} from 'react';

export default ({
  children, className = '', small = '', big = '',
}) => {
  const DomResize = useRef();
  const RO = useRef();
  const [width, setWidth] = useState(0);
  useEffect(() => {
    RO.current = new ResizeObserver((entries) => {
      entries.forEach(({ contentRect: { width } }) => {
        setWidth(width);
      });
    });
    RO.current.observe(DomResize.current);
    return () => {
      RO.current.disconnect();
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
