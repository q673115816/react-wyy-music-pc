import React, { lazy, memo, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
// import './style.scss';
import useMemoParams from '@/custom/useMemoParams';
// import DomDefault from './Default';
// import DomHot from './Hot';
const DomDefault = lazy(() => import(/* webpackChunkName: "Comment" */'./Default'));
const DomHot = lazy(() => import(/* webpackChunkName: "Comment_Hot" */'./Hot'));

export default memo((params) => (
  <Switch>
    <Route path="/comment/:type/:id/hot">
      {useMemoParams(DomHot)}
    </Route>
    <Route>
      {useMemoParams(DomDefault)}
    </Route>
  </Switch>
));
