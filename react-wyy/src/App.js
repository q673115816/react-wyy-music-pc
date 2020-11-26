import React from 'react';
import './styles.css';

import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import './styles/index.scss';
import DomHeader from './layout/Header';
import DomMain from './layout/Main';
import DomFooter from './layout/Footer';
import useDrop from './custom/useDrop';

import DialogLogin from './components/Dialog/Login';

export default function App() {
  const {
    mousedown, x, y, Drag, dragger,
  } = useDrop();

  return (
    <Provider store={store}>
      <div className="App">
        <Router>
          <div
            id="NeteaseCloudMusic"
            className="domwrapper"
            style={{ transform: `translate(${x}px, ${y}px)` }}
          >
            <DomHeader {...{ mousedown }} />
            <DomMain />
            <DomFooter />
          </div>
          {dragger && Drag}
          <DialogLogin />
        </Router>
      </div>
    </Provider>
  );
}
