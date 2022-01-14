import React from "react";
import { render, hydrate } from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import store from "./reducers/store";

import App from "./App";

import reportWebVitals from "./reportWebVitals";

// import * as Sentry from "@sentry/react";
// import { Integrations } from "@sentry/tracing";

// Sentry.init({
//   dsn: "https://26f05e2b07094c529972d1ada66a5c2a@o1001386.ingest.sentry.io/5960907",
//   integrations: [new Integrations.BrowserTracing()],
//
//   // Set tracesSampleRate to 1.0 to capture 100%
//   // of transactions for performance monitoring.
//   // We recommend adjusting this value in production
//   tracesSampleRate: 1.0,
// });

const queryClient = new QueryClient();

// if('serviceWorker' in navigator) {
//     navigator.serviceWorker.register('./sw.js')
//         .then( registration => {
//             console.log('ServiceWorker registration successful with scope: ', registration.scope);
//         })
//         .catch( err => console.log('ServiceWorker registration failed: ', err));
// }

render(
  <React.StrictMode>
    <BrowserRouter basename={PUBLIC_URL}>
      <QueryClientProvider client={queryClient}>
        <Provider store={store}>
          <App />
          <ReactQueryDevtools />
        </Provider>
      </QueryClientProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();

// if (module.hot) {
//   module.hot.accept();
// }
