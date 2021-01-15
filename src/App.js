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
  const { popupStatus, loginVisibility } = useSelector(({ common }) => common);
  const { visibility: dialogVisibility, contextMenuVisibility } = useSelector(({ dialog }) => dialog);
  const {
    mousedown, x, y, Drag, dragger,
  } = useDrop();

  const handleMaskMouseUp = () => {

  };

  const handleMaskMouseMove = () => {

  };

  const handleMaskClick = () => {
    dispatch(setDialogReset());
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
          style={{ transform: `translate(${x}px, ${y}px)` }}
        >
          <DomHeader {...{ mousedown }} />
          <Switch>
            <Route path="/player/:type/:vid" component={DomPlayer} />
            <Route>
              <DomMain />
              <DomFooter />
            </Route>
          </Switch>
          {handlePopSwitch(popupStatus)}
          {
            dialogVisibility
            && (
              <div
                className="dialogMask"
                onMouseUp={handleMaskMouseUp}
                onMouseMove={handleMaskMouseMove}
                onMouseDown={handleMaskClick}
              />
            )
          }
          {
            contextMenuVisibility
            && <Contextmenu />
          }
          <DialogShare />
          <Tosat />
        </div>
        {dragger && Drag}
        {loginVisibility && <DialogLogin />}
      </Router>
    </div>
  );
}
