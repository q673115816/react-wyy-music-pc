import React, { memo, lazy, Suspense } from 'react';
import Router from '@/router';
// import DomAi from '@/pages/Ai';
import DomNav from './Nav';

// const DomAi = lazy(() => import(/* webpackChunkName: "Ai" */'@/pages/Ai'));

export default () =>
  // console.log('main');
  (
    <div className="dommain w-full flex flex-auto h-px">
      <DomNav />
      <div className="dommain_split" />
      <div className="dommain_right h-full flex-auto min-w-0 relative">
        <Suspense fallback={<div>loading</div>}>
          {/* <DomAi /> */}
          <Router />
        </Suspense>
      </div>
    </div>
  );
