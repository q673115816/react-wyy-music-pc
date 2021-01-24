import React from 'react';
import DomRadio from './Radio';
import DomCheckbox from './Checkbox';

export default () => (
  <>
    <div className="domSetting_block_title">播放</div>

    <div className="domSetting_subBlock">
      <div className="domSetting_subBlock_title">
        播放列表：
        <span className="ui_gary text-gray-400">单曲、节目</span>
      </div>
      <DomRadio
        list={['双击播放单曲时，用当前单曲所在的歌曲列表替换播放列表（节目同理）',
          '双击播放单曲时，仅吧当前单曲添加到播放列表（节目同理）']}
        name="播放列表"
        checked="双击播放单曲时，用当前单曲所在的歌曲列表替换播放列表（节目同理）"
      />
    </div>
    <div className="domSetting_subBlock">
      <div className="domSetting_subBlock_title">自动播放：</div>
      <DomCheckbox name="自动播放" list={[['程序启动是自动播放', false]]} />
    </div>
    <div className="domSetting_subBlock">
      <div className="domSetting_subBlock_title">播放进度：</div>
      <DomCheckbox name="播放进度" list={[['将程序启动时记住上一次播放进度', false]]} />
    </div>

    <div className="domSetting_subBlock">
      <div className="domSetting_subBlock_title">效果：</div>
      <DomCheckbox name="效果" list={[['开启音乐淡入淡出', false, '仅支持输出设备DirectSound']]} />
    </div>
    <div className="domSetting_subBlock">
      <div className="domSetting_subBlock_title">
        输出设备：
        <span className="text-gray-400">播放下一首歌时生效</span>
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
              'Wasapi:扬声器(VIA HD Audio(Win 10))',
              'Wasapi:SPDIF Interface (TX0)(VIA HD Audio(Win 10))',
            ].map((item) => (
              <option value={item} key={item}>{item}</option>
            ))
          }
        </select>
      </div>
    </div>
  </>
);
