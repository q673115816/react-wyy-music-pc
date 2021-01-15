import React, { useEffect, useState } from 'react';
import {
  IconHeart,
  IconDownload,
  IconPlayerPlay,
  IconPlus,
} from '@tabler/icons';
import classnames from 'classnames';
import { Link } from 'react-router-dom';
import dayjs from 'dayjs';
import { apiRecommendSongs } from '@/api';
import { SymbolToday } from '@/components/Symbol';
import { setContextMenuShow } from '@/redux/actions';
import './style.scss';
import { useDispatch } from 'react-redux';

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

  const handleRightClick = (e, item) => {
    console.log(e);
    dispatch(setContextMenuShow({
      contextMenuX: e.clientX,
      contextMenuY: e.clientY,
    }));
  };

  useEffect(() => {
    handleInit();
  }, []);

  return (
    <div className="domDailySong overflow-auto">
      <div className="domDailySong_header">
        <div className="section">
          <div className="date">
            <SymbolToday />
          </div>
          <div className="content">
            <div className="h1">每日歌曲推荐</div>
            <div className="ui_gray tips">根据你的音乐口味生成, 每天6:00更新</div>
          </div>
        </div>
        <div className="actions">
          <span className="ui_btn red">
            <button type="button" className="">播放全部</button>
            <button type="button" className="">
              <IconPlus size={12} />
            </button>
          </span>
          &nbsp;
          &nbsp;
          <button type="button" className="ui_btn">收藏全部</button>
        </div>
      </div>
      <div className="domDailySong_main">
        <div className="table">
          <div className="thead">
            <div className="item">
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
                <button
                  onMouseDown={() => setFocus(index)}
                  type="button"
                  className={classnames('item', { on: index === focus })}
                  key={item.id}
                  onContextMenu={(e) => handleRightClick(e, item)}
                >
                  <div className="index ui_gray">
                    {String(index + 1).padStart(2, 0)}
                  </div>
                  <div className="heart ui_gray hover">
                    <IconHeart size={20} stroke={1} />
                  </div>
                  <div className="download ui_gray hover">
                    <IconDownload size={20} stroke={1} />
                  </div>
                  <div className="name">
                    <div className="text text-overflow">
                      <span name="" title={item.name}>
                        {item.name}
                      </span>
                      {
                        item.alia.length > 0
                        && (
                          <>
                            &nbsp;
                            <span
                              className="alia ui_gray"
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
                            <IconPlayerPlay size={8} fill="currentColor" />
                          </Link>
                        )}
                    </div>
                  </div>
                  <div className="artist">
                    <div className="text-overflow">
                      {item.ar.map((aritst, index) => {
                        if (index > 0) {
                          return (
                            <>
                              <span>&nbsp;/&nbsp;</span>
                              <Link
                                className="ui_gray hover"
                                to={`/artist/${aritst.id}`}
                              >
                                {aritst.name}
                              </Link>
                            </>
                          );
                        }
                        return (
                          <Link
                            className="ui_gray hover"
                            to={`/artist/${aritst.id}`}
                          >
                            {aritst.name}
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                  <div className="album">
                    <div className="text-overflow">
                      <Link
                        className="ui_gray hover"
                        to={`/playlist/album/${item.al.id}`}
                      >
                        {item.al.name}
                      </Link>
                    </div>
                  </div>
                  <div className="duration ui_gray text-overflow">
                    {dayjs(item.dt).format('mm:ss')}
                  </div>
                </button>
              ))
            }
          </div>
        </div>
      </div>
    </div>
  );
};
