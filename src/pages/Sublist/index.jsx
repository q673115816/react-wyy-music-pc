import React from 'react';
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
import DomMv from './Mv';
import DomTopic from './Topic';

export default () => {
  const { url } = useRouteMatch();
  return (
    <div className="domSublist overflow-auto max-h-full flex-auto">
      <div className="domSublist_nav">
        <NavLink to="album" className="domSublist_nav_link" activeClassName="on">专辑</NavLink>
        <NavLink to="artist" className="domSublist_nav_link" activeClassName="on">歌手</NavLink>
        <NavLink to="mv" className="domSublist_nav_link" activeClassName="on">视频</NavLink>
        <NavLink to="topic" className="domSublist_nav_link" activeClassName="on">专栏</NavLink>
      </div>
      <Switch>
        <Route path={`${url}/album`}>
          <DomAlbum />
        </Route>
        <Route path={`${url}/artist`}>
          <DomArtist />
        </Route>
        <Route path={`${url}/mv`}>
          <DomMv />
        </Route>
        <Route path={`${url}/topic`}>
          <DomTopic />
        </Route>
        <Redirect to={`${url}/album`} />
      </Switch>
    </div>
  );
};
