import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import DomResizer from '@/components/Resizer';
import useMemoParmas from '@/custom/useMemoParams';
import DomPlayer from './pages/Player';
import './styles/index.scss';
import DomHeader from './layout/Header';
import DomMain from './layout/Main';
import DomFooter from './layout/Footer';

import DialogLogin from './components/Dialog/Login';
import DialogShare from './components/Dialog/Share';
import DialogShareWX from './components/Dialog/ShareWX';
import DialogCreatePlaylist from './components/Dialog/CreatePlaylist';
import DialogUnSubscription from './components/Dialog/UnSubscription';
import Playlist from './components/Playlist';
import Letter from './components/Letter';
import Tosat from './components/Toast';
import Contextmenu from './components/Contextmenu';
import HeaderSearch from './components/HeaderSearch';
import useKeyActions from './custom/useKeyActions';
import DomLrc from './pages/Lrc';
import GlobalLrc from './components/Lrc';

export default () => {
  useKeyActions();
  const { theme, font } = useSelector(({ setting }) => setting);
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
        '--themeColor': `var(--${theme}, --themeRed)`,
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
          <Switch>
            <Route
              path="/player/:type(video|mv)/:vid"
            >
              {useMemoParmas(DomPlayer)}
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

          <DomLrc />
          <Playlist />
          <Letter />
          <HeaderSearch />
          <Contextmenu />
          <Tosat />
          <DomResizer />
        </div>
        <GlobalLrc />
        <DialogLogin />
      </Router>
    </div>
  );
};
