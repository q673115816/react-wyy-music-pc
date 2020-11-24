import React from "react";

import DomLeft from './Left'
import Router from '@/Router'

export default () => {
  return (
    <div className="dommain">
      <DomLeft />
      <div className="dommain_split"></div>
      <div className="dommain_right">
        <Router />
      </div>
    </div>
  );
};
