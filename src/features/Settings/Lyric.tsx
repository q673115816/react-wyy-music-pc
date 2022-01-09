import React, { memo } from "react";
import SettingRadio from "./components/SettingRadio";
import DomCheckbox from "./components/SettingCheck";

const Lyric = () => (
  <>
    <div className="domSetting_block_title">歌词</div>
    <div className="domSetting_subBlock">
      <div className="domSetting_subBlock_title">类型：</div>
      <SettingRadio
        name="类型"
        list={["桌面歌词", "软件内词栏"]}
        checked="桌面歌词"
      />
    </div>
    <div className="domSetting_subBlock">
      <div className="domSetting_subBlock_title">启用：</div>
      <DomCheckbox
        list={[
          ["启用歌词", false],
          ["外文歌词显示翻译", true],
          ["外文歌词显示音译", true],
        ]}
        name="启用"
      />
    </div>
    <div className="domSetting_subBlock">
      <div className="domSetting_subBlock_title">总在最前：</div>
      <DomCheckbox list={[["启用总在最前", false]]} name="总在最前" />
    </div>
  </>
);

export default memo(Lyric);
