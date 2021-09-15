import React, {useState, memo} from 'react';
import { setDialogReset } from '@/reducers/mask/slice';
import { setHomeOrder ,defaultOrder } from '@/reducers/setting/slice';
import { useAppDispatch, useAppSelector } from '@/reducers/hooks';
import { IconBulb } from '@tabler/icons';
import './style.scss';
import HOCDialog from '../Dialog';
import Actions from './Actions';

export default memo(() => {
  const dispatch = useAppDispatch();
  const { dialogHomeOrderVisibility } = useAppSelector(({ mask }) => mask);
  const { homeOrder } = useAppSelector(({ setting }) => setting);
  const [tempHomeOrder, setTempHomeOrder] = useState(homeOrder);

  const handleReset = () => {
    setTempHomeOrder(defaultOrder);
  };

  const handleConfirm = () => {
    dispatch(setDialogReset());
    dispatch(setHomeOrder(tempHomeOrder));
  };

  if (!dialogHomeOrderVisibility) return null;
  return (
    <HOCDialog id="dialogHomeOrder" title="调整栏目顺序">
      <div className="content">
        <div className="tips mx-10 text-gray-400 mb-6 flex items-center">
          <IconBulb size={14} />
          <span className="ml-1">
            想调整首页栏目的顺序?按住右边的按钮拖动即可
          </span>
        </div>
        <Actions order={tempHomeOrder}/>
        <div className="flex-center py-4">
          <button
            onClick={handleReset}
            type="button"
            className="underline text-gray-400 block"
          >
            恢复默认排序
          </button>
        </div>
        <div className="flex-center pt-4 pb-8 space-x-2">
          <button
            onClick={handleConfirm}
            type="button"
            className="rounded-full ui_theme_bg_color text-white h-8 w-20"
          >
            完成
          </button>
          <button
            type="button"
            className="border rounded-full h-8 w-20"
            onClick={() => dispatch(setDialogReset())}
          >
            取消
          </button>
        </div>
      </div>
    </HOCDialog>
  );
});
