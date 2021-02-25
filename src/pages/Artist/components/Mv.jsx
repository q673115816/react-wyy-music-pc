import React, {
  useState, useEffect, useRef, memo,
} from 'react';
import dayjs from 'dayjs';
import { Link } from 'react-router-dom';
import { transPlayCount } from '@/common/utils';
import { apiArtistMv } from '@/api';
import useInfinite from '@/custom/useInfinite';

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
      <div className="grid grid-cols-3 gap-5">
        {MVs.map((item) => (
          <div className="item" key={item.id}>
            <div className="cover relative rounded overflow-hidden ui_aspect-ratio-16/9">
              <Link
                to={`/player/mv/${item.id}`}
                className="absolute inset-0"
              >
                <img src={item.imgurl} className="object-cover h-full w-full" alt="" />
                <div className="absolute top-0 right-0 m-1 text-white">
                  {transPlayCount(item.playCount)}
                </div>
                <div className="absolute bottom-0 right-0 m-1 text-white">
                  {dayjs(item.duration).format('mm:ss')}
                </div>
              </Link>
            </div>
            <div className="footer truncate text-sm mt-2">
              <Link to={`/player/mv/${item.id}`} title={item.name}>
                {item.name}
              </Link>
            </div>
          </div>
        ))}
      </div>
      <div ref={domObserver} />
    </div>
  );
});
