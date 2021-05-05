import React from 'react';
import {
  IconPlayerPlay,
  IconPlus,
} from '@tabler/icons';
import DomPlaylistAdd from './PlaylistAdd';
import DomPlaylistReplace from './PlaylistReplace';

export default ({ playlist = [] }) => (
  <span className="inline-flex h-8 rounded-full text-white overflow-hidden">
    <DomPlaylistReplace
      playlist={playlist}
      className="flex-center ui_theme_bg_color w-24 hover:opacity-80"
    >
      <IconPlayerPlay size={16} className="fill-current" />
      &nbsp;
      播放全部
    </DomPlaylistReplace>
    <i className="w-px bg-white" />
    <DomPlaylistAdd
      playlist={playlist}
      className="flex-center ui_theme_bg_color w-8 hover:opacity-80"
    >
      <IconPlus size={18} />
    </DomPlaylistAdd>
  </span>
);
