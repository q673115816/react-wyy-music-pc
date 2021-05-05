import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';

const layouts = {
  '--grid-template-columns': '60px 5fr 2fr',
};

export default ({ djRadios = [] }) => (
  <div className="djRadios_list _list" style={layouts}>
    {
      djRadios.map((item, index) => (
        <div className={classNames('item grid items-center hover:bg-gray-100', { 'bg-gray-50': index % 2 === 0 })} key={item.id}>
          <Link
            to={`/playlist/dj/${item.id}`}
            className="cover"
          >
            <img className="" src={`${item.picUrl}?param=60y60`} alt="" />
          </Link>
          <div className="px-5">
            <Link
              to={`/playlist/dj/${item.id}`}
              className="name"
            >
              {item.name}
            </Link>
          </div>
          <div className="dj text-gray-300">
            by
            &nbsp;
            <Link
              to={`/user/${item.dj.userId}`}
              className="ui_text_gray_hover"
            >
              {item.dj.nickname}
            </Link>
          </div>
        </div>
      ))
    }
  </div>
);
