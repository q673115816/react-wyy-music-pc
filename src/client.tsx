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

render(
  <React.StrictMode>
    <Router basename={PUBLIC_URL}>
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
