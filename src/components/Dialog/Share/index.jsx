import React, { useState } from 'react';
import { IconX } from '@tabler/icons';
import { useDispatch, useSelector } from 'react-redux';
import {
  SymbolWYY,
  SymbolSX,
  SymbolWX,
  SymbolQQ,
  SymbolQZ,
  SymbolWB,
  SymbolLJ,
} from '@/components/Symbol';
import { setDialogReset, setDialogShareWXShow } from '@/redux/actions';
import HOCDialog from '../Dialog';
import './style.scss';

const types = {
  songs: '单曲',
};

const Share = () => {
  const dispatch = useDispatch();
  // const [visibilty, setVisibilty] = useState(false);
  const { contextMenuType, contextMenuItemId, contextMenuItem } = useSelector(({ mask }) => mask);
  const { profile } = useSelector(({ account }) => account);
  const { baseUrl } = useSelector(({ common }) => common);
  const ShareUrl = `${baseUrl}/${contextMenuType}?id=${contextMenuItemId}&userId=${profile.userId}`;
  const handleShareWX = () => {
    // dispatch(setDialogReset());
    dispatch(setDialogShareWXShow());
  };

  const handleCopyLink = async () => {
    const data = new DataTransfer();
    data.items.add('text/plain', ShareUrl);
    await navigator.clipboard.writeText(ShareUrl);
    alert('链接复制成功');
  };
  return (
    <div className="list divide-y divide-fuchsia-300">
      <div>
        <button type="button" className="item flex items-center">
          <i className="ico">
            <SymbolWYY active />
          </i>
          分享到云音乐动态
        </button>
      </div>
      <div>
        <button type="button" className="item flex items-center">
          <i className="ico">
            <SymbolSX active />
          </i>
          私信分享
        </button>
      </div>
      <div>
        <button type="button" className="item flex items-center" onClick={handleShareWX}>
          <i className="ico">
            <SymbolWX active />
          </i>
          微信好友
        </button>
      </div>
      <div>
        <a target="_block" href={`https://connect.qq.com/widget/shareqq/index.html?site=网易云音乐&url=${ShareUrl}&from=qq&title=分享${types[contextMenuType]}：${contextMenuItem.name}&summary=${contextMenuItem.ar.reduce((prev, curr) => `${prev}/${curr.name}`, '').slice(1)}&pics=${contextMenuItem.al.picUrl}?imageView&thumbnail=120y120`} className="item flex items-center">
          <i className="ico">
            <SymbolQQ active />
          </i>
          QQ好友
        </a>
      </div>
      <div>
        <a href="#" className="item flex items-center">
          <i className="ico">
            <SymbolQZ active />
          </i>
          QQ空间
        </a>
      </div>
      <div>
        <a href="#" className="item flex items-center">
          <i className="ico">
            <SymbolWB active />
          </i>
          微博
        </a>
      </div>
      <div>
        <button
          onClick={handleCopyLink}
          type="button"
          className="item flex items-center"
        >
          <i className="ico">
            <SymbolLJ active />
          </i>
          复制链接
        </button>
      </div>
    </div>
  );
};

export default HOCDialog(Share, 'dialogShare', '分享');
