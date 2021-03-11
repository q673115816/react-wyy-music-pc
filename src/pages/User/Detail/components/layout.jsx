import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  IconEdit,
  IconCheck,
  IconMail,
  IconPlus,
  IconPlayerPlay,
  IconLayoutGrid,
  IconLayoutList,
  IconList,
  IconLock,
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
  grid: (list) => <DomGrid list={list} />,
  list: (list) => <DomList list={list} />,
  column: (list) => <DomColumn list={list} />,
};

export default ({ list = [] }) => {
  const [layout, setLayout] = useState('list');
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
      {Mains[layout](list)}
    </div>
  );
};
