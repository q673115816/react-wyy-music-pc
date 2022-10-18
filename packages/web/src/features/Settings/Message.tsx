import React, { memo } from "react";
import SettingRadio from "./components/RadioList";
import DomCheckbox from "./components/CheckList";
import Title from "./components/Title";

const Message = () => (
  <>
    <Title>消息与隐私</Title>
    <div className="mt-6">
      <div className="mb-2.5">
        私信：
        <span className="text-gray-400">接收私信提醒</span>
      </div>
      <SettingRadio
        list={["所有人", "我所关注的人"]}
        name="私信"
        checked="所有人"
      />
    </div>
    <div className="mt-6">
      <div className="mb-2.5">通知：</div>
      <DomCheckbox
        name="通知"
        list={[
          ["歌单被收藏", false],
          ["收到赞", false],
          ["新粉丝", false],
        ]}
      />
    </div>
    <div className="mt-6">
      <div className="mb-2.5">我的听歌排行：</div>
      <SettingRadio
        list={["所有人可见", "被关注的人可见", "仅自己可见"]}
        name="我的听歌排行"
        checked="所有人可见"
      />
    </div>
    <div className="mt-6">
      <div className="mb-2.5">黑名单设置：</div>
      <div className="mt-6_content">
        <div className="item">
          我的黑名单
          <button />
        </div>
      </div>
    </div>
  </>
);

export default memo(Message);
