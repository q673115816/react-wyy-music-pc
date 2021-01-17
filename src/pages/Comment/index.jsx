import React from 'react';
import { Switch, Route } from 'react-router-dom';
import loadable from '@loadable/component';
import './style.scss';

const DomDefault = loadable(() => import(/* webpackChunkName: "Comment" */'./Default'));
const DomHot = loadable(() => import(/* webpackChunkName: "Comment_Hot" */'./Hot'));

export default () => (
  <Switch>
    <Route path="/comment/:id/hot" component={DomHot} />
    <Route component={DomDefault} />
  </Switch>
);
