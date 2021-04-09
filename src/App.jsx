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
import DialogHomeOrder from './components/Dialog/HomeOrder';
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
    toastTitle,
    lyricVisibility,
    searchVisibility,
    contextMenuVisibility,
    dialogHomeOrderVisibility,
    dialogShareVisibility,
    dialogShareWXVisibility,
    dialogUploadAvatarVisibility,
    dialogCreatePlaylistVisibility,
    dialogUnSubscriptionVisibility,
    globalLrcVisibility,
  } = useSelector(({ mask }) => mask);
  const { popupStatus } = useSelector(({ common }) => common);
  return (
    <>
      {lyricVisibility && <DomLrc />}

      {popupStatus === 'playlist' && <Playlist />}
      {popupStatus === 'privateLetter' && <Letter />}
      {contextMenuVisibility && <Contextmenu />}
      {dialogShareVisibility && <DialogShare />}
      {dialogShareWXVisibility && <DialogShareWX />}
      {dialogUploadAvatarVisibility && <DialogUploadAvatar />}
      {dialogCreatePlaylistVisibility && <DialogCreatePlaylist />}
      {dialogUnSubscriptionVisibility && <DialogUnSubscription />}
      {dialogHomeOrderVisibility && <DialogHomeOrder />}
      {searchVisibility && <HeaderSearch />}
      {globalLrcVisibility && createPortal(<GlobalLrc />, document.querySelector('#lrc-root'))}
      {
        toastTitle?.toString()
        && <Tosat />
      }
    </>
  );
});

export default () => {
  useKeyActions();
  const dispatch = useDispatch();
  const { loginVisibility } = useSelector(({ common }) => common);
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
    <div className="App">
      <Router>
        <div
          id="NeteaseCloudMusic"
          className="domWrapper flex flex-col shadow-lg select-none"
          style={({
            fontFamily: font,
            '--themeColor': `var(--${theme}, --themeRed)`,
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
        {loginVisibility && <DialogLogin />}

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
