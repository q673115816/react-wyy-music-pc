import { transTextEmoji } from "@/common/faces";
import React, { memo } from "react";

const Msg = ({ msg = {} }) => transTextEmoji(msg.msg);

export default memo(Msg);
