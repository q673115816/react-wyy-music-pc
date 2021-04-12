import React, { memo, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { IconChevronDownRight } from '@tabler/icons';
import DomPlayer from './pages/Player';
import './styles/index.scss';
import DomHeader from './layout/Header';
import DomMain from './layout/Main';
import DomFooter from './layout/Footer';

import DialogLogin from './components/Dialog/Login';
import DialogShare from './components/Dialog/Share';
import DialogShareWX from './components/Dialog/ShareWX';
import DialogUploadAvatar from './components/Dialog/UploadAvatar';
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
import { setGlobalRect } from './reducers/inset/actions';

const MINWIDTH = 1022;
const MINHEIGHT = 670;

const DomVisibility = memo(() => {
  const {
    contextMenuVisibility,
    dialogShareVisibility,
    dialogShareWXVisibility,
    dialogUploadAvatarVisibility,
    dialogCreatePlaylistVisibility,
    dialogUnSubscriptionVisibility,
  } = useSelector(({ mask }) => mask);
  return (
    <>
      {contextMenuVisibility && <Contextmenu />}
      {dialogShareVisibility && <DialogShare />}
      {dialogShareWXVisibility && <DialogShareWX />}
      {dialogUploadAvatarVisibility && <DialogUploadAvatar />}
      {dialogCreatePlaylistVisibility && <DialogCreatePlaylist />}
      {dialogUnSubscriptionVisibility && <DialogUnSubscription />}
    </>
  );
});

export default () => {
  useKeyActions();
  const dispatch = useDispatch();
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
  const [resizer, setResizer] = useState(false);
  const [resizeStartInset, setResizeStartInset] = useState({ x: 0, y: 0 });
  const [resizeInitRect, setResizeInitRect] = useState({ width: globalWidth, height: globalHeight });
  const [resizeRect, setResizeRect] = useState(resizeInitRect);

  const resizedown = (e) => {
    setResizer(true);
    setResizeStartInset({
      x: e.clientX,
      y: e.clientY,
    });
  };
  const resizemove = (e) => {
    e.preventDefault();
    if (resizer) {
      const x = e.clientX - resizeStartInset.x + resizeInitRect.width;
      const y = e.clientY - resizeStartInset.y + resizeInitRect.height;

      const nextwidth = x > MINWIDTH ? x : MINWIDTH;
      const nextheight = y > MINHEIGHT ? y : MINHEIGHT;
      setResizeRect({
        width: nextwidth,
        height: nextheight,
      });
      dispatch(setGlobalRect({
        width: nextwidth,
        height: nextheight,
      }));
    }
  };
  const resizeup = () => {
    setResizeInitRect(resizeRect);
    setResizer(false);
  };

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
      <Router>
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
            <Route path="/player/:type/:vid">
              <DomPlayer />
            </Route>
            <Route>
              <DomMain />
              <DomFooter />
            </Route>
          </Switch>
          <DomVisibility />
          <DomLrc />
          <Playlist />
          <Letter />
          <HeaderSearch />
          <Tosat />
          {SCREEN === 'normal'
            && (
              <div
                className="absolute right-0 bottom-0 text-gray-500"
                style={{ cursor: 'se-resize' }}
                onMouseDown={resizedown}
              >
                <IconChevronDownRight />
              </div>
            )}
        </div>
        <GlobalLrc />
        <DialogLogin />

        {
          resizer && (
            <div
              className="absolute inset-0"
              onMouseMove={resizemove}
              onMouseUp={resizeup}
            />
          )
        }
      </Router>
    </div>
  );
};
