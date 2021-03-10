import React, {
  useState, useEffect, useRef,
} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import LazyLoad from 'react-lazyload';
import './style.scss';
import classNames from 'classnames';
import { IconUser } from '@tabler/icons';
import { apiArtistList } from '@/api';
import { addHomeTopArtists, initHomeTopArtists } from '@/reducers/home/actions';
import useInfinite from '@/custom/useInfinite';
import options from './filter';

const Domitem = ({ item = {} }) => (
  <div className="item">
    <div className="cover boarder relative rounded overflow-hidden border">
      <Link to={`/artist/${item.id}`}>
        <LazyLoad overflow>
          <img
            className="ui_containimg"
            src={`${item.img1v1Url}?param=200y200`}
            alt={item.name}
          />
        </LazyLoad>
      </Link>
    </div>
    <div className="info flex items-center justify-between mt-2 text-sm text-gray-600 hover:text-black">
      <Link to={`/artist/${item.id}`}>
        {item.name}
      </Link>
      {
        item.accountId
      && (
      <Link
        to={`/user/${item.accountId}`}
        className="bg-red-500 hover:bg-red-600 text-white rounded-full p-0.5"
      >
        <IconUser size={12} />
      </Link>
      )
      }
    </div>
  </div>
);

const initialOptions = {
  type: -1,
  area: -1,
  initial: -1,
  offset: 0,
  limit: 30,
};

export default () => {
  const dispatch = useDispatch();

  const [option, setOption] = useState(initialOptions);
  const refOption = useRef(option);

  useEffect(() => {
    refOption.current = option;
  }, [option]);

  const domScroll = useRef(null);
  const domObserver = useRef(null);

  // const { artists } = useSelector(({ home }) => home.artist);
  const [artists, setArtists] = useState([]);
  const handleChangeOption = (newoption) => {
    setOption((prev) => ({
      ...prev,
      ...newoption,
      offset: 0,
    }));
    setArtists([]);
    // dispatch(initHomeTopArtists());
  };

  const handleInit = async () => {
    try {
      const { artists } = await apiArtistList(refOption.current);
      setArtists((prev) => [...prev, ...artists]);
      // dispatch(addHomeTopArtists(artists));
    } catch (error) {
      console.log(error);
    }
  };

  const {
    handleIo,
    handleUnIo,
  } = useInfinite(() => {
    handleInit();
    setOption((prev) => ({
      ...prev,
      offset: prev.offset + 30,
    }));
  }, domScroll, domObserver);

  useEffect(() => {
    handleIo();
    return () => {
      handleUnIo();
    };
  }, []);

  return (
    <div
      className="domHome_content px-8 overflow-auto h-full flex-auto"
      ref={domScroll}
    >
      <div className="domHome_artist">
        <div className="domHome_artist_control">
          {options.map(([enType, cnType, filters]) => (
            <div
              className="domHome_artist_filter"
              key={enType}
            >
              <div className="title">
                {cnType}
              </div>
              <nav className={classNames('list', enType)}>
                {filters.map((item) => (
                  <div
                    className="item flex-center"
                    key={item[0]}
                  >
                    <button
                      type="button"
                      className={classNames('btn rounded-full focus:outline-none', enType, option[enType] === item[0] && ['ui_themeColor', 'ui_bg_opacity'])}
                      onClick={() => handleChangeOption({ [enType]: item[0] })}
                    >
                      {item[1]}
                    </button>
                  </div>
                ))}
              </nav>
            </div>
          ))}
        </div>
        <div className="domHome_artist_list grid gap-4 grid-cols-5">
          {option.type === -1 && option.initial === -1 && artists.length > 0 && (
          <div className="item">
            <div className="cover boarder relative rounded overflow-hidden border">
              <Link to={`/toplist-artist/${options[0][2].find((item) => item[0] === option.area)[2]}`}>
                <img
                  className="ui_containimg"
                  src="http://p3.music.126.net/1tSJODTpcbZvNTCdsn4RYA==/109951165034950656.jpg?param=200y200"
                  alt=""
                  style={{ filter: 'blur(2)' }}
                />
                <div className="rankmask">
                  歌手榜
                </div>
              </Link>
            </div>
            <div className="info mt-2 text-sm text-gray-600 hover:text-black">
              <Link to={`/toplist-artist/${options[0][2].find((item) => item[0] === option.type)[2]}`}>
                歌手排行榜 &gt;
              </Link>
            </div>
          </div>
          )}
          {artists.map((item) => <Domitem item={item} key={item.id} />)}
        </div>
        <div ref={domObserver} />
      </div>
    </div>
  );
};
