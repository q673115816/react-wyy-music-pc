import React, { lazy, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';

const FriendMy = lazy(() => import(/* webpackChunkName: "Friend_My" */'./My'));
const FriendTopic = lazy(() => import(/* webpackChunkName: "Friend_Topic" */'./Topic'));

export default () => (
  <Suspense fallback={<div>loading</div>}>
    <Switch>
      <Route path="/friend/:id" component={FriendTopic} />
      <Route path="/friend" component={FriendMy} />
    </Switch>
  </Suspense>
);
