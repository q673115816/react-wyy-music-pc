import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { IconPlayerPlay } from '@tabler/icons';
import classnames from 'classnames';
import dayjs from 'dayjs';
import './style.scss';
import { apiToplistDetail, apiPlaylistDetail, apiToplistArtist } from '@/api';
import { setTopListsDetail } from '@/redux/actions';
import { transPlayCount } from '@/common/utils';

const DomContent = ({ tracks = [] }) => {
  const [focus, setFocus] = useState(-1);
  return (
    <div className="official_rank_list mb-3">
      {
        tracks.map((track, index) => (
          <div
            className={classnames('item hover:bg-gray-100', { 'bg-gray-50': index % 2 === 0, 'bg-gray-100': index === focus })}
            key={track.name}
            onClick={() => setFocus(index)}
          >
            <span>{index + 1}</span>
            <span>&nbsp;口&nbsp;</span>
            <span
              className="name"
              title={track.name + track.alia}
            >
              {track.name}
              {
                track.alia.length > 0
                && (
                  <span className="text-gray-400">
                    (
                    {
                      track.alia.map((alia) => alia)
                    }
                    )
                  </span>
                )
              }
            </span>
            <span
              className="ml-auto text-gray-400"
              title={track.ar.map((artist) => artist.name).join('/')}
            >
              {
                track.ar.map((artist, index) => (
                  <span key={artist.id}>
                    {index > 0 && ' / '}
                    <Link to={`/artist/${artist.id}`} className="artist text-gray-400 hover:text-gray-500">
                      {artist.name}
                    </Link>
                  </span>
                ))
              }
            </span>
          </div>
        ))
      }
    </div>
  );
};

export default () => {
  const { list = [] } = useSelector(({ home }) => home.toplist);

  const [fiveTop, setFiveTop] = useState([]);
  const [artists, setArtists] = useState({});
  const dispatch = useDispatch();
  const handleInit = async () => {
    try {
      const { list } = await apiToplistDetail();
      dispatch(setTopListsDetail(list));
      const result = await Promise.all(
        list.slice(0, 4).map((item) => apiPlaylistDetail({ id: item.id })),
        apiToplistArtist(1),
      );
      setFiveTop(result.slice(0, 4));
      setArtists(result[4].list);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    handleInit();
  }, []);
  return (
    <div className="domHome_content overflow-auto max-h-full flex-auto">
      <div className="domHome_toplist">
        <div className="domHome_toplist_title h1 mb-4">官方榜</div>
        <div className="domHome_toplist_official">
          {fiveTop.map(({ playlist: item }) => (
            <div
              key={item.id}
              className="official_rank flex"
            >
              <Link
                to={`/playlist/music/${item.id}`}
                className="official_rank_cover overflow-hidden relative group"
              >
                <img
                  className="ui_containimg"
                  src={`${item.coverImgUrl}?param=200y200`}
                  alt=""
                />
                <div className="inset-center flex-center text-white">
                  <span className="pt-16">
                    {dayjs(item.updateTime).format('MM月DD日')}
                    更新
                  </span>
                </div>
                <button type="button" className="opacity-0 group-hover:opacity-100 inset-center flex-center rounded-full w-10 h-10 text-red-500 bg-white bg-opacity-50">
                  <IconPlayerPlay size={22} className="fill-current" />
                </button>
              </Link>
              <div className="official_rank_content flex-auto">
                <DomContent tracks={item.tracks.slice(0, 5)} />
                <Link
                  to={`/playlist/music/${item.id}`}
                  className="text-gray-400 hover:text-gray-500"
                >
                  查看全部 &gt;
                </Link>
              </div>
            </div>
          ))}
          <div
            className="official_rank flex"
          >
            <Link
              to="/toplistartist"
              className="official_rank_cover overflow-hidden relative group"
            >
              歌手榜
              <div className="inset-center flex-center text-white">
                <span className="pt-16">
                  {dayjs(artists.updateTime).format('MM月DD日')}
                  更新
                </span>
              </div>
              <button type="button" className="opacity-0 group-hover:opacity-100 inset-center flex-center rounded-full w-10 h-10 text-red-500 bg-white bg-opacity-50">
                <IconPlayerPlay size={22} className="fill-current" />
              </button>
            </Link>
            <div className="official_rank_content flex-auto">
              <DomContent tracks={artists?.artists?.slice(0, 5)} />
              <Link
                to="/toplistartist"
                className="text-gray-400 hover:text-gray-500"
              >
                查看全部 &gt;
              </Link>
            </div>
          </div>
        </div>
        <div className="domHome_toplist_title h1 mb-4">全球榜</div>
        <div className="domHome_toplist_cardlist grid grid-cols-5 gap-5">
          {list.slice(4).map((item) => (
            <div className="item flex flex-col" key={item.id}>
              <Link
                to={`/playlist/music/${item.id}`}
                className="cover group rounded overflow-hidden relative"
              >
                <span className="playCount absolute top-0 right-0 p-2 text-white">
                  {transPlayCount(item.playCount)}
                </span>
                <img
                  className="ui_containimg"
                  src={`${item.coverImgUrl}?param=200y200`}
                  alt=""
                />
                <button
                  type="button"
                  className="play opacity-0 group-hover:opacity-100 absolute inset-0 m-auto bg-white bg-op text-red-500 w-10 h-10 rounded-full flex-center bg-opacity-95"
                >
                  <IconPlayerPlay size={20} className="fill-current" />
                </button>
              </Link>
              <Link
                to={`/playlist/music/${item.id}`}
                className="name mt-1 text-sm text-gray-600 hover:text-gray-900"
              >
                {item.name}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
