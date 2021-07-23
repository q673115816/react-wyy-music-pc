// import 'react-app-polyfill/ie11';// .....
import React from 'react';
import {render} from 'react-dom';
import { Provider } from 'react-redux';
import store from './reducers/store';

import App from './App';
import Issues from './Issues';

render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);

// ReactDOM.render(<Issues />, document.getElementById('comment-root'));

// if (module.hot) {
//   module.hot.accept();
// }
