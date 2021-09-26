import React, { lazy, memo } from "react";
import { Switch, Route } from "react-router-dom";

import useMemoParams from "@/hooks/useMemoParams";

const CommentHome = lazy(
  () => import(/* webpackChunkName: "Comment_Home" */ "./Home")
);
const CommentHot = lazy(
  () => import(/* webpackChunkName: "Comment_Hot" */ "./Hot")
);

export default memo((params) => (
  <Switch>
    <Route path="/comment/:type/:id/hot">{useMemoParams(CommentHot)}</Route>
    <Route>{useMemoParams(CommentHome)}</Route>
  </Switch>
));
