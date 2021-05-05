import React, { lazy, Suspense, memo } from 'react';
import {
  Switch,
  Route,
} from 'react-router-dom';
import './style.scss';
import DomLoading from '@/components/Loading';

const UserDetail = lazy(() => import(/* webpackChunkName: "User_Detail" */'./Detail'));
const UserDynamic = lazy(() => import(/* webpackChunkName: "User_Dynamic" */'./Dynamic'));
const UserFollow = lazy(() => import(/* webpackChunkName: "User_Follow" */'./Follow'));
const UserFans = lazy(() => import(/* webpackChunkName: "User_Fans" */'./Fans'));
const UserRecord = lazy(() => import(/* webpackChunkName: "User_Record" */'./Record'));
const UserEdit = lazy(() => import(/* webpackChunkName: "User_Edit" */'./Edit'));
const UserBinding = lazy(() => import(/* webpackChunkName: "User_Binding" */'./Binding'));

const navs = {
  record: UserRecord,
  dynamic: UserDynamic,
  follow: UserFollow,
  fans: UserFans,
  edit: UserEdit,
  binding: UserBinding,
  detail: UserDetail,
};

export default memo(() => (
  <div className="domUser overflow-auto h-full flex-auto">
    <Suspense fallback={<div className="flex-center h-full w-full"><DomLoading /></div>}>
      <Switch>
        <Route path="/user/:uid/:nav?">
          {
            ({ match: { params: { nav = 'detail', uid } } }) => ((Page) => <Page uid={uid} />)(navs[nav])
          }
        </Route>
      </Switch>
    </Suspense>
  </div>
));
