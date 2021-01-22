import React, { useEffect, useState } from 'react';
import { useLocation, Link, Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import classnames from 'classnames';
import { apiCloudSearch, apiSearchMultimatch } from '@/api';
import { setSearchValue } from '@/redux/actions';
import dayjs from 'dayjs';
import './style.scss';
import DomSongs from './Songs';
import DomArtists from './Artists';
import DomAlbums from './Albums';
import DomVideos from './Videos';
import DomPlaylists from './Playlists';
import DomLyrics from './Lyrics';
import DomDjRadios from './DjRadios';
import DomUserprofiles from './Userprofiles';

const nav = [
  ['单曲', '1', '首'],
  ['歌手', '100', '位'],
  ['专辑', '10', '张'],
  ['视频', '1014', '个'],
  ['歌单', '1000', '个'],
  ['歌词', '1006', '首'],
  ['主播电台', '1009', '个'],
  ['用户', '1002', '位'],
];

export default () => {
  console.log('entry search');
  const dispatch = useDispatch();
  const { search } = useLocation();
  const [result, setResult] = useState({});
  const [multimatch, setMultimatch] = useState({});
  const [loading, setLoading] = useState(true);
  const defaultSearch = {
  };
  const queryString = new URLSearchParams(search);

  const keywords = queryString.get('keywords');
  const type = queryString.get('type') || '1';
  const reg = /^(1|10|100|1000|1002|1004|1006|1009|1014|1018)$/;
  if (!keywords) return <Redirect to="/" />;
  Object.assign(defaultSearch, { keywords });
  if (reg.test(type)) Object.assign(defaultSearch, { type });

  const { searchValue } = useSelector(({ common }) => common);
  useEffect(() => {
    if (!searchValue) {
      dispatch(setSearchValue({
        searchValue: keywords,
      }));
    }
  }, []);
  const handleInit = async () => {
    try {
      const { result } = await apiCloudSearch({
        ...defaultSearch,
        limit: 100,
      });
      if (type === '1') {
        const { result: multimatch = {} } = await apiSearchMultimatch({
          keywords,
        });
        setMultimatch(multimatch);
      } else {
        setMultimatch({});
      }
      setResult(result);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    handleInit();
  }, [keywords, type]);
  if (loading) return <div>loading</div>;
  return (
    <div className="domSearch overflow-auto max-h-full flex-auto">
      <div className="domSearch_header">
        <div className="h1">
          找到
          {result.songCount
          || result.artistCount
          || result.albumCount
          || result.videoCount
          || result.playlistCount
          || result.djRadiosCount
          || result.userprofileCount
          || 0}
          {
          nav.find((item) => type === item[1])
            && nav.find((item) => type === item[1])[2]
            + nav.find((item) => type === item[1])[0]// "首" + "单曲"
          }
        </div>
        <div className="domSearch_nav">
          {nav.map(([name, code]) => (
            <Link
              key={name}
              to={`/search?keywords=${keywords}&type=${code}`}
              className={classnames('domSearch_nav_link', { on: type === code })}
            >
              {name}
            </Link>
          ))}
        </div>
        { }
      </div>
      <div className="domSearch_main">
        {
          (type === '1' && result.songs)
        && (
          <>
            <DomSongs songs={result.songs} multimatch={multimatch} />
          </>
        )
        }
        {
          (type === '100' && result.artists)
          && <DomArtists artists={result.artists} />
        }
        {type === '10' && result.albums
          && <DomAlbums albums={result.albums} />}
        {type === '1014' && result.videos
          && <DomVideos videos={result.videos} />}
        {type === '1000' && result.playlists
          && <DomPlaylists playlists={result.playlists} />}
        {type === '1006' && result.songs
          && <DomLyrics lyrics={result.songs} />}
        {type === '1009' && result.djRadios
          && <DomDjRadios djRadios={result.djRadios} />}
        {type === '1002' && result.userprofiles
          && <DomUserprofiles userprofiles={result.userprofiles} />}
      </div>
    </div>
  );
};
