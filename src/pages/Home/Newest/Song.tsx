import React, {
  useEffect, memo, useState, useMemo,
} from 'react';
import dayjs from 'dayjs';
import {
  NavLink, Link,
} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { apiTopSong, apiSongUrl } from '@/api';
import { setTopSong } from '@/reducers/home/slice';
import { IconPlayerPlay, IconFolderPlus } from '@tabler/icons';
import classNames from 'classnames';
import DomTags from '@/components/Tags';

const navs = {
  全部: 0,
  华语: 7,
  欧美: 96,
  韩国: 16,
  日本: 8,
};

const DomItem = memo(({ item, index }) => (
  <div
    className={classNames('item h-20 py-2.5 flex items-center px-8 text-sm', { 'bg-gray-50': index % 2 === 0 })}
  >
    <span className="ranking text-gray-300 w-8">
      {String(index + 1).padStart(2, 0)}
    </span>
    <button
      type="button"
      className="cover w-16 relative rounded overflow-hidden ui_aspect-ratio-1/1"
    >
      <img
        className=""
        src={`${item.album.blurPicUrl}?param=100y100`}
        alt=""
      />
      <i className="ico absolute w-6 h-6 m-auto flex-center inset-0 ui_themeColor bg-white bg-opacity-90 rounded-full">
        <IconPlayerPlay size={14} className="fill-current" />
      </i>
    </button>
    <span className="name px-2.5 w-0 flex items-center flex-auto">
      <div className="truncate">{item.name}</div>
      {/* <div className="TAG">SQ</div> */}
      <DomTags item={item} mv={item.mvid} />
    </span>
    <span className="artists truncate">
      {
        item.artists.map((artist, index) => (
          <span key={artist.id}>
            {index > 0 && ' / '}
            <Link to={`/artist/${artist.id}`} className="ui_text_gray_hover">
              {artist.name}
            </Link>
          </span>
        ))
      }
    </span>
    <span className="album truncate">
      <Link to={`/playlist/album/${item.album.id}`} className="ui_text_gray_hover">
        {item.album.name}
      </Link>

    </span>
    <span className="duration text-gray-500 text-right">
      {dayjs(item.duration).format('mm:ss')}
    </span>
  </div>
));

const DomMain = memo(({ type }) => {
  const [data, setData] = useState([]);
  const handleInit = async () => {
    try {
      const { data } = await apiTopSong({ type: navs[type] });
      setData(data);
      // dispatch(setTopSong(data));
    } catch (error) {
      console.warn(error);
    }
  };

  useEffect(() => {
    handleInit();
  }, [type]);
  return (
    <div className="domHome_newest_song_list">
      {data.map((item, index) => (
        <DomItem key={item.id} item={item} index={index} />
      ))}
    </div>
  );
});

export default memo(({ type }) => (
  <>
    <div className="domHome_newest_sub_nav">
      {Object.keys(navs).map((item) => (
        <NavLink
          key={item}
          className="domHome_newest_sub_nav_link"
          activeClassName="on"
          to={`/home/newest/song/${item}`}
        >
          {item}
        </NavLink>
      ))}
      <div className="domHome_newest_sub_control_center space-x-2">
        <button type="button" className="playAll flex-center ui_theme_bg_color text-white rounded-full px-2 py-0.5">
          <IconPlayerPlay size={16} stroke={1} className="fill-current" />
          播放全部
        </button>
        <button type="button" className="subAll flex-center rounded-full border px-2 py-0.5">
          <IconFolderPlus size={16} stroke={1} />
          收藏全部
        </button>
      </div>
    </div>
    <DomMain type={type} />
  </>
));
