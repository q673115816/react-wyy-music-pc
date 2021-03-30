import React, { memo } from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import dayjs from 'dayjs';
import {
  IconChevronRight,
} from '@tabler/icons';
import DomMenuCreate from '@/components/MenuCreate';
import DomRank from '@/components/Table/Rank';
import DomHeart from '@/components/Table/Heart';
import DomDownload from '@/components/Table/Download';
import DomName from '@/components/Table/Name';
import DomArtists from '@/components/Table/Artists';
import DomAlbum from '@/components/Table/Album';
import DomPop from '@/components/Table/Pop';

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
                {`（${item.alias}）`}
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
  return (
    <>
      <DomMultimatch list={list} />
      <div className="songs_list" style={{ '--ui_grid_template': '36px / 54px 24px 24px 37% 4fr 5fr 2fr 3fr' }}>
        <div className="thead">
          <div className="item grid items-center text-gray-400 ui_grid_template">
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
            <DomMenuCreate
              sechma={[
                '评论',
                '播放',
                '下一首播放',
                'divide',
                '收藏到歌单',
                '分享',
                '复制链接',
                '下载',
              ]}
              item={item}
              type="song"
              key={item.id}
            >
              <div
                tabIndex="2"
                className={classNames('item grid items-center hover:bg-gray-100 focus:bg-gray-200 focus:outline-none ui_grid_template', { 'bg-gray-50': index % 2 === 0 })}
              >
                <div className="index pr-2">
                  <DomRank index={index} id={item.id} />
                </div>
                <div className="heart text-center">
                  <DomHeart id={item.id} />
                </div>
                <div className="download text-center">
                  <DomDownload />
                </div>
                <div className="name px-2">
                  <DomName item={item} />
                </div>
                <div className="artist flex-none px-2 truncate text-gray-400">
                  <DomArtists artists={item.ar} />
                </div>
                <div className="album truncate flex-none px-2">
                  <DomAlbum name={item.al.name} id={item.al.name} />
                </div>
                <div className="duration text-gray-400 truncate flex-none px-2">
                  {dayjs(item.dt).format('mm:ss')}
                </div>
                <div className="pop">
                  <DomPop pop={item.pop} />
                </div>
              </div>
            </DomMenuCreate>
          ))}
        </div>
      </div>
    </>
  );
});
