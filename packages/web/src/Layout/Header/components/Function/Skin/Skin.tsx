import React, { memo, useState } from "react";
import { IconPalette } from "@tabler/icons";
import Popup from "./Popup";

const Skin = () => {
  const [visibility, setVisibility] = useState(false);
  return (
    <div>
      <button
        onClick={() => setVisibility(!visibility)}
        type="button"
        className="block focus:outline-none text-white text-opacity-90 hover:text-opacity-100"
        title="换肤"
      >
        <IconPalette size={24} />
      </button>
      {visibility && <Popup setVisibility={setVisibility} />}
    </div>
  );
};

export default memo(Skin);
