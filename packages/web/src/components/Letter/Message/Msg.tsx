import { transTextEmoji } from "@/components/Emoji";
import React, { memo } from "react";

const Msg = ({ msg = {} }) => transTextEmoji(msg.msg);

export default memo(Msg);
