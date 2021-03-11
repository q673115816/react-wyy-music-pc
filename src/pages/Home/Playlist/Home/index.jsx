import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Link, NavLink, useLocation, useParams, useRouteMatch,
} from 'react-router-dom';
import './style.scss';
import Lazyload from 'react-lazyload';
import toPairs from 'lodash/toPairs';
import classNames from 'classnames';
import { IconPlayerPlay, IconChevronRight, IconChevronLeft } from '@tabler/icons';
import {
  apiTopPlaylist,
  apiPlaylistCatlist,
  apiTopPlaylistHighquality,
  apiPlaylistHighqualityTags,
  apiPlaylistHot,
} from '@/api';
import { setTopPlaylist, setPlaylistCatlist } from '@/reducers/home/actions';
import CommonPage from '@/components/Page';
import { transPlayCount } from '@/common/utils';
import DomLoading from '@/components/Loading';
import DomBanner from './components/Banner';

const DomSmallHot = () => (
  <svg
    className="absolute left-full top-1/4 fill-current"
    viewBox="0 0 12 12"
    width="12"
    height="6"
  >
    <text dominantBaseline="middle" textAnchor="middle" x="0.5em" y="0.5em" className="fill-current ui_themeColor font-bold">hot</text>
  </svg>
);

const DomSubList = ({ sub = [], category = null, cat = '' }) => (
  <div className="flex-auto grid grid-cols-6 gap-y-4">
    {
      sub
        .filter((item) => item.category === Number(category))
        .map((item) => (
          <NavLink
            activeClassName="on ui_themeColor"
            className="domHome_playlist_popup_nav_link text-gray-600 hover:ui_themeColor"
            to={`/home/playlist/${encodeURIComponent(item.name)}`}
            key={item.name}
          >
            <span className={classNames('inline-flex inner px-4 py-1 rounded-full overflow-hidden', { ui_bg_opacity: item.name === cat })}>
              <span className="relative">
                {item.name}
                {
                  item.hot && <DomSmallHot />
                }
              </span>
            </span>
          </NavLink>
        ))
    }
  </div>
);

export default () => {
  const [order, setOrder] = useState('');// new , default = hot
  const [offer, setOffer] = useState(0);
  const [loading, setLoading] = useState(true);
  const [popup, setPopup] = useState(false);
  const dispatch = useDispatch();
  const { cat = '全部歌单', page = 1 } = useParams();
  const { url } = useRouteMatch();

  const {
    highquality,
    hot,
    catlist,
    playlists,
  } = useSelector(({ home }) => home.playlist);

  const handleProInit = async () => {
    try {
      const [hot, catlist] = await Promise.all([
        apiPlaylistHot(),
        apiPlaylistCatlist(),
      ]);
      dispatch(setPlaylistCatlist({
        hot, catlist,
      }));
    } catch (error) {
      console.log(error);
    }
  };

  const handleInit = async () => {
    try {
      const highquality = await apiTopPlaylistHighquality({
        cat,
        limit: 1,
      });
      const playlists = await apiTopPlaylist({
        order,
        cat,
        limit: 100,
        offer,
      });
      dispatch(setTopPlaylist({ highquality, playlists }));
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    handleProInit();
  }, []);

  useEffect(() => {
    handleInit();
    setPopup(false);
  }, [order, cat]);
  if (loading) {
    return (
      <div className="flex-center w-full h-full">
        <DomLoading />
      </div>
    );
  }
  return (
    <div className="domHome_playlist px-8 overflow-auto max-h-full flex-auto">
      {highquality.playlists.length > 0 && <DomBanner item={highquality.playlists[0]} cat={cat} />}
      <div className="domHome_playlist_nav pt-4 pb-4">
        <div className="flex items-center">
          <div className="relative">
            <button
              type="button"
              className="border flex items-center justify-center h-8 w-24 rounded-full hover:bg-gray-100 focus:outline-none text-sm"
              onClick={() => setPopup(!popup)}
            >
              {decodeURIComponent(cat)}
              <IconChevronRight size={20} stroke={1} />
            </button>
            <div className="domHome_playlist_popup_nav absolute z-20 bg-white shadow text-sm divide-y top-full mt-1 pb-20" style={{ display: popup ? null : 'none' }}>
              <div className="pl-8 py-4">
                <NavLink
                  onClick={() => setPopup(false)}
                  activeClassName="on ui_themeColor"
                  exact
                  className="domHome_playlist_popup_nav_link text-gray-600 hover:ui_themeColor"
                  to="/home/playlist/全部歌单"
                >
                  <span className={classNames('inline-flex inner px-4 py-1 rounded-full overflow-hidden', { ui_bg_opacity: cat === '全部歌单' })}>
                    全部歌单
                  </span>
                </NavLink>
              </div>
              <div className="p-5 space-y-4">
                {
                  toPairs(catlist.categories)
                    .map(([category, value]) => (
                      <div key={category} className="flex">
                        <div className="category text-gray-300">
                          {value}
                        </div>
                        <DomSubList
                          sub={catlist.sub}
                          category={category}
                          cat={cat}
                        />
                      </div>
                    ))
                }
              </div>
            </div>
          </div>

          <div className="ml-auto flex">
            {hot.tags?.map((item) => (
              <NavLink
                activeClassName="ui_themeColor ui_bg_opacity"
                className="domHome_playlist_nav_link text-gray-500 hover:text-gray-700 px-2 rounded-full text-center"
                to={`/home/playlist/${encodeURIComponent(item.name)}`}
                key={item.name}
              >
                {item.name}
              </NavLink>
            ))}
          </div>
        </div>
      </div>
      <div className="domHome_playlist_list grid grid-cols-4 gap-5">
        {
          playlists.playlists?.map((item) => (
            <div className="item" key={item.id}>
              <div className="cover relative rounded overflow-hidden group ui_aspect-ratio-1/1">
                <Link to={`/playlist/music/${item.id}`}>
                  <Lazyload overflow>
                    <img className="" src={`${item.coverImgUrl}?param=200y200`} alt="" />
                  </Lazyload>
                  <div className="absolute top-0 left-0 right-0 h-1/4 ui_linear_mask_top" />
                  <div className="absolute bottom-0 left-0 right-0 h-1/4 ui_linear_mask_bottom" />
                  <div className="absolute top-0 right-0 text-white mx-2 my-1">
                    <div className="playCount">
                      {transPlayCount(item.playCount)}
                    </div>
                  </div>
                </Link>
                <Link
                  to={`/user/${item.userId}/detail`}
                  className="absolute left-0 bottom-0 text-white mx-2 my-1"
                >
                  {item.creator.nickname}
                </Link>
                <button
                  type="button"
                  className="playArrow opacity-0 group-hover:opacity-100 ui_themeColor absolute right-0 bottom-0 m-2 p-2 bg-white bg-opacity-90 rounded-full"
                >
                  <IconPlayerPlay size={22} className="fill-current" />
                </button>
              </div>
              <div className="footer text-sm mt-2">
                <Link
                  className="name"
                  to={`/playlist/music/${item.id}`}
                >
                  {item.name}
                </Link>
              </div>
            </div>
          ))
        }
      </div>
      <div className="flex items-center justify-center pt-10 pb-10 space-x-1">
        <button
          type="button"
          className="border hover:bg-gray-200 w-6 h-6 flex items-center justify-center rounded"
        >
          <IconChevronLeft size={12} />
        </button>
        <NavLink
          activeClassName="ui_theme_bg_color text-white"
          className="border hover:bg-gray-200 w-6 h-6 flex items-center justify-center rounded"
          to={url}
        >
          1
        </NavLink>
        <NavLink
          activeClassName="ui_theme_bg_color text-white"
          className="border hover:bg-gray-200 w-6 h-6 flex items-center justify-center rounded"
          to="2"
        >
          2
        </NavLink>
        <button
          type="button"
          className="border hover:bg-gray-200 w-6 h-6 flex items-center justify-center rounded"
        >
          <IconChevronRight size={12} />
        </button>
      </div>
      {/* <CommonPage total={total} size={100} curr={offer / 100} /> */}
    </div>
  );
};
