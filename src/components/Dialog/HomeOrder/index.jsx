import React, { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom'
import { setDialogReset } from '@/reducers/mask/actions';
import { setHomeOrder } from '@/reducers/setting/actions'
import { useDispatch, useSelector } from 'react-redux';
import { IconBulb, IconMenu } from '@tabler/icons';
import HOCDialog from '../Dialog';
import './style.scss';
import classNames from 'classnames';
import produce from 'immer'

const defaultOrder = ['推荐歌单', '独家放送', '最新音乐', '推荐MV', '主播电台', '看看'];
function swap(arr, index1, index2) {
  [arr[index1], arr[index2]] = [arr[index2], arr[index1]]
  return arr
}
const ShareWX = () => {
  const dispatch = useDispatch();
  const { homeOrder } = useSelector(({ setting }) => setting);
  const [tempHomeOrder, setTempHomeOrder] = useState(homeOrder)
  const [droper, setDroper] = useState(false);
  const [curr, setCurr] = useState('')
  const [top, setTop] = useState(0)
  const [startY, setStartY] = useState()
  const DomList = useRef()
  const RefIndex = useRef()
  const handleDown = (e, curr, index) => {
    setDroper(true);
    setCurr(curr)
    setStartY(e.clientY)
    RefIndex.current = index
  };


  const handleMove = (e) => {
    if (droper) {
      const apart = e.clientY - startY
      const { current: index } = RefIndex
      if (index <= 0 && apart <= 0) return false
      if (index >= tempHomeOrder.length - 1 && apart >= 0) return false
      if (apart >= 48 * (3 / 4)) {
        setStartY((prev) => prev + 48)
        setTempHomeOrder(produce((draft) => {
          [draft[index], draft[index + 1]] = [draft[index + 1], draft[index]]
        }))
        RefIndex.current += 1
        setTop(-48 * (1 / 4))
        return false
      }
      else if (apart <= -48 * (3 / 4)) {
        setStartY((prev) => prev - 48)
        setTempHomeOrder(produce((draft) => {
          [draft[index], draft[index - 1]] = [draft[index - 1], draft[index]]
        }))
        RefIndex.current -= 1
        setTop(48 * (1 / 4))
        return false
      }
      setTop(apart)
    }
  };

  const handleUp = () => {
    setDroper(false);
    setCurr('')
  };

  const handleReset = () => {
    setTempHomeOrder(defaultOrder)
  }

  const handleConfirm = () => {
    dispatch(setDialogReset())
    dispatch(setHomeOrder(tempHomeOrder))
  }

  return (
    <div className="content">
      <div className="tips mx-10 text-gray-400 mb-6 flex items-center">
        <IconBulb size={14} />
        <span className="ml-1">
          想调整首页栏目的顺序?按住右边的按钮拖动即可
        </span>
      </div>
      <div className="flex flex-col relative" ref={DomList}>
        {
          tempHomeOrder.map((order, index) => (
            <div key={order} className="h-12 text-base text-gray-500">
              <button
                type="button"
                className={classNames("w-full border-b hover:bg-gray-200 bg-white px-10 h-12 flex items-center", curr === order && 'absolute shadow z-10')}
                style={curr === order ? { transform: `translate(0, ${top}px)` } : null}
                onMouseDown={(e) => handleDown(e, order, index)}
              >
                {order}
                <IconMenu className="ml-auto cursor-move" />
              </button>
            </div>
          ))
        }
        {
          droper
          && createPortal(
            <div
              onMouseMove={handleMove}
              onMouseUp={handleUp}
              className="absolute inset-0 z-50"
            />, document.getElementById('help-root')
          )
        }
      </div>
      <div className="flex-center py-4">
        <button
          onClick={handleReset}
          type="button"
          className="underline text-gray-400 block">
          恢复默认排序
        </button>
      </div>
      <div className="flex-center pt-4 pb-8 space-x-2">
        <button
          onClick={handleConfirm}
          type="button"
          className="rounded-full ui_theme_bg_color text-white h-8 w-20">
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
    </div >
  );
};

export default HOCDialog(ShareWX, 'dialogHomeOrder', '调整栏目顺序');
