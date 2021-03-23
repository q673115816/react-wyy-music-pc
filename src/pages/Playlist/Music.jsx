import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
import dayjs from 'dayjs';
import { apiPlaylistDetail } from '@/api';
import {
  IconPlayerPlay,
  IconFolderPlus,
  IconScreenShare,
  IconCloudDownload,
  IconPlus,
  IconCaretUp,
} from '@tabler/icons';
import classNames from 'classnames';
import { transPlayCount, transSubscribeCount } from '@/common/utils';
import DomLoading from '@/components/Loading';
import DomAllplayGroup from '@/components/AllplayGroup';

import DomPlaylist from './components/Playlist';
import DomComments from './components/Comments';
import DomSubscribers from './components/Subscribers';

const navs = [
  ['歌曲列表', 'playlist'],
  ['评论', 'comments'],
  ['收藏者', 'subscribers'],
];

const DomMain = ({ status, id, trackIds }) => {
  switch (status) {
    case 'playlist':
      return <DomPlaylist {...{ trackIds }} />;
    case 'comments':
      return <DomComments {...{ id }} />;
    case 'subscribers':
      return <DomSubscribers {...{ id }} />;
    default:
      return null;
  }
};

export default () => {
  const [fulfilled, setFulfilled] = useState(false);
  const { id } = useParams();
  const [playlist, setPlaylist] = useState([]);
  const [privileges, setPrivileges] = useState([]);
  const [status, setStatus] = useState('playlist');
  const { isLogin } = useSelector(({ common }) => common);
  const handleInit = async () => {
    try {
      const {
        code,
        playlist,
        privileges,
      } = await apiPlaylistDetail({
        id,
      });
      if (code === 200) {
        setPlaylist(playlist);
        setPrivileges(privileges);
        setFulfilled(true);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    handleInit();
  }, [id]);
  if (id && !fulfilled) return <div className="w-full h-full flex-center"><DomLoading /></div>;
  return (
    <div className="domPlaylistDetail overflow-auto h-full">
      <div className="domPlaylistDetail_header p-8 flex">
        <div className="cover border rounded overflow-hidden flex-none">
          <img
            className=""
            src={`${playlist.coverImgUrl}?params=200y200`}
            alt=""
          />
        </div>
        <div className="info flex-auto w-0 ml-5">
          <div className="name flex items-center">
            <span className="type text-red-500 border border-current px-1 py-0.5 rounded mr-2 leading-none">歌单</span>
            <span className="h1 select-text">
              {playlist.name || '我喜欢的音乐'}
            </span>
          </div>
          <div className="creator flex items-center mt-2">
            <Link
              to={`/user/${playlist.creator?.userId}`}
              className="avator w-6 h-6 rounded-full overflow-hidden mr-2"
            >
              <img
                className=""
                src={`${playlist.creator?.avatarUrl}?param=50y50`}
                alt=""
              />
            </Link>
            {
              isLogin
                ? (
                  <Link to="/" className="nickname ui_link mr-2">
                    {playlist.creator?.nickname}
                  </Link>
                )
                : (
                  <button type="button" className="ui_link mr-2">
                    未登录&gt;
                  </button>
                )
            }
            <span className="text-gray-500">
              {dayjs(playlist.createTime || Date.now()).format('YYYY-MM-DD')}
              创建
            </span>
          </div>
          <div className="actions space-x-2 mt-2">
            <DomAllplayGroup />
            <button type="button" className="ui_btn inline-flex items-center justify-center border px-3 h-8 rounded-full btn">
              {
                playlist.subscribed
                  ? <IconFolderPlus size={20} stroke={1} />
                  : <IconFolderPlus size={20} stroke={1} />
              }
              &nbsp;
              收藏
              (
              {transSubscribeCount(playlist.subscribedCount) || 0}
              )
            </button>
            <button type="button" className="ui_btn inline-flex items-center justify-center border px-3 h-8 rounded-full btn">
              <IconScreenShare size={20} stroke={1} />
              &nbsp;
              分享
              (
              {transSubscribeCount(playlist.shareCount) || 0}
              )
            </button>
            <button type="button" className="ui_btn inline-flex items-center justify-center border px-3 h-8 rounded-full btn">
              <IconCloudDownload size={20} stroke={1} />
              &nbsp;
              下载全部
            </button>

          </div>
          <div className="space-y-1 mt-2">
            <div className="tags">
              <span>标签：</span>
              {playlist.tags.map((tag, index) => (
                <span key={tag}>
                  {index > 0 && ' / '}
                  <Link to={`/home/playlist/${tag}`} className="tag ui_link">{tag}</Link>
                </span>
              ))}
            </div>
            <div>
              <span className="mr-3">
                歌曲：
                <span className="text-gray-500">
                  {playlist.trackCount}
                </span>
              </span>
              <span>
                播放：
                <span className="text-gray-500">
                  {transPlayCount(playlist.playCount)}
                </span>
              </span>
            </div>
            <div className={classNames('whitespace-pre-line leading-6 relative')}>
              简介：
              <span className={classNames('text-gray-500 select-text')}>
                {playlist.description}
              </span>
              <button type="button" className="absolute top-0 right-0 text-gray-500">
                <IconCaretUp size={16} className="fill-current" />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="domPlaylistDetail_main mt-4">
        <div className="space-x-4 flex items-baseline px-8">
          {
            navs.map(([nav, code]) => (
              <button
                type="button"
                className={classNames('text-sm', status === code && 'text-base font-bold')}
                key={nav}
                onClick={() => setStatus(code)}
              >
                {nav}
                {nav === '评论' && `(${playlist.commentCount})`}
              </button>
            ))
          }
        </div>
        <div>
          <DomMain id={id} status={status} trackIds={playlist.trackIds.map(({ id }) => id)} />
        </div>
      </div>
    </div>
  );
};
