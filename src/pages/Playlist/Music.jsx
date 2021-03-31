import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
import dayjs from 'dayjs';
import { apiPlaylistDetail, apiPlaylistSubscribe, apiSongDetail } from '@/api';
import {
  IconPlayerPlay,
  IconFolderPlus,
  IconScreenShare,
  IconCloudDownload,
  IconPlus,
  IconCheckbox,
  IconCaretUp,
  IconCaretDown,
} from '@tabler/icons';

import { setToast } from '@/reducers/mask/actions';
import classNames from 'classnames';
import { transPlayCount, transSubscribeCount } from '@/common/utils';
import DomLoading from '@/components/Loading';
import DomGroupPlay from '@/components/GroupPlay';

import produce from 'immer';
import DomPlaylist from './components/Playlist';
import DomComments from './components/Comments';
import DomSubscribers from './components/Subscribers';

const navs = [
  ['歌曲列表', 'playlist'],
  ['评论', 'comments'],
  ['收藏者', 'subscribers'],
];

const DomMain = ({ status, id, songs }) => {
  switch (status) {
    case 'playlist':
      return <DomPlaylist {...{ songs }} />;
    case 'comments':
      return <DomComments {...{ id }} />;
    case 'subscribers':
      return <DomSubscribers {...{ id }} />;
    default:
      return null;
  }
};

const DomT = ({ tags = [] }) => {
  if (tags.length === 0) return null;
  return (
    <div className="tags">
      <span>标签：</span>
      {tags.map((tag, index) => (
        <span key={tag}>
          {index > 0 && ' / '}
          <Link to={`/home/playlist/${tag}`} className="tag ui_link">
            {tag}
          </Link>
        </span>
      ))}
    </div>
  );
};

const DomDescription = ({ description = '' }) => {
  if (!description) return null;
  const [open, setOpen] = useState(false);
  const descriptionList = description.match(/^.*$/mg);
  return (
    <div className="relative pr-5">
      <div className="whitespace-pre-line leading-6">
        简介：
        <span className={classNames('text-gray-500 select-text', !open && 'truncate inline-block max-w-xs align-bottom')}>
          {open
            ? description
            : descriptionList[0]}
        </span>
        <button type="button" onClick={() => setOpen(!open)} className="absolute top-0 right-0 text-gray-500">
          {
            open
              ? <IconCaretUp size={16} className="fill-current" />
              : <IconCaretDown size={16} className="fill-current" />
          }
        </button>
      </div>
    </div>
  );
};

export default () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const [songs, setSongs] = useState([]);
  const { id } = useParams();
  const [data, setData] = useState({});
  // const [privileges, setPrivileges] = useState([]);
  const [status, setStatus] = useState('playlist');
  const { isLogin } = useSelector(({ common }) => common);
  const handleInit = async () => {
    try {
      const data = await apiPlaylistDetail({
        id,
      });
      setData(produce((draft) => {
        for (const key in data) {
          draft[key] = data[key];
        }
      }));
      if (data.playlist.trackCount > 0) {
        const { songs } = await apiSongDetail({
          ids: data.playlist.trackIds.map(({ id }) => id),
        });
        setSongs(songs);
      }
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    handleInit();
  }, []);
  // TODO
  const handleSub = async (isSub) => {
    try {
      const { code } = await apiPlaylistSubscribe({
        t: isSub ? 2 : 1,
        id,
      });
      if (code === 200) {
        dispatch(setToast({ toastTitle: isSub ? '取消收藏成功！' : '收藏成功！' }));
        setData(produce((draft) => {
          draft.playlist.subscribed = !isSub;
        }));
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    handleInit();
  }, [id]);
  if (loading) return <div className="w-full h-full flex-center"><DomLoading /></div>;
  return (
    <div className="domPlaylistDetail overflow-auto h-full">
      <div className="domPlaylistDetail_header p-8 flex">
        <div className="cover border rounded overflow-hidden flex-none">
          <img
            className=""
            src={`${data.playlist.coverImgUrl}?param=200y200`}
            alt=""
          />
        </div>
        <div className="info flex-auto w-0 ml-5">
          <div className="name flex items-center">
            <span className="type text-red-500 border border-current px-1 py-0.5 rounded mr-2 leading-none">歌单</span>
            <span className="h1 select-text">
              {data.playlist.name || '我喜欢的音乐'}
            </span>
          </div>
          <div className="creator flex items-center mt-2">
            <Link
              to={`/user/${data.playlist.creator?.userId}`}
              className="avator w-6 h-6 rounded-full overflow-hidden mr-2"
            >
              <img
                className=""
                src={`${data.playlist.creator?.avatarUrl}?param=50y50`}
                alt=""
              />
            </Link>

            <Link to={`/user/${data.playlist.creator?.userId}`} className="nickname ui_link mr-2">
              {data.playlist.creator?.nickname}
            </Link>

            <span className="text-gray-500">
              {dayjs(data.playlist.createTime || Date.now()).format('YYYY-MM-DD')}
              创建
            </span>
          </div>
          <div className="actions flex space-x-2 mt-2">
            <DomGroupPlay playlist={songs} />
            <button
              onClick={() => handleSub(data.playlist.subscribed)}
              type="button"
              className="ui_btn inline-flex items-center justify-center border px-3 h-8 rounded-full btn"
            >
              {
                data.playlist.subscribed
                  ? <IconCheckbox size={20} stroke={1} />
                  : <IconFolderPlus size={20} stroke={1} />
              }
              &nbsp;
              {
                data.playlist.subscribed
                  ? '已收藏'
                  : '收藏'
              }
              {`(${transSubscribeCount(data.playlist.subscribedCount)})`}
            </button>
            <button type="button" className="ui_btn inline-flex items-center justify-center border px-3 h-8 rounded-full btn">
              <IconScreenShare size={20} stroke={1} />
              &nbsp;
              分享
              {`(${transSubscribeCount(data.playlist.shareCount)})`}
            </button>
            <button type="button" className="ui_btn inline-flex items-center justify-center border px-3 h-8 rounded-full btn">
              <IconCloudDownload size={20} stroke={1} />
              &nbsp;
              下载全部
            </button>

          </div>
          <div className="space-y-1 mt-2">
            <DomT tags={data.playlist.tags} />

            <div>
              <span className="mr-3">
                歌曲：
                <span className="text-gray-500">
                  {data.playlist.trackCount}
                </span>
              </span>
              <span>
                播放：
                <span className="text-gray-500">
                  {transPlayCount(data.playlist.playCount)}
                </span>
              </span>
            </div>
            <DomDescription description={data.playlist.description} />
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
                {nav === '评论' && `(${data.playlist.commentCount})`}
              </button>
            ))
          }
        </div>
        <div>
          <DomMain id={id} status={status} songs={songs} />
        </div>
      </div>
    </div>
  );
};
