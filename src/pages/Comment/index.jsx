import React, { lazy, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
import './style.scss';

const DomDefault = lazy(() => import(/* webpackChunkName: "Comment" */'./Default'));
const DomHot = lazy(() => import(/* webpackChunkName: "Comment_Hot" */'./Hot'));

export default () => (
  <Suspense fallback={<div>loading</div>}>
    <Switch>
      <Route path="/comment/:id/hot" component={DomHot} />
      <Route component={DomDefault} />
    </Switch>
  </Suspense>
);
