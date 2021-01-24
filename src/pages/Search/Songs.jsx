import React, { useState } from 'react';
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
    <Link to={`/artist/${item.id}`} className="item">
      <div className="cover">
        <img className="ui_coverimg" src={item.picUrl} alt="" />
      </div>
      <div className="content">
        <div className="name">
          歌手：
          {item.name}
        </div>
      </div>
      <div className="ico">
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

export default ({ songs = [], multimatch }) => {
  // console.log('entry song');
  const dispatch = useDispatch();
  const [focus, setFocus] = useState();
  const handleRightClick = async (e, item) => {
    // console.log(item);
    setFocus(item.id);
    try {
      const { total } = await apiCommentMusic({
        id: item.id,
      });
      dispatch(setContextMenuShow({
        contextMenuX: e.clientX,
        contextMenuY: e.clientY,
        contextMenuItem: item,
        contextMenuTotal: total,
      }));
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      {
        multimatch.orders?.length > 0
        && (
          <div className="domSearch_multimatch">
            <div className="title">最佳匹配</div>
            <div className="list">
              {multimatch.orders?.map((order) => {
                const Item = Build[order];
                return (
                  multimatch[order]
                    .map((item) => <Item item={item} key={order} />)
                );
              })}
            </div>
          </div>
        )
}
      <div className="songs_list">
        <div className="thead">
          <div className="item text-gray-400">
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
              onMouseDown={() => setFocus(item.id)}
              className={classnames('item', { on: focus === item.id })}
              key={item.id}
              onContextMenu={(e) => handleRightClick(e, item)}
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
              <div className="name" title={item.name}>
                <div className="inner">
                  <div className="text truncate">
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
                className="album truncate text-gray-400 hover"
                title={item.al.name}
              >
                <Link to={`/playlist/album/${item.al.id}`}>
                  {item.al.name}
                </Link>
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
};
