import React from 'react';
import { Switch, Route } from 'react-router-dom';
import loadable from '@loadable/component';

const FriendAct = loadable(() => import(/* webpackChunkName: "Friend_Act" */'./Act'));
const FriendTopic = loadable(() => import(/* webpackChunkName: "Friend_Topic" */'./Topic'));

export default () => (
  <Switch>
    <Route path="/friend/:id" component={FriendTopic} />
    <Route path="/friend" component={FriendAct} />
  </Switch>
);
