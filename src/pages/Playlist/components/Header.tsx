import React, { useState, memo } from 'react';
import classNames from 'classnames';
import DomGroupPlay from '@/components/GroupPlay';
import { transPlayCount, transSubscribeCount } from '@/common/utils';
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
import { Link } from 'react-router-dom';
import dayjs from 'dayjs';

const DomT = memo(({ tags = [] }) => {
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
});

const DomDescription = memo(({ description = '' }) => {
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
});

export default memo(({ data = {}, handleSub, songs }) =>
  // console.log('playlist_music_header');
  (
    <div className="domPlaylistDetail_header p-8 flex">
      <div className="cover border rounded overflow-hidden flex-none w-92 h-92">
        <img
          className="w-full h-full"
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
  ));
