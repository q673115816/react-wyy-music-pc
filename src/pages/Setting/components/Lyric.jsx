import React from 'react';

export default () => (
  <>
    <div className="domSetting_block_title">歌词</div>
    <div className="domSetting_subBlock">
      <div className="domSetting_subBlock_title">
        类型：
      </div>
      <div className="domSetting_subBlock_content">
        <div className="item">
          <label className="domSetting_radio">
            <input name="songDir" type="radio" checked />
            <i className="material-icons">radio_button_checked</i>
            <span>桌面歌词</span>
          </label>
        </div>
        <div className="item">
          <label className="domSetting_radio">
            <input name="songDir" type="radio" />
            <i className="material-icons">radio_button_checked</i>
            <span>软件内词栏</span>
          </label>
        </div>
      </div>
    </div>
    <div className="domSetting_subBlock">
      <div className="domSetting_subBlock_title">
        启用：
      </div>
      <div className="domSetting_subBlock_content">
        <div className="item">
          <label className="domSetting_check">
            <input name="openLyric" type="checkbox" />
            <i className="material-icons">check</i>
            <span>启用歌词</span>
          </label>
        </div>
        <div className="item">
          <label className="domSetting_check">
            <input name="openTranslate" type="checkbox" checked />
            <i className="material-icons">check</i>
            <span>外文歌词显示翻译</span>
          </label>
        </div>
      </div>
    </div>
    <div className="domSetting_subBlock">
      <div className="domSetting_subBlock_title">
        总在最前：
      </div>
      <div className="domSetting_subBlock_content">
        <div className="item">
          <label className="domSetting_check">
            <input name="alwaysTop" type="checkbox" />
            <i className="material-icons">check</i>
            <span>启用总在最前</span>
          </label>
        </div>
      </div>
    </div>
  </>
);
