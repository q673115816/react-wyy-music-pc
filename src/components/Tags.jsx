import React from 'react';
import { Link } from 'react-router-dom';
import { IconPlayerPlay } from '@tabler/icons';
import classnames from 'classnames';

export default ({ item = {}, className = '' }) => (
  <div className={classnames('tags', className)}>
    {
        item.fee === 1
        && (
          <>
            <span className="TAG word">VIP</span>
            <span className="TAG word">试听</span>
          </>
        )
      }
    {
        item.privilege.maxbr === 999000
        && <span className="TAG">SQ</span>
      }
    {item.mv !== 0
        && (
          <Link className="TAG" to={`/player/mv/${item.mv}`}>
            MV
            <IconPlayerPlay size={8} className="fill-current" />
          </Link>
        )}
  </div>
);
