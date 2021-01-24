import React from 'react';
import DomRadio from './Radio';
import DomCheckbox from './Checkbox';

export default () => (
  <>
    <div className="domSetting_block_title">工具</div>
    <div className="domSetting_subBlock">
      <div className="domSetting_subBlock_title">
        Http代理：
      </div>
      <DomRadio name="Http代理" list={['不使用代理', '使用IE代理设置', '自定义代理']} checked="不使用代理" />
    </div>
    <div className="domSetting_subBlock">
      <div className="domSetting_subBlock_title">音乐云盘设置：</div>
      <DomCheckbox list={[['本地音乐添加到歌单后，讲文件上传至云盘，可多端同步歌单，播放下载', false]]} name="音乐云盘设置" />
    </div>
  </>
);
