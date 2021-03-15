import React, { useEffect, useRef, useState } from 'react';

export default ({ children }) => {
  const DomResize = useRef();
  const [isBigLayout, setIsBigLayout] = useState(false);
  useEffect(() => {
    const RO = new ResizeObserver((entries) => {
      entries.forEach((entry) => {
        const { width } = entry;
        // console.log(entry);
        if (width >= 810) {
          if (!isBigLayout) {
            setIsBigLayout(true);
          }
        } else if (isBigLayout) {
          setIsBigLayout(false);
        }
      });
    });
    RO.observe(DomResize.current);
    return () => {
      RO.disconnect();
    };
  }, []);
  return (
    <div className="ui_w1100" ref={DomResize}>
      {
        children
      }
    </div>
  );
};
