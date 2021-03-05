import React, { memo, Suspense } from 'react';
import Router from '@/router';
import DomNav from './Nav';

export default memo(() =>
  // console.log('main');
  (
    <div className="dommain w-full flex flex-auto h-px">
      <DomNav />
      <div className="dommain_split" />
      <div className="dommain_right flex-auto w-0">
        <Suspense fallback={<div>loading</div>}>
          {/* <DomAi /> */}
          <Router />
        </Suspense>
      </div>
    </div>
  ));
