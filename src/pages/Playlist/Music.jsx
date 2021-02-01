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
} from '@tabler/icons';
import { transPlayCount } from '@/common/utils';

export default () => {
  const [fulfilled, setFulfilled] = useState(false);
  const { id } = useParams();
  const [playlist, setPlaylist] = useState([]);
  const [privileges, setPrivileges] = useState([]);
  const { isLogin } = useSelector(({ common }) => common);
  const handleGet = async () => {
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
    handleGet();
  }, [id]);
  if (id && !fulfilled) return <div>loading</div>;
  return (
    <div className="domPlaylistDetail">
      <div className="domPlaylistDetail_header">
        <div className="cover">
          <img
            className="ui_containimg"
            src={`${playlist.coverImgUrl}?params=200y200`}
            alt=""
          />
        </div>
        <div className="info">
          <div className="name">
            <span className="type">歌单</span>
            {playlist.name || '我喜欢的音乐'}
          </div>
          <div className="creator">
            <Link to="/" className="avator">
              <img className="ui_containimg" src={`${playlist.creator?.avatarUrl}?params=50y50`} alt="" />
            </Link>
            {
              isLogin
                ? <Link to="/" className="nickname ui_link">{playlist.creator?.nickname}</Link>
                : <button type="button" className="ui_link">未登录&gt;</button>
            }
              &nbsp;
            <span className="text-gray-400">
              {dayjs(playlist.createTime || Date.now()).format('YYYY-MM-DD')}
              创建
            </span>
          </div>
          <div className="actions">
            <div className="ui_playbtn_group btn">
              <button type="button" className="ui_playbtn_group_left">
                <IconPlayerPlay size={16} className="fill-current" />
                &nbsp;
                播放全部
              </button>
              <i className="ui_playbtn_group_split" />
              <button type="button" className="ui_playbtn_group_right"><IconPlus size={18} /></button>
            </div>
            <button type="button" className="ui_btn btn">
              {
                playlist.subscribed
                  ? <IconFolderPlus size={20} stroke={1} />
                  : <IconFolderPlus size={20} stroke={1} />
              }
              &nbsp;
              收藏
              (
              {transPlayCount(playlist.subscribedCount) || 0}
              )
            </button>
            <button type="button" className="ui_btn btn">
              <IconScreenShare size={20} stroke={1} />
              &nbsp;

              分享
              (
              {transPlayCount(playlist.shareCount) || 0}
              )
            </button>
            <button type="button" className="ui_btn btn">
              <IconCloudDownload size={20} stroke={1} />
              &nbsp;
              下载全部
            </button>

          </div>
          <div className="tags">
            <span>标签</span>
            {playlist.tags.map((tag) => (
              <Link to="/" className="tag ui_link" key={tag}>{tag}</Link>
            ))}
          </div>
          <div>
            <span>
              歌曲：
              {playlist.trackCount}
            </span>
            <span>
              播放：
              {playlist.playCount}
            </span>
          </div>
          <div>
            <span>简介：</span>
            <pre>{playlist.description}</pre>
          </div>
        </div>
      </div>
      <div className="domPlaylistDetail_main">
        <div />
      </div>
    </div>
  );
};
