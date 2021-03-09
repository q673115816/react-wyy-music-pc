import React, { useState } from 'react';
import { setDialogReset } from '@/reducers/mask/actions';
import { useDispatch, useSelector } from 'react-redux';
import { IconBulb, IconMenu } from '@tabler/icons';
import HOCDialog from '../Dialog';
import './style.scss';

const ShareWX = () => {
  const dispatch = useDispatch();
  const { homeOrder } = useSelector(({ setting }) => setting);
  const [droper, setDroper] = useState(false);
  const handleDown = () => {
    setDroper(true);
  };
  const handleMove = () => {

  };
  const handleUp = () => {
    setDroper(false);
  };
  return (
    <div className="content">
      <div className="tips mx-10 text-gray-400 mb-6 flex items-center">
        <IconBulb size={14} />
        <span className="ml-1">
          想调整首页栏目的顺序?按住右边的按钮拖动即可
        </span>
      </div>
      <div className="flex flex-col relative">
        {
          homeOrder.map((order) => (
            <button
              type="button"
              key={order}
              className="hover:bg-gray-200"
              onMouseDown={handleDown}
            >
              <div className="border-b border-gray-200 flex h-12 items-center justify-between mx-10 text-base text-gray-600">
                <span>
                  {order}
                </span>
                <IconMenu className="cursor-move" />
              </div>
            </button>
          ))
        }
        {
          droper
        && (
        <div
          onMouseMove={handleMove}
          onMouseUp={handleUp}
          className="absolute inset-0"
        />
        )
        }
      </div>
      <div className="flex-center py-4">
        <button type="button" className="underline text-gray-400 block">恢复默认排序</button>
      </div>
      <div className="flex-center pt-4 pb-8 space-x-2">
        <button type="button" className="rounded-full ui_theme_bg_color text-white h-8 w-20">完成</button>
        <button
          type="button"
          className="border rounded-full h-8 w-20"
          onClick={() => dispatch(setDialogReset())}
        >
          取消

        </button>
      </div>
    </div>
  );
};

export default HOCDialog(ShareWX, 'dialogHomeOrder', '调整栏目顺序');
