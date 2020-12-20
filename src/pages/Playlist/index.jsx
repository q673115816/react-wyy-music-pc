import React from 'react';
import {
  Switch, Route, useRouteMatch, Redirect,
} from 'react-router-dom';
import DomMusic from './Music';
import DomDj from './Dj';
import DomAlbum from './Album';
import './style.scss';

export default () => {
  const { url } = useRouteMatch();
  return (
    <div>
      <Switch>
        <Route path="/playlist/music/:id" component={DomMusic} />
        <Route path="/playlist/dj/:id" component={DomDj} />
        <Route path="/playlist/album/:id" component={DomAlbum} />
        <Redirect to="/" />
      </Switch>
    </div>
  );
};
