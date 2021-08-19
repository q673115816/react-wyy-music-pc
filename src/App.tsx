import React, {
  memo, useEffect, lazy, Suspense,
} from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Resizer from '@/components/Resizer';
import useMemoParmas from '@/hooks/useMemoParams';
import useIsLogin from '@/hooks/useIsLogin';
import DomLoading from '@/components/Loading';
import DomHeader from './layout/Header';
import DomMain from './layout/Main';
import DomFooter from './layout/Footer';
import Inset from './layout/Inset'
import useKeyActions from './hooks/useKeyActions';
import './styles/index.scss';

import GlobalLrc from './components/Lrc';
import Help from './Help'
import { useAppSelector } from "@/reducers/hooks";

const Player = lazy(() => import(
  /* webpackChunkName: "Player" */
  '@/pages/Player'));



export default memo(() => {
  console.log('app')
  useKeyActions();
  useIsLogin();
  const {
    theme, font,
  } = useAppSelector(({ setting }) => setting);

  return (
    <div
      className="App"
      style={{
        fontFamily: font,
        '--themeColor': theme,
      }}
    >
      <Inset>
        <DomHeader />
        <Suspense fallback={
          <div className="flex-center w-full h-full">
            <DomLoading />
          </div>}>
          <Switch>
            <Route
              path="/player/:type(video|mv)/:vid"
            >
              {useMemoParmas(Player)}
            </Route>
            <Route>
              <DomMain />
              <DomFooter />
            </Route>
          </Switch>
          <Help />
        </Suspense>
        <Resizer />
      </Inset>
      <GlobalLrc />
    </div>
  );
});
