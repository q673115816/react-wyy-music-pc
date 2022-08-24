import React, { FC, memo, useEffect, useRef } from "react";

interface iProps {
  width: number;
  height: number;
  left: number;
  top: number;
  size: number;
  img: HTMLImageElement;
  ratio: number;
}

const Draw: FC<iProps> = ({ width, height, left, top, size, ratio, img }) => {
  const ref = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const { width: canvasWidth, height: canvasHeight } =
      ref.current as HTMLCanvasElement;
    const ctx = ref.current!.getContext("2d") as CanvasRenderingContext2D;
    ctx.drawImage(
      img,
      left / ratio,
      top / ratio,
      width / ratio,
      height / ratio,
      0,
      0,
      canvasWidth,
      canvasHeight
    );
  }, [width, height, left, top]);
  return (
    <canvas className={`border rounded`} width={size} height={size} ref={ref} />
  );
};

export default memo(Draw);
