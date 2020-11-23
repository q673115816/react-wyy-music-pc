import React, { useState, lazy, Suspense } from "react";
import { Switch, Route, NavLink, Redirect } from "react-router-dom";

import DomLeft from './Left'

const Home = lazy(() => import('../Home'))
const Play = lazy(() => import('../Play'))
const Local = lazy(() => import('../Local'))
const Download = lazy(() => import('../Download'))

export default () => {
  return (
    <div className="dommain">
      <DomLeft />
      <div className="dommain_split"></div>
      <div className="dommain_right">
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <Route path="/play">
              <Play />
            </Route>
            <Route path="/local">
              <Local />
            </Route>
            <Route path="/download">
              <Download />
            </Route>
            <Route path="/home">
              <Home />
            </Route>
            <Redirect to="/home" />
          </Switch>
        </Suspense>
      </div>
    </div>
  );
};
