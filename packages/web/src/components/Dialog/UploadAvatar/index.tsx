import React, { memo, useEffect, useLayoutEffect, useRef } from "react";
import HOCDialog from "../Dialog";
import "./style.scss";
import { useAppSelector } from "@/modules/hooks";
import { maskSelector } from "@/modules/reducers/mask/slice";
import { useImmer } from "use-immer";
import { concatAll, fromEvent, map, takeUntil, withLatestFrom } from "rxjs";
import success from "@/components/Dialog/Login/Scan/Success";

const wrapperSize = 224;

const UploadAvatar = () => {
  const [originState, setOriginState] = useImmer(() => {
    const initialSize = 100;
    return {
      width: initialSize,
      height: initialSize,
      left: wrapperSize / 2 - initialSize / 2,
      top: wrapperSize / 2 - initialSize / 2,
    };
  });
  const { dialogUploadAvatarVisibility, avatar } = useAppSelector(maskSelector);
  const coverRef = useRef(null);
  useEffect(() => {
    const image = new Image();
    image.src = avatar;
    image.onload = (event) => {
      // setOriginState((draft) => {
      //   draft.width = image.width;
      //   draft.height = image.height;
      // });
    };
  }, [avatar]);

  useEffect(() => {
    const el = coverRef.current;
    if (!el) return;
    const mouseDown$ = fromEvent(el, "mousedown");
    const mouseMove$ = fromEvent(document, "mousemove");
    const mouseUp$ = fromEvent(document, "mouseup");
    const subscribe = mouseDown$
      .pipe(
        map(() => mouseMove$.pipe(takeUntil(mouseUp$))),
        concatAll(),
        withLatestFrom(mouseDown$, (move, down) => {
          console.log(move, down);
          return { x: 0, y: 0 };
        })
      )
      .subscribe({
        next: ({ x, y }) => {
          console.log(x, y);
        },
      });
    return () => {
      subscribe.unsubscribe();
    };
  }, [dialogUploadAvatarVisibility]);

  if (!dialogUploadAvatarVisibility) return null;
  return (
    <HOCDialog id="dialogUploadAvatar" title="上传头像">
      <div className="">
        <div className="flex justify-center">
          <div className="bg-black rounded overflow-hidden">
            {/* <span className="">请选择不超过5M的图片</span> */}
            {/*<img className="w-full h-full object-contain" src={avatar} alt="" />*/}
            <div
              className={`relative`}
              style={{ height: wrapperSize, width: wrapperSize }}
            >
              <img
                className={`object-scale-down w-full h-full`}
                src={avatar}
                alt=""
              />
              <div
                ref={coverRef}
                className={`border border-dashed absolute cursor-move`}
                style={{
                  width: originState.width,
                  height: originState.height,
                  top: originState.top,
                  left: originState.left,
                }}
              ></div>
            </div>
          </div>
          <div className="ml-8">
            <div
              className="border rounded w-24 h-24 bg-cover"
              style={{ backgroundImage: `url(${avatar})` }}
            ></div>
            <div className="text-gray-400 mt-1">大尺寸封面</div>
            <div className="border rounded w-16 h-16">
              <img src={avatar} alt="" />
            </div>
            <div className="text-gray-400 mt-1">小尺寸封面</div>
          </div>
        </div>
        <div className="pb-4 pt-6 gap-x-4 flex justify-center">
          <button
            type="button"
            className="flex-center border px-3 h-8 rounded-full"
          >
            重新选择
          </button>
          <button
            type="button"
            className="flex-center text-white ui_theme_bg_color px-3 h-8 rounded-full"
          >
            保持并关闭
          </button>
        </div>
      </div>
    </HOCDialog>
  );
};
export default memo(UploadAvatar);
