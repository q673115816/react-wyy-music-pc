import React, {
  memo, useEffect, lazy, Suspense,
} from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import DomResizer from '@/components/Resizer';
import useMemoParmas from '@/custom/useMemoParams';
import useIsLogin from '@/custom/useIsLogin';
import DomLoading from '@/components/Loading';
import DomHeader from './layout/Header';
import DomMain from './layout/Main';
import DomFooter from './layout/Footer';
import useKeyActions from './custom/useKeyActions';
import './styles/index.scss';
// import DomPlayer from './pages/Player';
// import DialogLogin from './components/Dialog/Login';
// import DialogShare from './components/Dialog/Share';
// import DialogShareWX from './components/Dialog/ShareWX';
// import DialogCreatePlaylist from './components/Dialog/CreatePlaylist';
// import DialogUnSubscription from './components/Dialog/UnSubscription';
// import Playlist from './components/Playlist';
// import Letter from './components/Letter';
// import Tosat from './components/Toast';
// import Contextmenu from './components/Contextmenu';
// import HeaderSearch from './components/HeaderSearch';
// import DomLrc from './pages/Lrc';
import GlobalLrc from './components/Lrc';

const Player = lazy(() => import(/* webpackChunkName: "Player" */'@/pages/Player'));
const Lrc = lazy(() => import(/* webpackChunkName: "Lrc" */'@/pages/Lrc'));
const DialogLogin = lazy(() => import(/* webpackChunkName: "Components_dialog_Login" */'@/components/Dialog/Login'));
const DialogShare = lazy(() => import(/* webpackChunkName: "Components_dialog_Share" */'@/components/Dialog/Share'));
const DialogShareWX = lazy(() => import(/* webpackChunkName: "Components_dialog_ShareWX" */'@/components/Dialog/ShareWX'));
const DialogCreatePlaylist = lazy(() => import(/* webpackChunkName: "Components_dialog_CreatePlaylist" */'@/components/Dialog/CreatePlaylist'));
const DialogUnSubscription = lazy(() => import(/* webpackChunkName: "Components_dialog_UnSubscription" */'@/components/Dialog/UnSubscription'));
const Playlist = lazy(() => import(/* webpackChunkName: "Components_Playlist" */'@/components/Playlist'));
const Letter = lazy(() => import(/* webpackChunkName: "Components_Playlist" */'@/components/Letter'));
const Toast = lazy(() => import(/* webpackChunkName: "Components_Toast" */'@/components/Toast'));
const Contextmenu = lazy(() => import(/* webpackChunkName: "Components_Contextmenu" */'@/components/Contextmenu'));
const HeaderSearch = lazy(() => import(/* webpackChunkName: "Components_HeaderSearch" */'@/components/HeaderSearch'));
// const GlobalLrc = lazy(() => import(/* webpackChunkName: "Components_Lrc" */'@/components/Lrc'));

export default memo(() => {
  useKeyActions();
  useIsLogin();
  const {
    theme, font,
  } = useSelector(({ setting }) => setting);
  const {
    POSITION,
    SCREEN,
    globalX,
    globalY,
    globalDragger,
    globalWidth,
    globalHeight,
  } = useSelector(({ inset }) => inset);

  useEffect(() => {
    const fn = (e) => e.preventDefault();
    document.addEventListener('contextmenu', fn);
    return () => {
      document.removeEventListener('contextmenu', fn);
    };
  }, []);
  return (
    <div
      className="App"
      style={{
        fontFamily: font,
        '--themeColor': theme,
      }}
    >
      <Router basename={process.env.NODE_ENV !== 'production' ? '/' : '/react-wyy-music-pc'}>
        <div
          id="NeteaseCloudMusic"
          className="domWrapper flex flex-col shadow-lg select-none"
          style={({
            ...(SCREEN === 'normal' ? {
              '--WIDTH': `${globalWidth}px`,
              '--HEIGHT': `${globalHeight}px`,
            } : {
              '--WIDTH': '100vw',
              '--HEIGHT': '100vh',
            }),
            ...(POSITION ? globalDragger ? {
              transform: `translate(${globalX}px, ${globalY}px)`,
            } : {
              position: 'absolute',
              left: `${globalX}px`,
              top: `${globalY}px`,
            } : {}),
          })}
        >
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
        </div>
      </Router>
      <GlobalLrc />
    </div>
  );
});
