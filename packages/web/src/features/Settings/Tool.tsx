import React, { memo } from "react";
import RadioList from "./components/RadioList";
import CheckList from "./components/CheckList";
import Title from "./components/Title";
import Row from "./components/Row";

const Tool = () => (
  <div className={`flex flex-col gap-6`}>
    <Title>工具</Title>
    <Row title={`Http代理`}>
      <RadioList
        name="Http代理"
        list={["不使用代理", "使用IE代理设置", "自定义代理"]}
        checked="不使用代理"
      />
    </Row>
    <Row title="音乐云盘设置">
      <CheckList
        list={[
          [
            "本地音乐添加到歌单后，讲文件上传至云盘，可多端同步歌单，播放下载",
            false,
          ],
        ]}
        name="音乐云盘设置"
      />
    </Row>
  </div>
);

export default memo(Tool);
