import React from 'react';
import { Switch, Route } from 'react-router-dom';
import loadable from '@loadable/component';

const FriendMy = loadable(() => import(/* webpackChunkName: "Friend_My" */'./My'));
const FriendTopic = loadable(() => import(/* webpackChunkName: "Friend_Topic" */'./Topic'));

export default () => (
  <Switch>
    <Route path="/friend/:id" component={FriendTopic} />
    <Route path="/friend" component={FriendMy} />
  </Switch>
);
