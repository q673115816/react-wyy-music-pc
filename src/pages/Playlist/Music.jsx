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
import classnames from 'classnames';
import { transPlayCount, transSubscribeCount } from '@/common/utils';
import DomLoading from '@/components/Loading';
import DomAllplayGroup from '@/components/AllplayGroup';

import DomSubscribers from './components/Subscribers';

export default () => {
  const [fulfilled, setFulfilled] = useState(false);
  const { id } = useParams();
  const [playlist, setPlaylist] = useState([]);
  const [privileges, setPrivileges] = useState([]);
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
  if (id && !fulfilled) return <DomLoading />;
  return (
    <div className="domPlaylistDetail overflow-auto h-full">
      <div className="domPlaylistDetail_header">
        <div className="cover border rounded overflow-hidden flex-none">
          <img
            className="ui_containimg"
            src={`${playlist.coverImgUrl}?params=200y200`}
            alt=""
          />
        </div>
        <div className="info">
          <div className="name flex items-center">
            <span className="type text-red-500 border border-current px-1 py-0.5 rounded mr-2 leading-none">歌单</span>
            <span className="h1">
              {playlist.name || '我喜欢的音乐'}
            </span>
          </div>
          <div className="creator">
            <Link to="/" className="avator">
              <img
                className="ui_containimg"
                src={`${playlist.creator?.avatarUrl}?params=50y50`}
                alt=""
              />
            </Link>
            {
              isLogin
                ? (
                  <Link to="/" className="nickname ui_link">
                    {playlist.creator?.nickname}
                  </Link>
                )
                : (
                  <button type="button" className="ui_link">
                    未登录&gt;
                  </button>
                )
            }
              &nbsp;
            <span className="text-gray-500">
              {dayjs(playlist.createTime || Date.now()).format('YYYY-MM-DD')}
              创建
            </span>
          </div>
          <div className="actions">
            <DomAllplayGroup />
            <button type="button" className="ui_btn btn">
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
            <button type="button" className="ui_btn btn">
              <IconScreenShare size={20} stroke={1} />
              &nbsp;
              分享
              (
              {transSubscribeCount(playlist.shareCount) || 0}
              )
            </button>
            <button type="button" className="ui_btn btn">
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
                  <Link to="/" className="tag ui_link">{tag}</Link>
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
            <div className={classnames('whitespace-pre-line leading-6 relative')}>
              简介：
              <span className={classnames('text-gray-500 select-text')}>
                {playlist.description}
              </span>
              <button type="button" className="absolute top-0 right-0 text-gray-500">
                <IconCaretUp size={16} className="fill-current" />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="domPlaylistDetail_main">
        <div>
          <button type="button">歌曲列表</button>
          <button type="button">评论()</button>
          <button type="button">收藏者</button>
        </div>
        <DomSubscribers id={id} />
      </div>
    </div>
  );
};
