import React, { useEffect, useState } from 'react';
import {
  apiArtistDetail, apiArtistSub,
} from '@/api';
import classnames from 'classnames';
import { useParams, Redirect, Link } from 'react-router-dom';
import {
  IconFolderPlus,
  IconCheckbox,
} from '@tabler/icons';
import './style.scss';
import { setDialogUnSubscriptionShow, setToast } from '@/redux/actions';
import { useDispatch, useSelector } from 'react-redux';
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
  const { artistSublist } = useSelector(({ account }) => account);
  if (!/^\d*$/.test(id)) {
    return <Redirect to="/" />;
  }
  const dispatch = useDispatch();
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

  const handleUnSubscription = () => {
    dispatch(setDialogUnSubscriptionShow({
      artistId: id,
    }));
  };

  const handleSubscription = async () => {
    try {
      const { code } = apiArtistSub({
        id,
        t: 1,
      });
      if (code === 200) {
        dispatch(setToast({
          toastTitle: '收藏成功！',
        }));
        // setDetail({
        //   ...detail,
        //   blacklist: !detail.blacklist,
        // });
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
        <div className="avatar border overflow-hidden rounded">
          <img src={`${detail.artist.cover}?param=200y200`} alt="" />
        </div>
        <div className="content flex-auto px-5">
          <div className="name h1 select-text">{detail.artist.name}</div>
          <div className="enname select-text">{detail.alias?.map((alia) => alia)}</div>
          <div className="actions flex space-x-2">
            {artistSublist.find((item) => item.id === Number(id))
              ? (
                <button
                  onClick={handleUnSubscription}
                  type="button"
                  className="ui_btn flex items-center text-sm"
                >
                  <IconCheckbox size={20} stroke={1} />
                  已收藏
                </button>
              )
              : (
                <button
                  onClick={handleSubscription}
                  type="button"
                  className="ui_btn flex items-center text-sm"
                >
                  <IconFolderPlus size={20} stroke={1} />
                  收藏
                </button>
              )}
            {
              detail.user
              && (
              <Link
                to={`/user/${detail.user.userId}`}
                className="ui_btn flex items-center text-sm"
              >
                个人主页
              </Link>
              )
              }
          </div>
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
