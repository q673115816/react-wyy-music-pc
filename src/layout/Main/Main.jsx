import React, { memo, Suspense } from 'react';
import Router from '@/router';
import DomLoading from '@/components/Loading';
import DomNav from './Nav';
import './style.scss';

export default memo(() =>
  // console.log('main');
  (
    <div className="dommain w-full flex flex-auto h-px">
      <div>
        <DomNav />
      </div>
      <div className="dommain_split" />
      <div className="dommain_right flex-auto w-0">
        <Suspense fallback={<div className="flex-center w-full h-full"><DomLoading /></div>}>
          {/* <DomAi /> */}
          <Router />
        </Suspense>
      </div>
    </div>
  ));
