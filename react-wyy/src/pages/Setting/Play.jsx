import React from 'react';

export default () => (
  <div>
    <div className="domSetting_block_title">播放</div>

    <div className="domSetting_subBlock">
      <div className="domSetting_subBlock_title">
        播放列表：
        <span className="gary">单曲、节目</span>
      </div>
      <div className="domSetting_subBlock_content">
        <div className="item">
          <label className="domSetting_radio">
            <input name="playAction" type="radio" checked />
            <i className="material-icons">radio_button_checked</i>
            <span>双击播放单曲时，用当前单曲所在的歌曲列表替换播放列表（节目同理）</span>
          </label>
        </div>
        <div className="item">
          <label className="domSetting_radio">
            <input name="playAction" type="radio" />
            <i className="material-icons">radio_button_checked</i>
            <span>双击播放单曲时，仅吧当前单曲添加到播放列表（节目同理）</span>
          </label>
        </div>
      </div>
    </div>

    <div className="domSetting_subBlock">
      <div className="domSetting_subBlock_title">自动播放：</div>
      <div className="domSetting_subBlock_content">
        <div className="item">
          <label className="domSetting_check">
            <input name="autoOpen" type="checkbox" />
            <i className="material-icons">check</i>
            <span>
              程序启动是自动播放
            </span>
          </label>
        </div>
      </div>
    </div>
    <div className="domSetting_subBlock">
      <div className="domSetting_subBlock_title">播放进度：</div>
      <div className="domSetting_subBlock_content">
        <div className="item">
          <label className="domSetting_check">
            <input name="autoOpen" type="checkbox" />
            <i className="material-icons">check</i>
            <span>
              将程序启动时记住上一次播放进度
            </span>
          </label>
        </div>
      </div>
    </div>

    <div className="domSetting_subBlock">
      <div className="domSetting_subBlock_title">效果：</div>
      <div className="domSetting_subBlock_content">
        <div className="item">
          <label className="domSetting_check">
            <input name="autoOpen" type="checkbox" />
            <i className="material-icons">check</i>
            <span>
              开启音乐淡入淡出
              <span className="gary">（仅支持输出设备DirectSound）</span>
            </span>
          </label>
        </div>
      </div>
    </div>
    <div className="domSetting_subBlock">
      <div className="domSetting_subBlock_title">
        输出设备：
        <span className="gray">播放下一首歌时生效</span>
      </div>
      <div className="domSetting_subBlock_content">
        <select className="domSetting_select">
          {
            [
              'directSound主声音驱动程序',
              'directSound扬声器(VIA HD Audio(Win 10))',
              'directSoundSPDIF Interface (TX0)(VIA HD Audio(Win 10))',
              'WaveOut:Microsoft 声音映射器',
              'WaveOut:扬声器(VIA HD Audio(Win 10))',
              'WaveOut:SPDIF Interface (TX0)(VIA HD A',
              'WaveOut:扬声器(VIA HD Audio(Win 10))',
              'WaveOut:SPDIF Interface (TX0)(VIA HD Audio(Win 10))',
            ].map((item) => (
              <option value={item}>{item}</option>
            ))
          }
        </select>
      </div>
    </div>
  </div>
);
