import React from 'react';
import { useSelector } from 'react-redux';
import Router from '@/Router';
import DomLeft from './Left';

export default () => (
  <div className="dommain">
    <DomLeft />
    <div className="dommain_split" />
    <div className="dommain_right">
      <Router />
    </div>
  </div>
);
