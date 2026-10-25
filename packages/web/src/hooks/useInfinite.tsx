import React, { useRef, useEffect, RefObject } from "react";

export default (
  scrollCallback: () => void,
  domScroll: RefObject<HTMLElement | null> | null,
  domObserver: RefObject<HTMLElement | null>,
  deps = []
) => {
  const io = useRef<IntersectionObserver | null>(null);

  const handleIo = () => {
    io.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            console.log("isIntersecting");
            scrollCallback();
          }
        });
      },
      {
        root: domScroll?.current || null,
        // rootMargin: '100px 0px 0px 0px',
        // thresholds: [1],
      }
    );
    if (!io.current || !domObserver.current) return;
    io.current.observe(domObserver.current);
  };

  const handleUnIo = () => {
    io.current?.disconnect();
  };

  useEffect(() => {
    // handleInit();
    handleIo();
    return () => {
      handleUnIo();
    };
  }, deps);

  return {
    handleIo,
    handleUnIo,
  };
};
