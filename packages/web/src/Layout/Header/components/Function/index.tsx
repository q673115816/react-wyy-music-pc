import React, { memo } from "react";
import { Link } from "react-router-dom";
import { IconSettings, IconMail } from "@tabler/icons";
import { setPopupLetterToggle } from "@/modules/reducers/mask/slice";
import { useAppDispatch, useAppSelector } from "@/modules/hooks";
import { commonSelector } from "@/modules/reducers/common/slice";
import Skin from "./Skin";

const LetterBtn = memo(() => {
  const dispatch = useAppDispatch();
  const { newMsgCount } = useAppSelector(commonSelector);
  return (
    <button
      type="button"
      className="focus:outline-none text-white text-opacity-90 hover:text-opacity-100 relative"
      onClick={() => dispatch(setPopupLetterToggle())}
      title="私信"
    >
      <IconMail size={24} />
      <span className="absolute -right-3 -top-0.5 bg-white ui_themeColor leading-none rounded-xl px-1">
        {newMsgCount}
      </span>
    </button>
  );
});

export default memo(() => (
  <div className="space-x-3 relative h-full flex-center">
    <Skin />
    <Link
      to="/settings"
      className="relative text-white text-opacity-90 hover:text-opacity-100"
      title="设置"
    >
      <IconSettings size={24} />
    </Link>
    <LetterBtn />
  </div>
));
