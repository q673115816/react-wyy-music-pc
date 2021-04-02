import React, { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom'
import { setDialogReset } from '@/reducers/mask/actions';
import { setHomeOrder } from '@/reducers/setting/actions'
import { useDispatch, useSelector } from 'react-redux';
import { IconBulb, IconMenu } from '@tabler/icons';
import HOCDialog from '../Dialog';
import './style.scss';
import classNames from 'classnames';

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
  const downY = useRef(0)
  const moveY = useRef(0)
  const [index, setIndex] = useState(-1)
  const [beforeIndex, setBeforeIndex] = useState(-1)
  const RefCurr = useRef()
  const [curr, setCurr] = useState('')
  const handleDown = (e, curr, index) => {
    setCurr(curr)
    setDroper(true);
    downY.current = e.clientY
    moveY.current = e.clientY
    setIndex(index)
  };

  const funcMoveUp = (e) => {
    downY.current -= RefCurr.current.clientHeight
    setIndex((prev) => {
      setBeforeIndex(prev)
      return prev + 1
    })
  }

  const funcMoveDown = (e) => {
    downY.current += RefCurr.current.clientHeight
    setIndex((prev) => {
      setBeforeIndex(prev)
      return prev - 1
    })
  }

  const handleMove = (e) => {
    moveY.current = e.clientY
    if (moveY.current - downY.current > (RefCurr.current.clientHeight >> 1)) {
      funcMoveUp(e)
    } else if (moveY.current - downY.current < -(RefCurr.current.clientHeight >> 1)) {
      funcMoveDown(e)
    }
  };

  const handleUp = () => {
    setDroper(false);
    setCurr('')
  };

  useEffect(() => {
    if (beforeIndex === -1) return false
    setTempHomeOrder((prev) => {
      return swap([...prev], beforeIndex, index)
    })
  }, [beforeIndex, index])

  const handleReset = () => {
    setTempHomeOrder(defaultOrder)
  }

  const handleConfirm = () => {
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
      <div className="flex flex-col relative">
        {
          tempHomeOrder.map((order, index) => (
            <button
              ref={curr === order ? RefCurr : null}
              type="button"
              key={order}
              className={classNames("hover:bg-gray-200 transform bg-white", curr === order && 'shadow z-10')}
              style={curr === order ? { transform: `translate(0, ${moveY - downY}px)` } : null}
              onMouseDown={(e) => handleDown(e, order, index)}
            >
              <div className="border-b h-12 flex items-center mx-10 text-base text-gray-500">
                <span>
                  {order}
                </span>
                <IconMenu className="ml-auto cursor-move" />
              </div>
            </button>
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
