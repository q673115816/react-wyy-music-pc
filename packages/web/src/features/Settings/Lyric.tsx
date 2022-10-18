import React, { memo } from "react";
import Radio from "./components/RadioList";
import Check from "./components/CheckList";
import Title from "./components/Title";

const Lyric = () => (
  <>
    <Title>歌词</Title>
    <div className="mt-6">
      <div className="mb-2.5">类型：</div>
      <Radio name="类型" list={["桌面歌词", "软件内词栏"]} checked="桌面歌词" />
    </div>
    <div className="mt-6">
      <div className="mb-2.5">启用：</div>
      <Check
        list={[
          ["启用歌词", false],
          ["外文歌词显示翻译", true],
          ["外文歌词显示音译", true],
        ]}
        name="启用"
      />
    </div>
    <div className="mt-6">
      <div className="mb-2.5">总在最前：</div>
      <Check list={[["启用总在最前", false]]} name="总在最前" />
    </div>
    <div className="mt-6">
      <div className="mb-2.5">预览：</div>
    </div>
  </>
);

export default memo(Lyric);
