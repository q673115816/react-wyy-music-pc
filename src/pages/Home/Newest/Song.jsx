import React, { useEffect, memo, useState } from 'react';
import dayjs from 'dayjs';
import { useParams, NavLink, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { apiTopSong, apiSongUrl } from '@/api';
import { setTopSong } from '@/redux/actions';
import { IconPlayerPlay, IconFolderPlus } from '@tabler/icons';

const nav = [
  ['全部', '0'],
  ['华语', '7'],
  ['欧美', '96'],
  ['韩国', '16'],
  ['日本', '8'],
];

export default memo(() => {
  console.log('song');
  const { type: currentType } = useParams();
  const type = ['0', '7', '96', '8', '16'].includes(currentType) ? currentType : 0;
  const dispatch = useDispatch();
  const [data] = useState([]);
  // const { data = [] } = useSelector(({ home }) => home.newest);

  const handleGetSong = async () => {
    try {
      const { data } = await apiTopSong(type);
      dispatch(setTopSong(data));
    } catch (error) {
      console.warn(error);
    }
  };

  useEffect(() => {
    handleGetSong();
  }, [type]);
  return (
    <>
      <div className="domHome_newest_sub_nav">
        {nav.map(([name, code]) => (
          <NavLink
            key={name}
            className="domHome_newest_sub_nav_link"
            activeClassName="on"
            to={`/home/newest/song/${code}`}
          >
            {name}
          </NavLink>
        ))}
        <div className="domHome_newest_sub_control_center">
          <span className="playAll">
            <IconPlayerPlay size={16} stroke={1} className="fill-current" />
            播放全部

          </span>
          <span className="subAll">
            <IconFolderPlus size={16} stroke={1} />
            收藏全部
          </span>
        </div>
      </div>
      <div className="domHome_newest_song_list">
        {data.map((item, index) => (
          <div className="item" key={item.id}>
            <span className="ranking">{String(index + 1).padStart(2, 0)}</span>
            <button
              type="button"
              className="cover"
            >
              <img
                className="ui_containimg"
                src={`${item.album.blurPicUrl}?param=100y100`}
                alt=""
              />
              <span className="ico">
                <IconPlayerPlay size={22} className="fill-current" />
              </span>
            </button>
            <span className="name">
              <div className="truncate">{item.name}</div>
              <div className="TAG">SQ</div>
            </span>
            <span className="artists">
              {
                item.artists.map((artist) => (
                  <Link to="artist" key={artist.id}>{artist.name}</Link>
                ))
              }
            </span>
            <span className="album"><Link to="album">{item.album.name}</Link></span>
            <span className="duration">{dayjs(item.duration).format('mm:ss')}</span>
          </div>
        ))}
      </div>
    </>
  );
});
