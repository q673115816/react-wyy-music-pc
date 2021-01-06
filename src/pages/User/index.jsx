import React from 'react';
import loadable from '@loadable/component';
import {
  Switch, useRouteMatch,
  Route,
} from 'react-router-dom';
import './style.scss';

const UserDetail = loadable(() => import(/* webpackChunkName: "User_Detail" */'./Detail'));
const UserDynamic = loadable(() => import(/* webpackChunkName: "User_Dynamic" */'./Dynamic'));
const UserFollow = loadable(() => import(/* webpackChunkName: "User_Follow" */'./Follow'));
const UserFans = loadable(() => import(/* webpackChunkName: "User_Fans" */'./Fans'));
const UserRecord = loadable(() => import(/* webpackChunkName: "User_Record" */'./Record'));
const UserEdit = loadable(() => import(/* webpackChunkName: "User_Edit" */'./Edit'));

export default () => {
  const { url } = useRouteMatch();
  return (
    <Switch>
      <Route path={`${url}/:uid/record`} component={UserRecord} />
      <Route path={`${url}/:uid/dynamic`} component={UserDynamic} />
      <Route path={`${url}/:uid/follow`} component={UserFollow} />
      <Route path={`${url}/:uid/fans`} component={UserFans} />
      <Route path={`${url}/:uid/edit`} component={UserEdit} />
      <Route path={`${url}/:uid`} component={UserDetail} />
    </Switch>
  );
};
