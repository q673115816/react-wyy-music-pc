import React, {
  ChangeEventHandler,
  FC,
  memo,
  useEffect,
  useMemo,
  useState,
} from "react";
import Dialog from "../Dialog";
import { useDrag } from "@use-gesture/react";
import { useGetSetState } from "react-use";
import Draw from "./Draw";
import { usePostAvatarUploadMutation } from "@/modules/services/account";

const wrapperSize = 224;
const initialSize = 100;

interface iProps {
  handleUpload: ChangeEventHandler<HTMLInputElement>;
  file: File;
}

const UploadAvatar: FC<iProps> = ({ handleUpload, file }) => {
  const [avatar, setAvatar] = useState();
  const [getMaskState, setMaskState] = useGetSetState({
    width: wrapperSize,
    height: wrapperSize,
  });
  const { mutateAsync: UploadPost, isPending: isLoading } =
    usePostAvatarUploadMutation();
  const createState = (size = initialSize, ratio = 1) => {
    return {
      size,
      ratio,
      max: size,
      width: size,
      height: size,
      left: getMaskState().width / 2 - size / 2,
      top: getMaskState().height / 2 - size / 2,
    };
  };
  const [getOriginState, setOriginState] = useGetSetState(createState());
  const imageRef = useMemo(() => {
    const image = new Image();
    image.src = avatar;
    image.onload = (event) => {
      const { width, height } = image;
      const max = Math.max(width, height);
      let min = Math.min(width, height);
      const ratio = Math.min(1, wrapperSize / max);
      if (ratio < 1) min *= ratio;
      setMaskState({
        width: ratio * width,
        height: ratio * height,
      });
      setOriginState(createState(min, ratio));
    };
    return image;
  }, [avatar]);

  useEffect(() => {
    const render = new FileReader();
    render.readAsDataURL(file);
    render.onload = (event) => {
      setAvatar(event.target.result);
    };
  }, [file]);

  const handleSubmit = async () => {
    const param = new FormData();
    const { ratio, width, left, top } = getOriginState();

    param.append("imgFile", file);
    param.append("imgSize", (width / ratio) | 0);
    param.append("imgX", (left / ratio) | 0);
    param.append("imgY", (top / ratio) | 0);
    try {
      await UploadPost(param);
    } catch (error) {
      console.log(error);
    }
  };

  const bindCover = useDrag(({ first, movement: [mx, my], memo, event }) => {
    if ((event.target as HTMLElement).closest("[data-resize]")) return;
    const start = memo ?? {
      left: getOriginState().left,
      top: getOriginState().top,
    };
    if (!first) {
      setOriginState({
        left: Math.min(
          Math.max(start.left + mx, 0),
          getMaskState().width - getOriginState().width
        ),
        top: Math.min(
          Math.max(start.top + my, 0),
          getMaskState().height - getOriginState().height
        ),
      });
    }
    return start;
  });

  const bindResize = useDrag(({ first, movement: [mx, my], memo }) => {
    const start = memo ?? {
      width: getOriginState().width,
      height: getOriginState().height,
    };
    if (!first) {
      const nextWidth = Math.min(
        Math.max(start.width + mx, 16),
        getMaskState().width - getOriginState().left
      );
      const nextHeight = Math.min(
        Math.max(start.height + my, 16),
        getMaskState().height - getOriginState().top
      );
      const min = Math.min(nextWidth, nextHeight);
      setOriginState({ width: min, height: min });
    }
    return start;
  });

  return (
    <Dialog title="上传头像">
      <div className="">
        <div className="flex justify-center">
          <div className="bg-black rounded overflow-hidden">
            {file.size > 1024 * 1024 * 5 && (
              <span className="text-red-500">请选择不超过5M的图片</span>
            )}
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
                className={`absolute inset-0 m-auto`}
                style={{ ...getMaskState() }}
              >
                <div
                  {...bindCover()}
                  className={`border border-dashed absolute cursor-move border-green-400`}
                  style={{ ...getOriginState() }}
                >
                  <div
                    {...bindResize()}
                    data-resize
                    className={`absolute bottom-0 right-0 w-2 h-2 cursor-se-resize bg-black`}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="ml-8">
            <Draw {...getOriginState()} size={100} img={imageRef} />
            <div className="text-gray-400 mt-1">大尺寸封面</div>
            <Draw {...getOriginState()} size={64} img={imageRef} />
            <div className="text-gray-400 mt-1">小尺寸封面</div>
          </div>
        </div>
        <div className="pb-4 pt-6 gap-x-4 flex justify-center">
          <label
            htmlFor={`re_avatar`}
            className="flex-center border px-3 h-8 rounded-full hover:bg-gray-50 cursor-pointer"
          >
            重新选择
            <input
              onChange={handleUpload}
              type="file"
              id="re_avatar"
              hidden
              accept="image/*"
            />
          </label>
          <button
            type="button"
            className="flex-center text-white ui_theme_bg_color px-3 h-8 rounded-full"
            onClick={handleSubmit}
          >
            保持并关闭
          </button>
        </div>
      </div>
    </Dialog>
  );
};
export default memo(UploadAvatar);
