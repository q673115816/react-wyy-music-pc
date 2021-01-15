import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  IconMessage,
  IconArrowForward,
  IconPlayerPlay,
  IconFolderPlus,
  IconShare,
  IconLink,
  IconCircleX,
  IconDownload,
} from '@tabler/icons';
import { useSelector } from 'react-redux';

export default () => {
  const {
    contextMenuX,
    contextMenuY,
  } = useSelector(({ dialog }) => dialog);
  return (
    <ul id="contextmenu" className="ui_contextmenu" style={{ left: contextMenuX, top: contextMenuY }}>
      <li className="ui_contextmenu_item">
        <Link to="/comment" className="ui_contextmenu_btn">
          <i className="ico">
            <IconMessage size={22} stroke={1} />
          </i>
          查看评论
          (0)
        </Link>
      </li>
      <li className="ui_contextmenu_item">
        <button type="button" className="ui_contextmenu_btn">
          <i className="ico">
            <IconPlayerPlay size={22} stroke={1} />
          </i>
          播放(Enter)
        </button>
      </li>
      <li className="ui_contextmenu_item">
        <button type="button" className="ui_contextmenu_btn">
          <i className="ico">
            <IconArrowForward size={22} stroke={1} />
          </i>
          下一首播放
        </button>
      </li>
      <li className="hr" />
      <li className="ui_contextmenu_item">
        <span className="ui_contextmenu_btn">
          <i className="ico">
            <IconFolderPlus size={22} stroke={1} />
          </i>
          收藏到歌单(Ctrl+S)
          <i className="arrow" />
        </span>
        <ul className="ui_contextmenu sub">
          <li className="ui_contextmenu_item">
            <button type="button" className="ui_contextmenu_btn">创建新歌单</button>
          </li>
          <li className="hr" />
          <li className="ui_contextmenu_item">
            <button type="button" className="ui_contextmenu_btn">创建新歌单</button>
          </li>
          <li className="ui_contextmenu_item">
            <button type="button" className="ui_contextmenu_btn">创建新歌单</button>
          </li>
        </ul>
      </li>
      <li className="ui_contextmenu_item">
        <button type="button" className="ui_contextmenu_btn">
          <i className="ico">
            <IconShare size={22} stroke={1} />
          </i>
          分享.....
        </button>
      </li>
      <li className="ui_contextmenu_item">
        <button type="button" className="ui_contextmenu_btn">
          <i className="ico">
            <IconLink size={22} stroke={1} />
          </i>
          复制链接
        </button>
      </li>
      <li className="ui_contextmenu_item">
        <button type="button" className="ui_contextmenu_btn">
          <i className="ico">
            <IconCircleX size={22} stroke={1} />
          </i>
          不感兴趣
        </button>
      </li>
      <li className="ui_contextmenu_item ">
        <span className="ui_contextmenu_btn">
          <i className="ico">
            <IconDownload size={22} stroke={1} />
          </i>
          下载(L)
          <i className="arrow" />
        </span>
        <ul className="ui_contextmenu sub">
          <li className="ui_contextmenu_item">
            <button type="button" className="ui_contextmenu_btn">创建新歌单</button>
          </li>
          <li className="hr" />
          <li className="ui_contextmenu_item">
            <button type="button" className="ui_contextmenu_btn">创建新歌单</button>
          </li>
          <li className="ui_contextmenu_item">
            <button type="button" className="ui_contextmenu_btn">创建新歌单</button>
          </li>
        </ul>
      </li>
    </ul>
  );
};
