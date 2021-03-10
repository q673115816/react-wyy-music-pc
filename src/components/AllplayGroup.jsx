import React from 'react';
import {
  IconPlayerPlay,
  IconPlus,
} from '@tabler/icons';

export default ({ handlePlay = () => null, handleAdd = () => null }) => (
  <span className="inline-flex h-8 rounded-full text-white overflow-hidden">
    <button
      type="button"
      onClick={handlePlay}
      className="flex-center ui_theme_bg_color w-24 hover:opacity-80"
    >
      <IconPlayerPlay size={16} className="fill-current" />
      &nbsp;
      播放全部
    </button>
    <i className="w-px bg-white" />
    <button
      type="button"
      onClick={handleAdd}
      className="flex-center ui_theme_bg_color w-8 hover:opacity-80"
    >
      <IconPlus size={18} />
    </button>
  </span>
);
