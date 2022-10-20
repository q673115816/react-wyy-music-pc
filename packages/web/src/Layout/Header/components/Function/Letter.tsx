import React, { memo } from "react";
import { useAppDispatch } from "@/modules/hooks";
import { useGetMsgPrivateQuery } from "@/modules/services/message";
import { setPopupLetterToggle } from "@/modules/reducers/mask/slice";
import { IconMail } from "@tabler/icons";

const Letter = () => {
  const dispatch = useAppDispatch();
  const { data, isLoading, isSuccess } = useGetMsgPrivateQuery();
  const { newMsgCount } = data || 0;
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
};
export default memo(Letter);
