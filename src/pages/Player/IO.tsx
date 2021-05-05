import { useRef, useState, useEffect } from 'react';

export default () => {
  const DomVideoWrap = useRef();
  const DomScroll = useRef();
  const Io = useRef();
  const [fixed, setFixed] = useState(false);

  const handleIo = () => {
    Io.current = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        setFixed(!entry.isIntersecting);
      });
    }, {
      root: DomScroll.current,
    });
    Io.current.observe(DomVideoWrap.current);
  };

  const handleUnIo = () => {
    Io.current.disconnect();
  };

  useEffect(() => {
    handleIo();
    return () => {
      handleUnIo();
    };
  }, []);
  return {
    DomVideoWrap,
    DomScroll,
    fixed,
  };
};
