// import 'react-app-polyfill/ie11';// .....
import React from 'react';
import {render} from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router} from 'react-router-dom'
import initialStore from './reducers/store';

import App from './App';
import Issues from './Issues';

// Read the state sent with markup
const state = window.__STATE__;

// delete the state from global window object
delete window.__STATE__;

// reproduce the store used to render the page on server
const store = initialStore(state)


render(
  <React.StrictMode>
    <Router basename={PUBLIC_URL}>
      <Provider store={store}>
        <App />
      </Provider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root'),
);

// ReactDOM.render(<Issues />, document.getElementById('comment-root'));

// if (module.hot) {
//   module.hot.accept();
// }
