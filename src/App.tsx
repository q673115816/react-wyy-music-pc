import React, {
  memo, useEffect, lazy, Suspense,
} from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import DomResizer from '@/components/Resizer';
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
import {useAppSelector} from "@/reducers/hooks";

const Player = lazy(() => import(
  /* webpackChunkName: "Player" */
  '@/pages/Player'));
const Lrc = lazy(() => import(
  /* webpackChunkName: "Lrc" */
  '@/pages/Lrc'));
const DialogLogin = lazy(() => import(
  /* webpackChunkName: "Components_dialog_Login" */
  '@/components/Dialog/Login'));
const DialogShare = lazy(() => import(
  /* webpackChunkName: "Components_dialog_Share" */
  '@/components/Dialog/Share'));
const DialogShareWX = lazy(() => import(
  /* webpackChunkName: "Components_dialog_ShareWX" */
  '@/components/Dialog/ShareWX'));
const DialogCreatePlaylist = lazy(() => import(
  /* webpackChunkName: "Components_dialog_CreatePlaylist" */
  '@/components/Dialog/CreatePlaylist'));
const DialogUnSubscription = lazy(() => import(
  /* webpackChunkName: "Components_dialog_UnSubscription" */
  '@/components/Dialog/UnSubscription'));
const Playlist = lazy(() => import(
  /* webpackChunkName: "Components_Playlist" */
  '@/components/Playlist'));
const Letter = lazy(() => import(
  /* webpackChunkName: "Components_Playlist" */
  '@/components/Letter'));
const Toast = lazy(() => import(
  /* webpackChunkName: "Components_Toast" */
  '@/components/Toast'));
const Contextmenu = lazy(() => import(
  /* webpackChunkName: "Components_Contextmenu" */
  '@/components/Contextmenu'));
const HeaderSearch = lazy(() => import(
  /* webpackChunkName: "Components_HeaderSearch" */
  '@/components/Search/Search'));

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
      <Router basename={PUBLIC_URL}>
        <Inset>
          <DomHeader />
          <Suspense fallback={<div className="flex-center w-full h-full"><DomLoading /></div>}>
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
            <DialogShare />
            <DialogShareWX />

            <DialogCreatePlaylist />
            <DialogUnSubscription />

            <Lrc />
            <Playlist />
            <Letter />
            <HeaderSearch />
            <Contextmenu />
            <Toast />
            <DialogLogin />
          </Suspense>

          <DomResizer />
        </Inset>
      </Router>
      <GlobalLrc />
    </div>
  );
});
