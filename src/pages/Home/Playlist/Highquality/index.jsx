import React, { useEffect, useRef, useState } from 'react';
import { useParams, Link, NavLink } from 'react-router-dom';
import { IconFilter, IconPlayerPlay } from '@tabler/icons';
import classnames from 'classnames';
import { apiTopPlaylistHighquality, apiPlaylistHighqualityTags } from '@/api';
import { transPlayCount } from '@/common/utils';
import useInfinite from '@/custom/useInfinite';
import './style.scss';

export default () => {
  const { cat = '全部歌单' } = useParams();
  const [data, setData] = useState([]);
  const [tags, setTags] = useState([]);
  const before = useRef(0);
  const [showPopup, setShowPopup] = useState(false);
  const domObserver = useRef();
  const domScroll = useRef();
  const handleBeforeInit = async () => {
    try {
      const { tags = [] } = await apiPlaylistHighqualityTags();
      setTags(tags);
    } catch (error) {
      console.log(error);
    }
  };
  const handleInit = async () => {
    try {
      const { playlists = [], lasttime } = await apiTopPlaylistHighquality({
        cat,
        limit: 20,
        before: before.current,
      });
      before.current = lasttime;
      setData((data) => [...data, ...playlists]);
    } catch (error) {
      console.log(error);
    }
  };

  const { handleIo, handleUnIo } = useInfinite(handleInit, domScroll, domObserver);

  useEffect(() => {
    handleBeforeInit();
    handleIo();
    return () => {
      handleUnIo();
    };
  }, []);

  useEffect(() => {
    setData([]);
  }, [cat]);

  return (
    <div
      className="domHome_playlist_highquality px-8 overflow-auto flex-auto"
      ref={domScroll}
    >
      <div className="py-3 flex items-center justify-between">
        <div className="flex items-center">
          <span className="font-bold text-xl">
            精品歌单
          </span>
          &nbsp;
          <a
            href="https://music.163.com/#/topic?id=202001"
            className="flex-center w-4 h-4 border rounded-full text-gray-400 hover:text-gray-500 border-current"
          >
            ?
          </a>
        </div>
        <div className="relative">
          <button
            onClick={() => setShowPopup(!showPopup)}
            type="button"
            className="flex items-center border hover:bg-gray-100 rounded-full px-2 py-1"
          >
            <IconFilter size={16} stroke={1} />
            {cat}
          </button>
          <div
            className="absolute divide-y bg-white top-8 right-0 z-10 shadow rounded-lg"
            style={{ width: 510, display: showPopup ? null : 'none' }}
          >
            <div className="py-4 px-6">
              <NavLink
                activeClassName="ui_themeColor"
                className="item hover:ui_themeColor text-sm"
                onClick={() => setShowPopup(false)}
                to="./全部歌单"
              >
                <span className={classnames('inline-flex inner px-3 py-1 rounded-full overflow-hidden', { ui_bg_opacity: cat === '全部歌单' })}>
                  全部歌单
                </span>
              </NavLink>
            </div>
            <div className="p-6 grid grid-cols-5 gap-y-4">
              {tags.map((item) => (
                <NavLink
                  onClick={() => setShowPopup(false)}
                  to={item.name}
                  activeClassName="ui_themeColor"
                  className="item hover:ui_themeColor text-sm whitespace-nowrap"
                  key={item.id}
                >
                  <span className={classnames('inline-flex inner px-3 py-1 rounded-full overflow-hidden', { ui_bg_opacity: item.name === cat })}>
                    {item.name}
                  </span>
                </NavLink>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="domHome_playlist_highquality_list grid gap-6 grid-cols-2">
        {
          data.map((item) => (
            <div className="item flex items-center" key={item.id}>
              <Link
                className="cover rounded-lg overflow-hidden flex-none relative"
                to={`/playlist/music/${item.id}`}
              >
                <img src={`${item.coverImgUrl}?param=200y200`} alt="" />
                <div className="absolute text-white top-0 right-0 p-2 flex">
                  <IconPlayerPlay size={12} />
                  &nbsp;
                  {transPlayCount(item.playCount)}
                </div>
              </Link>
              <div className="ml-2 flex-auto w-0">
                <div className="text-sm truncate text-gray-600 hover:text-black">
                  <Link to={`/playlist/music/${item.id}`} className="">{item.name}</Link>
                </div>
                <div className="mt-3 flex items-center text-gray-400">
                  by&nbsp;
                  <Link to={`/user/${item.userId}`} className="text-gray-400 hover:text-gray-600">
                    {item.creator.nickname}
                  </Link>
                  &nbsp;
                  {
                    item?.creator?.avatarDetail?.identityIconUrl
                    && <img className="w-3 h-3" src={item.creator.avatarDetail.identityIconUrl} alt="" />
                  }
                </div>
                <div className="mt-8 text-gray-300 truncate">
                  <span className="TAG">{item.tag}</span>
                  &nbsp;
                  {item.copywriter}
                </div>
              </div>
            </div>
          ))
        }
        <div ref={domObserver} />
      </div>
    </div>
  );
};
