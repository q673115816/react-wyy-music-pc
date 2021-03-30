import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setAudioImmediate } from '@/reducers/audio/actions';
import {
  setContextMenuShow,
} from '@/reducers/mask/actions';
import {
  apiCommentMusic,
} from '@/api';

const defaultSechma = [
  '评论',
  '播放',
  '下一首播放',
  'divide',
  '收藏到歌单',
  '分享',
  '复制链接',
  '不感兴趣',
  '下载',
];

export default ({
  children, item = {}, type = 'song', sechma = [],
}) => {
  const dispatch = useDispatch();
  const [state, setstate] = useState();
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
        contextMenuSechma: sechma,
      }));
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div
      onDoubleClick={() => handleDoubleClick(item)}
      onContextMenu={(e) => handleRightClick(e, item, type)}
    >
      {children}
    </div>
  );
};
