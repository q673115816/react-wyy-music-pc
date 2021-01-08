import React from 'react';
import {
  Switch, Route, useRouteMatch, Redirect,
} from 'react-router-dom';
import PlaylistMusic from './Music';
import PlaylistDj from './Dj';
import PlaylistAlbum from './Album';
import './style.scss';

export default () => {
  const { url } = useRouteMatch();
  return (
    <Switch>
      <Route path="/playlist/music/:id" component={PlaylistMusic} />
      <Route path="/playlist/dj/:id" component={PlaylistDj} />
      <Route path="/playlist/album/:id" component={PlaylistAlbum} />
      <Route path="/playlist" component={PlaylistMusic} />
    </Switch>
  );
};
