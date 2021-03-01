import React, { useRef } from 'react';

export default (scrollCallback, domScroll, domObserver) => {
  const io = useRef();

  const handleIo = () => {
    io.current = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          console.log('isIntersecting');
          scrollCallback();
        }
      });
    }, {
      root: domScroll.current,
      // rootMargin: '100px 0px 0px 0px',
      // thresholds: [1],
    });
    io.current.observe(domObserver.current);
  };

  const handleUnIo = () => {
    io.current.disconnect();
  };

  return {
    handleIo,
    handleUnIo,
  };
};
