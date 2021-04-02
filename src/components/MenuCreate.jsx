import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setAudioImmediate } from '@/reducers/audio/actions';
import {
  setContextMenuShow,
} from '@/reducers/mask/actions';
import {
  apiCommentMusic,
  apiCommentMV,
  apiCommentVideo,
} from '@/api';

const defaultSchema = [
  [
    '评论',
    '播放',
    '下一首播放',
  ],
  [
    '收藏到歌单',
    '分享',
    '复制链接',
    '不感兴趣',
    '下载',
  ],
];

const switchs = {
  song: {
    comment: apiCommentMusic,
  },
  mv: {
    comment: apiCommentMV,
  },
  video: {
    comment: apiCommentVideo,
  },
};

export default ({
  children, item = {}, type = 'song', schema = defaultSchema,
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
      const { total } = await switchs[type].comment({
        id: item.id,
      });
      dispatch(setContextMenuShow({
        contextMenuX: e.clientX,
        contextMenuY: e.clientY,
        contextMenuItem: item,
        contextMenuTotal: total,
        contextMenuType: type,
        contextMenuItemId: item.id,
        contextMenuSechma: schema,
      }));
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div
      onDoubleClick={type === 'song' ? () => handleDoubleClick(item) : undefined}
      onContextMenu={(e) => handleRightClick(e, item, type)}
    >
      {children}
    </div>
  );
};
