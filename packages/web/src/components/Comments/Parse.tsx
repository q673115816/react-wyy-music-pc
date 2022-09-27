import React, {
  createElement,
  FC,
  memo,
  PropsWithChildren,
  useMemo,
} from "react";
import { transTextEmoji } from "@/components/Emoji";
const Parse: FC<PropsWithChildren> = ({ children }) => {
  const result = useMemo(() => {
    const result = [];
    if (typeof children !== "string") return children;
    const temp = transTextEmoji(children);
    console.log(temp.match(/@(.{2,}?)\s/g));
    console.log(temp.match(/#(.+?)#/g));
    return [];
  }, [children]);
  return (
    <span>
      {typeof children === "string" ? transTextEmoji(children) : children}
    </span>
  );
};

export default memo(Parse);
