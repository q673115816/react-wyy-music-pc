import React from 'react';

import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import DomVideoDetail from '@/pages/VideoDetail';
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
            <Switch>
              <Route path="/videodetail/:vid" component={DomVideoDetail} />
              <Route>
                <DomMain />
                <DomFooter />
              </Route>
            </Switch>

          </div>
          {dragger && Drag}
          <DialogLogin />
        </Router>
      </div>
    </Provider>
  );
}
