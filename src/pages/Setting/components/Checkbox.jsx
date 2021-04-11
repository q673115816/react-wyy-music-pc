import React from 'react';
import { IconCheck } from '@tabler/icons';
import DomCheckbox from '@/components/Checkbox';
import { setToast } from '@/reducers/mask/actions';
import { useDispatch } from 'react-redux';

export default ({ list = [], name = '', handle = () => { } }) => {
  const dispatch = useDispatch();
  return (
    <div className="domSetting_subBlock_content">
      {
      list.map(([item, checked, tips]) => (
        <div className="item leading-loose" key={item}>
          <label className="domSetting_check flex items-center" htmlFor={item}>
            <DomCheckbox name={item} onChange={() => dispatch(setToast('设置已更新'))} />
                  &nbsp;
            {/* <input
                    name={name}
                    type="checkbox"
                    id={item}
                    checked={checked}
                    onChange={() => handle(item)}
                  />
                  <i className="ico flex items-center justify-center mr-2">
                    <IconCheck size={12} />
                  </i> */}
            <span>{item}</span>
            {
              tips
              && (
                <span className="text-gray-400">
                  {`（${tips}）`}
                </span>
              )
            }
          </label>
        </div>
      ))
    }
    </div>
  );
};
