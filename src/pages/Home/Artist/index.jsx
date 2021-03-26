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
import DomResize from '@/components/ResizeObserver';
import DomLoading from '@/components/Loading';

const Domitem = ({ item = {} }) => (
  <div className="item">
    <div className="cover boarder relative rounded overflow-hidden border ui_aspect-ratio-1/1">
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

const navs = [
  {
    type: '语种',
    code: 'area',
    sub: [
      [-1, '全部', 1],
      [7, '华语', 1],
      [96, '欧美', 2],
      [8, '日本', 4],
      [16, '韩国', 3],
      [0, '其他', 1],
    ],
  }, {
    type: '分类',
    code: 'type',
    sub: [
      [-1, '全部'],
      [1, '男歌手'],
      [2, '女歌手'],
      [3, '乐队'],
    ],
  }, {
    type: '筛选',
    code: 'initial',
    sub: [
      [-1, '热门'],
      ['A', 'A'],
      ['B', 'B'], ['C', 'C'], ['D', 'D'], ['E', 'E'], ['F', 'F'], ['G', 'G'], ['H', 'H'], ['I', 'I'], ['J', 'J'], ['K', 'K'], ['L', 'L'], ['M', 'M'], ['N', 'N'], ['O', 'O'], ['P', 'P'], ['Q', 'Q'], ['R', 'R'], ['S', 'S'], ['T', 'T'], ['U', 'U'], ['V', 'V'], ['W', 'W'], ['X', 'X'], ['Y', 'Y'], ['Z', 'Z'], ['#', '#']],
  },
];

const initialOptions = {
  type: -1,
  area: -1,
  initial: -1,
};

export default () => {
  const [option, setOption] = useState(() => initialOptions);
  const RefOption = useRef(option);
  const limit = 30;
  const offset = useRef(0);
  const DomScroll = useRef();
  const DomObserver = useRef();
  const [artists, setArtists] = useState([]);
  const handleChangeOption = (newoption) => {
    setOption((prev) => ({
      ...prev,
      ...newoption,
    }));
    offset.current = 0;
    setArtists([]);
  };

  const handleInit = async () => {
    try {
      const { type, area, initial } = RefOption.current;
      const { artists } = await apiArtistList({
        type,
        area,
        initial,
        limit,
        offset: offset.current,
      });
      offset.current += limit;
      setArtists((prev) => [...prev, ...artists]);
      // dispatch(addHomeTopArtists(artists));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    RefOption.current = option;
  }, [option]);

  useInfinite(handleInit, DomScroll, DomObserver);

  return (
    <div
      className="domHome_content px-8 pb-8 overflow-auto h-full flex-auto"
      ref={DomScroll}
    >
      <div className="domHome_artist ui_w1100">
        <div className="domHome_artist_control">
          {navs.map(({ type, code, sub }) => (
            <div className="domHome_artist_filter" key={type}>
              <div className="title">{type}</div>
              <div className="list">
                {sub.map(([key, value]) => (
                  <div className="item flex-center" key={key}>
                    <button
                      type="button"
                      onClick={() => handleChangeOption({ [code]: key })}
                      className={classNames('btn rounded-full focus:outline-none', key === option[code] && ['ui_themeColor', 'ui_bg_opacity'])}
                    >
                      {value}
                    </button>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        <DomResize className="domHome_artist_list mt-2.5 grid gap-4" small="grid-cols-5" big="grid-cols-6">
          {option.type === -1 && option.initial === -1 && artists.length > 0 && (
            <div className="item">
              <div className="cover boarder relative rounded overflow-hidden border">
                <Link to={`/toplist-artist/${navs[0].sub.find((item) => item[0] === option.area)[2]}`}>
                  <img
                    className="ui_containimg"
                    src="http://p3.music.126.net/1tSJODTpcbZvNTCdsn4RYA==/109951165034950656.jpg?param=200y200"
                    alt=""
                    style={{ filter: 'blur(2px)' }}
                  />
                  <div
                    className="rankmask absolute inset-0 flex-center text-white text-3xl bg-purple-500 bg-opacity-90"
                  >
                    歌手榜
                  </div>
                </Link>
              </div>
              <div className="info mt-2 text-sm text-gray-600 hover:text-black">
                <Link to={`/toplist-artist/${navs[0].sub.find((item) => item[0] === option.area)[2]}`}>
                  歌手排行榜 &gt;
                </Link>
              </div>
            </div>
          )}
          {artists.map((item) => <Domitem item={item} key={item.id} />)}
        </DomResize>
      </div>
      <div className="flex-center" ref={DomObserver}>
        <DomLoading />
      </div>
    </div>
  );
};
