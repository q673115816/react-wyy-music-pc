import React, { useState, useEffect, useRef } from 'react';

export default (scrollCallback) => {
  // const scrolldom = useRef();
  const [scrolldom, setScrolldom] = useState(null);
  // const observerdom = useRef();
  const [observerdom, setObserverdom] = useState(null);

  const io = useRef();
  useEffect(() => {
    io.current = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        // console.log(entry);
        if (entry.isIntersecting) {
          scrollCallback();
        }
      });
    }, {
      root: scrolldom,
      rootMargin: '0px 0px 20px 0px', // 懵懵懂懂
      threshold: [0, 1],
    });
  }, [scrolldom]);

  useEffect(() => {
    if (observerdom) {
      io.current.observe(observerdom);
    }
    return () => {
      if (observerdom) {
        io.current.unobserve(observerdom);
      }
    };
  }, [observerdom]);
  return {
    setScrolldom,
    setObserverdom,
  };
};
