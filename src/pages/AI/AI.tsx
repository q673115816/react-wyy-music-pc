import React, {
  useState, memo, useEffect,
} from 'react';
import { IconFileImport, IconMicrophone } from '@tabler/icons';
import './style.scss';
import { useDispatch } from 'react-redux';
import { setToast } from '@/reducers/mask/actions';

type IProps = { handleCallback: () => void }

const DomWait = ({ handleCallback }: IProps) => {
  const [time, setTime] = useState(15);
  useEffect(() => {
    const id = setTimeout(() => {
      if (time > 1) {
        setTime(time - 1);
      } else {
        handleCallback();
      }
    }, 1000);
    return () => {
      clearTimeout(id);
    };
  }, [time]);
  return (
    <div className="flex flex-col items-center">
      <div id="ai_work" className="p-32 relative">
        <div className="flex-center rounded-full text-white bg-red-500 w-32 h-32">
          <IconMicrophone size={64} />
        </div>
      </div>
      <div>
        {
          (time % 2 === 0 || time % 3 === 0 || time % 5 === 0)
            ? '外部声源无法识别'
            : '正在识别电脑中正在播放的音乐'
        }
        {`(${time}s)`}
      </div>
      <button
        type="button"
        className="mt-4 text-base hover:bg-gray-100 rounded border h-10 w-28"
        onClick={handleCallback}
      >
        停止识别
      </button>
    </div>
  );
};

const DomRejected = ({ handleCallback }: IProps) => {
  const dispatch = useDispatch();
  return (
    <div className="flex flex-col items-center">
      <svg viewBox="0 0 1024 1024" width="256" height="256" className="mb-4">
        <path d="M512 512m-512 0a512 512 0 1 0 1024 0 512 512 0 1 0-1024 0Z" fill="#FD8469" />
        <path d="M110.462992 829.68189C203.993701 948.207874 349.127559 1024 512 1024s307.2-75.792126 401.537008-194.31811H110.462992z" fill="#F1543F" />
        <path d="M586.179528 817.587402l14.513385-89.499213h-177.385826l14.513385 89.499213z" fill="#FFFFFF" p-id="17925" />
        <path d="M595.855118 759.533858l4.837795-31.445669h-177.385826l4.837795 31.445669z" fill="#E6E9EE" />
        <path d="M815.974803 740.182677H208.025197c-12.900787 0-23.382677-10.48189-23.382677-23.382677V278.979528c0-12.900787 10.48189-23.382677 23.382677-23.382678h608.755905c12.900787 0 23.382677 10.48189 23.382678 23.382678v437.014173c0 12.900787-10.48189 24.188976-24.188977 24.188976z" fill="#FFFFFF" />
        <path d="M227.376378 298.330709h569.247244v351.546456H227.376378z" fill="#84DBFF" />
        <path d="M227.376378 298.330709h569.247244v8.062992H227.376378z" fill="#54C0EB" />
        <path d="M635.36378 829.68189H388.63622v-12.094488c0-12.900787 10.48189-22.576378 22.576378-22.576378h200.768504c12.900787 0 22.576378 10.48189 22.576378 22.576378v12.094488h0.8063z" fill="#E6E9EE" />
        <path d="M512 690.998425m-25.801575 0a25.801575 25.801575 0 1 0 51.60315 0 25.801575 25.801575 0 1 0-51.60315 0Z" fill="#E6E9EE" />
        <path d="M681.322835 553.927559H362.834646c-6.450394 0-12.094488-5.644094-12.094489-12.094488v-166.097638c0-6.450394 5.644094-12.094488 12.094489-12.094488h318.488189c6.450394 0 12.094488 5.644094 12.094488 12.094488v166.097638c0 6.450394-5.644094 12.094488-12.094488 12.094488z" fill="#E6E9EE" />
        <path d="M375.735433 385.411024h292.686614v13.707086H375.735433zM375.735433 418.469291h292.686614v13.707087H375.735433zM375.735433 452.333858h292.686614v13.707087H375.735433zM375.735433 485.392126h292.686614v13.707087H375.735433zM375.735433 518.450394h166.097638v13.707086h-166.097638z" fill="#CED5E0" p-id="17933" />
        <path d="M683.741732 610.368504l24.995276-24.995276-50.796851-51.603149 41.12126-24.188977-108.044094-17.738582 17.738583 108.044094 24.188976-41.12126z" fill="#324A5E" />
      </svg>
      <div className="text-base">
        未识别出音乐，仅支持当前电脑正在播放的音乐
      </div>
      <button
        type="button"
        className="text-sm ui_theme_bg_color text-white py-2 px-6 rounded mt-4"
        onClick={handleCallback}
      >
        重新识别
      </button>
      <button
        type="button"
        className="mt-3 text-blue-400 text-sm"
        onClick={() => dispatch(setToast('反馈成功，感谢您的反馈'))}
      >
        提交反馈
      </button>
    </div>
  );
};

export default memo(() => {
  const dispatch = useDispatch();
  const [listen, setListen] = useState(true);
  /**
   * 应该不会有成功吧？
   */
  return (
    <div className="domAi py-5 px-8 flex flex-col h-full">
      <div className="domAi_header flex justify-between items-baseline">
        <div className="h1">听歌识曲</div>
        <button
          type="button"
          className="flex items-center"
          onClick={() => dispatch(setToast('创建【听歌识曲】图标至桌面成功'))}
        >
          <IconFileImport size={16} stroke={1} />
          创建桌面快捷方式
        </button>
      </div>
      <div className="flex-auto domAi_main flex items-center justify-center">
        {
          listen
            ? <DomWait handleCallback={() => setListen(false)} />
            : <DomRejected handleCallback={() => setListen(true)} />
        }
      </div>
    </div>
  );
});
