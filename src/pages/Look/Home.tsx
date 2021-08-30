import React, { memo } from 'react'
import {Switch, Route} from "react-router-dom";
import Look from './Look'
import Live from './Live'

export default memo(() => {
  return (
    <Switch>
      <Route path={'/look'} exact component={Look}/>
      <Route path={`/look/my`} component={Live}/>
    </Switch>
  )
})
