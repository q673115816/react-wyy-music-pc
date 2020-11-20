import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import { Provider } from "react-redux";
import store from "./redux/store";
import "./styles/index.scss";
import DomWrapper from "./components/Wrapper";
import DomHeader from "./components/Header";
import DomMain from "./components/Main";
import DomFooter from "./components/Footer";
import useDrop from "./custom/useDrop";
export default () => {
  const { mousedown, x, y, Drag, dragger } = useDrop();

  return (
    <Provider store={store}>
      <Router>
        <DomWrapper {...{ x, y }}>
          <DomHeader {...{ mousedown }} />
          <DomMain />
          <DomFooter />
        </DomWrapper>
        {dragger && Drag}
      </Router>
    </Provider>
  );
};
