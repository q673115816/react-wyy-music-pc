import React, { useCallback, useState, memo } from "react";
import { useAppSelector, useAppDispatch } from "@/modules/hooks";
import classNames from "classnames";
import { setLocalCurrent } from "@/modules/reducers/local/slice";

const nav = ["歌曲", "歌手", "专辑", "文件夹"];

const ChooseLocal = ({ handleToggleVisibility }) => (
  <div hidden className="domManage_dialog">
    <button type="button" className="close" onClick={handleToggleVisibility}>
      ×
    </button>
    <div className="title">选择本地音乐文件夹</div>
    <div className="tips">将自动扫描您勾选的目录，文件增删实时同步。</div>
    <ul>
      <li>
        <span className="checkbox">
          <input type="text" />
          <i className="material-icons">checkbox</i>
        </span>
        暂时没法做
      </li>
    </ul>
    <div className="actions">
      <button
        type="button"
        className="ui_btn inline-flex items-center justify-center border px-3 h-8 rounded-full red"
      >
        确认
      </button>
      <button
        type="button"
        className="ui_btn inline-flex items-center justify-center border px-3 h-8 rounded-full"
      >
        添加文件
      </button>
    </div>
  </div>
);

const Local = () => {
  const dispatch = useAppDispatch();
  const [visibility, setVisibility] = useState(false);
  const { current } = useAppSelector(({ local }) => local);
  const handleToggleVisibility = useCallback(() => {
    setVisibility(!visibility);
  }, [visibility]);
  return (
    <div className="domManage">
      <div className="ui_header">
        <span className="h1">本地音乐</span>
        <span className="text-gray-400 text-base ml-5">共0首</span>
        <button
          type="button"
          className="ml-auto ui_link"
          onClick={handleToggleVisibility}
        >
          选择目录
        </button>
      </div>
      <div className="px-8">
        <div className="text-sm flex gap-4">
          {nav.map((item) => (
            <button
              onClick={() => dispatch(setLocalCurrent({ current: item }))}
              key={item}
              className={classNames(
                item === current && "ui_underline font-bold"
              )}
              type="button"
            >
              {item}
            </button>
          ))}
        </div>
        <div className="flex flex-col pt-32 items-center">
          <div className="text-2xl font-bold">请添加本地文件夹</div>
          <div className="text-lg mt-4">
            升级本地音乐为高品质音乐并和好友分享！
          </div>
          <button
            type="button"
            className="mt-4 px-4 py-2 text-white rounded-full text-base ui_theme_bg_color"
            onClick={handleToggleVisibility}
          >
            选择本地音乐文件夹
          </button>
        </div>
      </div>
    </div>
  );
};

export default memo(Local);
