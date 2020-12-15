import React from 'react';

export default () => (
  <>
    <div className="domSetting_block_title">消息与隐私</div>
    <div className="domSetting_subBlock">
      <div className="domSetting_subBlock_title">
        私信：
        <span className="gary">接收私信提醒</span>
      </div>
      <div className="domSetting_subBlock_content">
        <div className="item">
          <label className="domSetting_radio">
            <input name="letter" type="radio" checked />
            <i className="material-icons">radio_button_checked</i>
            <span>所有人</span>
          </label>
        </div>
        <div className="item">
          <label className="domSetting_radio">
            <input name="letter" type="radio" />
            <i className="material-icons">radio_button_checked</i>
            <span>我所关注的人</span>
          </label>
        </div>
      </div>
    </div>
    <div className="domSetting_subBlock">
      <div className="domSetting_subBlock_title">
        通知：
      </div>
      <div className="domSetting_subBlock_content">
        <div className="item">
          <label className="domSetting_check">
            <input name="inform" type="radio" />
            <i className="material-icons">check</i>
            <span>歌单被收藏</span>
          </label>
        </div>
        <div className="item">
          <label className="domSetting_check">
            <input name="inform" type="radio" />
            <i className="material-icons">check</i>
            <span>收到赞</span>
          </label>
        </div>
        <div className="item">
          <label className="domSetting_check">
            <input name="inform" type="radio" />
            <i className="material-icons">check</i>
            <span>新粉丝</span>
          </label>
        </div>
      </div>
    </div>
    <div className="domSetting_subBlock">
      <div className="domSetting_subBlock_title">
        我的听歌排行：
      </div>
      <div className="domSetting_subBlock_content">
        <div className="item">
          <label className="domSetting_radio">
            <input name="myPlaylistSort" type="radio" checked />
            <i className="material-icons">radio_button_checked</i>
            <span>所有人可见</span>
          </label>
        </div>
        <div className="item">
          <label className="domSetting_radio">
            <input name="myPlaylistSort" type="radio" />
            <i className="material-icons">radio_button_checked</i>
            <span>被关注的人可见</span>
          </label>
        </div>
        <div className="item">
          <label className="domSetting_radio">
            <input name="myPlaylistSort" type="radio" />
            <i className="material-icons">radio_button_checked</i>
            <span>仅自己可见</span>
          </label>
        </div>
      </div>
    </div>
    <div className="domSetting_subBlock">
      <div className="domSetting_subBlock_title">黑名单设置：</div>
      <div className="domSetting_subBlock_content">
        <div className="item">
          我的黑名单
          <button />
        </div>
      </div>
    </div>
  </>
);
