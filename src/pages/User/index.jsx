import React, { lazy, Suspense } from 'react';
import {
  Switch,
  Route,
} from 'react-router-dom';
import './style.scss';

const UserDetail = lazy(() => import(/* webpackChunkName: "User_Detail" */'./Detail'));
const UserDynamic = lazy(() => import(/* webpackChunkName: "User_Dynamic" */'./Dynamic'));
const UserFollow = lazy(() => import(/* webpackChunkName: "User_Follow" */'./Follow'));
const UserFans = lazy(() => import(/* webpackChunkName: "User_Fans" */'./Fans'));
const UserRecord = lazy(() => import(/* webpackChunkName: "User_Record" */'./Record'));
const UserEdit = lazy(() => import(/* webpackChunkName: "User_Edit" */'./Edit'));
const UserBinding = lazy(() => import(/* webpackChunkName: "User_Binding" */'./Binding'));

export default () => (
  <div className="domUser overflow-auto max-h-full flex-auto">
    <Suspense fallback={<div>loading</div>}>
      <Switch>
        <Route path="/user/:uid/record" component={UserRecord} />
        <Route path="/user/:uid/dynamic" component={UserDynamic} />
        <Route path="/user/:uid/follow" component={UserFollow} />
        <Route path="/user/:uid/fans" component={UserFans} />
        <Route path="/user/:uid/edit" component={UserEdit} />
        <Route path="/user/:uid/binding" component={UserBinding} />
        <Route path="/user/:uid" component={UserDetail} />
      </Switch>
    </Suspense>
  </div>
);
