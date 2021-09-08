import React, { memo } from 'react'
import {Switch, Route} from "react-router-dom";
import Home from './Home'
import Live from './Live'
import Room from './Room'

export default memo(() => {
  return (
    <Switch>
      <Route path={'/look'} exact component={Home}/>
      <Route path={`/look/my`} component={Live}/>
      <Route path={`/look/(\d*)`} component={Room}/>
    </Switch>
  )
})
