import React, { lazy, Suspense } from 'react';
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

export default () => (
  <div className="domUser overflow-auto max-h-full flex-auto">
    <Suspense fallback={<div className="flex-center h-full w-full"><DomLoading /></div>}>
      <Switch>
        <Route path="/user/:uid/record">
          <UserRecord />
        </Route>
        <Route path="/user/:uid/dynamic">
          <UserDynamic />
        </Route>
        <Route path="/user/:uid/follow">
          <UserFollow />
        </Route>
        <Route path="/user/:uid/fans">
          <UserFans />
        </Route>
        <Route path="/user/:uid/edit">
          <UserEdit />
        </Route>
        <Route path="/user/:uid/binding">
          <UserBinding />
        </Route>
        <Route path="/user/:uid">
          <UserDetail />
        </Route>
      </Switch>
    </Suspense>
  </div>
);
