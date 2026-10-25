import React, { FC, memo } from "react";
import { IconPlayerPlay, IconPlus } from "@tabler/icons-react";

import { PlayList } from "@/modules/services/types";
import { useAudioStore } from "@/stores";

interface iProps {
  playlist: PlayList[];
}

const GroupPlay: FC<iProps> = ({ playlist = [] }) => {

  return (
    <span className="inline-flex h-8 rounded-full text-white overflow-hidden">
      <button
        type="button"
        onClick={() => useAudioStore.getState().setAudioPlaylist({ playlist })}
        className="flex-center ui_theme_bg_color w-24 hover:opacity-80"
      >
        <IconPlayerPlay size={16} className="fill-current" />
        &nbsp; 播放全部
      </button>
      <i className="w-px bg-white" />
      <button
        type="button"
        onClick={() => useAudioStore.getState().setAudioPlaylistAdd({ playlist })}
        className="flex-center ui_theme_bg_color w-8 hover:opacity-80"
      >
        <IconPlus size={18} />
      </button>
    </span>
  );
};

export default memo(GroupPlay);
