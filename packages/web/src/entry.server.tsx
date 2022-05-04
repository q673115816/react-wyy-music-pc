import React from "react";
import { hydrateRoot } from "react-dom/client";
import ReactDOMServer from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";

import App from "./App";
const container = document.getElementById("root");
export function render(url: string) {
  return ReactDOMServer.renderToString(
    <React.StrictMode>
      <StaticRouter location={url}>
        <App />
      </StaticRouter>
    </React.StrictMode>
  );
}
