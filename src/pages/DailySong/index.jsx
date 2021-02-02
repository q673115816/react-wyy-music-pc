import React, { useEffect, useState } from 'react';
import {
  IconHeart,
  IconDownload,
  IconPlayerPlay,
  IconPlus,
  IconFolderPlus,
} from '@tabler/icons';
import classnames from 'classnames';
import { Link } from 'react-router-dom';
import dayjs from 'dayjs';
import { apiRecommendSongs, apiCommentMusic } from '@/api';
import { SymbolToday } from '@/components/Symbol';
import { setContextMenuShow } from '@/redux/actions';
import { useDispatch } from 'react-redux';
import './style.scss';

export default () => {
  const dispatch = useDispatch();
  const [data, setData] = useState([]);
  const [focus, setFocus] = useState('');
  const handleInit = async () => {
    try {
      const { data } = await apiRecommendSongs();
      setData(data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleRightClick = async (e, item, index, type) => {
    // console.log('handleRightClick', e);
    // console.log(item);
    setFocus(index);
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
      }));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    handleInit();
  }, []);

  return (
    <div className="domDailySong overflow-auto max-h-full flex-auto">
      <div className="domDailySong_header">
        <div className="section">
          <div className="date">
            <SymbolToday />
          </div>
          <div className="content">
            <div className="h1">每日歌曲推荐</div>
            <div className="text-gray-400 tips">
              根据你的音乐口味生成, 每天6:00更新
            </div>
          </div>
        </div>
        <div className="actions">
          <span className="ui_playbtn_group">
            <button type="button" className="ui_playbtn_group_left">
              <IconPlayerPlay size={16} className="fill-current" />
            &nbsp;
              播放全部
            </button>
            <i className="ui_playbtn_group_split" />
            <button type="button" className="ui_playbtn_group_right">
              <IconPlus size={18} />
            </button>
          </span>
          &nbsp;
          &nbsp;
          <button type="button" className="ui_btn">
            <IconFolderPlus size={22} stroke={1} />
            &nbsp;
            收藏全部
          </button>
        </div>
      </div>
      <div className="domDailySong_main">
        <div className="list">
          <div className="thead">
            <div className="item flex items-center">
              <div className="index" />
              <div className="heart" />
              <div className="download" />
              <div className="name ui_hray">音乐标题</div>
              <div className="artist ui_hray">歌手</div>
              <div className="album ui_hray">专辑</div>
              <div className="duration ui_hray">时长</div>
            </div>
          </div>
          <div className="tbody">
            {
              data.dailySongs?.map((item, index) => (
                <div
                  tabIndex="2"
                  onMouseDown={() => setFocus(index)}
                  className={classnames('item flex items-center hover:bg-gray-100 w-full focus:outline-none', { 'focus:bg-gray-200': index === focus, 'bg-gray-50': index % 2 === 0 })}
                  key={item.id}
                  onContextMenu={(e) => handleRightClick(e, item, index, 'song')}
                >
                  <div className="index text-gray-400">
                    {String(index + 1).padStart(2, 0)}
                  </div>
                  <div className="heart">
                    <button type="button" className="text-gray-400 hover">
                      <IconHeart size={20} stroke={1} />
                    </button>
                  </div>
                  <div className="download">
                    <button type="button" className="text-gray-400 hover">
                      <IconDownload size={20} stroke={1} />
                    </button>
                  </div>
                  <div className="name">
                    <div className="text truncate">
                      <span name="" title={item.name}>
                        {item.name}
                      </span>
                      {
                        item.alia.length > 0
                        && (
                          <>
                            &nbsp;
                            <span
                              className="alia text-gray-400"
                              title={item.alia.map((alia) => alia)}
                            >
                              （
                              {item.alia.map((alia) => alia)}
                              ）
                            </span>
                          </>
                        )
                      }
                    </div>
                    <div className="tags">
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
                  <div className="artist">
                    <div className="truncate">
                      {item.ar.map((aritst, index) => (
                        <span key={aritst.id}>
                          {index > 0 && ' / '}
                          <Link
                            className="text-gray-400 hover"
                            to={`/artist/${aritst.id}`}
                          >
                            {aritst.name}
                          </Link>
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="album">
                    <div className="truncate">
                      <Link
                        className="text-gray-400 hover"
                        to={`/playlist/album/${item.al.id}`}
                      >
                        {item.al.name}
                      </Link>
                    </div>
                  </div>
                  <div className="duration text-gray-400 truncate">
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
