import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setDialogReset } from '@/reducers/mask/actions';
import DomCheckbox from '@/components/Checkbox';
import HOCDialog from '../Dialog';
import './style.scss';

const list = [
  ['标清', true],
  ['高清（需要2云贝）', false],
  ['超清（需要5云贝）', false],
];

export default () => {
  const dispatch = useDispatch();
  const { callback, dialogDownloadVideoVisibility } = useSelector(({ mask }) => mask);
  const handleConfirm = () => {
    callback();
    dispatch(setDialogReset());
  };
  if (!dialogDownloadVideoVisibility) return null;
  return (
    <HOCDialog id="dialogDownloadVideo" title="选择下载清晰度">
      <div className="content px-12 py-8">
        <div className="">
          {
            list.map(([label, state]) => (
              <div className="flex items-center" key={label}>
                <label htmlFor="">
                  <DomCheckbox />
                  {label}
                </label>
              </div>
            ))
          }
        </div>
        <div className="flex justify-center mt-10 space-x-4">
          <button type="button" className="w-20 h-8 rounded-full ui_theme_bg_color text-white" onClick={handleConfirm}>确定</button>
          <button type="button" className="w-20 h-8 rounded-full border hover:bg-gray-50" onClick={() => dispatch(setDialogReset())}>取消</button>
        </div>
      </div>
    </HOCDialog>
  );
};
