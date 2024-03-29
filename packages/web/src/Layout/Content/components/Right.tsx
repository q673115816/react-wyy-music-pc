import React, { memo, useState } from "react";
import { IconEar, IconList, IconUsers } from "@tabler/icons";
import { setPopupPlaylistToggle } from "@/modules/reducers/mask/slice";
import Volume from "./Volume";
import { useAppDispatch, useAppSelector } from "@/modules/hooks";
import ToneQuality from "./ToneQuality";

export default memo(function Right() {
  const dispatch = useAppDispatch();
  const { playlist } = useAppSelector(({ audio }) => audio);
  const [visibility, setVisibility] = useState(false);

  const handleTogglePlaylist = () => {
    dispatch(setPopupPlaylistToggle());
  };

  // if (playlist.length === 0) return null;
  return (
    <div className="flex items-center justify-end h-full gap-x-3 pr-5">
      <div className="relative">
        <button
          type="button"
          onClick={() => setVisibility(!visibility)}
          className="tone border border-current px-1 rounded-sm text-gray-500"
        >
          标准
        </button>
        {visibility && <ToneQuality />}
      </div>
      <button type="button" title="打开音效">
        <IconEar size={28} stroke={1} />
      </button>
      <Volume />
      <button type="button" title="开始一起听">
        <IconUsers size={26} stroke={1} />
      </button>
      <button type="button" onClick={handleTogglePlaylist}>
        <IconList size={26} stroke={1} />
      </button>
    </div>
  );
});
