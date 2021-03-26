import React, { memo, useState } from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import dayjs from 'dayjs';
import {
  IconChevronRight,
} from '@tabler/icons';
import { useDispatch } from 'react-redux';
import { apiCommentMusic } from '@/api';
import { setContextMenuShow } from '@/reducers/mask/actions';
import DomHeart from '@/components/Table/Heart';
import DomDownload from '@/components/Table/Download';
import DomTags from '@/components/Tags';

const Build = {
  artist: ({ item }) => (
    <Link to={`/artist/${item.id}`} className="item group h-20 flex items-center bg-gray-100 rounded overflow-hidden">
      <div className="cover">
        <img className="" src={`${item.picUrl}?param=80y80`} alt="" />
      </div>
      <div className="content px-2">
        <div className="name text-sm">
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
    <Link to={`/playlist/album/${item.id}`} className="item h-20 flex items-center bg-gray-100 rounded overflow-hidden">
      <div className="cover">
        <img className="" src={`${item.blurPicUrl}?param=80y80`} alt="" />
      </div>
      <div className="content px-2">
        <div className="name text-sm">
          {item.name}
        </div>
        <div className="subname">{item.artist.name}</div>
      </div>
      <div className="ico text-gray-600 group-hover:text-black ml-auto mr-4">
        <IconChevronRight size={24} stroke={1} />
      </div>
    </Link>
  ),
};

const DomMultimatch = ({ list = [] }) => {
  const BuildKeys = Object.keys(Build);
  return (
    <div className="domSearch_multimatch border-b px-8 py-5">
      <div className="title text-bold">最佳匹配</div>
      <div className="list mt-5 flex space-x-6">
        {list.map(([item, Dom, order]) => BuildKeys.includes(order)
        && <Dom item={item} key={order} />)}
      </div>
    </div>
  );
};
export default memo(({ songs = [], multimatch = { orders: [] } }) => {
  const list = multimatch
    .orders
    ?.map((order) => [multimatch[order][0], Build[order], order]);
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
          <div className="item grid items-center text-gray-400">
            <div className="index" />
            <div className="heart" />
            <div className="download" />
            <div className="name flex-auto px-2">音乐标题</div>
            <div className="artist flex-none px-2">歌手</div>
            <div className="album flex-none px-2">专辑</div>
            <div className="duration flex-none px-2">时长</div>
            <div className="pop flex-none px-2">热度</div>
          </div>
        </div>
        <div className="tbody">
          {songs.map((item, index) => (
            <div
              tabIndex="2"
              className={classNames('item grid items-center hover:bg-gray-100 focus:bg-gray-200 focus:outline-none', { 'bg-gray-50': index % 2 === 0 })}
              key={item.id}
              onContextMenu={(e) => handleRightClick(e, item)}
            >
              <div className="index text-gray-400 text-right pr-2.5">
                {String(index + 1).padStart(2, 0)}
              </div>
              <div className="heart text-center">
                <DomHeart />
              </div>
              <div className="download text-center">
                <DomDownload />
              </div>
              <div className="name px-2 " title={item.name}>
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
                  <DomTags item={item} />
                </div>
              </div>
              <div
                className="artist flex-none px-2 truncate text-gray-400"
                title={(item.ar.map((artist) => artist.name)).join(' / ')}
              >
                {
                  item.ar.map((artist, index) => (
                    <span key={artist.name}>
                      {index > 0 && ' / '}
                      <Link
                        to={`/artist/${artist.id}`}
                        className="ui_text_gray_hover"
                      >
                        {artist.name}
                      </Link>
                    </span>
                  ))
                }
              </div>
              <div
                className="album truncate flex-none px-2"
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
              <div className="duration text-gray-400 truncate flex-none px-2">
                {dayjs(item.dt).format('mm:ss')}
              </div>
              <div className="pop">
                <div className="range w-20 h-1.5 rounded bg-gray-200">
                  <div className="h-full bg-gray-300 rounded" style={{ width: `${item.pop}%` }} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
});
