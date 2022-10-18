import React, { memo } from "react";
import { IconBrandApple } from "@tabler/icons";
import SettingRadio from "./components/RadioList";
import Title from "./components/Title";

const About = () => {
  const argument = [
    ["网易云音乐官网", "https://music.163.com"],
    ["网易云音乐社区管理细则", "https://music.163.com"],
    ["服务条款", "https://music.163.com"],
    ["隐私政策", "https://music.163.com"],
    ["儿童隐私政策", "https://music.163.com"],
  ];
  return (
    <>
      <Title>关于网易云音乐</Title>
      <br />
      <div>
        当前版本
        <button type="button" className="border px-3 h-6 rounded-full ml-6">
          意见反馈
        </button>
      </div>
      <br />
      <div className="py-4 flex gap-2">
        {argument.map(([name, href]) => (
          <a
            key={name}
            href={href}
            className="underline text-gray-600 hover:text-black"
          >
            {`《${name}》`}
          </a>
        ))}
      </div>
    </>
  );
};

export default memo(About);
