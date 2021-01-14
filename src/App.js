import React, { useEffect } from 'react';

import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import DomPlayer from './pages/Player';
import './styles/index.scss';
import DomHeader from './layout/Header';
import DomMain from './layout/Main';
import DomFooter from './layout/Footer';
import useDrop from './custom/useDrop';

import DialogLogin from './components/Dialog/Login';

import Playlist from './components/Playlist';
import PrivateLetter from './components/PrivateLetter';
import Tosat from './components/Toast';

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
  const { popupStatus, dialogLoginVisibility } = useSelector(({ common }) => common);

  const {
    mousedown, x, y, Drag, dragger,
  } = useDrop();
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
          className="domwrapper"
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
          <Tosat />
        </div>
        {dragger && Drag}
        {dialogLoginVisibility && <DialogLogin />}
      </Router>
    </div>
  );
}
