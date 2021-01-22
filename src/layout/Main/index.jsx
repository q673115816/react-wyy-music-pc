import React from 'react';
import { useSelector } from 'react-redux';
import Router from '@/router';
import DomNav from './Nav';

export default () => (
  <div className="dommain">
    <DomNav />
    <div className="dommain_split" />
    <div className="dommain_right">
      <Router />
    </div>
  </div>
);
