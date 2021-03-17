import React from 'react';
import { IconChevronRight, IconChevronLeft } from '@tabler/icons';
import classNames from 'classnames';
import {
  useHistory, NavLink, useParams,
} from 'react-router-dom';

export default ({ total }) => {
  const { push } = useHistory();
  const { page } = useParams();
  return (
    <div className="flex items-center justify-center pt-10 pb-10 space-x-1">
      <button
        type="button"
        onClick={() => Number(page) !== 1 && push(`./${Number(page) - 1}`)}
        className={classNames('border w-6 h-6 flex-center rounded', Number(page) === 1 ? 'cursor-auto text-gray-500' : 'hover:bg-gray-200')}
      >
        <IconChevronLeft size={12} />
      </button>
      {
      [...Array(total).keys()].map((item) => (
        <NavLink
          key={item}
          activeClassName="ui_theme_bg_color text-white"
          className="border hover:bg-gray-200 w-6 h-6 flex-center rounded"
          to={`${item + 1}`}
        >
          {item + 1}
        </NavLink>
      ))
    }
      <button
        type="button"
        onClick={() => Number(page) !== total && push(`./${Number(page) + 1}`)}
        className={classNames('border w-6 h-6 flex-center rounded', Number(page) === total ? 'cursor-auto text-gray-500' : 'hover:bg-gray-200')}
      >
        <IconChevronRight size={12} />
      </button>
    </div>
  );
};
