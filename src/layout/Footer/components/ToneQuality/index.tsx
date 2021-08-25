import React, {memo} from 'react'
import classNames from "classnames";
import {useAppSelector} from "@/reducers/hooks";
import style from './style.module.scss'

type Rate = 128000 | 192000 | 320000 | 999000

const rates = {
  128000: '标准音质',
  192000: '较高音质',
  320000: '极高音质',
  999000: '无损音质',
};


export default memo(() => {
  const { currentSong } = useAppSelector(({ audio }) => audio);
  return (
    <div
      className={classNames(style.toneQuality, "absolute w-32 left-1/2 bottom-full transform -translate-x-1/2 -translate-y-4 bg-white flex flex-col whitespace-nowrap rounded-lg z-50")}>
      {
        currentSong?.privilege?.chargeInfoList
          .map(({rate}: {rate: Rate}) => (
            <button
              type="button"
              className={classNames('py-1 ui_text_gray_hover')}
              key={rate}
            >
              {rates[rate]}
            </button>
          ))
      }
    </div>
  )
})
