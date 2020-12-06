import React from 'react';

export default () => (
  <div>
    <div className="domSetting_block_title">工具</div>
    <div className="domSetting_subBlock">
      <div className="domSetting_subBlock_title">
        Http代理：
      </div>
      <div className="domSetting_subBlock_content">
        <div className="item">
          <label className="domSetting_radio">
            <input name="agency" type="radio" checked />
            <i className="material-icons">radio_button_checked</i>
            <span>不使用代理</span>
          </label>
        </div>
        <div className="item">
          <label className="domSetting_radio">
            <input name="agency" type="radio" />
            <i className="material-icons">radio_button_checked</i>
            <span>使用IE代理设置</span>
          </label>
        </div>
        <div className="item">
          <label className="domSetting_radio">
            <input name="agency" type="radio" />
            <i className="material-icons">radio_button_checked</i>
            <span>自定义代理</span>
          </label>
        </div>
      </div>
    </div>
    <div className="domSetting_subBlock">
      <div className="domSetting_subBlock_title">音乐云盘设置：</div>
      <div className="domSetting_subBlock_content">
        <div className="item">
          <label className="domSetting_check">
            <input name="cloud" checked type="checkbox" />
            <i className="material-icons">check</i>
            <span>
              本地音乐添加到歌单后，讲文件上传至云盘，可多端同步歌单，播放下载

            </span>
          </label>
        </div>
      </div>
    </div>
  </div>
);
