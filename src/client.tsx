// import 'react-app-polyfill/ie11';// .....
import React from 'react';
import {render, hydrate } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router} from 'react-router-dom'
import {QueryClientProvider, QueryClient} from "react-query";
import {ReactQueryDevtools} from "react-query/devtools";
import store from './reducers/store';

import App from './App';
import Issues from './Issues';

const queryClient = new QueryClient()

// if('serviceWorker' in navigator) {
//     navigator.serviceWorker.register('./sw.js')
//         .then( registration => {
//             console.log('ServiceWorker registration successful with scope: ', registration.scope);
//         })
//         .catch( err => console.log('ServiceWorker registration failed: ', err));
// }

render(
  <React.StrictMode>
    <Router basename={process.env.PUBLIC_URL}>
      <QueryClientProvider client={queryClient}>
        <Provider store={store}>
          <App />
          <ReactQueryDevtools/>
        </Provider>
      </QueryClientProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root'),
);

// ReactDOM.render(<Issues />, document.getElementById('comment-root'));

// if (module.hot) {
//   module.hot.accept();
// }
