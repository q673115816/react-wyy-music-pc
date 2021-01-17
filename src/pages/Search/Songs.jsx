import React, { useState } from 'react';
import classnames from 'classnames';
import { Link } from 'react-router-dom';
import dayjs from 'dayjs';
import {
  IconHeart,
  IconDownload,
  IconPlayerPlay,
} from '@tabler/icons';
import { useDispatch } from 'react-redux';
import { apiCommentMusic } from '@/api';
import { setContextMenuShow } from '@/redux/actions';

export default ({ songs = [] }) => {
  const dispatch = useDispatch();
  const [focus, setFocus] = useState();
  const handleRightClick = async (e, item) => {
    console.log(item);
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
    <table className="songs_list">
      <thead className="thead">
        <tr className="item ui_gray">
          <td className="index" />
          <td className="heart" />
          <td className="download" />
          <td className="name">音乐标题</td>
          <td className="artist">歌手</td>
          <td className="album">专辑</td>
          <td className="duration">时长</td>
          <td className="ui_gray">热度</td>
        </tr>
      </thead>
      <tbody className="tbody">
        {songs.map((item, index) => (
          <tr
            onMouseDown={() => setFocus(item.id)}
            className={classnames('item', { on: focus === item.id })}
            key={item.id}
            onContextMenu={(e) => handleRightClick(e, item)}
          >
            <td className="index">
              {String(index + 1).padStart(2, 0)}
            </td>
            <td className="heart">
              <button type="button">
                <IconHeart size={20} stroke={1} />
              </button>
            </td>
            <td className="download">
              <button type="button">
                <IconDownload size={20} stroke={1} />
              </button>
            </td>
            <td className="name" title={item.name}>
              <div className="inner">
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
            </td>
            <td
              className="artist text-overflow ui_gray hover"
              title={(item.ar.map((artist) => artist.name)).join(' / ')}
            >

              <div className="text-overflow">
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
            </td>
            <td
              className="album text-overflow ui_gray hover"
              title={item.al.name}
            >
              <Link to={`/playlist/album/${item.al.id}`}>
                {item.al.name}
              </Link>
            </td>
            <td className="duration ui_gray text-overflow">
              {dayjs(item.dt).format('mm:ss')}
            </td>
            <td className="pop">
              <div className="range" style={{ '--pop': item.pop }} />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
