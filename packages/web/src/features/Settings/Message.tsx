import React, { memo } from "react";
import SettingRadio from "./components/Radio";
import DomCheckbox from "./components/Check";

const Message = () => (
  <>
    <div className="domSetting_block_title">消息与隐私</div>
    <div className="domSetting_subBlock">
      <div className="domSetting_subBlock_title">
        私信：
        <span className="text-gray-400">接收私信提醒</span>
      </div>
      <SettingRadio
        list={["所有人", "我所关注的人"]}
        name="私信"
        checked="所有人"
      />
    </div>
    <div className="domSetting_subBlock">
      <div className="domSetting_subBlock_title">通知：</div>
      <DomCheckbox
        name="通知"
        list={[
          ["歌单被收藏", false],
          ["收到赞", false],
          ["新粉丝", false],
        ]}
      />
    </div>
    <div className="domSetting_subBlock">
      <div className="domSetting_subBlock_title">我的听歌排行：</div>
      <SettingRadio
        list={["所有人可见", "被关注的人可见", "仅自己可见"]}
        name="我的听歌排行"
        checked="所有人可见"
      />
    </div>
    <div className="domSetting_subBlock">
      <div className="domSetting_subBlock_title">黑名单设置：</div>
      <div className="domSetting_subBlock_content">
        <div className="item">
          我的黑名单
          <button />
        </div>
      </div>
    </div>
  </>
);

export default memo(Message);
