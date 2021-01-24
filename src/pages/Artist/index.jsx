import React, { useEffect, useState } from 'react';
import {
  apiArtistDetail, apiArtistSub,
} from '@/api';
import classnames from 'classnames';
import { useParams, Redirect } from 'react-router-dom';
import {
  IconFolderPlus,
} from '@tabler/icons';
import './style.scss';

import DomAlbum from './components/Album';
import DomMv from './components/Mv';
import DomDetail from './components/Detail';
import DomSimilarity from './components/Similarity';

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

  const handleInit = async () => {
    try {
      const { data: detail } = await apiArtistDetail({
        id,
      });
      setDetail(detail);
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
    <div className="domArtist overflow-auto max-h-full flex-auto">
      <div className="domArtist_header">
        <div className="avatar">
          <img src={`${detail.artist.cover}?param=200y200`} alt="" />
        </div>
        <div className="content">
          <div className="name h1 ui_select">{detail.artist.name}</div>
          <div className="enname ui_select">{detail.alias?.map((alia) => alia)}</div>
          <button
            onClick={() => handleSubscription()}
            type="button"
            className="ui_btn flex items-center text-sm"
          >
            <IconFolderPlus size={20} stroke={1} />
            &nbsp;
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
              {detail.artist?.musicSize}
            </span>
            <span className="size">
              专辑数:
              {detail.artist?.albumSize}
            </span>
            <span className="size">
              MV数:
              {detail.artist?.mvSize}
            </span>
          </div>
        </div>
      </div>
      <div className="domArtist_main">
        <div className="domArtist_nav">
          {
            nav.map((item) => (
              <button
                key={item}
                onClick={() => setTab(item)}
                type="button"
                className={classnames('domArtist_nav_link', { on: tab === item })}
              >
                {item}
              </button>
            ))
          }
        </div>
        {
          tab === '专辑'
          && <DomAlbum id={id} />
        }
        {
          tab === 'MV'
          && <DomMv id={id} />
        }
        {
          tab === '歌手详情'
          && <DomDetail id={id} />
        }
        {
          tab === '相似歌手'
          && <DomSimilarity id={id} />
        }

      </div>
    </div>
  );
};
