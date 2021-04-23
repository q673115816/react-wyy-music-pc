import React, {
  memo,
} from 'react';

import DomLeft from './components/Left';
import DomCenter from './components/Center';
import DomRight from './components/Right';
import './style.scss';

export default memo(() => (
  <div className="domfooter flex flex-none">
    <DomLeft />
    <DomCenter />
    <DomRight />
  </div>
));
