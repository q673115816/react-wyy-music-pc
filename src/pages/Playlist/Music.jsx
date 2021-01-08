import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
import dayjs from 'dayjs';
import { apiPlaylistDetail } from '@/api';
import { setPlaylistDetail } from '@/redux/actions';
import {
  IconPlayerPlay, IconFolderPlus, IconScreenShare, IconCloudDownload,
} from '@tabler/icons';

export default () => {
  const [fulfilled, setFulfilled] = useState(false);
  const { id } = useParams();
  const {
    playlist,
    privileges,
  } = useSelector(({ playlist }) => playlist);
  const { isLogin } = useSelector(({ common }) => common);
  const dispatch = useDispatch();
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
        dispatch(setPlaylistDetail({
          playlist,
          privileges,
        }));
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
                ? <Link to="/" className="nickname gray">{playlist.creator?.nickname}</Link>
                : <button type="button" className="ui_link">未登录&gt;</button>
            }
              &nbsp;
            <span className="gray">
              {dayjs(playlist.createTime || Date.now()).format('YYYY-MM-DD')}
              创建
            </span>
          </div>
          <div className="actions">
            <button type="button" className="btn play">
              <IconPlayerPlay size={20} fill="currentColor" />
              播放全部
              +
            </button>
            <button type="button" className="btn">
              {
                playlist.subscribed
                  ? <IconFolderPlus size={20} stroke={1} />
                  : <IconFolderPlus size={20} stroke={1} />
              }
              &nbsp;
              收藏
              (
              {playlist.subscribedCount || 0}
              )
            </button>
            <button type="button" className="btn">
              <IconScreenShare size={20} stroke={1} />
              &nbsp;

              分享
              (
              {playlist.shareCount || 0}
              )
            </button>
            <button type="button" className="btn">
              <IconCloudDownload size={20} stroke={1} />
              &nbsp;
              下载全部
            </button>

          </div>
          <div className="tags">
            <span>标签</span>
            {playlist.tags?.map((tag) => (
              <Link to="/" className="tag gray">{tag}</Link>
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
