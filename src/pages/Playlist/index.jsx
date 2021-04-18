import React, { memo } from 'react';
import {
  Switch, Route,
} from 'react-router-dom';
import useMemoParams from '@/custom/useMemoParams';
import PlaylistMusic from './Music';
import PlaylistDj from './Dj';
import PlaylistAlbum from './Album';
import './style.scss';

export default memo(() => (
  <Switch>
    <Route path="/playlist/music/:id">
      {useMemoParams(PlaylistMusic)}
    </Route>
    <Route path="/playlist/dj/:id">
      {useMemoParams(PlaylistDj)}
    </Route>
    <Route path="/playlist/album/:id">
      {useMemoParams(PlaylistAlbum)}
    </Route>
    <Route path="/playlist">
      <PlaylistMusic />
    </Route>
  </Switch>
));
