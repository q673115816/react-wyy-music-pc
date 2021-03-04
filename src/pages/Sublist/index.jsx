import React, { memo, useMemo } from 'react';
import {
  Switch,
  Route,
  useRouteMatch,
  Redirect,
  NavLink,
} from 'react-router-dom';

// import './style.scss';

import DomAlbum from './Album';
import DomArtist from './Artist';
import DomMV from './MV';
import DomTopic from './Topic';

export default memo(() => (
  <div className="domSublist overflow-auto max-h-full flex-auto">
    <div className="domSublist_nav">
      <NavLink to="album" className="domSublist_nav_link" activeClassName="on">专辑</NavLink>
      <NavLink to="artist" className="domSublist_nav_link" activeClassName="on">歌手</NavLink>
      <NavLink to="mv" className="domSublist_nav_link" activeClassName="on">视频</NavLink>
      <NavLink to="topic" className="domSublist_nav_link" activeClassName="on">专栏</NavLink>
    </div>
    <Switch>
      <Route path="/sublist/album">
        <DomAlbum />
      </Route>
      <Route path="/sublist/artist">
        <DomArtist />
      </Route>
      <Route path="/sublist/mv">
        <DomMV />
      </Route>
      <Route path="/sublist/topic">
        <DomTopic />
      </Route>
      <Redirect to="/sublist/album" />
    </Switch>
  </div>
));
