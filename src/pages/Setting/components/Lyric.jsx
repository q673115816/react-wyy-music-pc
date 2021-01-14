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
            <i classsName="ico" />
            <span>桌面歌词</span>
          </label>
        </div>
        <div className="item">
          <label className="domSetting_radio">
            <input name="songDir" type="radio" />
            <i classsName="ico" />
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
            <i classsName="ico">✔</i>
            <span>启用歌词</span>
          </label>
        </div>
        <div className="item">
          <label className="domSetting_check">
            <input name="openTranslate" type="checkbox" checked />
            <i classsName="ico">✔</i>
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
            <i classsName="ico">✔</i>
            <span>启用总在最前</span>
          </label>
        </div>
      </div>
    </div>
  </>
);
