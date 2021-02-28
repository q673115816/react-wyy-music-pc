import React, { lazy, Suspense, memo } from 'react';
import { Switch, Route } from 'react-router-dom';

const FriendMy = lazy(() => import(/* webpackChunkName: "Friend_My" */'./My'));
const FriendTopic = lazy(() => import(/* webpackChunkName: "Friend_Topic" */'./Topic'));

export default memo(() => (
  <Suspense fallback={<div>loading</div>}>
    <Switch>
      <Route path="/friend/:id">
        <FriendTopic />
      </Route>
      <Route path="/friend">
        <FriendMy />
      </Route>
    </Switch>
  </Suspense>
));
