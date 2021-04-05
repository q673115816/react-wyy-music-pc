import React from 'react';
import { Link } from 'react-router-dom';
import { IconPlayerPlay } from '@tabler/icons';
import classNames from 'classnames';
import DomBox from './Box';

export default ({ item = {}, className = '', sq = false, mv = item.mv }) => (
  <div className={classNames('tags flex-none pl-1', className)}>
    {
      item.fee === 1
      && (
        <>
          <DomBox text="VIP" />
          <DomBox text="试听" />
        </>
      )
    }
    {
      (sq || item.maxbr === 999000 || item.privilege?.maxbr === 999000)
      && <DomBox text="SQ" />
    }
    {mv > 0
      && (
        <Link className="TAG" to={`/player/mv/${mv}`}>
          <DomBox text="MV" />
        </Link>
      )}
  </div>
);
