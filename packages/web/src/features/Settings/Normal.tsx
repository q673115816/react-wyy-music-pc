import React, { ChangeEventHandler, memo, useState } from "react";
import Checkbox from "@/components/Checkbox";
import { setFont, settingSelector } from "@/modules/reducers/setting/slice";
import SettingRadio from "./components/SettingRadio";
import SettingCheck from "./components/SettingCheck";
import { setToast } from "@/modules/reducers/mask/slice";
import { useAppDispatch, useAppSelector } from "@/modules/hooks";
import { fonts } from "./config";
import Row from "./components/Row";

const Normal = () => {
  const dispatch = useAppDispatch();
  const { font } = useAppSelector(settingSelector);
  const handleSelect: ChangeEventHandler<HTMLSelectElement> = (e) => {
    dispatch(setFont(e.target.value));
    dispatch(setToast("设置已更新"));
  };

  const [关闭主面板, 设置关闭主面板] = useState("最小化到系统托盘");

  return (
    <>
      <div className="domSetting_block_title">常规</div>
      <Row
        title="字体选择"
        tips="如果字体显示不清晰，请在控制面板——字体设置中启用系统Clear Type设置"
      >
        <select
          className="domSetting_select"
          onChange={handleSelect}
          value={font}
        >
          {fonts.map(([value, name]) => (
            <option
              key={value}
              value={value}
              title={name}
              style={{ fontFamily: value }}
            >
              {name}
            </option>
          ))}
        </select>
      </Row>
      <Row title="启动">
        <SettingCheck name="启动" list={[["开机自动启动", false]]} />
      </Row>
      <Row title="关联">
        <SettingCheck
          name="关联"
          list={[["将网易云音乐设为默认播放器", false]]}
        />
      </Row>
      <Row title="动画">
        <SettingCheck
          name="动画"
          list={[["禁用动画效果", false, "减少部分资源占用"]]}
        />
      </Row>
      <Row title="GPU加速">
        <SettingCheck
          name="GPU加速"
          list={[
            [
              "禁用GPU加速",
              false,
              "关闭图形加速，如果单曲播放页或MV播放黑屏请勾选",
            ],
          ]}
        />
      </Row>
      <Row title="关闭主面板">
        <SettingRadio
          name="关闭主面板"
          list={["最小化到系统托盘", "退出云音乐"]}
          checked={关闭主面板}
          handle={设置关闭主面板}
        />
      </Row>
      <Row title="定时关机">
        <div className="domSetting_subBlock_content">
          <div className="item">
            <label className="domSetting_check flex items-center">
              <Checkbox />
              &nbsp;
              <span>开启定时关机</span>
            </label>
          </div>
          <div className="item">
            剩余关机时间
            <select className="domSetting_select">
              {Object.keys(Array(24).fill(0)).map((item) => (
                <option value={item} key={item}>
                  {item}
                </option>
              ))}
            </select>
            时
            <select className="domSetting_select">
              {Object.keys(Array(60).fill(0)).map((item) => (
                <option value={item} key={item}>
                  {item}
                </option>
              ))}
            </select>
            分
          </div>
        </div>
      </Row>
      <Row title="高清屏适配" tips="禁用后建议重启软件">
        <SettingCheck
          name="高清屏适配"
          list={[["禁用系统缩放比例", false, "减少部分资源占用"]]}
        />
      </Row>
    </>
  );
};

export default memo(Normal);
