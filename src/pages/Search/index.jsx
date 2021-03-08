import React, {
  memo, useEffect, useState, Suspense,
} from 'react';
import {
  Redirect, NavLink, Switch, Route, useParams,
} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import classNames from 'classnames';
import { apiCloudSearch, apiSearchMultimatch } from '@/api';
import { setSearchValue } from '@/reducers/search/actions';
import './style.scss';
import DomLoading from '@/components/Loading';
import DomSongs from './Songs';
import DomArtists from './Artists';
import DomAlbums from './Albums';
import DomVideos from './Videos';
import DomPlaylists from './Playlists';
import DomLyrics from './Lyrics';
import DomDjRadios from './DjRadios';
import DomUserprofiles from './Userprofiles';

const navs = [
  ['单曲', '1', '首', DomSongs, 'songCount'],
  ['歌手', '100', '位', DomArtists, 'artistCount'],
  ['专辑', '10', '张', DomAlbums, 'albumCount'],
  ['视频', '1014', '个', DomVideos, 'videoCount'],
  ['歌单', '1000', '个', DomPlaylists, 'playlistCount'],
  ['歌词', '1006', '首', DomLyrics, 'songCount'],
  ['主播电台', '1009', '个', DomDjRadios, 'djRadiosCount'],
  ['用户', '1002', '位', DomUserprofiles, 'userprofileCount'],
];

const counts = {};
const types = {};
const names = [];
const enums = {};

navs.forEach(([name, code, type, Dom, count]) => {
  names.push(name);
  enums[name] = code;
  enums[code] = name;
  counts[name] = count;
  types[name] = type;
});

export default memo(() => {
  console.log('entry search');
  const dispatch = useDispatch();
  const [result, setResult] = useState({});
  const [multimatch, setMultimatch] = useState({});
  const {
    keywords,
    type,
  } = useParams();

  const defaultSearch = {
    keywords,
    type: enums[type],
  };

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
      if (type === '单曲') {
        const { result: multimatch = {} } = await apiSearchMultimatch({
          keywords,
        });
        setMultimatch(multimatch);
      } else {
        setMultimatch({});
      }
      setResult(result);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    handleInit();
  }, [keywords, type]);
  return (
    <div className="domSearch overflow-auto max-h-full flex-auto">
      <div className="domSearch_header p-8 pb-2.5 border-b">
        <div className="font-bold text-base">
          找到
          {result[counts[type]] || 0}
          {types[type]}
        </div>
        <div className="domSearch_nav mt-5 space-x-4">
          {navs.map(([name]) => (
            <NavLink
              key={name}
              activeClassName="text-bold"
              to={`/search/${keywords}/${name}`}
              className="domSearch_nav_link text-lighter text-sm"
            >
              {name}
            </NavLink>
          ))}
        </div>
        { }
      </div>
      <div className="domSearch_main">
        <Suspense fallback={<div className="w-full h-full flex-center"><DomLoading /></div>}>
          <Switch>
            {navs.map(([name, code, type, Dom]) => (
              <Route path={`/search/:keywords/${name}`} key={name}>
                <Dom {...{ multimatch, ...result }} />
              </Route>
            ))}
            <Redirect to={`/search/${keywords}/单曲`} />
          </Switch>
        </Suspense>
        {/* {Doms[type]({ multimatch, ...result })} */}
      </div>
    </div>
  );
});
