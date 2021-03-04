import React, { useState } from 'react';

import classnames from 'classnames';
import { useParams, Redirect } from 'react-router-dom';
import {
  IconLayoutGrid,
  IconList,
  IconLayout,
} from '@tabler/icons';
import './style.scss';

import DomAlbum from './Album';
import DomMV from './MV';
import DomDetail from './Detail';
import DomSimilarity from './Similarity';
import DomHeader from './components/Header';

const nav = [
  '专辑',
  'MV',
  '歌手详情',
  '相似歌手',
];

const layouts = [
  ['grid', IconLayoutGrid],
  ['list', IconList],
  ['column', IconLayout],
];

export default () => {
  const { id } = useParams();
  if (!/^\d*$/.test(id)) {
    return <Redirect to="/" />;
  }
  const [tab, setTab] = useState('专辑');
  const [view, setView] = useState('column');
  return (
    <div className="domArtist overflow-auto max-h-full flex-auto">
      <DomHeader />
      <div className="domArtist_main">
        <div className="domArtist_nav flex mx-8">
          <div className="flex space-x-4 text-sm">
            {
              nav.map((item) => (
                <button
                  key={item}
                  onClick={() => setTab(item)}
                  type="button"
                  className={classnames('domArtist_nav_link', { on: tab === item })}
                >
                  {item}
                </button>
              ))
            }
          </div>
          {
            tab === '专辑'
          && (
          <div className="actions ml-auto space-x-0.5 flex rounded-sm overflow-hidden">
            {
              layouts.map(([layout, Icon]) => (
                <button
                  key={layout}
                  type="button"
                  className={classnames('px-1.5 py-0.5 bg-gray-200', 'handle', { 'bg-gray-300 text-white': view === layout })}
                  onClick={() => setView(layout)}
                >
                  <Icon size={14} stroke={1} />
                </button>
              ))
            }
          </div>
          )
          }
        </div>
        {
          tab === '专辑'
          && <DomAlbum id={id} view={view} />
        }
        {
          tab === 'MV'
          && <DomMV id={id} />
        }
        {
          tab === '歌手详情'
          && <DomDetail id={id} />
        }
        {
          tab === '相似歌手'
          && <DomSimilarity id={id} />
        }

      </div>
    </div>
  );
};
