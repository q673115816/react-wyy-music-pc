import React, { useEffect } from 'react';
import dayjs from 'dayjs';
import { useParams, NavLink, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { apiTopSong, apiSongUrl } from '@/api';
import { setTopSong, addSongUrl } from '@/redux/actions';

export default () => {
  const { type: currentType } = useParams();
  const type = ['0', '7', '96', '8', '16'].includes(currentType) ? currentType : 0;
  const dispatch = useDispatch();
  const { data = [] } = useSelector(({ home }) => home.newest);

  const handleGetSong = async () => {
    try {
      const { data } = await apiTopSong(type);
      dispatch(setTopSong(data));
    } catch (error) {
      console.warn(error);
    }
  };

  const handleAddSong = async (id) => {
    try {
      const { data } = await apiSongUrl({
        id,
      });
      console.log(data);
      dispatch(addSongUrl(data));
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
        <NavLink className="domHome_newest_sub_nav_link" activeClassName="on" to="/home/newest/song/0">全部</NavLink>
        <NavLink className="domHome_newest_sub_nav_link" activeClassName="on" to="/home/newest/song/7">华语</NavLink>
        <NavLink className="domHome_newest_sub_nav_link" activeClassName="on" to="/home/newest/song/96">欧美</NavLink>
        <NavLink className="domHome_newest_sub_nav_link" activeClassName="on" to="/home/newest/song/16">韩国</NavLink>
        <NavLink className="domHome_newest_sub_nav_link" activeClassName="on" to="/home/newest/song/8">日本</NavLink>
        <div className="domHome_newest_sub_control_center">
          <span className="playAll">播放全部</span>
          <span className="subAll">收藏全部</span>
        </div>
      </div>
      <div className="domHome_newest_song_list">
        {data.map((item, index) => (
          <div className="item" key={item.id}>
            <span className="ranking">{index + 1}</span>
            <button
              onClick={() => handleAddSong(item.id)}
              type="button"
              className="cover"
            >
              <img
                className="ui_containimg"
                src={`${item.album.blurPicUrl}?param=100y100`}
                alt=""
              />
              <span className="ico">
                <i className="material-icons">play_arrow</i>
              </span>
            </button>
            <span className="name">
              <div className="text-overflow">{item.name}</div>
              <div className="SQ">SQ</div>
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
};
