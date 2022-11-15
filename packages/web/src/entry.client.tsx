import React, { ReactNode, StrictMode, useState } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter, MemoryRouter, Router } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";

import { persistor, store } from "./modules/store";
import reportWebVitals from "./reportWebVitals";
import App from "./App";
import {
  Action,
  BrowserHistory,
  createBrowserHistory,
  Location,
} from "history";

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

// if('serviceWorker' in navigator) {
//     navigator.serviceWorker.register('./sw.js')
//         .then( registration => {
//             console.log('ServiceWorker registration successful with scope: ', registration.scope);
//         })
//         .catch( err => console.log('ServiceWorker registration failed: ', err));
// }

interface CustomRouterProps {
  basename?: string;
  children?: ReactNode;
  history: BrowserHistory;
}

interface CustomRouterState {
  action: Action;
  location: Location;
}

const history = createBrowserHistory();

const CustomRouter = ({ basename, children, history }: CustomRouterProps) => {
  const [state, setState] = useState<CustomRouterState>({
    action: history.action,
    location: history.location,
  });

  React.useLayoutEffect(
    () =>
      history.listen(({ action, location }) => {
        // console.log("action: ", action);
        setState({ action, location });
      }),
    [history]
  );

  return (
    <Router
      basename={basename}
      children={children}
      location={state.location}
      navigationType={state.action}
      navigator={history}
    />
  );
};

const container = document.getElementById("root") as HTMLDivElement;
const root = createRoot(container);
root.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <CustomRouter history={history}>
        <App />
      </CustomRouter>
    </PersistGate>
  </Provider>
);

reportWebVitals();

// if (module.hot) {
//   module.hot.accept();
// }
