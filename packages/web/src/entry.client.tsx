import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import { QueryClientProvider } from "@tanstack/react-query";

import { queryClient } from "./shared/query/client";
import reportWebVitals from "./reportWebVitals";
import App from "./App";

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

const container = document.getElementById("root") as HTMLDivElement;
const root = createRoot(container);
const basename = import.meta.env.BASE_URL.replace(/\/$/, "") || "/";
root.render(
  <QueryClientProvider client={queryClient}>
    <BrowserRouter basename={basename}>
      <App />
    </BrowserRouter>
  </QueryClientProvider>
);

reportWebVitals();

// if (module.hot) {
//   module.hot.accept();
// }
