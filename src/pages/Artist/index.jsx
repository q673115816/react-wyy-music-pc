import React, { useEffect, useState } from 'react';
import {
  apiArtistDetail, apiArtistDesc, apiArtistSub, apiSimiArtist, apiArtistMv, apiArtistAlbum,
  apiArtistTopSong,
} from '@/api';
import classnames from 'classnames';
import { useParams, Link, Redirect } from 'react-router-dom';
import {
  IconFolderPlus, IconList, IconLayoutGrid, IconLayout,
  IconPlayerPlay, IconHeart, IconDownload,
  IconSquareCheck,
} from '@tabler/icons';
import './style.scss';
import { transPlayCount } from '@/common/utils';
import dayjs from 'dayjs';

const nav = [
  '专辑',
  'MV',
  '歌手详情',
  '相似歌手',
];

export default () => {
  const { id } = useParams();
  if (!/^\d*$/.test(id)) {
    return <Redirect to="/" />;
  }
  const [detail, setDetail] = useState({});
  const [loading, setLoading] = useState(true);
  const [tab, setTab] = useState('专辑');
  const [simiArtists, setSimiArtists] = useState([]);
  const [MVs, setMVs] = useState([]);
  const [top50, setTop50] = useState([]);
  const [album, setAlbum] = useState({ hotAlbums: [], more: null });
  const [view, setView] = useState('column');
  const handleInit = async () => {
    try {
      const [
        { data: detail },
        { artists },
        { mvs },
        { artist, hotAlbums, more },
        { songs },
      ] = await Promise.all([
        apiArtistDetail({
          id,
        }),
        apiSimiArtist({
          id,
        }),
        apiArtistMv({
          id,
        }),
        apiArtistAlbum({
          id,
        }),
        apiArtistTopSong({
          id,
        }),
      ]);
      setDetail({ ...detail, ...artist });
      setSimiArtists(artists);
      setMVs(mvs);
      setTop50(songs);
      setAlbum({ hotAlbums, more });
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubscription = async () => {
    try {
      const { code } = apiArtistSub({
        id,
        t: detail.blacklist ? -1 : 1,
      });
      if (code === 200) {
        setDetail({
          ...detail,
          blacklist: !detail.blacklist,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    handleInit();
  }, [id]);
  if (loading) return <div>loading</div>;
  return (
    <div className="domArtist overflow-auto">
      <div className="domArtist_header">
        <div className="avatar">
          <img src={`${detail.artist.cover}?param=200y200`} alt="" />
        </div>
        <div className="content">
          <div className="name h1 ui_select">{detail.artist.name}</div>
          <div className="enname ui_select">{detail.alias.map((alia) => alia)}</div>
          <button
            onClick={() => handleSubscription()}
            type="button"
            className="ui_btn flex-center"
          >
            <IconFolderPlus size={22} stroke={1} />
            收藏
            {/* {
              detail.blacklist
                ? (
                  <>
                    <IconSquareCheck size={22} stroke={1} />
                    已收藏
                  </>
                ) : (
                  <>
                    <IconFolderPlus size={22} stroke={1} />
                    收藏
                  </>
                )

            } */}
          </button>
          <div className="info">
            <span className="size">
              单曲数:
              {detail.artist.musicSize}
            </span>
            <span className="size">
              专辑数:
              {detail.artist.albumSize}
            </span>
            <span className="size">
              MV数:
              {detail.artist.mvSize}
            </span>
          </div>
        </div>
      </div>
      <div className="domArtist_main">
        <div className="domArtist_nav">
          {
            nav.map((item) => (
              <button
                onClick={() => setTab(item)}
                type="button"
                className={classnames('domArtist_nav_link', { on: tab === item })}
              >
                {item}
              </button>
            ))
          }
        </div>
        <div className={classnames('domArtist_section', { on: tab === '专辑' })}>
          <div className="grid_qwe">
            <div className="actions">
              <button type="button" className={classnames('flex-center', 'handle', { on: view === 'grid' })} onClick={() => setView('grid')}>
                <IconLayoutGrid size={12} stroke={1.5} />
              </button>
              <button type="button" className={classnames('flex-center', 'handle', { on: view === 'list' })} onClick={() => setView('list')}>
                <IconList size={12} stroke={1.5} />
              </button>
              <button type="button" className={classnames('flex-center', 'handle', { on: view === 'column' })} onClick={() => setView('column')}>
                <IconLayout size={12} stroke={1.5} />
              </button>
            </div>
            {
              view === 'grid'
              && (
              <div className="grid">
                <div className="ui_grid col_4">
                  {album?.hotAlbums.map((item) => (
                    <div className="item" key={item.id}>
                      <div className="cover">
                        <div className="inner">
                          <Link to={`/playlist/album/${item.id}`}>
                            <img className="ui_containimg" src={`${item.picUrl}?param=200y200`} alt="" />
                          </Link>
                        </div>
                      </div>
                      <div className="footer">
                        <div className="name">
                          {item.name}
                        </div>
                      </div>
                      <div className="gray">{dayjs(item.publishTime).format('YYYY-MM-DD')}</div>
                    </div>
                  ))}
                </div>
              </div>
              )
            }
            {view === 'list'
            && (
            <div className="list">
              {
                album?.hotAlbums.map((item) => (
                  <div className="list_item" key={item.id}>
                    <Link className="cover" to={`/playlist/album/${item.id}`}>
                      <img className="ui_containimg" src={`${item.picUrl}?param=100y100`} alt="" />
                    </Link>
                    <Link
                      className="name text-overflow"
                      to={`/playlist/album/${item.id}`}
                    >
                      {item.name}
                      &nbsp;
                      <span className="gray">
                        {item.alias.map((alia) => alia)}
                      </span>
                    </Link>
                    <span className="size gray">
                      {item.size}
                      首
                    </span>
                    <span className="publishTime gray">
                      发行时间：
                      {dayjs(item.publishTime).format('YYYY-MM-DD')}
                    </span>
                  </div>
                ))
              }
            </div>
            )}
            {view === 'column'
            && (
            <div className="column">
              <div className="column_item">
                <div className="cover">
                  <div className="Top50">
                    TOP50
                  </div>
                </div>
                <div className="aside">
                  <div>
                    <span className="ui_bold">
                      热门50首
                    </span>
                    <button type="button">
                      <IconPlayerPlay size={12} />
                    </button>
                    |
                    <button type="button">
                      <IconFolderPlus size={12} />
                    </button>
                  </div>
                  <div className="list">
                    {
                      top50.map((item, index) => (
                        <div className="item" id={item.id}>
                          <div className="cell index gray">
                            {
                              String(index + 1).padStart(2, 0)
                            }
                          </div>
                          <div className="cell heart gray">
                            <button type="button">
                              <IconHeart size={14} />
                            </button>
                          </div>
                          <div className="cell download gray">
                            <button type="button">
                              <IconDownload size={16} stroke={1.5} />
                            </button>
                          </div>
                          <div className="cell name">
                            <span className="text-overflow">
                              {item.name}
                              &nbsp;
                              <span className="gray">
                                {item.alia.map((alia) => alia)}
                              </span>
                            </span>
                          </div>
                          <div className="cell duration gray">
                            {dayjs(item.dt).format('mm:ss')}
                          </div>
                        </div>
                      ))
                    }
                    {
                      top50.length > 10
                      && <button type="button" className="seeMore">查看全部50首 &gt;</button>
                    }
                  </div>
                </div>
              </div>
            </div>
            )}
          </div>
        </div>
        <div className={classnames('domArtist_section', { on: tab === 'MV' })}>
          <div className="ui_grid col_3 rectangle_width">
            {MVs.map((item) => (
              <div className="item" key={item.id}>
                <div className="cover">
                  <div className="inner">
                    <Link to={`/player/mv/${item.id}`}>
                      <img src={item.imgurl} alt="" />
                      <div className="rt whitetext">{transPlayCount(item.playCount)}</div>
                      <div className="rb whitetext">{dayjs(item.duration).format('mm:ss')}</div>
                    </Link>
                  </div>
                  { }
                </div>
                <div className="footer text-overflow">
                  <Link to={`/player/mv/${item.id}`}>{item.name}</Link>
                  {item.name}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className={classnames('domArtist_section', { on: tab === '歌手详情' })}>
          <div className="domArtist_subtitle ui_select">
            {detail.artist.name}
            简介
          </div>
          <div className="domArtist_article gray ui_select">
            {detail.artist.briefDesc}
          </div>
          <br />
          <br />
          <br />
          <div className="domArtist_subtitle ui_select">简历</div>
        </div>
        <div className={classnames('domArtist_section', { on: tab === '相似歌手' })}>
          <div className="ui_grid col_5">
            {simiArtists.map((item) => (
              <div className="item" key={item.id}>
                <div className="cover">
                  <div className="inner">
                    <Link to={`/artist/${item.id}`}>
                      <img className="ui_containimg" src={`${item.picUrl}?param=200y200`} alt="" />
                    </Link>
                  </div>
                </div>
                <div className="footer">
                  <Link to={`/artist/${item.id}`}>{item.name}</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
