import React from "react";
import { NavLink, Switch, Redirect, Route } from 'react-router-dom'
import DomSong from './pages/Song'
import DomAlbum from './pages/Album'
export default () => {
  return <div className="domhome_newest">
    <div className="domhome_newest_nav">
      <NavLink className="domhome_newest_nav_link" activeClassName="on" to="/home/newest/song">新歌速递</NavLink>
      <NavLink className="domhome_newest_nav_link" activeClassName="on" to="/home/newest/album">新碟上架</NavLink>
    </div>
    <Switch>
      <Route path="/home/newest/song">
        <DomSong />
      </Route>
      <Route path="/home/newest/album">
        <DomAlbum />
      </Route>
      <Redirect to="/home/newest/song" />
    </Switch>
  </div>;
};
