import React, { memo, useState } from 'react';
import {
  IconLayoutGrid,
  IconLayoutList,
  IconList,
} from '@tabler/icons';
import classNames from 'classnames';
import DomGrid from './Grid';
import DomList from './List';
import DomColumn from './Column';

const layouts = [
  ['grid', '大图模式', IconLayoutGrid],
  ['list', '列表模式', IconLayoutList],
  ['column', '图列模式', IconList],
];

const Mains = {
  grid: DomGrid,
  list: DomList,
  column: DomColumn,
};

export default memo(({ list = [], uid }) => {
  const [layout, setLayout] = useState('grid');
  return (
    <div className="pb-10">
      <div className="domUserDetail_headerBar flex items-center px-8 pb-4">
        <span className="name text-base font-bold">
          歌单
        </span>
        <div className="layouts ml-auto flex overflow-hidden rounded space-x-0.5">
          {
            layouts.map(([type, title, Ico]) => (
              <button
                key={type}
                type="button"
                className={classNames('layout bg-gray-100 h-5 w-6 flex-center', layout === type ? 'bg-gray-500 text-white' : 'hover:bg-gray-200')}
                onClick={() => setLayout(type)}
                title={title}
              >
                <Ico size={16} />
              </button>
            ))
          }
        </div>
      </div>
      {
        ((Layout) => <Layout list={list} uid={uid} />)(Mains[layout])
      }
    </div>
  );
});
