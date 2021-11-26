import React from "react";
import DomRadio from "./Radio";
import DomCheckbox from "./Checkbox";

export default () => (
  <>
    <div className="domSetting_block_title">歌词</div>
    <div className="domSetting_subBlock">
      <div className="domSetting_subBlock_title">类型：</div>
      <DomRadio
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
