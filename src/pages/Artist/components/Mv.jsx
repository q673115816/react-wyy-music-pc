import React, {
  useState, useEffect, useRef, memo,
} from 'react';
import dayjs from 'dayjs';
import { Link } from 'react-router-dom';
import { transPlayCount } from '@/common/utils';
import { apiArtistMv } from '@/api';
import useInfinite from '@/custom/useInfinite';
import DomGridVideo from '@/components/GridVideo';

export default memo(({ id }) => {
  const [MVs, setMVs] = useState([]);
  const offset = useRef(0);
  const domScroll = useRef();
  const domObserver = useRef();
  const limit = 24;
  const handleInit = async () => {
    try {
      const { mvs, time } = await apiArtistMv({
        id,
        limit,
        offset: offset.current,
      });
      offset.current += limit;
      setMVs((prev) => [...prev, ...mvs]);
    } catch (error) {
      console.log(error);
    }
  };
  const {
    handleIo,
    handleUnIo,
  } = useInfinite(handleInit, domScroll, domObserver);

  useEffect(() => {
    // handleInit();
    handleIo();
    return () => {
      handleUnIo();
    };
  }, []);
  return (
    <div className="domArtist_section">
      <DomGridVideo list={MVs} type="mv" options={{ src: 'imgurl', duration: 'duration' }} />
      <div ref={domObserver} />
    </div>
  );
});
