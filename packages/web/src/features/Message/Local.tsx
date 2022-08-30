import React, { useCallback, useState, memo, FC } from "react";
import classNames from "classnames";

interface iProps {
  handleToggleVisibility: () => void;
}

const ChooseLocal: FC<iProps> = ({ handleToggleVisibility }) => (
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
  const [visibility, setVisibility] = useState(false);
  const handleToggleVisibility = useCallback(() => {
    setVisibility(!visibility);
  }, [visibility]);
  return (
    <div className="domManage">
      <div className="px-8 flex">
        <span className="text-sm">本地共有0首歌曲</span>
        <button
          type="button"
          className="ml-auto ui_link"
          onClick={handleToggleVisibility}
        >
          选择目录
        </button>
      </div>
      <div className="px-8">
        <div className="flex flex-col pt-32 items-center">
          <div className="text-xl font-bold">请添加本地音乐</div>
          <div className="text-base mt-2">
            升级本地音乐为高品质音乐并和好友分享！
          </div>
          <button
            type="button"
            className="mt-4 px-4 py-2 text-white rounded-full text-sm ui_theme_bg_color"
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
