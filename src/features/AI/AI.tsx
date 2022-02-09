import React, {
  useState,
  memo,
  useEffect,
  MouseEventHandler,
  FC,
  useCallback,
} from "react";
import { IconFileImport, IconMicrophone } from "@tabler/icons";
import "./style.scss";
import { setToast } from "@/modules/reducers/mask/slice";
import IconRejected from "./Icon";
import Speech from "./Speech";
import { useAppDispatch } from "@/modules/hooks";

interface IProps {
  handleCallback: () => void;
}

const Wait = memo<IProps>(function Wait({ handleCallback }: IProps) {
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
        {time % 2 === 0 || time % 3 === 0 || time % 5 === 0
          ? "外部声源无法识别"
          : "正在识别电脑中正在播放的音乐"}
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
});

const Rejected = memo<FC<IProps>>(function Rejected({
  handleCallback,
}: IProps) {
  const dispatch = useAppDispatch();
  return (
    <div className="flex flex-col items-center">
      <IconRejected />
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
        onClick={() => dispatch(setToast("反馈成功，感谢您的反馈"))}
      >
        提交反馈
      </button>
    </div>
  );
});

export default memo(function AI() {
  const dispatch = useAppDispatch();
  const [listen, setListen] = useState(true);
  /**
   * 应该不会有成功吧？
   * TODO
   * speech
   */
  const handleRejected = useCallback(() => setListen(false), []);
  const handleFulfilled = useCallback(() => setListen(true), []);
  return (
    <div className="py-5 px-8 flex flex-col h-full relative">
      <Speech />
      <div className="domAi_header flex items-baseline">
        <div className="h1">听歌识曲</div>
        <button
          type="button"
          className="ml-auto flex items-center"
          onClick={() => dispatch(setToast("创建【听歌识曲】图标至桌面成功"))}
        >
          <IconFileImport size={16} stroke={1} />
          创建桌面快捷方式
        </button>
      </div>
      <div className="flex-auto flex-center">
        {listen ? (
          <Wait handleCallback={handleRejected} />
        ) : (
          <Rejected handleCallback={handleFulfilled} />
        )}
      </div>
    </div>
  );
});
