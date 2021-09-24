import React, { memo } from "react";
import { Switch, Route } from "react-router-dom";
import useMemoParams from "@/hooks/useMemoParams";
import Music from "./Music";
import DJ from "./DJ";
import Album from "./Album";

export default memo(() => (
  <Switch>
    <Route path="/playlist/music/:id">{useMemoParams(Music)}</Route>
    <Route path="/playlist/dj/:id">{useMemoParams(DJ)}</Route>
    <Route path="/playlist/album/:id">{useMemoParams(Album)}</Route>
    <Route path="/playlist">
      <Music />
    </Route>
  </Switch>
));
