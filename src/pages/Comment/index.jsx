import React, { lazy, memo, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
// import './style.scss';
// import DomDefault from './Default';
// import DomHot from './Hot';
const DomDefault = lazy(() => import(/* webpackChunkName: "Comment" */'./Default'));
const DomHot = lazy(() => import(/* webpackChunkName: "Comment_Hot" */'./Hot'));

export default memo(() => (
  <Switch>
    <Route path="/comment/:type/:id/hot">
      <DomHot />
    </Route>
    <Route>
      <DomDefault />
    </Route>
  </Switch>
));
