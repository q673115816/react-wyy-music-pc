import React from 'react';
import { useSelector } from 'react-redux';
import Router from '@/router';
import DomNav from './Nav';

export default () => (
  <div className="dommain">
    <DomNav />
    <div className="dommain_split" />
    <div className="dommain_right h-full flex-auto min-w-0 relative">
      <Router />
    </div>
  </div>
);
