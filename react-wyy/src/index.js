import React from "react";
import ReactDOM from "react-dom";

import App from "./App";

// const App = () => <div>he1llo11 asd22world!</div>
const rootElement = document.getElementById("root");

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  rootElement
);
