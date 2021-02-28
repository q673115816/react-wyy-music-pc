import React, {
  useCallback, useEffect, useMemo, useState,
} from 'react';

import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setDialogReset, setGlobalInset } from '@/redux/actions';
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
import PrivateLetter from './components/PrivateLetter';
import Tosat from './components/Toast';
import Contextmenu from './components/Contextmenu';
import HeaderSearch from './components/HeaderSearch';

const handlePopSwitch = (popupStatus) => {
  switch (popupStatus) {
    case 'playlist':
      return <Playlist />;
    case 'privateLetter':
      return <PrivateLetter />;
    default:
      return '';
  }
};

const DomCorner = () => (
  <div
    className="absolute right-0 bottom-0 text-gray-500"
    style={{ cursor: 'se-resize' }}
  >
    <IconChevronDownRight />
  </div>
);

export default function App() {
  const dispatch = useDispatch();
  const { popupStatus, loginVisibility } = useSelector(({ common }) => common);
  const { screen } = useSelector(({ mask }) => mask);
  const { theme } = useSelector(({ setting }) => setting);
  const {
    toastTitle,
    globalLastX,
    globalLastY,
    globalWidth,
    globalHeight,
    searchVisibility,
    contextMenuVisibility,
    dialogShareVisibility,
    dialogShareWXVisibility,
    dialogUploadAvatarVisibility,
    dialogCreatePlaylistVisibility,
    dialogUnSubscriptionVisibility,
  } = useSelector(({ mask }) => mask);
  const [dragger, setDragger] = useState(false);
  const [resizer, setResizer] = useState(false);
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [startX, setStartX] = useState(0);
  const [startY, setStartY] = useState(0);
  const [lastX, setLastX] = useState(0);
  const [lastY, setLastY] = useState(0);

  const dragdown = useCallback((e) => {
    setStartX(e.clientX);
    setStartY(e.clientY);
    setDragger(true);
  }, []);

  const dragmove = (e) => {
    if (dragger) {
      const x = e.clientX - startX + lastX;
      const y = e.clientY - startY + lastY;
      setX(x);
      setY(y);
      dispatch(setGlobalInset({
        globalLastX: x,
        globalLastY: y,
      }));
    }
  };

  const dragup = (e) => {
    setDragger(false);
    setLastX(x);
    setLastY(y);
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
          className="domWrapper flex flex-col absolute shadow-lg select-none"
          style={{
            transform: `translate(${x}px, ${y}px)`,
            '--themeColor': `var(--${theme}, --themeRed)`,
            '--WIDTH': `${globalWidth}px`,
            '--HEIGHT': `${globalHeight}px`,
          }}
        >
          <DomHeader handleDrap={dragdown} />
          <Switch>
            <Route path="/player/:type/:vid" component={DomPlayer} />
            <Route>
              <DomMain />
              <DomFooter />
            </Route>
          </Switch>
          {handlePopSwitch(popupStatus)}
          {
            contextMenuVisibility && (
              <Contextmenu />
            )
          }
          {dialogShareVisibility && (
            <DialogShare />
          )}
          {dialogShareWXVisibility && (
            <DialogShareWX />
          )}
          {dialogUploadAvatarVisibility && (
            <DialogUploadAvatar />
          )}
          {dialogCreatePlaylistVisibility && (
            <DialogCreatePlaylist />
          )}
          {dialogUnSubscriptionVisibility && (
            <DialogUnSubscription />
          )}
          {
            searchVisibility
            && <HeaderSearch />
          }
          {
            toastTitle?.toString()
            && <Tosat />
          }
          {screen === 'normal'
            && <DomCorner />}
        </div>
        {loginVisibility && <DialogLogin />}
        {dragger && (
        <div
          className="absolute inset-0"
          onMouseUp={dragup}
          onMouseMove={dragmove}
        />
        )}
        {
          resizer && <div className="absolute inset-0" />

        }
      </Router>
    </div>
  );
}
