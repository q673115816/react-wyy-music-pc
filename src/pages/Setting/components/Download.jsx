import React from 'react';

export default () => (
  <>
    <div className="domSetting_block_title">下载设置</div>
    <div className="domSetting_subBlock">
      <div className="domSetting_subBlock_title">
        音质选择：
      </div>
      <div className="domSetting_subBlock_content">
        <div className="item">
          <span>试听</span>
          &nbsp;
          &nbsp;
          &nbsp;
          <label className="domSetting_radio">
            <input name="audition" checked type="radio" />
            <i classsName="ico" />
            <span>标准</span>
          </label>
          &nbsp;
          &nbsp;
          &nbsp;
          <label className="domSetting_radio">
            <input name="audition" type="radio" />
            <i classsName="ico" />
            <span>较高</span>
          </label>
          &nbsp;
          &nbsp;
          &nbsp;
          <label className="domSetting_radio">
            <input name="audition" type="radio" />
            <i classsName="ico" />
            <span>极高</span>
          </label>
          &nbsp;
          &nbsp;
          &nbsp;
          <label className="domSetting_radio">
            <input name="audition" type="radio" />
            <i classsName="ico" />
            <span>无损音质</span>
          </label>
        </div>
        <div className="item">
          <span>下载</span>
          &nbsp;
          &nbsp;
          &nbsp;
          <label className="domSetting_radio">
            <input name="download" type="radio" />
            <i classsName="ico" />
            <span>标准</span>
          </label>
          &nbsp;
          &nbsp;
          &nbsp;
          <label className="domSetting_radio">
            <input name="download" checked type="radio" />
            <i classsName="ico" />
            <span>较高</span>
          </label>
          &nbsp;
          &nbsp;
          &nbsp;
          <label className="domSetting_radio">
            <input name="download" type="radio" />
            <i classsName="ico" />
            <span>极高</span>
          </label>
          &nbsp;
          &nbsp;
          &nbsp;
          <label className="domSetting_radio">
            <input name="download" type="radio" />
            <i classsName="ico" />
            <span>无损音质</span>
          </label>
        </div>
      </div>
    </div>
    <div className="domSetting_subBlock">
      <div className="domSetting_subBlock_title">
        音乐命名格式：
      </div>
      <div className="domSetting_subBlock_content">
        <div className="item">
          <label className="domSetting_radio">
            <input name="songName" type="radio" />
            <i classsName="ico" />
            <span>歌曲名</span>
          </label>
        </div>
        <div className="item">
          <label className="domSetting_radio">
            <input name="songName" type="radio" checked />
            <i classsName="ico" />
            <span>歌手 - 歌曲名</span>
          </label>
        </div>
        <div className="item">
          <label className="domSetting_radio">
            <input name="songName" type="radio" />
            <i classsName="ico" />
            <span>歌曲名 - 歌手</span>
          </label>
        </div>
      </div>
    </div>
    <div className="domSetting_subBlock">
      <div className="domSetting_subBlock_title">
        文件智能分类：
      </div>
      <div className="domSetting_subBlock_content">
        <div className="item">
          <label className="domSetting_radio">
            <input name="songDir" type="radio" checked />
            <i classsName="ico" />
            <span>不分文件夹</span>
          </label>
        </div>
        <div className="item">
          <label className="domSetting_radio">
            <input name="songDir" type="radio" />
            <i classsName="ico" />
            <span>按歌手分文件夹</span>
          </label>
        </div>
        <div className="item">
          <label className="domSetting_radio">
            <input name="songDir" type="radio" />
            <i classsName="ico" />
            <span>按歌手\专辑分文件夹</span>
          </label>
        </div>
      </div>
    </div>
  </>
);
