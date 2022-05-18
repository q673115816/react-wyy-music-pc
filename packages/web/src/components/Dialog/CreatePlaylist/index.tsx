import React, { memo, useRef, useState } from "react";
import { apiPlaylistCreate } from "@/api";
import classNames from "classnames";
import DomCheckbox from "@/components/CheckBox";
import HOCDialog from "../Dialog/Dialog";
import "./style.scss";
import { useAppSelector } from "@/modules/hooks";

const CreatePlayList = () => {
  const { dialogCreatePlaylistVisibility } = useAppSelector(({ mask }) => mask);
  const [name, setName] = useState("");
  const privacy = useRef();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await apiPlaylistCreate({
        name,
        privacy: privacy.current.value ? 10 : null,
      });
    } catch (error) {
      console.log(error);
    }
    return false;
    // dispatch(setDialogReset()
  };
  if (!dialogCreatePlaylistVisibility) return null;
  return (
    <HOCDialog id="dialogCreatePlaylist" title="新建歌单">
      <form className="content px-4 pb-8" onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            name="name"
            className="border w-full h-8 p-2 rounded placeholder-gray-300"
            placeholder="请输入新歌单标题"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mt-2">
          <label htmlFor="privacy" className="flex items-center">
            <DomCheckbox name="privacy" ref={privacy} />
            &nbsp;
            <span>设置为隐私歌单</span>
          </label>
        </div>
        <div className="flex-center">
          <button
            type="submit"
            className={classNames(
              "inline-flex items-center justify-center border px-3 h-8 rounded-full red",
              { disabled: name.length === 0 }
            )}
          >
            创建
          </button>
        </div>
      </form>
    </HOCDialog>
  );
};

export default memo(CreatePlayList);
