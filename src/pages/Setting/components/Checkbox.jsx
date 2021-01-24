import React from 'react';
import { IconCheck } from '@tabler/icons';

export default ({ list = [], name = '', handle = () => {} }) => (
  <div className="domSetting_subBlock_content">
    {
            list.map(([item, checked, tips]) => (
              <div className="item leading-loose">
                <label className="domSetting_check flex items-center" htmlFor={item}>
                  <input
                    name={name}
                    type="checkbox"
                    id={item}
                    checked={checked}
                    onChange={() => handle(item)}
                  />
                  <i className="ico flex items-center justify-center mr-2">
                    <IconCheck size={12} />
                  </i>
                  <span>{item}</span>
                  {
                            tips
                            && (
                            <span className="text-gray-400">
                              （
                              {tips}
                              ）
                            </span>
                            )
                        }
                </label>
              </div>
            ))
        }
  </div>
);
