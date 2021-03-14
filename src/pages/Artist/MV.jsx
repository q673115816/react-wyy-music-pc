import React, {
  useState, useEffect, useRef, memo,
} from 'react';
import dayjs from 'dayjs';
import { Link } from 'react-router-dom';
import { transPlayCount } from '@/common/utils';
import { apiArtistMV } from '@/api';
import useInfinite from '@/custom/useInfinite';
import DomGridVideo from '@/components/GridVideo';

export default memo(({ id }) => {
  const [MVs, setMVs] = useState([]);
  // const [hasMore, setHasMore] = useState(true);
  const more = useRef(true);
  const offset = useRef(0);
  const domScroll = useRef();
  const domObserver = useRef();
  const limit = 24;
  const handleInit = async () => {
    if (!more.current) return;
    try {
      const { mvs, time, hasMore } = await apiArtistMV({
        id,
        limit,
        offset: offset.current,
      });
      offset.current += limit;
      more.current = hasMore;
      setMVs((prev) => [...prev, ...mvs.map(({
        id, imgurl, duration, name, playCount,
      }) => ({
        id,
        duration,
        playCount,
        cover: imgurl,
        title: name,
      }))]);
    } catch (error) {
      console.log(error);
    }
  };
  useInfinite(handleInit, domScroll, domObserver);

  return (
    <div className="domArtist_section p-8">
      <DomGridVideo list={MVs} />
      <div ref={domObserver} />
    </div>
  );
});
