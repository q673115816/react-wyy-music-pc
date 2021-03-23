import React from 'react';
import {
  Switch, Route,
} from 'react-router-dom';
import PlaylistMusic from './Music';
import PlaylistDj from './Dj';
import PlaylistAlbum from './Album';
import './style.scss';

export default () => (
  <Switch>
    <Route path="/playlist/music/:id">
      <PlaylistMusic />
    </Route>
    <Route path="/playlist/dj/:id">
      <PlaylistDj />
    </Route>
    <Route path="/playlist/album/:id">
      <PlaylistAlbum />
    </Route>
    <Route path="/playlist">
      <PlaylistMusic />
    </Route>
  </Switch>
);
