import React, { memo } from "react";
import { useGetMsgPrivateQuery } from "@/modules/services/message";

import { IconMail } from "@tabler/icons-react";
import { useMaskStore } from "@/stores";

const Letter = () => {
  const { data, isLoading, isSuccess } = useGetMsgPrivateQuery();
  const { newMsgCount } = data || 0;
  return (
    <button
      type="button"
      className="focus:outline-hidden text-white/90 hover:text-white relative"
      onClick={() => useMaskStore.getState().setPopupLetterToggle()}
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
