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

const navs = [
  ['专辑', 'album'],
  ['歌手', 'artist'],
  ['视频', 'mv'],
  ['专栏', 'topic'],
];

export default memo(() => (
  <div className="domSublist overflow-auto max-h-full flex-auto">
    <div className="domSublist_nav px-8 py-5 space-x-4 text-base">
      {navs.map(([name, nav]) => (
        <NavLink
          key={name}
          to={nav}
          className="domSublist_nav_link"
          activeClassName="text-xl font-black ui_underline"
        >
          {name}
        </NavLink>
      ))}
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
