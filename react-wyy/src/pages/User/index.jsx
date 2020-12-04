import React from 'react';
import loadable from '@loadable/component';
import {
  useParams, Redirect, Switch, useRouteMatch,
  Route,
} from 'react-router-dom';

const UserDetail = loadable(() => import(/* webpackChunkName: "User_Detail" */'./Detail'));
const UserRecord = loadable(() => import(/* webpackChunkName: "User_Record" */'./Record'));

export default () => {
  const { url } = useRouteMatch();
  return (
    <Switch>
      <Route path={`${url}/:uid/record`} component={UserRecord} />
      <Route path={`${url}/:uid`} component={UserDetail} />
    </Switch>
  );
};
