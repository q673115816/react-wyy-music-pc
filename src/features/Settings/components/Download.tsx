import React from "react";
import DomRadio from "./Radio";

export default () => (
  <>
    <div className="domSetting_block_title">下载设置</div>
    <div className="domSetting_subBlock">
      <div className="domSetting_subBlock_title">音质选择：</div>
      <div className="flex items-center">
        <span className="mr-6">试听</span>
        <DomRadio
          row
          list={["标准", "较高", "极高", "无损音质"]}
          checked="较高"
          name="试听"
        />
      </div>
      <div className="flex items-center">
        <span className="mr-6">下载</span>
        <DomRadio
          row
          list={["标准", "较高", "极高", "无损音质"]}
          checked="较高"
          name="下载"
        />
      </div>
    </div>
    <div className="domSetting_subBlock">
      <div className="domSetting_subBlock_title">音乐命名格式：</div>
      <DomRadio
        list={["歌曲名", "歌手 - 歌曲名", "歌曲名 - 歌手"]}
        name="音乐命名格式"
        checked="歌手 - 歌曲名"
      />
    </div>
    <div className="domSetting_subBlock">
      <div className="domSetting_subBlock_title">文件智能分类：</div>
      <DomRadio
        list={["不分文件夹", "按歌手分文件夹", "按歌手\\专辑分文件夹"]}
        name="文件智能分类"
        checked="不分文件夹"
      />
    </div>
  </>
);
