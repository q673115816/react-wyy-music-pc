import React, { useEffect, useState } from 'react';
import {
  IconDownload,
  IconPlayerPlay,
  IconPlus,
  IconFolderPlus,
} from '@tabler/icons';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import dayjs from 'dayjs';
import {
  apiRecommendSongs, apiCommentMusic,
} from '@/api';
import { SymbolToday } from '@/components/Symbol';
import {
  setContextMenuShow,
} from '@/reducers/mask/actions';
import { setAudioImmediate } from '@/reducers/audio/actions';
import { useDispatch } from 'react-redux';
import useLoginStatus from '@/custom/useLoginStatus';
import './style.scss';
import DomHeart from '@/components/Table/Heart';
import DomDownload from '@/components/Table/Download';
import DomAllplayGroup from '@/components/AllplayGroup';
import DomTags from '@/components/Tags';

export default () => {
  useLoginStatus();
  const dispatch = useDispatch();
  const [data, setData] = useState([]);
  const handleInit = async () => {
    try {
      const { data = [] } = await apiRecommendSongs();
      setData(data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleDoubleClick = (item) => {
    dispatch(setAudioImmediate({
      currentSong: item,
    }));
  };

  const handleRightClick = async (e, item, type) => {
    try {
      const { total } = await apiCommentMusic({
        id: item.id,
      });
      dispatch(setContextMenuShow({
        contextMenuX: e.clientX,
        contextMenuY: e.clientY,
        contextMenuItem: item,
        contextMenuTotal: total,
        contextMenuType: type,
        contextMenuItemId: item.id,
        contextMenuSechma: [
          '评论',
          '播放',
          '下一首播放',
          'divide',
          '收藏到歌单',
          '分享',
          '复制链接',
          '不感兴趣',
          '下载',
        ],
      }));
    } catch (error) {
      console.log(error);
    }
  };

  const handlePlay = () => {
    alert('asd');
  };
  const handleAdd = () => {
    alert('asd');
  };

  useEffect(() => {
    handleInit();
  }, []);
  return (
    <div className="domDailySong overflow-auto max-h-full flex-auto">
      <div className="domDailySong_header px-8 pb-2.5 pt-6 border-b">
        <div className="section flex items-center">
          <div className="date w-20 h-20 ui_themeColor">
            <SymbolToday />
          </div>
          <div className="content ml-8">
            <div className="h1">每日歌曲推荐</div>
            <div className="text-gray-400 tips">
              根据你的音乐口味生成, 每天6:00更新
            </div>
          </div>
        </div>
        <div className="actions flex mt-5">
          <DomAllplayGroup {...{ handlePlay, handleAdd }} />
          &nbsp;
          &nbsp;
          <button type="button" className="inline-flex items-center justify-center border px-3 h-8 rounded-full hover:bg-gray-100">
            <IconFolderPlus size={22} stroke={1} />
            &nbsp;
            收藏全部
          </button>
        </div>
      </div>
      <div className="domDailySong_main pb-8" style={{ '--gridTemplateColumns': '54px 30px 30px 9fr 4fr 6fr 2fr', '--height': '36px' }}>
        <div className="list">
          <div className="thead">
            <div className="item grid leading-8" style={{ gridTemplateColumns: 'var(--gridTemplateColumns)', height: 36 }}>
              <div className="index" />
              <div className="heart" />
              <div className="download" />
              <div className="name text-gray-500 px-1">音乐标题</div>
              <div className="artist text-gray-500 px-1">歌手</div>
              <div className="album text-gray-500 px-1">专辑</div>
              <div className="duration text-gray-500 px-1">时长</div>
            </div>
          </div>
          <div className="tbody grid">
            {
              data.dailySongs?.map((item, index) => (
                <div
                  tabIndex="2"
                  className={classNames('item grid items-center hover:bg-gray-100 focus:bg-gray-200 focus:outline-none', { 'bg-gray-50': index % 2 === 0 })}
                  key={item.name + item.id}
                  onDoubleClick={() => handleDoubleClick(item)}
                  onContextMenu={(e) => handleRightClick(e, item, 'song')}
                  style={{ gridTemplateColumns: 'var(--gridTemplateColumns)', height: 'var(--height)' }}
                >
                  <div className="index text-gray-300 text-right pr-2">
                    {String(index + 1).padStart(2, 0)}
                  </div>
                  <div className="heart">
                    <DomHeart item={item} />
                  </div>
                  <div className="download">
                    <DomDownload />
                  </div>
                  <div className="name flex px-1">
                    <div className="text flex-auto w-0 truncate">
                      <span title={item.name}>
                        {item.name}
                      </span>
                      {
                        item.alia.length > 0
                        && (
                          <>
                            &nbsp;
                            <span
                              className="alia text-gray-400"
                              title={item.alia}
                            >
                              （
                              {item.alia}
                              ）
                            </span>
                          </>
                        )
                      }
                      {
                        item.tns?.length > 0
                        && (
                          <>
                            &nbsp;
                            <span
                              className="alia text-gray-400"
                              title={item.tns}
                            >
                              （
                              {item.tns}
                              ）
                            </span>
                          </>
                        )
                      }
                    </div>
                    <DomTags item={item} />
                  </div>
                  <div className="artist truncate px-1">
                    {item.ar.map((aritst, index) => (
                      <span key={aritst.name + aritst.id}>
                        {index > 0 && ' / '}
                        <Link
                          className="text-gray-500 hover:text-black"
                          to={`/artist/${aritst.id}`}
                        >
                          {aritst.name}
                        </Link>
                      </span>
                    ))}
                  </div>
                  <div className="album truncate px-1">
                    <Link
                      className="ui_text_black_hover"
                      to={`/playlist/album/${item.al.id}`}
                    >
                      {item.al.name}
                    </Link>
                  </div>
                  <div className="duration text-gray-400 truncate px-1">
                    {dayjs(item.dt).format('mm:ss')}
                  </div>
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </div>
  );
};
