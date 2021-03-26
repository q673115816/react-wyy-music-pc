import React, { lazy, Suspense, memo } from 'react';
import { Switch, Route } from 'react-router-dom';
import DomLoading from '@/components/Loading';

const FriendMy = lazy(() => import(/* webpackChunkName: "Friend_My" */'./My'));
const FriendTopic = lazy(() => import(/* webpackChunkName: "Friend_Topic" */'./Topic'));

export default memo(() => (
  <Suspense fallback={<div className="flex-center w-full h-full"><DomLoading /></div>}>
    <Switch>
      <Route path="/friend/:id">
        <FriendTopic />
      </Route>
      <Route>
        <FriendMy />
      </Route>
    </Switch>
  </Suspense>
));
