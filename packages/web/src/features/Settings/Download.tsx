import React, { memo } from "react";
import Radio from "./components/RadioList";
import Title from "./components/Title";

const Download = () => (
  <>
    <Title>下载设置</Title>
    <div className="mt-6">
      <div className="mb-2.5">音质选择：</div>
      <div className="flex items-center">
        <span className="mr-6">试听</span>
        <Radio
          row
          list={["标准", "较高", "极高", "无损音质"]}
          checked="较高"
          name="试听"
        />
      </div>
      <div className="flex items-center">
        <span className="mr-6">下载</span>
        <Radio
          row
          list={["标准", "较高", "极高", "无损音质"]}
          checked="较高"
          name="下载"
        />
      </div>
    </div>
    <div className="mt-6">
      <div className="mb-2.5">音乐命名格式：</div>
      <Radio
        list={["歌曲名", "歌手 - 歌曲名", "歌曲名 - 歌手"]}
        name="音乐命名格式"
        checked="歌手 - 歌曲名"
      />
    </div>
    <div className="mt-6">
      <div className="mb-2.5">文件智能分类：</div>
      <Radio
        list={["不分文件夹", "按歌手分文件夹", "按歌手\\专辑分文件夹"]}
        name="文件智能分类"
        checked="不分文件夹"
      />
    </div>
  </>
);

export default memo(Download);
