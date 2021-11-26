import React, { memo, useCallback, useEffect, useMemo, useState } from "react";
import { IconEar, IconList, IconUsers } from "@tabler/icons";
import { setPopupPlaylistToggle } from "@/reducers/mask/slice";
import classNames from "classnames";
import DomVolume from "./Volume";
import { useAppDispatch, useAppSelector } from "@/reducers/hooks";
import ToneQuality from "./ToneQuality";

export default memo(() => {
  const dispatch = useAppDispatch();
  const { playlist } = useAppSelector(({ audio }) => audio);
  const [visibility, setVisibility] = useState(false);

  const handleTogglePlaylist = useCallback(() => {
    dispatch(setPopupPlaylistToggle());
  }, []);

  if (playlist.length === 0) return null;
  return (
    <div className="domfooter_right flex items-center justify-end flex-1 space-x-3 pr-5">
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
      <DomVolume />
      <button type="button" title="开始一起听">
        <IconUsers size={26} stroke={1} />
      </button>
      <button type="button" onClick={handleTogglePlaylist}>
        <IconList size={26} stroke={1} />
      </button>
    </div>
  );
});
