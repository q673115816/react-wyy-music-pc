import React, { useState } from 'react';
import { IconX } from '@tabler/icons';
import {
  Symbolwyy,
  Symbolsx,
  Symbolwx,
  Symbolqq,
  Symbolqz,
  Symbolwb,
  Symbollj,
} from '@/components/Symbol';
import './style.scss';

export default () => {
  const [visibilty, setVisibilty] = useState(true);
  return (
    <div
      className=" ui_dialog"
      id="dialogShare"
      style={{ display: visibilty ? null : 'none' }}
    >
      <button
        type="button"
        className="ui_dialog_close close"
        onClick={() => setVisibilty(false)}
      >
        <IconX stroke={1.5} />
      </button>
      <div className="ui_dialog_header flex-center">
        <div className="ui_dialog_title">分享</div>
      </div>
      <div className="ui_dialog_main">
        <div className="list">
          <button type="button" className="item">
            <i className="ico">
              <Symbolwyy active />
            </i>
            分享到云音乐动态

          </button>
          <button type="button" className="item">
            <i className="ico">
              <Symbolsx active />
            </i>
            私信分享

          </button>
          <button type="button" className="item">
            <i className="ico">
              <Symbolwx active />
            </i>
            微信好友
          </button>
          <a href="#" className="item">
            <i className="ico">
              <Symbolqq active />
            </i>
            QQ好友
          </a>
          <a href="#" className="item">
            <i className="ico">
              <Symbolqz active />
            </i>
            QQ空间

          </a>
          <a href="#" className="item">
            <i className="ico">
              <Symbolwb active />
            </i>

            微博
          </a>
          <button type="button" className="item">
            <i className="ico">
              <Symbollj active />
            </i>
            复制链接

          </button>
        </div>
      </div>
    </div>
  );
};
