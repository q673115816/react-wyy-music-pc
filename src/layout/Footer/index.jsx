import React, {
  useState, useRef, useEffect, memo,
} from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  IconArrowsSplit2,
  IconPlayerSkipBack,
  IconPlayerPlay,
  IconPlayerPause,
  IconPlayerSkipForward,
  IconArrowsDiagonal,
  IconHeart,
} from '@tabler/icons';

import DomLeft from './components/Left';
import DomCenter from './components/Center';
import DomRight from './components/Right';

export default memo(() => (
  <div className="domfooter flex flex-none">
    <DomLeft />
    <DomCenter />
    <DomRight />
  </div>
));
