import React from 'react';
import classnames from 'classnames';

export default ({
  list = [], checked = '', name = '', handle = () => { },
  row = false,
}) => (
  <div className={classnames('domSetting_subBlock_content', { flex: row })}>
    {
      list.map((item) => (
        <div className={classnames('item leading-loose', { 'mr-6': row })} key={item}>
          <label className="domSetting_radio flex items-center" htmlFor={item}>
            <input
              id={item}
              name={name}
              type="radio"
              checked={checked === item}
              onChange={() => handle(item)}
            />
            <i className="ico flex items-center justify-center mr-2" />
            <span>{item}</span>
          </label>
        </div>
      ))
    }
  </div>
);
