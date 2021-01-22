import React, { useEffect } from 'react';

import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setDialogReset } from '@/redux/actions';
import DomPlayer from './pages/Player';
import './styles/index.scss';
import DomHeader from './layout/Header';
import DomMain from './layout/Main';
import DomFooter from './layout/Footer';
import useDrop from './custom/useDrop';

import DialogLogin from './components/Dialog/Login';
import DialogShare from './components/Dialog/Share';
import DialogShareWX from './components/Dialog/ShareWX';
import DialogUploadAvatar from './components/Dialog/UploadAvatar';
import Playlist from './components/Playlist';
import PrivateLetter from './components/PrivateLetter';
import Tosat from './components/Toast';
import Contextmenu from './components/Contextmenu';

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

export default function App() {
  const dispatch = useDispatch();
  const { popupStatus, loginVisibility, theme } = useSelector(({ common }) => common);
  const {
    contextMenuVisibility,
    dialogShareVisibility,
    dialogShareWXVisibility,
    dialogUploadAvatarVisibility,
  } = useSelector(({ mask }) => mask);
  const {
    dragdown,
    dragmove,
    dragup,
    x,
    y,
    dragger,
  } = useDrop();

  const handleMaskMouseUp = () => {

  };

  const handleMaskMouseMove = () => {

  };

  useEffect(() => {
    document.addEventListener('contextmenu', (e) => {
      e.preventDefault();
    });
  }, []);
  return (
    <div className="App">
      <Router>
        <div
          id="NeteaseCloudMusic"
          className="domWrapper"
          style={{
            transform: `translate(${x}px, ${y}px)`,
            '--themeColor': `var(--${theme}, --themeRed)`,
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
            contextMenuVisibility
            && (
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
          <Tosat />
        </div>
        {dragger && <div className="mask" onMouseUp={dragup} onMouseMove={dragmove} />}
        {loginVisibility && <DialogLogin />}
      </Router>
    </div>
  );
}
