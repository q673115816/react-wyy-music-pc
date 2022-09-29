import React, { createElement, FC, memo, useMemo } from "react";
import { Link } from "react-router-dom";
import { transTextEmoji } from "@/components/Emoji";

interface iProps {
  text: string;
}

const Parse: FC<iProps> = ({ text }) => {
  const result = useMemo(() => {
    const result = [];
    const decode = transTextEmoji(text);
    const reg =
      /(?<user>@[^@\s]{2,}?(?=\s|$))|(?<event>#[^#]+?#)|(?<other>.+?)/g;
    let temp = null;
    while ((temp = reg.exec(decode))) {
      const { user, event, other } = temp.groups;
      if (user) {
        result.push(
          createElement(
            Link,
            {
              to: `/user/redirect/${user.slice(1)}`,
              className: `ui_link`,
              key: temp.index,
            },
            user
          )
        );
      }
      if (event) {
        result.push(
          createElement(
            Link,
            {
              to: `/friend/redirect/${event.slice(1, -1)}`,
              className: `ui_link`,
              key: temp.index,
            },
            event
          )
        );
      }
      if (other) {
        result.push(other);
      }
    }
    return result;
  }, [text]);
  return <span>{result}</span>;
};

export default memo(Parse);
