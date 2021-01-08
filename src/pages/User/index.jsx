import React from 'react';
import loadable from '@loadable/component';
import {
  Switch,
  Route,
} from 'react-router-dom';
import './style.scss';

const UserDetail = loadable(() => import(/* webpackChunkName: "User_Detail" */'./Detail'));
const UserDynamic = loadable(() => import(/* webpackChunkName: "User_Dynamic" */'./Dynamic'));
const UserFollow = loadable(() => import(/* webpackChunkName: "User_Follow" */'./Follow'));
const UserFans = loadable(() => import(/* webpackChunkName: "User_Fans" */'./Fans'));
const UserRecord = loadable(() => import(/* webpackChunkName: "User_Record" */'./Record'));
const UserEdit = loadable(() => import(/* webpackChunkName: "User_Edit" */'./Edit'));

export default () => (
  <div className="domUser overflow-auto">
    <Switch>
      <Route path="/user/:uid/record" component={UserRecord} />
      <Route path="/user/:uid/dynamic" component={UserDynamic} />
      <Route path="/user/:uid/follow" component={UserFollow} />
      <Route path="/user/:uid/fans" component={UserFans} />
      <Route path="/user/:uid/edit" component={UserEdit} />
      <Route path="/user/:uid" component={UserDetail} />
    </Switch>
  </div>
);
