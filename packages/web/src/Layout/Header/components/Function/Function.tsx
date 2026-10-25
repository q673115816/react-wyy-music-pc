import React, { memo } from "react";
import { Link } from "react-router";
import { IconSettings } from "@tabler/icons-react";
import Skin from "./Skin";
import Letter from "./Letter";

const Function = () => (
  <div className="space-x-3 relative h-full flex-center">
    <Skin />
    <Link
      to="/settings"
      className="relative text-white/90 hover:text-white"
      title="设置"
    >
      <IconSettings size={24} />
    </Link>
    <Letter />
  </div>
);

export default memo(Function);
