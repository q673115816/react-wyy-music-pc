import React, { memo, useEffect, useRef } from "react";
import HOCDialog from "../Dialog";
import "./style.scss";
import { useAppSelector } from "@/modules/hooks";
import { maskSelector } from "@/modules/reducers/mask/slice";
import { concatAll, filter, fromEvent, map, takeUntil } from "rxjs";
import { useGetSetState } from "react-use";
import { clamp } from "lodash";

const wrapperSize = 224;
const initialSize = 100;

const createState = (size = initialSize) => ({
  max: size,
  width: size,
  height: size,
  left: wrapperSize / 2 - size / 2,
  top: wrapperSize / 2 - size / 2,
});

const UploadAvatar = () => {
  const [getOriginState, setOriginState] = useGetSetState(createState());
  const { dialogUploadAvatarVisibility, avatar } = useAppSelector(maskSelector);
  const coverRef = useRef<HTMLDivElement>(null);
  const resizeRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const image = new Image();
    image.src = avatar;
    image.onload = (event) => {
      const { width, height } = image;
      const max = Math.max(width, height);
      let min = Math.min(width, height);
      const rotate = wrapperSize / max;
      if (rotate < 1) min *= rotate;
      setOriginState(createState(min));
      // setOriginState((draft) => {
      //   draft.width = image.width;
      //   draft.height = image.height;
      // });
    };
  }, [avatar]);

  const registerDrag = () => {
    const el = coverRef.current;
    if (!el)
      return {
        unsubscribe: () => void 0,
      };
    const mouseDown$ = fromEvent<MouseEvent>(el, "mousedown");
    const mouseMove$ = fromEvent<MouseEvent>(document, "mousemove");
    const mouseUp$ = fromEvent<MouseEvent>(document, "mouseup");

    return mouseDown$
      .pipe(
        filter((e) => {
          return e.target === el;
        }),
        map((e) => {
          return {
            startX: e.clientX,
            startY: e.clientY,
            left: getOriginState().left,
            top: getOriginState().top,
          };
        }),
        map(({ startX, startY, left, top }) =>
          mouseMove$.pipe(
            takeUntil(mouseUp$),
            map((moveEvent) => ({
              left: clamp(
                left + moveEvent.clientX - startX,
                0,
                wrapperSize - getOriginState().width
              ),
              top: clamp(
                top + moveEvent.clientY - startY,
                0,
                wrapperSize - getOriginState().height
              ),
            }))
          )
        ),
        concatAll()
      )
      .subscribe({
        next: (data) => {
          setOriginState(data);
        },
      });
  };
  const registerResize = () => {
    const el = resizeRef.current;
    if (!el) {
      return {
        unsubscribe: () => null,
      };
    }
    const mouseDown$ = fromEvent<MouseEvent>(el, "mousedown");
    const mouseMove$ = fromEvent<MouseEvent>(document, "mousemove");
    const mouseUp$ = fromEvent<MouseEvent>(document, "mouseup");

    return mouseDown$
      .pipe(
        map((e) => {
          return {
            startX: e.clientX,
            startY: e.clientY,
            width: getOriginState().width,
            height: getOriginState().height,
          };
        }),
        map(({ startX, startY, width, height }) =>
          mouseMove$.pipe(
            takeUntil(mouseUp$),
            map((moveEvent) => ({
              width: clamp(
                width + moveEvent.clientX - startX,
                10,
                wrapperSize - getOriginState().left
              ),
              height: clamp(
                height + moveEvent.clientY - startY,
                10,
                wrapperSize - getOriginState().top
              ),
            }))
          )
        ),
        concatAll()
      )
      .subscribe({
        next: (data) => {
          setOriginState(data);
        },
      });
  };
  // useEffect(() => {
  //   const subscribedDrag = registerDrag();
  //   const subscribedResize = registerResize();
  //   return () => {
  //     subscribedDrag.unsubscribe();
  //     subscribedResize.unsubscribe();
  //   };
  // }, [dialogUploadAvatarVisibility]);

  useEffect(() => {
    const el = canvasRef.current;
    if (!el) return;
    const ctx = el.getContext("2d");
  }, []);

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
              <canvas className={`absolute inset-0 w-full h-full`} />
              {/*<div
                ref={coverRef}
                className={`border border-dashed absolute cursor-move`}
                style={{ ...getOriginState() }}
              >
                <div
                  ref={resizeRef}
                  className={`absolute bottom-0 right-0 w-2 h-2 cursor-se-resize border border-dashed`}
                />
              </div>*/}
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
