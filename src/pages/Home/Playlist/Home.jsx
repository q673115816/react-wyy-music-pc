import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './style.scss';
import Lazyload from 'react-lazyload';
import { IconPlayerPlay } from '@tabler/icons';
import {
  apiTopPlaylist, apiPlaylistCatlist, apiTopPlaylistHighquality, apiPlaylistHighqualityTags,
  apiPlaylistHot,
} from '@/api';
import { setTopPlaylist, setPlaylistCatlist } from '@/redux/actions';
import CommonPage from '@/components/Page';
import { transPlayCount } from '@/common/utils';

export default () => {
  const [order, setOrder] = useState('');
  const [cat, setCat] = useState('');
  const [offer, setOffer] = useState(0);
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const {
    highquality,
    hot,
    catlist,
    playlists,
  } = useSelector(({ home }) => home.playlist);

  const handleProInit = async () => {
    try {
      const [highquality, hot, catlist] = await Promise.all([
        apiTopPlaylistHighquality(),
        apiPlaylistHot(),
        apiPlaylistCatlist(),
      ]);
      dispatch(setPlaylistCatlist({
        highquality, hot, catlist,
      }));
    } catch (error) {
      console.log(error);
    }
  };

  const handleInit = async () => {
    try {
      const playlists = await apiTopPlaylist({
        order,
        cat,
        limit: 100,
        offer,
      });
      dispatch(setTopPlaylist({ playlists }));
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
  }, [order, cat]);
  if (loading) return <div>loading</div>;
  return (
    <div className="domHome_content overflow-auto max-h-full flex-auto">
      <div className="domHome_playlist">
        <Link
          to="/"
          className="domHome_playlist_banner flex items-center relative overflow-hidden z-10"
        >
          <div
            className="absolute inset-0 bg-center"
            style={{
              backgroundImage: `url(${highquality.playlists[0].coverImgUrl})`,
              filter: 'blur(15px)',
              zIndex: '-1',
            }}
          />
          <div className="cover">
            <img src={highquality.playlists[0].coverImgUrl} alt="" />
          </div>
          <div className="contennt">
            <div className="tag border border-current rounded-full">精品歌单</div>
            <div className="text-white text-base mt-4">{highquality.playlists[0].name}</div>
            <div className="text-gray-300 mt-1">{highquality.playlists[0].copywriter}</div>
          </div>
        </Link>
        <div className="domHome_playlist_nav">
          <div>
            <div>
              { }
            </div>
          </div>
        </div>
        <div className="domHome_playlist_list ui_grid square col_4">
          {
            playlists.playlists?.map((item) => (
              <div className="item" key={item.id}>
                <div className="cover">
                  <div className="inner">
                    <Link to={`/playlist/music/${item.id}`}>
                      <Lazyload overflow>
                        <img
                          className="ui_containimg"
                          src={`${item.coverImgUrl}?param=200y200`}
                          alt=""
                        />
                      </Lazyload>
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
                      <button type="button" className="playArrow">
                        <IconPlayerPlay size={22} className="fill-current" />
                      </button>
                    </div>
                    <div className="bottommask" />
                  </div>
                </div>
                <div className="footer">
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
        {/* <CommonPage total={total} size={100} curr={offer / 100} /> */}
      </div>
    </div>
  );
};
