import React, {
  memo,
} from 'react';

import Left from './components/Left';
import Center from './components/Center';
import Right from './components/Right';
import './style.scss';

export default memo(() => (
  <div className="domfooter flex flex-none">
    <Left />
    <Center />
    <Right />
  </div>
));
