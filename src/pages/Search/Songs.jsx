import React, { memo, useState } from 'react';
import classnames from 'classnames';
import { Link } from 'react-router-dom';
import dayjs from 'dayjs';
import {
  IconHeart,
  IconDownload,
  IconPlayerPlay,
  IconChevronRight,
} from '@tabler/icons';
import { useDispatch } from 'react-redux';
import { apiCommentMusic } from '@/api';
import { setContextMenuShow } from '@/redux/actions';

const Build = {
  artist: ({ item }) => (
    <Link to={`/artist/${item.id}`} className="item group">
      <div className="cover">
        <img className="ui_coverimg" src={item.picUrl} alt="" />
      </div>
      <div className="content">
        <div className="name">
          歌手：
          {item.name}
          {
            item.alias.length > 0
          && (
          <span className="text-gray-400">
            （
            {item.alias[0]}
            ）
          </span>
          )
          }
        </div>
      </div>
      <div className="ico text-gray-600 group-hover:text-black ml-auto mr-4">
        <IconChevronRight size={24} stroke={1} />
      </div>
    </Link>
  ),
  album: ({ item }) => (
    <Link to={`/playlist/album/${item.id}`} className="item">
      <div className="cover">
        <img className="ui_coverimg" src={item.blurPicUrl} alt="" />
      </div>
      <div className="content">
        <div className="name">
          {item.name}
        </div>
        <div className="subname">{item.artist.name}</div>
      </div>
      <div className="ico">
        <IconChevronRight size={24} stroke={1} />
      </div>
    </Link>
  ),
};

const DomMultimatch = ({ list = [] }) => {
  if (list.length === 0) return null;
  return (
    <div className="domSearch_multimatch border-b">
      <div className="title">最佳匹配</div>
      <div className="list">
        {list.map(([item, Dom, order]) => <Dom item={item} key={order} />)}
      </div>
    </div>
  );
};

export default memo(({ songs = [], multimatch = {} }) => {
  const list = multimatch.orders.map((order) => [multimatch[order][0], Build[order], order]);
  const dispatch = useDispatch();
  const handleRightClick = async (e, item) => {
    try {
      const { total } = await apiCommentMusic({
        id: item.id,
      });
      dispatch(setContextMenuShow({
        contextMenuX: e.clientX,
        contextMenuY: e.clientY,
        contextMenuItem: item,
        contextMenuTotal: total,
        contextMenuSechma: [
          '评论',
          '播放',
          '下一首播放',
          'divide',
          '收藏到歌单',
          '分享',
          '复制链接',
          '下载',
        ],
      }));
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <DomMultimatch list={list} />
      <div className="songs_list">
        <div className="thead">
          <div className="item flex items-center text-gray-400">
            <div className="index" />
            <div className="heart" />
            <div className="download" />
            <div className="name">音乐标题</div>
            <div className="artist">歌手</div>
            <div className="album">专辑</div>
            <div className="duration">时长</div>
            <div className="pop">热度</div>
          </div>
        </div>
        <div className="tbody">
          {songs.map((item, index) => (
            <div
              tabIndex="2"
              className={classnames('item flex items-center hover:bg-gray-100 focus:bg-gray-200 focus:outline-none', { 'bg-gray-50': index % 2 === 0 })}
              key={item.id}
              onContextMenu={(e) => handleRightClick(e, item)}
            >
              <div className="index text-gray-400">
                {String(index + 1).padStart(2, 0)}
              </div>
              <div className="heart">
                <button type="button" className="text-gray-400 hover:text-black">
                  <IconHeart size={20} stroke={1} />
                </button>
              </div>
              <div className="download">
                <button type="button" className="text-gray-400 hover:text-black">
                  <IconDownload size={20} stroke={1} />
                </button>
              </div>
              <div className="name w-0" title={item.name}>
                <div className="inner flex items-center">
                  <div className="text truncate">
                    <span title={item.name}>
                      {item.name}
                    </span>
                    {
                item.alia.length > 0
                && (
                <span
                  className="alia text-gray-400"
                  title={item.alia.map((alia) => alia)}
                >
                  （
                  {item.alia.map((alia) => alia)}
                  ）
                </span>
                )
              }
                  </div>
                  {
              item.privilege.maxbr === 999000
              && <span className="TAG">SQ</span>
            }
                  {item.mv !== 0
              && (
                <Link className="TAG" to={`/player/mv/${item.mv}`}>
                  MV
                  <IconPlayerPlay size={8} className="fill-current" />
                </Link>
              )}
                </div>
              </div>
              <div
                className="artist truncate text-gray-400 hover"
                title={(item.ar.map((artist) => artist.name)).join(' / ')}
              >

                <div className="truncate">
                  {
              item.ar.map((aritst, index) => (
                <span key={aritst.id}>
                  {index > 0 && ' / '}
                  <Link
                    to={`/artist/${aritst.id}`}
                  >
                    {aritst.name}
                  </Link>
                </span>
              ))
            }
                </div>
              </div>
              <div
                className="album truncate"
                title={item.al.name}
              >
                {item.al.name
                  ? (
                    <Link className="text-gray-500 hover:text-black" to={`/playlist/album/${item.al.id}`}>
                      {item.al.name}
                    </Link>
                  )
                  : <span className="text-gray-400">未知专辑</span>}
              </div>
              <div className="duration text-gray-400 truncate">
                {dayjs(item.dt).format('mm:ss')}
              </div>
              <div className="pop">
                <div className="range" style={{ '--pop': item.pop }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
});
