import React, { ChangeEventHandler, memo, useState } from "react";
import CompoenntCheckbox from "@/components/Checkbox";
import { setFont } from "@/reducers/setting/slice";
import SettingRadio from "./components/SettingRadio";
import SettingCheck from "./components/SettingCheck";
import { setToast } from "@/reducers/mask/slice";
import { useAppDispatch, useAppSelector } from "@/reducers/hooks";

const fonts = [
  ["inherit", "默认"],
  ["仿宋", "仿宋"],
  ["宋体", "宋体"],
  ["微软雅黑", "微软雅黑"],
  ["微软雅黑 Light", "微软雅黑 Light"],
  ["新宋体", "新宋体"],
  ["方正兰亭超细黑简体", "方正兰亭超细黑简体"],
  ["方正粗黑宋简体", "方正粗黑宋简体"],
  ["楷体", "楷体"],
  ["等线", "等线"],
  ["等线 Light", "等线 Light"],
  ["黑体", "黑体"],
];

const Normal = () => {
  const dispatch = useAppDispatch();
  const { font } = useAppSelector(({ setting }) => setting);
  const handleSelect: ChangeEventHandler<HTMLSelectElement> = (e) => {
    dispatch(setFont(e.target.value));
    dispatch(setToast("设置已更新"));
  };

  const [关闭主面板, 设置关闭主面板] = useState("最小化到系统托盘");

  return (
    <>
      <div className="domSetting_block_title">常规</div>
      <div className="domSetting_subBlock">
        <div className="domSetting_subBlock_title">
          字体选择：
          <span className="text-gray-400">
            如果字体显示不清晰，请在控制面板——字体设置中启用系统Clear Type设置
          </span>
        </div>
        <div className="domSetting_subBlock_content">
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
        </div>
      </div>
      <div className="domSetting_subBlock">
        <div className="domSetting_subBlock_title">启动：</div>
        <SettingCheck name="启动" list={[["开机自动启动", false]]} />
      </div>
      <div className="domSetting_subBlock">
        <div className="domSetting_subBlock_title">关联：</div>
        <SettingCheck
          name="关联"
          list={[["将网易云音乐设为默认播放器", false]]}
        />
      </div>
      <div className="domSetting_subBlock">
        <div className="domSetting_subBlock_title">动画：</div>
        <SettingCheck
          name="动画"
          list={[["禁用动画效果", false, "减少部分资源占用"]]}
        />
      </div>
      <div className="domSetting_subBlock">
        <div className="domSetting_subBlock_title">GPU加速：</div>
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
      </div>
      <div className="domSetting_subBlock">
        <div className="domSetting_subBlock_title">关闭主面板：</div>
        <SettingRadio
          name="关闭主面板"
          list={["最小化到系统托盘", "退出云音乐"]}
          checked={关闭主面板}
          handle={设置关闭主面板}
        />
      </div>
      <div className="domSetting_subBlock">
        <div className="domSetting_subBlock_title">定时关机：</div>
        <div className="domSetting_subBlock_content">
          <div className="item">
            <label className="domSetting_check flex items-center">
              <CompoenntCheckbox />
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
      </div>

      <div className="domSetting_subBlock">
        <div className="domSetting_subBlock_title">
          高清屏适配：
          <span className="text-gray-400">禁用后建议重启软件</span>
        </div>
        <SettingCheck
          name="高清屏适配"
          list={[["禁用系统缩放比例", false, "减少部分资源占用"]]}
        />
      </div>
    </>
  );
};

export default memo(Normal);
