import React, { useEffect, useState } from 'react';
import { useLocation, Link, Redirect } from 'react-router-dom';
import classnames from 'classnames';
import { apiCloudSearch } from '@/api';
import { IconHeart, IconDownload, IconPlayerPlay } from '@tabler/icons';
import dayjs from 'dayjs';
import './style.scss';

const nav = [
  ['单曲', '1'],
  ['歌手', '100'],
  ['专辑', '10'],
  ['视频', '1014'],
  ['歌单', '1000'],
  ['歌词', '1006'],
  ['主播电台', '1009'],
  ['用户', '1002'],
];

export default () => {
  const { search } = useLocation();
  const [result, setResult] = useState({});
  const [loading, setLoading] = useState(true);
  const [songsActive, setSongsActive] = useState();
  const defaultSearch = {
  };
  const queryString = new URLSearchParams(search);

  const keywords = queryString.get('keywords');
  const type = queryString.get('type') || '1';
  const reg = /^(1|10|100|1000|1002|1004|1006|1009|1014|1018)$/;
  if (!keywords) return <Redirect to="/" />;
  Object.assign(defaultSearch, { keywords });
  if (reg.test(type)) Object.assign(defaultSearch, { type });

  const handleInit = async () => {
    try {
      const { result } = await apiCloudSearch({
        ...defaultSearch,
        limit: 100,
      });
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
    <div className="domSearch overflow-auto">
      <div className="domSearch_header">
        <div className="h1">
          找到
          {' '}
          {result.songCount || 0}
          {' '}
          首单曲
        </div>
        <div className="domSearch_nav">
          {nav.map(([name, code]) => (
            <Link
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
        <table className="song_list">
          <thead className="thead">
            <tr className="item gray">
              <td className="index" />
              <td className="heart" />
              <td className="download" />
              <td className="name">音乐标题</td>
              <td className="artist">歌手</td>
              <td className="album">专辑</td>
              <td className="duration">时长</td>
              <td className="gray">热度</td>
            </tr>
          </thead>
          <tbody className="tbody">
            {result.songs.map((item, index) => (
              <tr
                onClick={() => setSongsActive(item.id)}
                className={classnames('item', { on: songsActive === item.id })}
                key={item.id}
              >
                <td className="index">
                  {String(index + 1).padStart(2, 0)}
                </td>
                <td className="heart">
                  <button type="button">
                    <IconHeart size={20} stroke={1} />
                  </button>
                </td>
                <td className="download">
                  <button type="button">
                    <IconDownload size={20} stroke={1} />
                  </button>
                </td>
                <td className="name" title={item.name}>
                  <div className="text-overflow">
                    {item.name}
                      &nbsp;
                    <span className="gray">
                      {item.alia.map((alia) => alia)}
                    </span>
                    {item.mv !== 0
                      && (
                        <Link className="mv" to={`/player/mv/${item.mv}`}>
                          MV
                          <IconPlayerPlay size={8} fill="currentColor" />
                        </Link>
                      )}
                  </div>
                </td>
                <td
                  className="artist text-overflow gray hover"
                  title={(item.ar.map((artist) => artist.name)).join('/')}
                >
                  <div className="text-overflow">
                    {item.ar.map((aritst) => <Link to={`/artist/${aritst.id}`}>{aritst.name}</Link>)}
                  </div>
                </td>
                <td
                  className="album text-overflow gray hover"
                  title={item.al.name}
                >
                  <Link to={`/playlist/album/${item.al.id}`}>
                    {item.al.name}
                  </Link>
                </td>
                <td className="duration gray text-overflow">
                  {dayjs(item.dt).format('mm:ss')}
                </td>
                <td className="pop">
                  <div className="range" style={{ '--pop': item.pop }} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
