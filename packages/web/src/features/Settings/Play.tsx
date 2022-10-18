import React, { memo, useState } from "react";
import SettingRadio from "./components/RadioList";
import SettingCheck from "./components/CheckList";
import Title from "./components/Title";
import Select from "./components/Select";

const Play = () => {
  const [输出设备, 设置输出设备] = useState("directSound主声音驱动程序");
  const output = [
    "directSound主声音驱动程序",
    "directSound扬声器(VIA HD Audio(Win 10))",
    "directSoundSPDIF Interface (TX0)(VIA HD Audio(Win 10))",
    "WaveOut:Microsoft 声音映射器",
    "WaveOut:扬声器(VIA HD Audio(Win 10))",
    "WaveOut:SPDIF Interface (TX0)(VIA HD A",
    "Wasapi:扬声器(VIA HD Audio(Win 10))",
    "Wasapi:SPDIF Interface (TX0)(VIA HD Audio(Win 10))",
  ];
  return (
    <>
      <Title>播放</Title>

      <div className="mt-6">
        <div className="mb-2.5">
          播放列表：
          <span className="ui_gary text-gray-400">单曲、节目</span>
        </div>
        <SettingRadio
          list={[
            "双击播放单曲时，用当前单曲所在的歌曲列表替换播放列表（节目同理）",
            "双击播放单曲时，仅把当前单曲添加到播放列表（节目同理）",
          ]}
          name="播放列表"
          checked="双击播放单曲时，用当前单曲所在的歌曲列表替换播放列表（节目同理）"
        />
      </div>
      <div className="mt-6">
        <div className="mb-2.5">自动播放：</div>
        <SettingCheck name="自动播放" list={[["程序启动是自动播放", false]]} />
      </div>
      <div className="mt-6">
        <div className="mb-2.5">播放进度：</div>
        <SettingCheck
          name="播放进度"
          list={[["将程序启动时记住上一次播放进度", false]]}
        />
      </div>

      <div className="mt-6">
        <div className="mb-2.5">效果：</div>
        <SettingCheck
          name="效果"
          list={[["开启音乐淡入淡出", false, "仅支持输出设备DirectSound"]]}
        />
      </div>
      <div className="mt-6">
        <div className="mb-2.5">
          输出设备：
          <span className="text-gray-400">播放下一首歌时生效</span>
        </div>
        <div className="mt-6_content">
          <Select
            value={输出设备}
            onChange={(e) => 设置输出设备(e.target.value)}
          >
            {output.map((item) => (
              <option value={item} key={item}>
                {item}
              </option>
            ))}
          </Select>
        </div>
      </div>
    </>
  );
};

export default memo(Play);
