import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './style.scss';
import LazyloadImg from '@/components/LazyloadImg';

import { apiTopPlaylist, apiPlaylistCatlist } from '@/api';
import { setTopPlaylist, setPlaylistCatlist } from '@/redux/actions';
import CommonPage from '@/components/Page';
import { transPlayCount } from '@/common/utils';

export default () => {
  const [order, setOrder] = useState('');
  const [cat, setCat] = useState('');
  const [offer, setOffer] = useState(0);
  const dispatch = useDispatch();
  const {
    playlists, all, sub, categories, total,
  } = useSelector(({ home }) => home.playlist);

  const handleGetPlaylistCatlist = async () => {
    try {
      const { all, sub, categories } = await apiPlaylistCatlist();
      dispatch(setPlaylistCatlist({ all, sub, categories }));
    } catch (error) {
      console.log(error);
    }
  };

  const handleGetTopList = async () => {
    try {
      const { playlists, total } = await apiTopPlaylist({
        order,
        cat,
        limit: 100,
        offer,
      });
      dispatch(setTopPlaylist({ playlists, total }));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    handleGetPlaylistCatlist();
  }, []);

  useEffect(() => {
    handleGetTopList();
  }, [order, cat]);

  return (
    <div className="domHome_playlist">
      <div className="domHome_playlist_banner">
        <Link to="/" />
      </div>
      <div className="domHome_playlist_nav">
        <div>
          <span />
          <div>
            {
              Object.keys(categories).map((item) => {
                <div>
                  <span>{categories[item]}</span>
                  <div>
                    {
                      sub
                        .filter(({ category }) => category == item)
                        .map((s) => (
                          <div key={s.name}>{s.name}</div>
                        ))
                    }
                  </div>
                </div>;
              })
            }
          </div>
        </div>
      </div>
      <div className="domHome_playlist_list ui_grid square col_4">
        {
          playlists.map((item) => (
            <div className="item" key={item.id}>
              <div className="cover">
                <div className="inner">
                  <Link to={`/playlist/${item.id}`}>
                    <LazyloadImg overflow>
                      <img className="ui_containimg" src={`${item.coverImgUrl}?param=200y200`} alt="" />
                    </LazyloadImg>
                  </Link>
                  <div className="rt">
                    <div className="playCount">{transPlayCount(item.playCount)}</div>
                  </div>
                  <div className="lb">
                    <Link to={`/user/${item.userId}/detail`}>
                      <div className="creator">
                        {item.creator.nickname}
                      </div>
                    </Link>
                  </div>
                  <div className="rb">
                    <span className="playArrow">
                      <i className="material-icons">play_arrow</i>
                    </span>
                  </div>
                </div>
              </div>
              <Link className="name" to={`/playlist/${item.id}`}>{item.name}</Link>
            </div>
          ))
        }
      </div>
      {/* <CommonPage total={total} size={100} curr={offer / 100} /> */}
      <div style={{ height: 50 }} />
    </div>
  );
};
